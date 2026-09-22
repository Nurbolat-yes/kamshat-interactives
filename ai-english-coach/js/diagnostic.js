/* ============================================
   AI ENGLISH COACH — Diagnostic Engine
   Adaptive diagnostic assessment
   ============================================ */

const Diagnostic = {
    currentIndex: 0,
    answers: [],
    isRunning: false,

    start() {
        this.currentIndex = 0;
        this.answers = [];
        this.isRunning = true;
        this.renderQuestion();
    },

    renderQuestion() {
        const questions = CurriculumData.diagnostic;
        if (this.currentIndex >= questions.length) {
            this.showResults();
            return;
        }

        const q = questions[this.currentIndex];
        const progress = ((this.currentIndex) / questions.length) * 100;

        let questionHTML = '';

        switch (q.type) {
            case 'mcq':
                questionHTML = this.renderMCQ(q);
                break;
            case 'fill':
                questionHTML = this.renderFill(q);
                break;
            case 'reading':
                questionHTML = this.renderReading(q);
                break;
            case 'listening':
                questionHTML = this.renderListening(q);
                break;
            case 'speaking':
                questionHTML = this.renderSpeaking(q);
                break;
            case 'writing':
                questionHTML = this.renderWriting(q);
                break;
            case 'short':
                questionHTML = this.renderShort(q);
                break;
        }

        const container = document.getElementById('page-content');
        container.innerHTML = `
            <div class="diagnostic-container">
                <div class="diagnostic-progress">
                    <div class="diagnostic-progress-bar">
                        <div class="diagnostic-progress-fill" style="width: ${progress}%"></div>
                    </div>
                    <div class="diagnostic-progress-text">
                        <span>Question ${this.currentIndex + 1} of ${questions.length}</span>
                        <span>${q.skill}</span>
                    </div>
                </div>
                <div class="diagnostic-question">
                    <span class="diagnostic-skill-badge">${q.skill}</span>
                    ${questionHTML}
                </div>
            </div>
        `;
    },

    renderMCQ(q) {
        return `
            <h3>${q.question}</h3>
            <div class="options-list">
                ${q.options.map((opt, i) => `
                    <div class="option-item" onclick="Diagnostic.selectOption(${i})" data-index="${i}">
                        <div class="option-radio"></div>
                        <span>${opt}</span>
                    </div>
                `).join('')}
            </div>
            <button class="btn btn-primary" onclick="Diagnostic.submitAnswer()" id="submit-btn" disabled>Next →</button>
        `;
    },

    renderFill(q) {
        return `
            <h3>${q.question}</h3>
            <input type="text" class="text-input" id="fill-input" placeholder="Type your answer..." onkeyup="Diagnostic.checkFillInput()">
            <br><br>
            <button class="btn btn-primary" onclick="Diagnostic.submitAnswer()" id="submit-btn" disabled>Next →</button>
        `;
    },

    renderReading(q) {
        return `
            <div class="reading-text">
                <p>${q.text}</p>
            </div>
            <h3 style="margin-top:16px">${q.question}</h3>
            <div class="options-list">
                ${q.options.map((opt, i) => `
                    <div class="option-item" onclick="Diagnostic.selectOption(${i})" data-index="${i}">
                        <div class="option-radio"></div>
                        <span>${opt}</span>
                    </div>
                `).join('')}
            </div>
            <button class="btn btn-primary" onclick="Diagnostic.submitAnswer()" id="submit-btn" disabled>Next →</button>
        `;
    },

    renderListening(q) {
        return `
            <h3>Listen and answer the question</h3>
            <button class="audio-btn" onclick="Diagnostic.playAudio()" id="audio-btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 2a.5.5 0 01.5.5v11a.5.5 0 01-1 0v-11A.5.5 0 018 2zM5.5 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zm5 0a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5z"/></svg>
                Play Audio
            </button>
            <h3 style="margin-top:16px">${q.question}</h3>
            <div class="options-list">
                ${q.options.map((opt, i) => `
                    <div class="option-item" onclick="Diagnostic.selectOption(${i})" data-index="${i}">
                        <div class="option-radio"></div>
                        <span>${opt}</span>
                    </div>
                `).join('')}
            </div>
            <button class="btn btn-primary" onclick="Diagnostic.submitAnswer()" id="submit-btn" disabled>Next →</button>
        `;
    },

    renderSpeaking(q) {
        return `
            <h3>${q.prompt}</h3>
            <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 16px;">Speak your answer or type it below.</p>
            <button class="speak-btn" onclick="Diagnostic.startRecording()" id="speak-btn">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1a3 3 0 00-3 3v4a3 3 0 006 0V4a3 3 0 00-3-3z"/><path d="M5 10.5A.5.5 0 014 10H3a5 5 0 0010 0h-1a.5.5 0 01-1 .5 3.5 3.5 0 01-6 0z"/></svg>
                Start Recording
            </button>
            <textarea class="text-input textarea" id="speaking-input" placeholder="Or type your answer here..." onkeyup="Diagnostic.checkSpeakingInput()"></textarea>
            <br><br>
            <button class="btn btn-primary" onclick="Diagnostic.submitAnswer()" id="submit-btn" disabled>Next →</button>
        `;
    },

    renderWriting(q) {
        return `
            <h3>${q.prompt}</h3>
            <textarea class="text-input textarea" id="writing-input" placeholder="Write your answer here..." style="min-height: 150px;" onkeyup="Diagnostic.checkWritingInput()"></textarea>
            <br><br>
            <button class="btn btn-primary" onclick="Diagnostic.submitAnswer()" id="submit-btn" disabled>Next →</button>
        `;
    },

    renderShort(q) {
        return `
            <h3>${q.question}</h3>
            <input type="text" class="text-input" id="fill-input" placeholder="Type your answer..." onkeyup="Diagnostic.checkFillInput()">
            <br><br>
            <button class="btn btn-primary" onclick="Diagnostic.submitAnswer()" id="submit-btn" disabled>Next →</button>
        `;
    },

    selectedOption: null,

    selectOption(index) {
        this.selectedOption = index;
        document.querySelectorAll('.option-item').forEach((el, i) => {
            el.classList.toggle('selected', i === index);
        });
        document.getElementById('submit-btn').disabled = false;
    },

    checkFillInput() {
        const val = document.getElementById('fill-input').value.trim();
        document.getElementById('submit-btn').disabled = val.length === 0;
    },

    checkSpeakingInput() {
        const val = document.getElementById('speaking-input').value.trim();
        document.getElementById('submit-btn').disabled = val.length === 0;
    },

    checkWritingInput() {
        const val = document.getElementById('writing-input').value.trim();
        document.getElementById('submit-btn').disabled = val.length < 10;
    },

    playAudio() {
        const q = CurriculumData.diagnostic[this.currentIndex];
        const btn = document.getElementById('audio-btn');
        
        if ('speechSynthesis' in window) {
            window.speechSynthesis.cancel();
            const utterance = new SpeechSynthesisUtterance(q.text);
            utterance.rate = 0.9;
            utterance.lang = 'en-US';
            btn.classList.add('playing');
            btn.textContent = 'Playing...';
            
            utterance.onend = () => {
                btn.classList.remove('playing');
                btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 2a.5.5 0 01.5.5v11a.5.5 0 01-1 0v-11A.5.5 0 018 2zM5.5 4a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5zm5 0a.5.5 0 01.5.5v7a.5.5 0 01-1 0v-7a.5.5 0 01.5-.5z"/></svg> Play Again`;
            };
            
            window.speechSynthesis.speak(utterance);
        } else {
            App.showToast('Speech synthesis not supported in this browser', 'error');
        }
    },

    startRecording() {
        const btn = document.getElementById('speak-btn');
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

        if (SpeechRecognition) {
            const recognition = new SpeechRecognition();
            recognition.lang = 'en-US';
            recognition.continuous = false;
            recognition.interimResults = false;

            btn.classList.add('recording');
            btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><circle cx="8" cy="8" r="4"/></svg> Recording...`;

            recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                document.getElementById('speaking-input').value = transcript;
                btn.classList.remove('recording');
                btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1a3 3 0 00-3 3v4a3 3 0 006 0V4a3 3 0 00-3-3z"/></svg> Start Recording`;
                this.checkSpeakingInput();
            };

            recognition.onerror = () => {
                btn.classList.remove('recording');
                btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1a3 3 0 00-3 3v4a3 3 0 006 0V4a3 3 0 00-3-3z"/></svg> Start Recording`;
                App.showToast('Speech recognition error. Please type your answer.', 'error');
            };

            recognition.onend = () => {
                btn.classList.remove('recording');
                btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1a3 3 0 00-3 3v4a3 3 0 006 0V4a3 3 0 00-3-3z"/></svg> Start Recording`;
            };

            recognition.start();
        } else {
            App.showToast('Speech recognition not supported. Please type your answer.', 'error');
        }
    },

    submitAnswer() {
        const q = CurriculumData.diagnostic[this.currentIndex];
        let userAnswer, isCorrect;

        switch (q.type) {
            case 'mcq':
            case 'reading':
            case 'listening':
                userAnswer = this.selectedOption;
                isCorrect = userAnswer === q.correct;
                break;
            case 'fill':
            case 'short':
                userAnswer = document.getElementById('fill-input').value.trim().toLowerCase();
                if (Array.isArray(q.correct)) {
                    isCorrect = q.correct.some(c => userAnswer.includes(c.toLowerCase()));
                } else {
                    isCorrect = userAnswer === q.correct.toLowerCase();
                }
                break;
            case 'speaking':
                userAnswer = document.getElementById('speaking-input').value.trim();
                isCorrect = userAnswer.length > 10; // Basic check for speaking
                break;
            case 'writing':
                userAnswer = document.getElementById('writing-input').value.trim();
                isCorrect = userAnswer.length > 20; // Basic check for writing
                break;
        }

        this.answers.push({
            questionId: q.id,
            skill: q.skill,
            type: q.type,
            userAnswer: userAnswer,
            correct: q.correct,
            isCorrect: isCorrect,
            explanation: q.explanation
        });

        // If incorrect, save to errors
        if (!isCorrect && (q.type === 'mcq' || q.type === 'fill' || q.type === 'reading' || q.type === 'listening')) {
            Storage.addError({
                question: q.question,
                userAnswer: typeof userAnswer === 'number' ? q.options[userAnswer] : userAnswer,
                correctAnswer: typeof q.correct === 'number' ? q.options[q.correct] : q.correct,
                explanation: q.explanation,
                skill: q.skill,
                category: this.categorizeError(q)
            });
            Storage.updateErrorHistory(this.categorizeError(q));
        }

        this.selectedOption = null;
        this.currentIndex++;
        this.renderQuestion();
    },

    categorizeError(q) {
        if (q.skill === 'Grammar') {
            if (q.question.toLowerCase().includes('present perfect') || q.question.includes('has') || q.question.includes('have')) return 'Tenses';
            if (q.question.toLowerCase().includes('passive')) return 'Grammar';
            return 'Grammar';
        }
        if (q.skill === 'Vocabulary') return 'Vocabulary';
        return 'Grammar';
    },

    showResults() {
        this.isRunning = false;
        const answers = this.answers;
        
        // Calculate scores by skill
        const skillScores = {};
        const skillTotals = {};
        
        answers.forEach(a => {
            if (!skillScores[a.skill]) {
                skillScores[a.skill] = 0;
                skillTotals[a.skill] = 0;
            }
            skillTotals[a.skill]++;
            if (a.isCorrect) skillScores[a.skill]++;
        });

        const results = {};
        let totalCorrect = 0;
        let totalQuestions = 0;

        Object.keys(skillScores).forEach(skill => {
            results[skill] = Math.round((skillScores[skill] / skillTotals[skill]) * 100);
            totalCorrect += skillScores[skill];
            totalQuestions += skillTotals[skill];
        });

        const overallScore = Math.round((totalCorrect / totalQuestions) * 100);

        // Save results
        const diagnosticResult = {
            overallScore,
            skillScores: results,
            answers: answers,
            completedAt: Date.now()
        };

        Storage.saveDiagnosticResult(diagnosticResult);
        
        // Update skill scores
        Object.keys(results).forEach(skill => {
            Storage.updateSkillScore(skill, results[skill]);
        });

        // Mark diagnostic as completed
        const studentData = Storage.getStudentData();
        studentData.diagnosticCompleted = true;
        studentData.firstVisit = false;
        Storage.saveStudentData(studentData);

        // Add XP
        Storage.addXP(50);
        Storage.earnAchievement('diagnostic-done');

        // Generate learning path
        Progress.generateLearningPath(results);

        // Render results
        this.renderResults(overallScore, results);
    },

    renderResults(overallScore, results) {
        const strengths = [];
        const needsPractice = [];

        Object.entries(results).forEach(([skill, score]) => {
            if (score >= 75) strengths.push(skill);
            else if (score < 50) needsPractice.push(skill);
        });

        // If no clear strengths/practice areas, categorize
        if (strengths.length === 0) {
            const sorted = Object.entries(results).sort((a, b) => b[1] - a[1]);
            strengths.push(sorted[0][0]);
        }
        if (needsPractice.length === 0) {
            const sorted = Object.entries(results).sort((a, b) => a[1] - b[1]);
            needsPractice.push(sorted[0][0]);
        }

        const container = document.getElementById('page-content');
        container.innerHTML = `
            <div class="diagnostic-results">
                <div class="results-header">
                    <h2>Diagnostic Report</h2>
                    <div class="results-score">${overallScore}%</div>
                    <div class="results-label">Overall Score</div>
                </div>

                <div class="results-grid">
                    ${Object.entries(results).map(([skill, score]) => `
                        <div class="result-item">
                            <div class="score" style="color: ${score >= 75 ? 'var(--accent-green)' : score >= 50 ? 'var(--accent-orange)' : 'var(--accent-red)'}">${score}%</div>
                            <div class="label">${skill}</div>
                        </div>
                    `).join('')}
                </div>

                <div class="strengths-section">
                    <h4>✅ Your Strengths</h4>
                    <div class="tag-list">
                        ${strengths.map(s => `<span class="tag green">${s}</span>`).join('')}
                    </div>
                </div>

                <div class="practice-section">
                    <h4>📚 Needs Practice</h4>
                    <div class="tag-list">
                        ${needsPractice.map(s => `<span class="tag orange">${s}</span>`).join('')}
                    </div>
                </div>

                <div class="ai-recommendation">
                    <div class="ai-recommendation-header">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0l2.5 5 5.5.8-4 3.9.9 5.3L8 12.5 3.1 15l.9-5.3-4-3.9L5.5 5z"/></svg>
                        Recommended Next Step
                    </div>
                    <p>${this.getRecommendation(results, needsPractice)}</p>
                </div>

                <div style="text-align: center; margin-top: 24px;">
                    <button class="btn btn-primary btn-lg" onclick="App.createLearningPath()">
                        Create My Learning Path
                    </button>
                </div>
            </div>
        `;
    },

    getRecommendation(results, needsPractice) {
        if (needsPractice.length > 0) {
            const weakest = needsPractice[0];
            return `Your ${weakest.toLowerCase()} needs the most attention. Let's start with ${weakest} activities to build a stronger foundation. Your learning path will focus on this area first.`;
        }
        return `Great job! Your skills are fairly balanced. Let's challenge yourself with more advanced activities across all areas.`;
    }
};