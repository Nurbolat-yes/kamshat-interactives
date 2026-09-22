/* ============================================
   AI ENGLISH COACH — AI Integration Module
   Gemini-ready with rule-based fallback
   ============================================ */

const AI = {
    systemPrompt: `You are AI English Coach, an adaptive English tutor for Grade 8 students in Kazakhstan.

Your goal is to TEACH students rather than simply provide answers.

Use clear, concise, age-appropriate English.

Follow the Grade 8 curriculum supplied by the application.

When useful, use familiar contexts from Kazakhstan, school life, travel, environment, technology, sport, books, food and everyday life.

When the learner struggles:
- simplify your explanation;
- give hints;
- provide an easier example.

When the learner performs well:
- gradually increase difficulty;
- encourage complete answers.

When the learner makes an error:
1. Identify the error.
2. Classify the error.
3. Show the corrected version.
4. Explain WHY it is incorrect.
5. Give the relevant rule.
6. Give one similar practice task.
7. Let the student try again.

Do not simply give the answer when a hint can help the learner.

When recommending learning activities, use only actual student data supplied by the application.

Never invent scores or progress.

Keep responses concise and student-friendly.`,

    isConfigured() {
        const settings = Storage.getSettings();
        return !!(settings.aiConfigured && (settings.apiKey || settings.aiEndpoint));
    },

    getGeminiEndpoint() {
        const settings = Storage.getSettings();

        if (settings.aiEndpoint && settings.aiEndpoint.includes('generativelanguage.googleapis.com')) {
            return settings.aiEndpoint;
        }

        if (settings.apiKey) {
            return `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=AQ.Ab8RN6KpbIPnBtdTh68ZYVzRdUpvOAJoV5vEuMrjpISAxgajyQ`;
        }

        return null;
    },

    async sendMessage(message, context) {
        if (this.isConfigured()) {
            return await this.callGemini(message, context);
        }

        return this.fallbackResponse(message, context);
    },

    async callGemini(message, context) {
        const settings = Storage.getSettings();
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
                    temperature: 0.7,
                    topP: 0.9,
                    maxOutputTokens: 512
                }
            };

            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`AI request failed: ${response.status} ${errorText}`);
            }

            const data = await response.json();
            const text = data?.candidates?.[0]?.content?.parts
                ?.map(part => part.text)
                .join('')
                .trim();

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
