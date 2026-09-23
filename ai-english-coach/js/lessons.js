/* ============================================
   AI ENGLISH COACH — Lessons Module
   Lesson rendering and interaction
   ============================================ */

const Lessons = {
    currentLesson: null,
    currentStep: 0,
    practiceIndex: 0,
    practiceCorrect: 0,

    openUnit(unitId) {
        const unit = CurriculumData.units.find(u => u.id === parseInt(unitId));
        if (!unit) return;

        Storage.setCurrentUnit(unitId);
        const completed = Storage.getCompletedLessons();

        const container = document.getElementById('page-content');
        container.innerHTML = `
            <div class="unit-detail">
                <div class="unit-detail-header">
                    <button class="btn btn-secondary btn-sm" onclick="App.navigate('curriculum')">← Back to Curriculum</button>
                    <h2 style="margin-top: 12px;">Unit ${unit.id}: ${unit.title}</h2>
                    <p>${unit.topics.join(' • ')}</p>
                </div>
                <div class="lessons-list">
                    ${unit.lessons.map(lesson => {
                        const isCompleted = completed.includes(lesson.id);
                        const statusClass = isCompleted ? 'completed' : 'current';
                        const statusText = isCompleted ? 'Completed' : 'Start';
                        return `
                            <div class="lesson-item" onclick="Lessons.openLesson('${lesson.id}')">
                                <div class="lesson-icon ${lesson.type}">
                                    ${this.getTypeIcon(lesson.type)}
                                </div>
                                <div class="lesson-info">
                                    <h4>${lesson.title}</h4>
                                    <p>${lesson.description}</p>
                                </div>
                                <span class="lesson-status ${statusClass}">${statusText}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    },

    getTypeIcon(type) {
        const icons = {
            vocabulary: '📖',
            grammar: '📝',
            reading: '📄',
            listening: '🎧',
            speaking: '🎤',
            writing: '✍️',
            culture: '🌍',
            clil: '🔬',
            review: '✅',
            challenge: '🛒'
        };
        return icons[type] || '📚';
    },

    openLesson(lessonId) {
        // Find the lesson
        let lesson = null;
        let unit = null;
        for (const u of CurriculumData.units) {
            const found = u.lessons.find(l => l.id === lessonId);
            if (found) {
                lesson = found;
                unit = u;
                break;
            }
        }

        if (!lesson) return;

        this.currentLesson = lesson;
        this.currentStep = 0;
        this.practiceIndex = 0;
        this.practiceCorrect = 0;
        Storage.setCurrentLesson(lessonId);

        this.renderLesson();
    },

    renderLesson() {
        const lesson = this.currentLesson;
        if (!lesson) return;

        if (lesson.type === 'challenge') {
            this.renderChallengeLesson();
            return;
        }

        const container = document.getElementById('page-content');
        let html = `<div class="lesson-content">`;
        html += `<button class="btn btn-secondary btn-sm" onclick="Lessons.openUnit('${lesson.id.split('-')[0]}')">← Back to Unit</button>`;
        html += `<h2 style="margin: 12px 0 4px;">${lesson.title}</h2>`;
        html += `<p style="color: var(--text-muted); margin-bottom: 24px;">${lesson.description}</p>`;

        const content = lesson.content;

        // Explanation
        if (content.explanation) {
            html += `
                <div class="lesson-section">
                    <h3>Learn</h3>
                    <p>${content.explanation}</p>
                </div>
            `;
        }

        // Rules
        if (content.rules) {
            html += `
                <div class="lesson-section">
                    <h3>Rules</h3>
                    <div class="example-box">
                        ${content.rules.map(r => `<p>${r}</p>`).join('')}
                    </div>
                </div>
            `;
        }

        // Examples
        if (content.examples) {
            html += `
                <div class="lesson-section">
                    <h3>Examples</h3>
                    <div class="example-box">
                        ${content.examples.map(e => `<p class="example">"${e}"</p>`).join('')}
                    </div>
                </div>
            `;
        }

        // Vocabulary
        if (content.vocabulary) {
            html += `
                <div class="lesson-section">
                    <h3>Vocabulary</h3>
                    <div class="flashcards-container">
                        ${content.vocabulary.map((v, i) => `
                            <div class="flashcard" onclick="this.classList.toggle('flipped'); this.textContent = this.classList.contains('flipped') ? '${v.meaning}' : '${v.word}';">
                                ${v.word}
                            </div>
                        `).join('')}
                    </div>
                    <p style="font-size: 0.8rem; color: var(--text-muted);">Click cards to see meanings</p>
                </div>
            `;
        }

        // Phrases (for speaking/writing)
        if (content.phrases) {
            html += `
                <div class="lesson-section">
                    <h3>Useful Phrases</h3>
                    <div class="example-box">
                        ${content.phrases.map(p => `<p class="example">"${p}"</p>`).join('')}
                    </div>
                </div>
            `;
        }

        // Reading text
        if (content.text) {
            html += `
                <div class="lesson-section">
                    <h3>Read</h3>
                    <div class="reading-text">
                        ${content.text.split('\n').map(p => p.trim() ? `<p>${p}</p>` : '').join('')}
                    </div>
                </div>
            `;
        }

        // Prompt (for speaking/writing)
        if (content.prompt) {
            html += `
                <div class="lesson-section">
                    <h3>Your Task</h3>
                    <p>${content.prompt}</p>
                </div>
            `;
        }

        // Practice questions
        if (content.practice && content.practice.length > 0) {
            html += `
                <div class="lesson-section" id="practice-section">
                    <h3>Practice</h3>
                    <div id="lesson-practice-area"></div>
                </div>
            `;
        }

        // Reading comprehension questions
        if (content.questions && content.questions.length > 0) {
            html += `
                <div class="lesson-section" id="questions-section">
                    <h3>Comprehension Questions</h3>
                    <div id="lesson-questions-area"></div>
                </div>
            `;
        }

        // Complete button
        html += `
            <div style="text-align: center; margin-top: 32px;">
                <button class="btn btn-success btn-lg" onclick="Lessons.completeLesson()">
                    ✓ Complete Lesson
                </button>
            </div>
        `;

        html += `</div>`;
        container.innerHTML = html;

        // Render practice if exists
        if (content.practice && content.practice.length > 0) {
            this.renderLessonPractice();
        }

        // Render questions if exists
        if (content.questions && content.questions.length > 0) {
            this.renderLessonQuestions();
        }
    },

    renderLessonPractice() {
        const practice = this.currentLesson.content.practice;
        if (this.practiceIndex >= practice.length) {
            document.getElementById('lesson-practice-area').innerHTML = `
                <div class="feedback correct">
                    <h4>Practice Complete!</h4>
                    <p>You got ${this.practiceCorrect} out of ${practice.length} correct. ${this.practiceCorrect === practice.length ? 'Perfect score!' : 'Great effort!'}</p>
                </div>
            `;
            return;
        }

        const q = practice[this.practiceIndex];
        let html = `<div style="animation: fadeIn 0.3s ease;">`;
        html += `<p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 8px;">Question ${this.practiceIndex + 1} of ${practice.length}</p>`;

        if (q.type === 'mcq') {
            html += `<h4 style="margin-bottom: 12px;">${q.question}</h4>`;
            html += `<div class="options-list">`;
            q.options.forEach((opt, i) => {
                html += `<div class="option-item" onclick="Lessons.checkLessonPractice(${i})" data-index="${i}">
                    <div class="option-radio"></div>
                    <span>${opt}</span>
                </div>`;
            });
            html += `</div>`;
        } else if (q.type === 'fill') {
            html += `<h4 style="margin-bottom: 12px;">${q.question}</h4>`;
            html += `<input type="text" class="text-input" id="lesson-fill-input" placeholder="Type your answer...">`;
            html += `<br><br><button class="btn btn-primary" onclick="Lessons.checkLessonFillPractice()">Check</button>`;
        } else if (q.type === 'speaking') {
            html += `<h4 style="margin-bottom: 12px;">${q.question}</h4>`;
            html += `<button class="speak-btn" onclick="Lessons.startLessonRecording()">🎤 Speak</button>`;
            html += `<textarea class="text-input textarea" id="lesson-speak-input" placeholder="Or type your response..."></textarea>`;
            html += `<br><br><button class="btn btn-primary" onclick="Lessons.checkLessonSpeakingPractice()">Submit</button>`;
        }

        html += `<div id="lesson-practice-feedback"></div>`;
        html += `</div>`;

        document.getElementById('lesson-practice-area').innerHTML = html;
    },

    checkLessonPractice(selectedIndex) {
        const q = this.currentLesson.content.practice[this.practiceIndex];
        const isCorrect = selectedIndex === q.correct;

        // Highlight options
        document.querySelectorAll('.option-item').forEach((el, i) => {
            if (i === q.correct) el.classList.add('correct');
            if (i === selectedIndex && !isCorrect) el.classList.add('incorrect');
            el.style.pointerEvents = 'none';
        });

        this.showLessonFeedback(isCorrect, q.explanation, q);

        if (isCorrect) this.practiceCorrect++;
        this.practiceIndex++;

        setTimeout(() => this.renderLessonPractice(), 2000);
    },

    checkLessonFillPractice() {
        const q = this.currentLesson.content.practice[this.practiceIndex];
        const input = document.getElementById('lesson-fill-input');
        const userAnswer = input.value.trim().toLowerCase();
        const isCorrect = userAnswer === q.correct.toLowerCase();

        input.disabled = true;
        this.showLessonFeedback(isCorrect, q.explanation, q);

        if (isCorrect) this.practiceCorrect++;
        this.practiceIndex++;

        setTimeout(() => this.renderLessonPractice(), 2000);
    },

    checkLessonSpeakingPractice() {
        const q = this.currentLesson.content.practice[this.practiceIndex];
        const input = document.getElementById('lesson-speak-input');
        const userAnswer = input.value.trim();

        if (userAnswer.length < 5) {
            App.showToast('Please provide a longer response', 'error');
            return;
        }

        input.disabled = true;
        this.showLessonFeedback(true, 'Good effort! Keep practising speaking.', q);
        this.practiceCorrect++;
        this.practiceIndex++;

        setTimeout(() => this.renderLessonPractice(), 2000);
    },

    startLessonRecording() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            App.showToast('Speech recognition not supported. Please type your answer.', 'error');
            return;
        }

        const recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.continuous = false;

        const btn = document.querySelector('.speak-btn');
        btn.classList.add('recording');
        btn.textContent = '🔴 Recording...';

        recognition.onresult = (event) => {
            document.getElementById('lesson-speak-input').value = event.results[0][0].transcript;
            btn.classList.remove('recording');
            btn.textContent = '🎤 Speak';
        };

        recognition.onerror = () => {
            btn.classList.remove('recording');
            btn.textContent = '🎤 Speak';
        };

        recognition.onend = () => {
            btn.classList.remove('recording');
            btn.textContent = '🎤 Speak';
        };

        recognition.start();
    },

    showLessonFeedback(isCorrect, explanation, q) {
        const feedbackEl = document.getElementById('lesson-practice-feedback');
        if (!feedbackEl) return;

        if (isCorrect) {
            feedbackEl.innerHTML = `
                <div class="feedback correct">
                    <h4>✓ Correct!</h4>
                    <p>${explanation}</p>
                </div>
            `;
        } else {
            feedbackEl.innerHTML = `
                <div class="feedback incorrect">
                    <h4>✗ Not quite</h4>
                    <p>${explanation}</p>
                </div>
            `;

            // Save error
            Storage.addError({
                question: q.question,
                userAnswer: 'incorrect',
                correctAnswer: q.options ? q.options[q.correct] : q.correct,
                explanation: explanation,
                skill: 'Grammar',
                category: 'Grammar'
            });
        }
    },

    // Questions (reading comprehension)
    questionIndex: 0,
    questionsCorrect: 0,

    renderLessonQuestions() {
        const questions = this.currentLesson.content.questions;
        this.questionIndex = 0;
        this.questionsCorrect = 0;
        this.renderCurrentQuestion();
    },

    renderCurrentQuestion() {
        const questions = this.currentLesson.content.questions;
        if (this.questionIndex >= questions.length) {
            document.getElementById('lesson-questions-area').innerHTML = `
                <div class="feedback correct">
                    <h4>Questions Complete!</h4>
                    <p>You got ${this.questionsCorrect} out of ${questions.length} correct.</p>
                </div>
            `;
            return;
        }

        const q = questions[this.questionIndex];
        let html = `<div style="animation: fadeIn 0.3s ease;">`;
        html += `<p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 8px;">Question ${this.questionIndex + 1} of ${questions.length}</p>`;

        if (q.type === 'mcq') {
            html += `<h4 style="margin-bottom: 12px;">${q.question}</h4>`;
            html += `<div class="options-list">`;
            q.options.forEach((opt, i) => {
                html += `<div class="option-item" onclick="Lessons.checkLessonQuestion(${i})" data-index="${i}">
                    <div class="option-radio"></div>
                    <span>${opt}</span>
                </div>`;
            });
            html += `</div>`;
        } else if (q.type === 'short') {
            html += `<h4 style="margin-bottom: 12px;">${q.question}</h4>`;
            html += `<input type="text" class="text-input" id="lesson-short-input" placeholder="Type your answer...">`;
            html += `<br><br><button class="btn btn-primary" onclick="Lessons.checkLessonShortQuestion()">Check</button>`;
        }

        html += `<div id="lesson-question-feedback"></div>`;
        html += `</div>`;

        document.getElementById('lesson-questions-area').innerHTML = html;
    },

    checkLessonQuestion(selectedIndex) {
        const q = this.currentLesson.content.questions[this.questionIndex];
        const isCorrect = selectedIndex === q.correct;

        document.querySelectorAll('#lesson-questions-area .option-item').forEach((el, i) => {
            if (i === q.correct) el.classList.add('correct');
            if (i === selectedIndex && !isCorrect) el.classList.add('incorrect');
            el.style.pointerEvents = 'none';
        });

        const feedbackEl = document.getElementById('lesson-question-feedback');
        if (isCorrect) {
            this.questionsCorrect++;
            feedbackEl.innerHTML = `<div class="feedback correct"><h4>✓ Correct!</h4><p>${q.explanation}</p></div>`;
        } else {
            feedbackEl.innerHTML = `<div class="feedback incorrect"><h4>✗ Not quite</h4><p>${q.explanation}</p></div>`;
        }

        this.questionIndex++;
        setTimeout(() => this.renderCurrentQuestion(), 2000);
    },

    checkLessonShortQuestion() {
        const q = this.currentLesson.content.questions[this.questionIndex];
        const input = document.getElementById('lesson-short-input');
        const userAnswer = input.value.trim().toLowerCase();
        const isCorrect = q.correct.some(c => userAnswer.includes(c.toLowerCase()));

        input.disabled = true;
        const feedbackEl = document.getElementById('lesson-question-feedback');
        if (isCorrect) {
            this.questionsCorrect++;
            feedbackEl.innerHTML = `<div class="feedback correct"><h4>✓ Correct!</h4><p>${q.explanation}</p></div>`;
        } else {
            feedbackEl.innerHTML = `<div class="feedback incorrect"><h4>✗ Not quite</h4><p>${q.explanation}</p></div>`;
        }

        this.questionIndex++;
        setTimeout(() => this.renderCurrentQuestion(), 2000);
    },

    renderChallengeLesson() {
        const lesson = this.currentLesson;
        const challenge = lesson.content.challenge;
        const container = document.getElementById('page-content');

        container.innerHTML = `
            <div class="lesson-content">
                <button class="btn btn-secondary btn-sm" onclick="Lessons.openUnit('${lesson.id.split('-')[0]}')">← Back to Unit</button>
                <h2 style="margin: 12px 0 4px;">${challenge.title}</h2>
                <p style="color: var(--text-muted); margin-bottom: 24px;">${challenge.level}</p>

                <div class="card" style="margin-bottom: 20px;">
                    <h3 style="margin-bottom: 12px;">Scenario</h3>
                    <p style="color: var(--text-secondary); margin: 0;">${challenge.scenario}</p>
                    <div style="margin-top: 16px; display: flex; gap: 12px; flex-wrap: wrap; font-weight: 700; color: var(--primary);">
                        <span>Budget: ${challenge.budget} tenge</span>
                        <span>Need: school + smart value</span>
                    </div>
                </div>

                <div class="card" style="margin-bottom: 20px;">
                    <h3 style="margin-bottom: 12px;">Shopping options</h3>
                    <div style="display: grid; gap: 8px;">
                        ${challenge.products.map(item => `
                            <div style="padding: 10px 12px; border: 1px solid var(--border-color); border-radius: var(--radius-sm); background: var(--bg-secondary);">
                                <strong>${item.name}</strong> — ${item.price} tenge
                                <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 2px;">${item.note}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="card" style="margin-bottom: 20px;">
                    <h3 style="margin-bottom: 16px;">Your tasks</h3>
                    ${challenge.tasks.map((task, index) => {
                        if (task.type === 'mcq') {
                            return `
                                <div style="margin-bottom: 18px; padding-bottom: 12px; border-bottom: 1px solid var(--border-color);">
                                    <p style="font-weight: 700; margin-bottom: 10px;">${index + 1}. ${task.question}</p>
                                    <div class="options-list">
                                        ${task.options.map((option, optionIndex) => `
                                            <div class="option-item" onclick="Lessons.setChallengeAnswer(${index}, ${optionIndex})" data-task-index="${index}" data-option-index="${optionIndex}">
                                                <div class="option-radio"></div>
                                                <span>${option}</span>
                                            </div>
                                        `).join('')}
                                    </div>
                                </div>
                            `;
                        }
                        if (task.type === 'fill') {
                            return `
                                <div style="margin-bottom: 18px; padding-bottom: 12px; border-bottom: 1px solid var(--border-color);">
                                    <p style="font-weight: 700; margin-bottom: 10px;">${index + 1}. ${task.question}</p>
                                    <input type="text" class="text-input" data-task-index="${index}" id="smart-challenge-input-${index}" placeholder="Type your answer...">
                                </div>
                            `;
                        }
                        return `
                            <div style="margin-bottom: 18px; padding-bottom: 12px; border-bottom: 1px solid var(--border-color);">
                                <p style="font-weight: 700; margin-bottom: 10px;">${index + 1}. ${task.question}</p>
                                <textarea class="text-input textarea" data-task-index="${index}" id="smart-challenge-input-${index}" placeholder="Write your answer here..."></textarea>
                            </div>
                        `;
                    }).join('')}
                    <div id="smart-challenge-feedback" style="margin-top: 12px;"></div>
                    <button class="btn btn-primary btn-lg" onclick="Lessons.submitSmartShoppingChallenge()" style="margin-top: 16px;">Submit Smart Shopping Challenge</button>
                </div>
            </div>
        `;
    },

    setChallengeAnswer(taskIndex, optionIndex) {
        const key = `challenge-task-${taskIndex}`;
        localStorage.setItem(key, String(optionIndex));
        const selected = document.querySelectorAll(`[data-task-index="${taskIndex}"]`);
        selected.forEach(el => {
            el.classList.remove('selected');
        });
        const current = document.querySelector(`[data-task-index="${taskIndex}"][data-option-index="${optionIndex}"]`);
        if (current) current.classList.add('selected');
    },

    submitSmartShoppingChallenge() {
        const lesson = this.currentLesson;
        const challenge = lesson.content.challenge;
        const currentScores = Storage.getSkillScores();
        const before = { ...currentScores };
        let correct = 0;
        const taskResults = challenge.tasks.map((task, index) => {
            let userAnswer = null;
            const selected = document.querySelector(`[data-task-index="${index}"][data-option-index]`);
            if (task.type === 'mcq') {
                userAnswer = selected ? Number(selected.dataset.optionIndex) : null;
            } else {
                const input = document.getElementById(`smart-challenge-input-${index}`);
                userAnswer = input ? input.value.trim() : '';
            }

            const isCorrect = task.type === 'mcq' ? Number(userAnswer) === task.correct : (
                task.type === 'fill' ? String(userAnswer).trim().toLowerCase() === String(task.correct).toLowerCase() : true
            );

            if (isCorrect) correct++;

            if (task.type !== 'text' && !isCorrect) {
                Storage.addError({
                    question: task.question,
                    userAnswer: String(userAnswer || 'no answer'),
                    correctAnswer: task.type === 'mcq' ? task.options[task.correct] : task.correct,
                    explanation: task.explanation,
                    skill: 'Functional Literacy',
                    category: 'Functional Literacy'
                });
                Storage.updateErrorHistory('Functional Literacy');
            }

            return { task, userAnswer, isCorrect };
        });

        const percentage = Math.round((correct / challenge.tasks.length) * 100);
        const vocabulary = Math.min(100, Math.max(0, Math.round((before.Vocabulary || 0) * 0.6 + (percentage * 0.4))));
        const grammar = Math.min(100, Math.max(0, Math.round((before.Grammar || 0) * 0.65 + (percentage * 0.35))));
        const reading = Math.min(100, Math.max(0, Math.round((before.Reading || 0) * 0.65 + (percentage * 0.35))));
        const writing = Math.min(100, Math.max(0, Math.round((before.Writing || 0) * 0.6 + (percentage * 0.4))));
        const functionalLiteracy = Math.round((percentage + vocabulary + reading + writing) / 4);

        const updatedScores = {
            ...before,
            Vocabulary: vocabulary,
            Grammar: grammar,
            Reading: reading,
            Writing: writing,
            Listening: Math.min(100, Math.round((before.Listening || 0) * 0.7 + (percentage * 0.3))),
            Speaking: Math.min(100, Math.round((before.Speaking || 0) * 0.7 + (percentage * 0.3)))
        };

        const overall = Math.round(Object.values(updatedScores).reduce((sum, value) => sum + value, 0) / Object.keys(updatedScores).length);

        const personalReasoning = AI.isConfigured()
            ? `I have completed the Smart Shopping Challenge with a ${percentage}% score. My advice is to compare prices, check the total cost, and explain the decision using clear reasons. Keep practicing the skill of making smart choices with a budget.`
            : `Strong work! You compared costs and considered value. Keep checking the total, budget, and real needs before buying.`;

        const challengeResult = {
            level: challenge.level,
            before: {
                overall: Math.round((Object.values(before).reduce((sum, value) => sum + value, 0) / Object.keys(before).length) || 0),
                grammar: before.Grammar || 0,
                vocabulary: before.Vocabulary || 0,
                reading: before.Reading || 0,
                writing: before.Writing || 0,
                functionalLiteracy: Math.round(((before.Reading || 0) + (before.Vocabulary || 0) + (before.Writing || 0)) / 3)
            },
            after: {
                overall,
                grammar: grammar,
                vocabulary: vocabulary,
                reading: reading,
                writing: writing,
                functionalLiteracy
            },
            score: percentage,
            summary: `${percentage}% correct. ${percentage >= 80 ? 'Excellent shopping decisions and strong functional literacy.' : percentage >= 60 ? 'Good work — your reasoning is improving.' : 'Keep comparing prices and thinking about value.'}`,
            reasoning: personalReasoning,
            tasks: taskResults,
            completedAt: Date.now()
        };

        Storage.saveSkillScores(updatedScores);
        Storage.saveSmartShoppingResult(challengeResult);
        Storage.completeLesson(lesson.id);
        Storage.addXP(40);
        Storage.updateStreak();

        const path = Storage.getLearningPath();
        const pathItem = path.find(p => p.lessonId === lesson.id);
        if (pathItem) {
            pathItem.status = 'completed';
            Storage.saveLearningPath(path);
        }

        const feedback = document.getElementById('smart-challenge-feedback');
        if (feedback) {
            feedback.innerHTML = `
                <div class="feedback correct">
                    <h4>Challenge complete!</h4>
                    <p>${challengeResult.summary}</p>
                    <p style="margin-top: 8px;">${challengeResult.reasoning}</p>
                </div>
            `;
        }

        App.showToast(`Smart Shopping Challenge complete! +40 XP`, 'success');
        setTimeout(() => App.navigate('dashboard'), 1200);
    },

    completeLesson() {
        const lesson = this.currentLesson;
        if (!lesson) return;

        Storage.completeLesson(lesson.id);
        Storage.addXP(20);
        Storage.updateStreak();

        // Check achievements
        const data = Storage.getAllStudentData();
        CurriculumData.achievements.forEach(ach => {
            if (ach.condition(data)) {
                const isNew = Storage.earnAchievement(ach.id);
                if (isNew) {
                    App.showToast(`Achievement unlocked: ${ach.name}!`, 'success');
                }
            }
        });

        // Update learning path
        const path = Storage.getLearningPath();
        const pathItem = path.find(p => p.lessonId === lesson.id);
        if (pathItem) {
            pathItem.status = 'completed';
            Storage.saveLearningPath(path);
        }

        App.showToast('Lesson completed! +20 XP', 'success');
        App.navigate('curriculum');
    }
};