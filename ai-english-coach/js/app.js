/* ============================================
   AI ENGLISH COACH — Main Application
   Navigation, rendering, and coordination
   ============================================ */

const App = {
    currentPage: 'dashboard',
    sidebarOpen: false,
    teacherMode: false,
    audioContext: null,

    init() {
        this.bindGlobalSoundEffects();
        Storage.clearDemoStateIfNeeded();
        Storage.ensureStudents();

        const currentUser = Storage.getCurrentUser();
        const role = currentUser?.role === Storage.getCurrentRole() ? currentUser.role : null;

        if (!currentUser && !role) {
            document.getElementById('welcome-screen').classList.remove('hidden');
            document.getElementById('main-app').classList.add('hidden');
            this.renderRoleSelector();
            this.updateTopBar();
            return;
        }

        if (role === 'teacher') {
            document.getElementById('welcome-screen').classList.add('hidden');
            document.getElementById('main-app').classList.remove('hidden');
            this.navigate('dashboard');
            this.updateTopBar();
            this.renderTeacherDashboard();
            return;
        }

        if (role === 'student' || currentUser?.role === 'student') {
            const studentId = Storage.getCurrentStudentId();
            if (!studentId) {
                document.getElementById('welcome-screen').classList.remove('hidden');
                document.getElementById('main-app').classList.add('hidden');
                this.renderRoleSelector();
                this.updateTopBar();
                return;
            }

            document.getElementById('welcome-screen').classList.add('hidden');
            document.getElementById('main-app').classList.remove('hidden');
            this.navigate('dashboard');
            this.updateTopBar();
            return;
        }

        document.getElementById('welcome-screen').classList.remove('hidden');
        document.getElementById('main-app').classList.add('hidden');
        this.renderRoleSelector();
        this.updateTopBar();
    },

    // Navigation
    navigate(page) {
        this.currentPage = page;
        
        // Update nav active state
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.toggle('active', item.dataset.page === page);
        });

        // Render page
        switch (page) {
            case 'dashboard': this.renderDashboard(); break;
            case 'diagnostic': this.renderDiagnostic(); break;
            case 'curriculum': this.renderCurriculum(); break;
            case 'practice': Practice.init(); break;
            case 'aicoach': this.renderAICoach(); break;
            case 'learningpath': Progress.renderLearningPath(); break;
            case 'progress': Progress.renderProgress(); break;
        }

        // Close sidebar on mobile
        if (window.innerWidth <= 1024) {
            document.getElementById('sidebar').classList.remove('open');
        }
    },

    renderRoleSelector() {
        const picker = document.getElementById('welcome-profile-picker');

        if (!picker) return;

        picker.style.display = 'block';
        picker.innerHTML = `
            <div class="auth-panel">
                <div class="auth-heading">
                    <span class="auth-eyebrow">AI English Coach</span>
                    <h1>Choose how to enter</h1>
                    <p>Select your role to continue.</p>
                </div>

                <div class="role-choice-grid">
                    <button class="role-choice is-selected" type="button" onclick="App.setLoginRole('student')" id="role-student-btn" aria-pressed="true">
                        <span class="role-choice-icon">S</span>
                        <span class="role-choice-copy"><strong>Student</strong><small>Learn and practice</small></span>
                        <span class="role-choice-check">✓</span>
                    </button>
                    <button class="role-choice" type="button" onclick="App.setLoginRole('teacher')" id="role-teacher-btn" aria-pressed="false">
                        <span class="role-choice-icon">T</span>
                        <span class="role-choice-copy"><strong>Teacher</strong><small>Manage students</small></span>
                        <span class="role-choice-check">✓</span>
                    </button>
                </div>

                <div class="auth-form">
                    <label for="auth-name">Your name</label>
                    <input id="auth-name" type="text" class="text-input" placeholder="Enter your name" autocomplete="name" />
                    <div class="auth-selected-role">Selected: <strong id="selected-role-label">Student</strong></div>
                    <button class="btn btn-primary auth-enter-btn" type="button" onclick="App.registerCurrentUser()">Enter <span>→</span></button>
                </div>
            </div>
        `;

        this.setLoginRole('student');
    },

    setLoginRole(role) {
        const studentBtn = document.getElementById('role-student-btn');
        const teacherBtn = document.getElementById('role-teacher-btn');
        const selectedRoleLabel = document.getElementById('selected-role-label');

        if (studentBtn) studentBtn.classList.toggle('is-selected', role === 'student');
        if (teacherBtn) teacherBtn.classList.toggle('is-selected', role === 'teacher');
        if (studentBtn) studentBtn.setAttribute('aria-pressed', String(role === 'student'));
        if (teacherBtn) teacherBtn.setAttribute('aria-pressed', String(role === 'teacher'));
        if (selectedRoleLabel) selectedRoleLabel.textContent = role === 'teacher' ? 'Teacher' : 'Student';
        localStorage.setItem('aiCoach_loginRole', role);
    },

    registerCurrentUser() {
        const nameInput = document.getElementById('auth-name');
        const role = localStorage.getItem('aiCoach_loginRole') || 'student';
        const name = nameInput ? nameInput.value.trim() : '';

        if (!name) {
            this.showToast('Please enter your name', 'error');
            return;
        }

        const user = Storage.registerUser({
            role,
            name
        });

        if (!user) {
            this.showToast('Could not enter the account', 'error');
            return;
        }

        if (role === 'teacher') {
            this.selectTeacher();
        } else {
            this.selectStudent('student-account');
        }
    },

    selectStudent(studentId) {
        Storage.setCurrentRole('student');
        Storage.setCurrentStudentId(studentId);
        document.getElementById('welcome-screen').classList.add('hidden');
        document.getElementById('main-app').classList.remove('hidden');
        this.updateTopBar();
        this.navigate('dashboard');
    },

    selectTeacher() {
        const currentUser = Storage.getCurrentUser();
        if (currentUser) {
            Storage.setCurrentRole('teacher');
        } else {
            Storage.setCurrentRole('teacher');
        }

        document.getElementById('welcome-screen').classList.add('hidden');
        document.getElementById('main-app').classList.remove('hidden');
        this.navigate('dashboard');
        this.toggleTeacherMode();
    },

    logout() {
        Storage.logoutUser();
        this.teacherMode = false;
        document.getElementById('teacher-mode').classList.add('hidden');
        document.getElementById('main-app').classList.add('hidden');
        document.getElementById('welcome-screen').classList.remove('hidden');
        this.renderRoleSelector();
        this.showToast('You have been logged out.', 'success');
    },

    // Welcome screen actions
    startDiagnostic() {
        const currentUser = Storage.getCurrentUser();
        if (!currentUser || currentUser.role !== 'student') {
            this.renderRoleSelector();
            document.getElementById('welcome-screen').classList.remove('hidden');
            document.getElementById('main-app').classList.add('hidden');
            this.showToast('Please register as a student first', 'error');
            return;
        }

        const currentStudentId = Storage.getCurrentStudentId();
        if (!currentStudentId) {
            this.showToast('Student account not found', 'error');
            this.renderRoleSelector();
            return;
        }
        document.getElementById('welcome-screen').classList.add('hidden');
        document.getElementById('main-app').classList.remove('hidden');
        this.navigate('diagnostic');
        Diagnostic.start();
    },

    exploreCurriculum() {
        const currentUser = Storage.getCurrentUser();
        if (!currentUser) {
            this.renderRoleSelector();
            document.getElementById('welcome-screen').classList.remove('hidden');
            document.getElementById('main-app').classList.add('hidden');
            this.showToast('Please register first', 'error');
            return;
        }

        document.getElementById('welcome-screen').classList.add('hidden');
        document.getElementById('main-app').classList.remove('hidden');

        const student = Storage.getStudentData();
        student.firstVisit = false;
        Storage.saveStudentData(student);

        this.navigate('curriculum');
    },

    createLearningPath() {
        const diagnostic = Storage.getDiagnosticResult();
        if (diagnostic) {
            Progress.generateLearningPath(diagnostic.skillScores);
            App.showToast('Learning path created!', 'success');
            this.navigate('learningpath');
        }
    },

    // Dashboard
    renderDashboard() {
        const data = Storage.getAllStudentData();
        const scores = data.skills;
        const completed = data.completed;
        const streak = data.streak;
        const diagnostic = data.diagnostic;
        const currentUnit = Storage.getCurrentUnit();
        const unit = CurriculumData.units.find(u => u.id === parseInt(currentUnit));

        // Calculate overall progress
        const totalLessons = CurriculumData.units.reduce((sum, u) => sum + u.lessons.length, 0);
        const overallProgress = Math.round((completed.length / totalLessons) * 100);

        const container = document.getElementById('page-content');
        container.innerHTML = `
            <div>
                <div style="margin-bottom: 24px;">
                    <h2>Good afternoon, ${data.student.name}!</h2>
                    <p style="color: var(--text-secondary);">Ready to continue your English journey?</p>
                </div>

                <!-- Summary Cards -->
                <div class="summary-grid">
                    <div class="summary-card">
                        <div class="summary-icon blue">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                        </div>
                        <div class="summary-info">
                            <h3>${overallProgress}%</h3>
                            <p>Overall Progress</p>
                        </div>
                    </div>
                    <div class="summary-card">
                        <div class="summary-icon green">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                        </div>
                        <div class="summary-info">
                            <h3>${completed.length}</h3>
                            <p>Completed Lessons</p>
                        </div>
                    </div>
                    <div class="summary-card">
                        <div class="summary-icon orange">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67z"/></svg>
                        </div>
                        <div class="summary-info">
                            <h3>${streak.count}</h3>
                            <p>Learning Streak</p>
                        </div>
                    </div>
                    <div class="summary-card">
                        <div class="summary-icon purple">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>
                        </div>
                        <div class="summary-info">
                            <h3>Unit ${currentUnit}</h3>
                            <p>Current Unit</p>
                        </div>
                    </div>
                </div>

                <!-- Skills -->
                <div class="card" style="margin-bottom: 24px;">
                    <div class="card-header">
                        <span class="card-title">My Skills</span>
                    </div>
                    <div class="skills-grid">
                        ${Object.entries(scores).map(([skill, score]) => `
                            <div class="skill-item">
                                <div class="skill-icon" style="background: ${Progress.getSkillColor(skill)}20; color: ${Progress.getSkillColor(skill)};">
                                    ${skill.charAt(0)}
                                </div>
                                <div class="skill-info">
                                    <div class="skill-name">${skill}</div>
                                    <div class="skill-bar">
                                        <div class="skill-bar-fill" style="width: ${score}%; background: ${Progress.getSkillColor(skill)};"></div>
                                    </div>
                                </div>
                                <div class="skill-score">${score}%</div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Continue Learning -->
                ${unit ? `
                    <div class="continue-card">
                        <h3>Continue Learning</h3>
                        <div class="continue-meta">
                            <span>Unit ${unit.id}: ${unit.title}</span>
                            <span>•</span>
                            <span>${unit.lessons.length} lessons</span>
                        </div>
                        <p>Pick up where you left off and keep building your English skills.</p>
                        <button class="btn" onclick="Lessons.openUnit('${unit.id}')">Continue →</button>
                    </div>
                ` : ''}

                <!-- AI Recommendation -->
                <div class="ai-recommendation">
                    <div class="ai-recommendation-header">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0l2.5 5 5.5.8-4 3.9.9 5.3L8 12.5 3.1 15l.9-5.3-4-3.9L5.5 5z"/></svg>
                        AI Recommendation
                    </div>
                    <p>${this.getAIRecommendation(data)}</p>
                </div>
            </div>
        `;
    },

    getAIRecommendation(data) {
        if (!data.diagnostic) {
            return 'Complete your diagnostic test to discover your strengths and create your personal learning path.';
        }

        const scores = data.skills;
        const sorted = Object.entries(scores).sort((a, b) => a[1] - b[1]);
        const weakest = sorted[0];
        const strongest = sorted[sorted.length - 1];

        if (weakest[1] < 50) {
            return `Your ${weakest[0].toLowerCase()} needs the most attention (currently at ${weakest[1]}%). Let's focus on ${weakest[0]} activities today to build a stronger foundation.`;
        }

        if (strongest[1] >= 80) {
            return `Your ${strongest[0].toLowerCase()} is strong (${strongest[1]}%)! Try challenging yourself with ${weakest[0].toLowerCase()} practice today to become more balanced.`;
        }

        return `You're making good progress! Focus on ${weakest[0].toLowerCase()} to improve your overall score. Try a practice session to strengthen this area.`;
    },

    // Diagnostic page
    renderDiagnostic() {
        const diagnostic = Storage.getDiagnosticResult();
        
        if (diagnostic) {
            // Show results with option to retake
            const container = document.getElementById('page-content');
            container.innerHTML = `
                <div style="max-width: 600px; margin: 0 auto; text-align: center;">
                    <h2>Diagnostic Assessment</h2>
                    <p style="color: var(--text-secondary); margin-bottom: 24px;">You have already completed the diagnostic test.</p>
                    
                    <div class="card" style="margin-bottom: 24px;">
                        <div style="font-size: 2.5rem; font-weight: 800; color: var(--primary);">${diagnostic.overallScore}%</div>
                        <p style="color: var(--text-muted);">Overall Score</p>
                        <div style="margin-top: 16px;">
                            ${Object.entries(diagnostic.skillScores).map(([skill, score]) => `
                                <span class="tag ${score >= 75 ? 'green' : score >= 50 ? 'orange' : 'red'}" style="margin: 4px;">${skill}: ${score}%</span>
                            `).join('')}
                        </div>
                    </div>

                    <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
                        <button class="btn btn-primary" onclick="Diagnostic.start()">Retake Diagnostic</button>
                        <button class="btn btn-secondary" onclick="App.navigate('learningpath')">View Learning Path</button>
                        <button class="btn btn-secondary" onclick="App.navigate('dashboard')">Dashboard</button>
                    </div>
                </div>
            `;
        } else {
            // Show start screen
            const container = document.getElementById('page-content');
            container.innerHTML = `
                <div style="max-width: 600px; margin: 0 auto; text-align: center;">
                    <h2>Diagnostic Assessment</h2>
                    <p style="color: var(--text-secondary); margin-bottom: 8px;">Discover your strengths and areas for improvement.</p>
                    <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 24px;">18 questions • Grammar, Vocabulary, Reading, Listening, Speaking, Writing</p>
                    
                    <div class="card" style="text-align: left; margin-bottom: 24px;">
                        <h4 style="margin-bottom: 12px;">What to expect:</h4>
                        <ul style="list-style: none; padding: 0;">
                            <li style="padding: 6px 0; font-size: 0.9rem; color: var(--text-secondary);">✓ Multiple choice grammar questions</li>
                            <li style="padding: 6px 0; font-size: 0.9rem; color: var(--text-secondary);">✓ Vocabulary and fill-in-the-blank</li>
                            <li style="padding: 6px 0; font-size: 0.9rem; color: var(--text-secondary);">✓ Reading comprehension</li>
                            <li style="padding: 6px 0; font-size: 0.9rem; color: var(--text-secondary);">✓ Listening tasks (with audio)</li>
                            <li style="padding: 6px 0; font-size: 0.9rem; color: var(--text-secondary);">✓ Speaking and writing tasks</li>
                        </ul>
                    </div>

                    <button class="btn btn-primary btn-lg" onclick="Diagnostic.start()">Start Diagnostic</button>
                </div>
            `;
        }
    },

    // Curriculum
    renderCurriculum() {
        const completed = Storage.getCompletedLessons();
        const container = document.getElementById('page-content');
        container.innerHTML = `
            <div>
                <h2>Curriculum</h2>
                <p style="color: var(--text-secondary); margin-bottom: 24px;">All 9 units of Grade 8 English. Click a unit to explore lessons.</p>
                <div class="curriculum-grid">
                    ${CurriculumData.units.map(unit => {
                        const unitLessons = unit.lessons.length;
                        const unitCompleted = unit.lessons.filter(l => completed.includes(l.id)).length;
                        const progress = Math.round((unitCompleted / unitLessons) * 100);
                        return `
                            <div class="unit-card" onclick="Lessons.openUnit(${unit.id})">
                                <div class="unit-number">Unit ${unit.id}</div>
                                <div class="unit-title">${unit.title}</div>
                                <div class="unit-topics">${unit.topics.slice(0, 4).join(' • ')}</div>
                                <div class="unit-progress">
                                    <div class="unit-progress-bar">
                                        <div class="unit-progress-fill" style="width: ${progress}%; background: ${unit.color};"></div>
                                    </div>
                                    <span class="unit-progress-text">${unitCompleted}/${unitLessons}</span>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    },

    // AI Coach
    renderAICoach() {
        const container = document.getElementById('page-content');
        container.innerHTML = `
            <div class="ai-coach-container">
                <h2>AI Coach</h2>
                <p style="color: var(--text-secondary); margin-bottom: 16px;">Ask me anything about English! I can explain grammar, check sentences, give examples, and more.</p>

                ${!AI.isConfigured() ? `
                    <div style="padding: 12px 16px; background: rgba(245,158,11,0.1); border: 1px solid rgba(245,158,11,0.3); border-radius: var(--radius-md); margin-bottom: 16px; font-size: 0.85rem; color: #92400e;">
                        <strong>Note:</strong> AI is using built-in feedback. Add your Gemini API key in Settings to enable Gemini AI.
                    </div>
                ` : ''}

                <div class="quick-actions">
                    <button class="quick-action" onclick="App.sendQuickAction('Explain Present Perfect')">Explain Present Perfect</button>
                    <button class="quick-action" onclick="App.sendQuickAction('Give me an example of passive voice')">Give me an example</button>
                    <button class="quick-action" onclick="App.sendQuickAction('Check this sentence: She have visited London')">Check my answer</button>
                    <button class="quick-action" onclick="App.sendQuickAction('Explain reported speech')">Reported Speech</button>
                    <button class="quick-action" onclick="App.sendQuickAction('Give me practice on conditionals')">Challenge me</button>
                </div>

                <div class="chat-messages" id="chat-messages">
                    <div class="chat-message">
                        <div class="chat-avatar ai">AI</div>
                        <div class="chat-bubble">
                            Hello! I'm your AI English Coach. I can help you with grammar, vocabulary, check your sentences, give examples, and provide practice. What would you like to work on today?
                        </div>
                    </div>
                </div>

                <div class="chat-input-area">
                    <input type="text" id="chat-input" placeholder="Ask me anything about English..." onkeypress="if(event.key==='Enter')App.sendChatMessage()">
                    <button class="btn btn-primary" onclick="App.sendChatMessage()">Send</button>
                </div>

            </div>
        `;
    },

    bindGlobalSoundEffects() {
        document.addEventListener('click', (event) => {
            const target = event.target.closest('button, .nav-item, .option-item, .quick-action, .difficulty-btn');
            if (!target) return;
            this.playTone('click');
        });
    },

    ensureAudioContext() {
        const AudioCtor = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtor) return null;

        if (!this.audioContext) {
            this.audioContext = new AudioCtor();
        }

        if (this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }

        return this.audioContext;
    },

    playTone(type = 'click') {
        const context = this.ensureAudioContext();
        if (!context) return;

        const tones = {
            click: { frequency: 660, duration: 0.08, type: 'triangle' },
            success: { frequency: 880, duration: 0.14, type: 'sine' },
            error: { frequency: 220, duration: 0.18, type: 'sawtooth' }
        };

        const tone = tones[type] || tones.click;
        const oscillator = context.createOscillator();
        const gainNode = context.createGain();

        oscillator.type = tone.type;
        oscillator.frequency.setValueAtTime(tone.frequency, context.currentTime);

        gainNode.gain.setValueAtTime(0.0001, context.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.04, context.currentTime + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + tone.duration);

        oscillator.connect(gainNode);
        gainNode.connect(context.destination);

        oscillator.start(context.currentTime);
        oscillator.stop(context.currentTime + tone.duration);
    },

    async sendChatMessage() {
        const input = document.getElementById('chat-input');
        const message = input.value.trim();
        if (!message) return;

        input.value = '';
        
        // Add user message
        const messagesEl = document.getElementById('chat-messages');
        messagesEl.innerHTML += `
            <div class="chat-message user">
                <div class="chat-avatar user">You</div>
                <div class="chat-bubble">${this.escapeHtml(message)}</div>
            </div>
        `;

        // Show loading
        messagesEl.innerHTML += `
            <div class="chat-message" id="loading-msg">
                <div class="chat-avatar ai">AI</div>
                <div class="chat-bubble"><div class="loading"><div class="spinner"></div></div></div>
            </div>
        `;
        messagesEl.scrollTop = messagesEl.scrollHeight;

        // Get response
        const response = await AI.handleChat(message);

        // Remove loading
        const loadingMsg = document.getElementById('loading-msg');
        if (loadingMsg) loadingMsg.remove();

        // Add AI response
        messagesEl.innerHTML += `
            <div class="chat-message">
                <div class="chat-avatar ai">AI</div>
                <div class="chat-bubble">${this.formatResponse(response)}</div>
            </div>
        `;
        messagesEl.scrollTop = messagesEl.scrollHeight;
    },

    async sendQuickAction(message) {
        document.getElementById('chat-input').value = message;
        await this.sendChatMessage();
    },

    async submitWriting() {
        const textarea = document.getElementById('writing-submit');
        const text = textarea.value.trim();
        if (text.length < 10) {
            App.showToast('Please write at least a few sentences.', 'error');
            return;
        }

        const feedbackEl = document.getElementById('writing-feedback');
        feedbackEl.innerHTML = '<div class="loading"><div class="spinner"></div></div>';

        // Save attempt
        Storage.saveWritingAttempt({ text: text });
        Storage.addXP(15);

        const feedback = await AI.analyzeWritingSubmission(text);
        feedbackEl.innerHTML = `
            <div class="card" style="font-size: 0.9rem; line-height: 1.7;">
                ${this.formatResponse(feedback)}
            </div>
            <button class="btn btn-secondary btn-sm" style="margin-top: 8px;" onclick="document.getElementById('writing-submit').value=''; document.getElementById('writing-feedback').innerHTML='';">Edit & Try Again</button>
        `;
    },

    formatResponse(text) {
        // Simple markdown-like formatting
        return text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n/g, '<br>')
            .replace(/• /g, '&bull; ');
    },

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    },

    // Teacher Mode
    toggleTeacherMode() {
        const currentUser = Storage.getCurrentUser();
        if (!currentUser || currentUser.role !== 'teacher') {
            this.showToast('Teacher account required', 'error');
            return;
        }

        this.teacherMode = !this.teacherMode;
        const teacherEl = document.getElementById('teacher-mode');
        const mainEl = document.getElementById('main-app');

        if (this.teacherMode) {
            teacherEl.classList.remove('hidden');
            mainEl.classList.add('hidden');
            this.renderTeacherDashboard();
        } else {
            teacherEl.classList.add('hidden');
            mainEl.classList.remove('hidden');
        }
    },

    renderTeacherDashboard() {
        const currentUser = Storage.getCurrentUser();
        if (!currentUser || currentUser.role !== 'teacher') {
            this.showToast('Teacher account required', 'error');
            return;
        }

        // Demo students
        const studentRecords = Storage.getAllStudents();
        const demoStudents = studentRecords.map(student => ({
            name: student.name,
            grade: student.grade,
            data: {
                skills: student.skills || { Grammar: 0, Vocabulary: 0, Reading: 0, Listening: 0, Speaking: 0, Writing: 0 },
                completed: student.completed || [],
                errors: student.errors || [],
                streak: student.streak || { count: 0 },
                xp: student.xp || 0,
                diagnostic: { overallScore: 0, skillScores: student.skills || {} }
            }
        }));

        // Calculate class averages
        const skillAverages = { Grammar: 0, Vocabulary: 0, Reading: 0, Listening: 0, Speaking: 0, Writing: 0 };
        demoStudents.forEach(s => {
            Object.keys(skillAverages).forEach(skill => {
                skillAverages[skill] += (s.data.skills[skill] || 0);
            });
        });
        Object.keys(skillAverages).forEach(skill => {
            skillAverages[skill] = demoStudents.length
                ? Math.round(skillAverages[skill] / demoStudents.length)
                : 0;
        });

        const avgPerformance = Math.round(Object.values(skillAverages).reduce((a, b) => a + b, 0) / 6);
        const needsSupport = demoStudents.filter(s => {
            const avg = Object.values(s.data.skills).reduce((a, b) => a + b, 0) / 6;
            return avg < 60;
        }).length;

        const container = document.getElementById('teacher-content');
        container.innerHTML = `
            <div class="summary-grid" style="margin-bottom: 24px;">
                <div class="summary-card">
                    <div class="summary-icon blue">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                    </div>
                    <div class="summary-info">
                        <h3>${demoStudents.length}</h3>
                        <p>Students</p>
                    </div>
                </div>
                <div class="summary-card">
                    <div class="summary-icon green">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                    <div class="summary-info">
                        <h3>${avgPerformance}%</h3>
                        <p>Average Performance</p>
                    </div>
                </div>
                <div class="summary-card">
                    <div class="summary-icon orange">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                    </div>
                    <div class="summary-info">
                        <h3>${demoStudents.reduce((sum, s) => sum + s.data.completed.length, 0)}</h3>
                        <p>Completed Activities</p>
                    </div>
                </div>
                <div class="summary-card">
                    <div class="summary-icon purple">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
                    </div>
                    <div class="summary-info">
                        <h3>${needsSupport}</h3>
                        <p>Need Support</p>
                    </div>
                </div>
            </div>

            <div class="card" style="margin-bottom: 24px;">
                <div class="card-header">
                    <span class="card-title">Class Skill Averages</span>
                </div>
                <div class="progress-chart">
                    ${Object.entries(skillAverages).map(([skill, avg]) => `
                        <div class="progress-bar-item">
                            <span class="progress-bar-label">${skill}</span>
                            <div class="progress-bar-track">
                                <div class="progress-bar-value" style="width: ${avg}%; background: ${Progress.getSkillColor(skill)};"></div>
                            </div>
                            <span class="progress-bar-percent">${avg}%</span>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="card" style="margin-bottom: 24px;">
                <div class="card-header">
                    <span class="card-title">Common Errors</span>
                </div>
                <div class="tag-list">
                    <span class="tag red">Present Perfect Questions</span>
                    <span class="tag orange">Past Tenses</span>
                    <span class="tag orange">Prepositions</span>
                    <span class="tag orange">Word Order</span>
                    <span class="tag green">Vocabulary</span>
                </div>
            </div>

            <h3 style="margin-bottom: 16px;">Students</h3>
            <div class="teacher-grid">
                ${demoStudents.map((student, i) => {
                    const avg = Math.round(Object.values(student.data.skills).reduce((a, b) => a + b, 0) / 6);
                    return `
                        <div class="teacher-student-card" onclick="App.showStudentDetail(${i})">
                            <h4>${student.name}</h4>
                            <p style="font-size: 0.8rem; color: var(--text-muted);">Grade ${student.grade}</p>
                            <div class="score">${avg}%</div>
                            <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 4px;">${student.data.completed.length} lessons completed</p>
                        </div>
                    `;
                }).join('')}
            </div>
        `;

        // Store demo students for detail view
        this._demoStudents = demoStudents;
    },

    generateDemoData(avgScore) {
        const skills = {};
        ['Grammar', 'Vocabulary', 'Reading', 'Listening', 'Speaking', 'Writing'].forEach(skill => {
            skills[skill] = Math.max(20, Math.min(100, avgScore + Math.floor(Math.random() * 30) - 15));
        });
        return {
            skills: skills,
            completed: Array(Math.floor(Math.random() * 15) + 3).fill(null).map((_, i) => `1-${i + 1}`),
            errors: [],
            streak: { count: Math.floor(Math.random() * 7) + 1 },
            xp: Math.floor(Math.random() * 500) + 100,
            diagnostic: { overallScore: avgScore, skillScores: skills }
        };
    },

    showStudentDetail(index) {
        const student = this._demoStudents[index];
        const data = student.data;
        const avg = Math.round(Object.values(data.skills).reduce((a, b) => a + b, 0) / 6);

        const strengths = Object.entries(data.skills).filter(([_, v]) => v >= 75).map(([k]) => k);
        const needsPractice = Object.entries(data.skills).filter(([_, v]) => v < 50).map(([k]) => k);

        const container = document.getElementById('teacher-content');
        container.innerHTML = `
            <button class="btn btn-secondary btn-sm" onclick="App.renderTeacherDashboard()">← Back to Class</button>
            
            <div style="margin-top: 16px;">
                <h2>${student.name}</h2>
                <p style="color: var(--text-secondary);">Grade ${student.grade} • Overall: ${avg}%</p>
            </div>

            <div class="progress-overview" style="margin-top: 24px;">
                <div class="card">
                    <div class="card-header">
                        <span class="card-title">Diagnostic Results</span>
                    </div>
                    <div class="progress-chart">
                        ${Object.entries(data.skills).map(([skill, score]) => `
                            <div class="progress-bar-item">
                                <span class="progress-bar-label">${skill}</span>
                                <div class="progress-bar-track">
                                    <div class="progress-bar-value" style="width: ${score}%; background: ${Progress.getSkillColor(skill)};"></div>
                                </div>
                                <span class="progress-bar-percent">${score}%</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <span class="card-title">Student Overview</span>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                        <div>
                            <div style="font-size: 1.3rem; font-weight: 800; color: var(--accent-green);">${data.completed.length}</div>
                            <div style="font-size: 0.8rem; color: var(--text-muted);">Lessons Done</div>
                        </div>
                        <div>
                            <div style="font-size: 1.3rem; font-weight: 800; color: var(--accent-orange);">${data.xp}</div>
                            <div style="font-size: 0.8rem; color: var(--text-muted);">XP Earned</div>
                        </div>
                        <div>
                            <div style="font-size: 1.3rem; font-weight: 800; color: var(--accent-red);">${data.streak.count}</div>
                            <div style="font-size: 0.8rem; color: var(--text-muted);">Day Streak</div>
                        </div>
                        <div>
                            <div style="font-size: 1.3rem; font-weight: 800; color: var(--primary);">${data.errors.length}</div>
                            <div style="font-size: 0.8rem; color: var(--text-muted);">Errors Made</div>
                        </div>
                    </div>
                </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 16px;">
                <div class="card">
                    <h4 style="margin-bottom: 8px; color: var(--accent-green);">Strengths</h4>
                    <div class="tag-list">
                        ${strengths.length > 0 ? strengths.map(s => `<span class="tag green">${s}</span>`).join('') : '<span style="color: var(--text-muted); font-size: 0.85rem;">No strong areas yet</span>'}
                    </div>
                </div>
                <div class="card">
                    <h4 style="margin-bottom: 8px; color: var(--accent-orange);">Needs Practice</h4>
                    <div class="tag-list">
                        ${needsPractice.length > 0 ? needsPractice.map(s => `<span class="tag orange">${s}</span>`).join('') : '<span style="color: var(--text-muted); font-size: 0.85rem;">All areas improving</span>'}
                    </div>
                </div>
            </div>

            <div class="insights-card" style="margin-top: 16px;">
                <h4>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0l2.5 5 5.5.8-4 3.9.9 5.3L8 12.5 3.1 15l.9-5.3-4-3.9L5.5 5z"/></svg>
                    Teacher Insight
                </h4>
                <p>${this.generateTeacherInsight(student.name, data)}</p>
            </div>
        `;
    },

    generateTeacherInsight(name, data) {
        const scores = data.skills;
        const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
        const strongest = sorted[0];
        const weakest = sorted[sorted.length - 1];

        let insight = `${name} demonstrates strong ${strongest[0].toLowerCase()} knowledge (${strongest[1]}%)`;
        
        if (weakest[1] < 60) {
            insight += ` but needs additional practice with ${weakest[0].toLowerCase()} (${weakest[1]}%).`;
        } else {
            insight += ` and shows balanced performance across skills.`;
        }

        if (data.completed.length > 10) {
            insight += ` Consistent engagement with ${data.completed.length} completed lessons.`;
        }

        return insight;
    },

    // Sidebar
    toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('open');
    },

    // Settings
    showSettings() {
        const settings = Storage.getSettings();
        const currentUser = Storage.getCurrentUser();
        const keyInput = document.getElementById('ai-key-input');
        const profileText = document.getElementById('student-profile-text');

        if (keyInput) keyInput.value = settings.apiKey || '';
        if (profileText) profileText.textContent = `Name: ${currentUser?.name || 'Student'} | Grade: 8 | Subject: English`;

        this.refreshAIStatus();
        document.getElementById('settings-modal').classList.remove('hidden');
    },

    refreshAIStatus() {
        const statusEl = document.getElementById('ai-status');
        if (!statusEl) return;

        const settings = Storage.getSettings();
        const configured = !!(settings.aiConfigured && (settings.apiKey || settings.aiEndpoint));

        if (configured) {
            statusEl.innerHTML = '<span class="status-dot online"></span><span>AI configured — using Gemini</span>';
        } else {
            statusEl.innerHTML = '<span class="status-dot offline"></span><span>AI not configured — using built-in feedback</span>';
        }
    },

    saveAISettings() {
        const keyInput = document.getElementById('ai-key-input');
        const apiKey = (keyInput?.value || '').trim();

        Storage.saveSettings({
            aiConfigured: !!apiKey,
            aiEndpoint: null,
            apiKey: apiKey || null
        });

        this.refreshAIStatus();
        App.showToast('AI settings saved on this device.', 'success');
    },

    closeSettings() {
        document.getElementById('settings-modal').classList.add('hidden');
    },

    // Reset Data
    resetData() {
        if (confirm('Start all learning progress from the beginning? Your account and AI settings will stay saved.')) {
            Storage.resetLearningData();
            App.showToast('Learning progress has been reset.', 'success');
            setTimeout(() => location.reload(), 1000);
        }
    },

    // Top bar update
    updateTopBar() {
        const student = Storage.getStudentData();
        const xp = Storage.getXP();
        const streak = Storage.getStreak();

        document.getElementById('student-name-display').textContent = student.name;
        document.getElementById('xp-value').textContent = xp + ' XP';
        document.getElementById('streak-value').textContent = streak.count + ' day streak';
    },

    // Toast notifications
    showToast(message, type) {
        const toneType = type === 'success' ? 'success' : type === 'error' ? 'error' : 'click';
        this.playTone(toneType);

        const toast = document.createElement('div');
        toast.className = `toast ${type || ''}`;
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});