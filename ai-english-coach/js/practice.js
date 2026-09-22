/* ============================================
   AI ENGLISH COACH — Practice Engine
   Adaptive practice with error correction
   ============================================ */

const Practice = {
    currentQuestion: null,
    difficulty: 'standard',
    score: 0,
    total: 0,
    selectedSkill: null,
    isRetry: false,
    retryQuestion: null,

    init() {
        // Determine recommended difficulty from scores
        const scores = Storage.getSkillScores();
        const avg = Object.values(scores).reduce((a, b) => a + b, 0) / Object.values(scores).length;

        if (avg < 50) this.difficulty = 'support';
        else if (avg < 80) this.difficulty = 'standard';
        else this.difficulty = 'challenge';

        this.renderSelection();
    },

    renderSelection() {
        const container = document.getElementById('page-content');
        container.innerHTML = `
            <div style="max-width: 700px; margin: 0 auto;">
                <h2>Practice</h2>
                <p style="color: var(--text-secondary); margin-bottom: 24px;">Choose a skill to practise. The difficulty adapts to your level.</p>

                <div style="margin-bottom: 20px;">
                    <h4 style="margin-bottom: 8px;">Difficulty</h4>
                    <div class="difficulty-selector">
                        <button class="difficulty-btn support ${this.difficulty === 'support' ? 'active' : ''}" onclick="Practice.setDifficulty('support')">Support</button>
                        <button class="difficulty-btn standard ${this.difficulty === 'standard' ? 'active' : ''}" onclick="Practice.setDifficulty('standard')">Standard</button>
                        <button class="difficulty-btn challenge ${this.difficulty === 'challenge' ? 'active' : ''}" onclick="Practice.setDifficulty('challenge')">Challenge</button>
                    </div>
                </div>

                <h4 style="margin-bottom: 12px;">Choose a Skill</h4>
                <div class="skills-grid">
                    ${['Grammar', 'Vocabulary', 'Reading'].map(skill => `
                        <div class="card" style="cursor: pointer; text-align: center; padding: 20px;" onclick="Practice.startPractice('${skill}')">
                            <h3>${skill}</h3>
                            <p style="font-size: 0.85rem; color: var(--text-muted); margin-top: 4px;">
                                ${this.getSkillDescription(skill)}
                            </p>
                        </div>
                    `).join('')}
                </div>

                <div style="margin-top: 24px;">
                    <h4 style="margin-bottom: 12px;">Error Lab</h4>
                    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 12px;">Review and learn from your recent mistakes.</p>
                    <button class="btn btn-secondary" onclick="Practice.showErrorLab()">
                        Open Error Lab
                    </button>
                </div>
            </div>
        `;
    },

    getSkillDescription(skill) {
        const scores = Storage.getSkillScores();
        const score = scores[skill] || 0;
        if (score === 0) return 'Not assessed yet';
        if (score >= 80) return 'Strong — try Challenge!';
        if (score >= 50) return 'Good — keep practising';
        return 'Needs improvement — try Support';
    },

    setDifficulty(level) {
        this.difficulty = level;
        this.renderSelection();
    },

    startPractice(skill) {
        this.selectedSkill = skill;
        this.score = 0;
        this.total = 0;
        this.nextQuestion();
    },

    nextQuestion() {
        const bank = CurriculumData.practiceBank[this.selectedSkill];
        if (!bank) {
            App.showToast('No practice available for this skill yet', 'error');
            return;
        }

        const questions = bank[this.difficulty] || bank.standard;
        if (questions.length === 0) {
            this.showPracticeResults();
            return;
        }

        // Pick random question
        const q = questions[Math.floor(Math.random() * questions.length)];
        this.currentQuestion = q;
        this.total++;

        this.renderQuestion(q);
    },

    renderQuestion(q) {
        const container = document.getElementById('page-content');
        let html = `
            <div style="max-width: 700px; margin: 0 auto;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
                    <button class="btn btn-secondary btn-sm" onclick="Practice.renderSelection()">← Back</button>
                    <div>
                        <span style="font-size: 0.8rem; color: var(--text-muted);">${this.selectedSkill} • ${this.difficulty}</span>
                        <span style="font-size: 0.8rem; color: var(--text-muted); margin-left: 12px;">Score: ${this.score}/${this.total}</span>
                    </div>
                </div>

                <div class="card" style="animation: fadeIn 0.3s ease;">
        `;

        if (q.type === 'mcq' || q.options) {
            html += `<h3 style="margin-bottom: 16px;">${q.question}</h3>`;
            html += `<div class="options-list">`;
            q.options.forEach((opt, i) => {
                html += `<div class="option-item" onclick="Practice.answer(${i})" data-index="${i}">
                    <div class="option-radio"></div>
                    <span>${opt}</span>
                </div>`;
            });
            html += `</div>`;
        } else if (q.type === 'fill') {
            html += `<h3 style="margin-bottom: 16px;">${q.question}</h3>`;
            html += `<input type="text" class="text-input" id="practice-fill-input" placeholder="Type your answer...">`;
            html += `<br><br><button class="btn btn-primary" onclick="Practice.answerFill()">Check</button>`;
        }

        html += `
                    <div id="practice-feedback"></div>
                </div>
            </div>
        `;

        container.innerHTML = html;
    },

    answer(selectedIndex) {
        const q = this.currentQuestion;
        const isCorrect = selectedIndex === q.correct;

        // Disable options
        document.querySelectorAll('.option-item').forEach((el, i) => {
            if (i === q.correct) el.classList.add('correct');
            if (i === selectedIndex && !isCorrect) el.classList.add('incorrect');
            el.style.pointerEvents = 'none';
        });

        this.showFeedback(isCorrect, q);
    },

    answerFill() {
        const q = this.currentQuestion;
        const input = document.getElementById('practice-fill-input');
        const userAnswer = input.value.trim().toLowerCase();
        const isCorrect = userAnswer === q.correct.toLowerCase();

        input.disabled = true;
        this.showFeedback(isCorrect, q);
    },

    showFeedback(isCorrect, q) {
        const feedbackEl = document.getElementById('practice-feedback');

        if (isCorrect) {
            this.score++;
            feedbackEl.innerHTML = `
                <div class="feedback correct">
                    <h4>✓ Great job!</h4>
                    <p>${q.explanation}</p>
                </div>
                <button class="btn btn-primary" style="margin-top: 12px;" onclick="Practice.nextQuestion()">Next Question →</button>
            `;
            Storage.addXP(5);
        } else {
            // Show Error Lab style feedback
            const errorInfo = this.analyzeError(q);
            feedbackEl.innerHTML = `
                <div class="error-lab" style="margin-top: 16px;">
                    <div class="error-lab-header">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 10.5a.75.75 0 110-1.5.75.75 0 010 1.5zM8.75 4.75v4.5a.75.75 0 01-1.5 0v-4.5a.75.75 0 011.5 0z"/></svg>
                        Error Lab
                    </div>
                    <div class="error-section">
                        <label>Not Quite</label>
                        <div class="value">${q.explanation}</div>
                    </div>
                    <div class="error-section">
                        <label>Rule</label>
                        <div class="value">${errorInfo.rule}</div>
                    </div>
                    <div class="error-section">
                        <label>Correct Answer</label>
                        <div class="value correct">${q.options ? q.options[q.correct] : q.correct}</div>
                    </div>
                </div>
                <button class="btn btn-primary" style="margin-top: 12px;" onclick="Practice.nextQuestion()">Next Question →</button>
            `;

            // Save error
            Storage.addError({
                question: q.question,
                userAnswer: q.options ? q.options[this.getSelectedIndex()] : 'incorrect',
                correctAnswer: q.options ? q.options[q.correct] : q.correct,
                explanation: q.explanation,
                skill: this.selectedSkill,
                category: errorInfo.category
            });
            Storage.updateErrorHistory(errorInfo.category);
        }

        // Save practice result
        Storage.savePracticeResult({
            skill: this.selectedSkill,
            difficulty: this.difficulty,
            correct: isCorrect,
            question: q.question
        });

        // Check if we should end practice
        if (this.total >= 5) {
            setTimeout(() => this.showPracticeResults(), 100);
        }
    },

    getSelectedIndex() {
        const selected = document.querySelector('.option-item.incorrect');
        if (selected) return parseInt(selected.dataset.index);
        return -1;
    },

    analyzeError(q) {
        // Rule-based error analysis
        const question = q.question.toLowerCase();
        
        if (question.includes('present perfect') || question.includes('has') || question.includes('have') || question.includes('visited')) {
            return { rule: 'Present Perfect: have/has + past participle. Use HAS with he/she/it.', category: 'Tenses' };
        }
        if (question.includes('passive') || question.includes('was') || question.includes('were')) {
            return { rule: 'Passive Voice: am/is/are/was/were + past participle.', category: 'Grammar' };
        }
        if (question.includes('reported') || question.includes('said')) {
            return { rule: 'Reported Speech: change tense back one step. Present → Past, Will → Would.', category: 'Grammar' };
        }
        if (question.includes('conditional') || question.includes('if')) {
            return { rule: 'First Conditional: If + present simple, will + infinitive.', category: 'Grammar' };
        }
        if (question.includes('should') || question.includes('must')) {
            return { rule: 'Should = advice. Must = strong obligation. Have to = external rule.', category: 'Grammar' };
        }
        if (this.selectedSkill === 'Vocabulary') {
            return { rule: `Review the vocabulary for this topic. Practice makes perfect!`, category: 'Vocabulary' };
        }
        return { rule: 'Review the grammar rules for this topic and try again.', category: 'Grammar' };
    },

    showPracticeResults() {
        const percentage = Math.round((this.score / this.total) * 100);
        
        // Update skill score
        Storage.updateSkillScore(this.selectedSkill, percentage);

        // Adjust difficulty for next time
        if (percentage < 50) this.difficulty = 'support';
        else if (percentage < 80) this.difficulty = 'standard';
        else this.difficulty = 'challenge';

        const container = document.getElementById('page-content');
        container.innerHTML = `
            <div style="max-width: 500px; margin: 0 auto; text-align: center; animation: fadeIn 0.5s ease;">
                <h2>Practice Complete!</h2>
                <div style="font-size: 3rem; font-weight: 800; color: ${percentage >= 80 ? 'var(--accent-green)' : percentage >= 50 ? 'var(--accent-orange)' : 'var(--accent-red)'}; margin: 16px 0;">
                    ${percentage}%
                </div>
                <p style="color: var(--text-secondary); margin-bottom: 24px;">
                    You got ${this.score} out of ${this.total} correct.
                    ${percentage >= 80 ? 'Excellent work!' : percentage >= 50 ? 'Good effort! Keep practising.' : 'Keep going! Practice makes perfect.'}
                </p>
                <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 24px;">
                    Recommended difficulty for next time: <strong>${this.difficulty.toUpperCase()}</strong>
                </p>
                <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                    <button class="btn btn-primary" onclick="Practice.startPractice('${this.selectedSkill}')">Practise Again</button>
                    <button class="btn btn-secondary" onclick="Practice.renderSelection()">Choose Skill</button>
                    <button class="btn btn-secondary" onclick="App.navigate('dashboard')">Dashboard</button>
                </div>
            </div>
        `;

        Storage.addXP(10);
    },

    // Error Lab
    showErrorLab() {
        const errors = Storage.getErrors();
        const recentErrors = errors.slice(-10).reverse();

        const container = document.getElementById('page-content');
        container.innerHTML = `
            <div style="max-width: 700px; margin: 0 auto;">
                <button class="btn btn-secondary btn-sm" onclick="Practice.renderSelection()">← Back to Practice</button>
                <h2 style="margin-top: 12px;">Error Lab</h2>
                <p style="color: var(--text-secondary); margin-bottom: 24px;">Learn from your mistakes. Each error is an opportunity to improve.</p>

                ${recentErrors.length === 0 ? `
                    <div class="card" style="text-align: center; padding: 40px;">
                        <p style="color: var(--text-muted);">No errors recorded yet. Complete some practice to see your errors here.</p>
                    </div>
                ` : `
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        ${recentErrors.map((error, i) => `
                            <div class="error-lab">
                                <div class="error-lab-header">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 1a7 7 0 100 14A7 7 0 008 1zm0 10.5a.75.75 0 110-1.5.75.75 0 010 1.5zM8.75 4.75v4.5a.75.75 0 01-1.5 0v-4.5a.75.75 0 011.5 0z"/></svg>
                                    Error #${errors.length - i}
                                </div>
                                <div class="error-section">
                                    <label>Question</label>
                                    <div class="value">${error.question}</div>
                                </div>
                                <div class="error-section">
                                    <label>Your Answer</label>
                                    <div class="value incorrect">${error.userAnswer}</div>
                                </div>
                                <div class="error-section">
                                    <label>Correct Answer</label>
                                    <div class="value correct">${error.correctAnswer}</div>
                                </div>
                                <div class="error-section">
                                    <label>Explanation</label>
                                    <div class="value">${error.explanation}</div>
                                </div>
                                <div class="error-section">
                                    <label>Category</label>
                                    <div class="value">${error.category}</div>
                                </div>
                                <button class="btn btn-sm btn-primary" onclick="Practice.retryError(${i})" style="margin-top: 8px;">Try Similar Question</button>
                            </div>
                        `).join('')}
                    </div>
                `}

                <div style="margin-top: 24px;">
                    <h4>Error History</h4>
                    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px;">
                        ${Object.entries(Storage.getErrorHistory()).map(([cat, count]) => `
                            <span class="tag ${count > 3 ? 'red' : count > 0 ? 'orange' : 'green'}">${cat}: ${count}</span>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    },

    retryError(errorIndex) {
        const errors = Storage.getErrors();
        const error = errors[errors.length - 1 - errorIndex];
        if (!error) return;

        Storage.incrementErrorsCorrected();

        // Show a retry prompt
        const container = document.getElementById('page-content');
        container.innerHTML = `
            <div style="max-width: 600px; margin: 0 auto; animation: fadeIn 0.3s ease;">
                <button class="btn btn-secondary btn-sm" onclick="Practice.showErrorLab()">← Back to Error Lab</button>
                <div class="card" style="margin-top: 16px;">
                    <h3>Try Again</h3>
                    <p style="margin: 12px 0;">${error.question}</p>
                    <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 16px;">Remember: ${error.explanation}</p>
                    <input type="text" class="text-input" id="retry-input" placeholder="Type the correct answer...">
                    <br><br>
                    <button class="btn btn-primary" onclick="Practice.checkRetry('${error.correctAnswer.replace(/'/g, "\\'")}')">Check</button>
                    <div id="retry-feedback"></div>
                </div>
            </div>
        `;
    },

    checkRetry(correctAnswer) {
        const input = document.getElementById('retry-input');
        const userAnswer = input.value.trim().toLowerCase();
        const isCorrect = userAnswer === correctAnswer.toLowerCase() || userAnswer.includes(correctAnswer.toLowerCase());

        const feedbackEl = document.getElementById('retry-feedback');
        if (isCorrect) {
            feedbackEl.innerHTML = `
                <div class="feedback correct" style="margin-top: 12px;">
                    <h4>✓ Excellent!</h4>
                    <p>You corrected the same type of mistake. Well done!</p>
                </div>
            `;
            Storage.addXP(10);
            const corrected = Storage.getErrorsCorrected();
            if (corrected >= 10) {
                Storage.earnAchievement('error-detective');
                App.showToast('Achievement unlocked: Error Detective!', 'success');
            }
        } else {
            feedbackEl.innerHTML = `
                <div class="feedback incorrect" style="margin-top: 12px;">
                    <h4>Not quite</h4>
                    <p>The correct answer is: "${correctAnswer}". Review the explanation and try again later.</p>
                </div>
            `;
        }
    }
};