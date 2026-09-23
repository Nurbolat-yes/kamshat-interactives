/* ============================================
   AI ENGLISH COACH — AI Integration Module
   Gemini-ready with rule-based fallback
   ============================================ */

const AI = {
    systemPrompt: `You are AI English Coach for Grade 8 students.
Your most important job is to give a complete, clear answer that is not cut off.
Teach one clear grammar point at a time.
Use simple English, short paragraphs, and easy examples.
Always include: (1) the main rule, (2) one clear example, (3) one common mistake, (4) a short practice task, and (5) a short summary.
Do not leave the answer unfinished or half-written.
Do not use hidden reasoning or chain-of-thought text.
Keep the answer practical, encouraging, and student-friendly.
If the request is long, keep it structured but complete.
Always finish with a short summary sentence.`,

    isConfigured() {
        const settings = Storage.getSettings();
        return !!(settings.aiConfigured && (settings.apiKey || settings.aiEndpoint));
    },

    getGeminiEndpoint() {
        const settings = Storage.getSettings();

        if (!settings.apiKey) {
            return null;
        }

        const candidates = [
            'gemini-3.6-flash',
            'gemini-2.5-flash',
            'gemini-2.0-flash'
        ];

        const preferred = candidates.find(model => {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${encodeURIComponent(settings.apiKey)}`;
            return url;
        });

        return `https://generativelanguage.googleapis.com/v1beta/models/${preferred || 'gemini-3.6-flash'}:generateContent?key=${encodeURIComponent(settings.apiKey)}`;
    },

    async sendMessage(message, context) {
        if (this.isConfigured()) {
            return await this.callGemini(message, context);
        }

        return this.fallbackResponse(message, context);
    },

    async callGemini(message, context) {
        const endpoint = this.getGeminiEndpoint();

        if (!endpoint) {
            return this.fallbackResponse(message, context);
        }

        try {
            const payload = {
                contents: [{
                    role: 'user',
                    parts: [{ text: `Context: ${context || 'general'}\n\n${message}` }]
                }],
                systemInstruction: {
                    parts: [{ text: this.systemPrompt }]
                },
                generationConfig: {
                    temperature: 0.4,
                    topP: 0.8,
                    maxOutputTokens: 1024,
                    candidateCount: 1
                }
            };

            let response;
            for (let attempt = 0; attempt < 3; attempt++) {
                response = await fetch(endpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });

                if (response.ok) break;

                const errorText = await response.text();
                const isModelMissing = response.status === 404 || errorText.toLowerCase().includes('not found') || errorText.toLowerCase().includes('no longer available');

                if (isModelMissing) {
                    const fallbackEndpoint = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=' + encodeURIComponent(Storage.getSettings().apiKey);
                    response = await fetch(fallbackEndpoint, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });
                    if (response.ok) break;
                }

                const retryable = response.status >= 500;
                if (!retryable || attempt === 2) {
                    throw new Error(`AI request failed: ${response.status} ${errorText}`);
                }

                await new Promise(resolve => setTimeout(resolve, 1000 * (attempt + 1)));
            }

            const data = await response.json();
            const candidate = data?.candidates?.[0];
            const text = candidate?.content?.parts
                ?.map(part => part.text)
                .join('')
                .trim();

            const isLikelyTruncated = (value) => {
                if (!value) return false;
                const trimmed = value.trim();
                return trimmed.endsWith('...') || (!/[.!?]$/.test(trimmed) && trimmed.length > 80);
            };

            if (candidate?.finishReason === 'MAX_TOKENS') {
                if (text && !isLikelyTruncated(text)) {
                    return text;
                }

                const retryMessage = `Please complete the answer fully. Do not repeat the same beginning. Provide the final complete response in a clear structure with the main rule, example, mistake, and short summary.`;
                const completedReply = await this.callGemini(`${retryMessage}\n\nPrevious incomplete answer:\n${text || message}`, context).catch(() => null);

                if (completedReply && completedReply.length > (text || '').length) {
                    return completedReply;
                }

                return this.fallbackResponse(message, context);
            }

            if (text && isLikelyTruncated(text)) {
                const retryMessage = `The previous answer was cut off. Finish the response completely and clearly with no missing final part. Keep the answer complete and readable.`;
                const repairedReply = await this.callGemini(`${retryMessage}\n\nPrevious answer:\n${text}`, context).catch(() => null);
                if (repairedReply && repairedReply.length > text.length) {
                    return repairedReply;
                }
            }

            return text || data?.text || 'I received your message but could not generate a response.';
        } catch (error) {
            console.error('AI Error:', error);
            return this.fallbackResponse(message, context);
        }
    },

    fallbackResponse(message, context) {
        const msg = message.toLowerCase();

        // Grammar explanations
        if (msg.includes('present perfect') || msg.includes('have/has')) {
            return `**Present Perfect** is used for:\n\n• Experiences: "I have visited London."\n• Changes: "She has grown taller."\n• Continuing situations: "We have lived here since 2015."\n\n**Form:** have/has + past participle\n• I/You/We/They + have\n• He/She/It + has\n\n**Try this:** Complete the sentence: "She ___ (finish) her homework."`;
        }

        if (msg.includes('past simple') || msg.includes('past tense')) {
            return `**Past Simple** describes completed actions in the past.\n\n**Regular verbs:** add -ed (walk → walked)\n**Irregular verbs:** special forms (go → went, see → saw)\n\n**Examples:**\n• "I watched TV yesterday."\n• "She went to school last Monday."\n\n**Try this:** What is the past simple of "eat"?`;
        }

        if (msg.includes('passive')) {
            return `**Passive Voice** focuses on the action, not who does it.\n\n**Present Passive:** am/is/are + past participle\n• "English is spoken worldwide."\n\n**Past Passive:** was/were + past participle\n• "The book was written in 1950."\n\n**Try this:** Change to passive: "They built the school in 2005."`;
        }

        if (msg.includes('conditional') || msg.includes('if')) {
            return `**First Conditional:** If + present simple, will + infinitive\n• "If it rains, I will stay home."\n\n**Second Conditional:** If + past simple, would + infinitive\n• "If I were rich, I would travel."\n\n**Try this:** Complete: "If she ___ (study) hard, she will pass."`;
        }

        if (msg.includes('reported speech') || msg.includes('reported')) {
            return `**Reported Speech** tells someone what another person said.\n\n**Tense changes:**\n• Present Simple → Past Simple\n• Present Continuous → Past Continuous\n• Will → Would\n• Have/Has → Had\n\n**Example:**\n• Direct: "I am tired," she said.\n• Reported: She said she was tired.\n\n**Try this:** Report this: "I like English," he said.`;
        }

        if (msg.includes('should') || msg.includes('must') || msg.includes('have to')) {
            return `**Modal verbs for obligation and advice:**\n\n• **Should** = advice: "You should study more."\n• **Must** = strong obligation (personal): "I must finish this."\n• **Have to** = strong obligation (external rule): "Students have to wear uniforms."\n• **Don't have to** = no obligation: "You don't have to come early."\n\n**Try this:** Choose: "You ___ wear a uniform. (It's the rule.)" — should/must/can?`;
        }

        // Check sentence
        if (msg.includes('check') || msg.includes('correct') || msg.includes('is this right')) {
            const sentence = message.replace(/check|correct|is this right|this sentence/gi, '').trim();
            if (sentence.length > 3) {
                return this.checkSentence(sentence);
            }
        }

        // Example request
        if (msg.includes('example') || msg.includes('give me')) {
            return `Here are some examples:\n\n• "I have lived in Almaty for 10 years." (Present Perfect)\n• "She went to the market yesterday." (Past Simple)\n• "If it rains, we will stay inside." (First Conditional)\n\nWould you like examples for a specific grammar topic? Just ask!`;
        }

        // Writing feedback
        if (context === 'writing') {
            return this.analyzeWriting(message);
        }

        // Default helpful response
        return `I'd be happy to help you with English!\n\nHere are some things I can do:\n• Explain grammar rules\n• Give you examples\n• Check your sentences\n• Help with vocabulary\n• Give you practice tasks\n\nWhat would you like to work on?`;
    },

    checkSentence(sentence) {
        const errors = [];
        let corrected = sentence;

        // Common error patterns
        if (/she have\b/i.test(sentence)) {
            errors.push({ error: 'she have', correction: 'she has', rule: 'Use HAS with he/she/it.' });
            corrected = corrected.replace(/she have/i, 'She has');
        }
        if (/he have\b/i.test(sentence)) {
            errors.push({ error: 'he have', correction: 'he has', rule: 'Use HAS with he/she/it.' });
            corrected = corrected.replace(/he have/i, 'He has');
        }
        if (/\bi is go\b/i.test(sentence)) {
            errors.push({ error: 'I is go', correction: 'I go / I am going', rule: 'Use "I go" (Present Simple) or "I am going" (Present Continuous).' });
        }
        if (/\bhave went\b/i.test(sentence)) {
            errors.push({ error: 'have went', correction: 'have gone', rule: 'Past participle of "go" is "gone", not "went".' });
            corrected = corrected.replace(/have went/i, 'have gone');
        }
        if (/\bhas went\b/i.test(sentence)) {
            errors.push({ error: 'has went', correction: 'has gone', rule: 'Past participle of "go" is "gone", not "went".' });
            corrected = corrected.replace(/has went/i, 'has gone');
        }
        if (/\bhave see\b/i.test(sentence)) {
            errors.push({ error: 'have see', correction: 'have seen', rule: 'Past participle of "see" is "seen".' });
            corrected = corrected.replace(/have see\b/i, 'have seen');
        }
        if (/\bhas see\b/i.test(sentence)) {
            errors.push({ error: 'has see', correction: 'has seen', rule: 'Past participle of "see" is "seen".' });
            corrected = corrected.replace(/has see\b/i, 'has seen');
        }

        if (errors.length === 0) {
            return `Your sentence looks good! ✓\n\n"${sentence}"\n\nI didn't find any errors. Great work!`;
        }

        let response = `I found some errors in your sentence:\n\n`;
        errors.forEach(e => {
            response += `• **"${e.error}"** → **"${e.correction}"**\n  Rule: ${e.rule}\n`;
        });
        response += `\n**Corrected version:** "${corrected}"\n\nTry writing it again!`;
        return response;
    },

    analyzeWriting(text) {
        const words = text.split(/\s+/).filter(w => w.length > 0);
        const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
        
        let feedback = `**Writing Analysis:**\n\n`;
        feedback += `• Word count: ${words.length}\n`;
        feedback += `• Sentences: ${sentences.length}\n\n`;

        // Check for basic issues
        const issues = [];
        
        if (words.length < 20) {
            issues.push('Try to write more — aim for at least 4-5 sentences.');
        }
        if (sentences.length < 3) {
            issues.push('Use more sentences to develop your ideas.');
        }

        // Check for common errors
        if (/she have|he have/i.test(text)) issues.push('Remember: use "has" with he/she/it.');
        if (/i is go|he is go/i.test(text)) issues.push('Check your verb forms.');
        if (!/[.!?]$/.test(text.trim())) issues.push('End your text with punctuation (. ! ?).');

        if (issues.length === 0) {
            feedback += `**What you did well:**\n• Good length and structure\n• Clear writing\n\n**Next step:** Try to use more complex sentences with linking words like "because", "however", "although".`;
        } else {
            feedback += `**What to improve:**\n`;
            issues.forEach(issue => {
                feedback += `• ${issue}\n`;
            });
            feedback += `\n**Next step:** Fix these issues and try again!`;
        }

        return feedback;
    },

    // AI Coach Chat
    chatHistory: [],

    async handleChat(userMessage) {
        this.chatHistory.push({ role: 'user', content: userMessage });

        let response;
        if (this.isConfigured()) {
            response = await this.callGemini(userMessage, 'chat');
        } else {
            response = this.fallbackResponse(userMessage, 'chat');
        }

        this.chatHistory.push({ role: 'assistant', content: response });
        return response;
    },

    // Writing Coach
    async analyzeWritingSubmission(text) {
        if (this.isConfigured()) {
            return await this.callGemini(`Analyze this writing:\n\n"${text}"\n\nProvide feedback on: Task Completion, Grammar, Vocabulary, Sentence Structure, Organisation. Don't rewrite the text — teach the student how to improve.`, 'writing');
        }
        return this.analyzeWriting(text);
    }
};