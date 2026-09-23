/* ============================================
   AI ENGLISH COACH — Storage Module
   localStorage management for all student data
   ============================================ */

const Storage = {
    KEYS: {
        STUDENT: 'aiCoach_student',
        STUDENTS: 'aiCoach_students',
        USERS: 'aiCoach_users',
        CURRENT_USER: 'aiCoach_currentUser',
        DIAGNOSTIC: 'aiCoach_diagnostic',
        SKILLS: 'aiCoach_skills',
        COMPLETED: 'aiCoach_completed',
        PRACTICE: 'aiCoach_practice',
        ERRORS: 'aiCoach_errors',
        ERROR_HISTORY: 'aiCoach_errorHistory',
        LEARNING_PATH: 'aiCoach_learningPath',
        WRITING: 'aiCoach_writing',
        STREAK: 'aiCoach_streak',
        XP: 'aiCoach_xp',
        ACHIEVEMENTS: 'aiCoach_achievements',
        CURRENT_UNIT: 'aiCoach_currentUnit',
        CURRENT_LESSON: 'aiCoach_currentLesson',
        SETTINGS: 'aiCoach_settings',
        CURRENT_ROLE: 'aiCoach_currentRole',
        CURRENT_STUDENT: 'aiCoach_currentStudent',
        LOCAL_DATABASE: 'aiCoach_localDatabase'
    },

    // Safe JSON parse
    safeParse(json, fallback) {
        if (json === null || json === undefined || json === '') {
            return fallback;
        }

        try {
            const parsed = JSON.parse(json);
            return parsed === null ? fallback : parsed;
        } catch (e) {
            console.warn('Storage: Failed to parse data, using fallback');
            return fallback;
        }
    },

    getLocalDatabase() {
        return this.safeParse(localStorage.getItem(this.KEYS.LOCAL_DATABASE), {
            users: [],
            currentUser: null,
            currentRole: null,
            currentStudent: null,
            students: [],
            progress: {},
            settings: this.getSettings()
        });
    },

    syncLocalDatabase() {
        const progress = {
            diagnostic: this.getDiagnosticResult(),
            skills: this.getSkillScores(),
            completed: this.getCompletedLessons(),
            practice: this.getPracticeResults(),
            errors: this.getErrors(),
            errorHistory: this.getErrorHistory(),
            learningPath: this.getLearningPath(),
            writing: this.getWritingAttempts(),
            streak: this.getStreak(),
            xp: this.getXP(),
            achievements: this.getAchievements(),
            currentUnit: this.getCurrentUnit(),
            currentLesson: this.getCurrentLesson(),
            errorsCorrected: this.getErrorsCorrected(),
            smartShoppingResult: this.getSmartShoppingResult()
        };

        localStorage.setItem(this.KEYS.LOCAL_DATABASE, JSON.stringify({
            users: this.getUsers(),
            currentUser: this.getCurrentUser(),
            currentRole: this.getCurrentRole(),
            currentStudent: this.getCurrentStudentId(),
            students: this.getAllStudents(),
            progress,
            settings: this.getSettings(),
            updatedAt: Date.now()
        }));
    },

    // Student Profile
    getDefaultStudents() {
        return [];
    },

    ensureStudents() {
        const existing = this.safeParse(localStorage.getItem(this.KEYS.STUDENTS), null);
        if (!Array.isArray(existing)) {
            localStorage.setItem(this.KEYS.STUDENTS, JSON.stringify([]));
            return [];
        }
        return existing;
    },

    getAllStudents() {
        return this.ensureStudents();
    },

    clearDemoStateIfNeeded() {
        const users = this.getUsers();
        const students = this.getAllStudents();
        const demoNames = ['Aigerim', 'Dias', 'Aruzhan', 'Mr. Kairat'];
        const demoIds = ['aigerim', 'dias', 'aruzhan'];

        const hasDemoUsers = users.some(user => demoNames.includes(user.name) || demoIds.includes(String(user.id).toLowerCase()));
        const hasDemoStudents = students.some(student => demoNames.includes(student.name) || demoIds.includes(String(student.id).toLowerCase()));

        if (hasDemoUsers || hasDemoStudents) {
            localStorage.removeItem(this.KEYS.USERS);
            localStorage.removeItem(this.KEYS.CURRENT_USER);
            localStorage.removeItem(this.KEYS.CURRENT_ROLE);
            localStorage.removeItem(this.KEYS.CURRENT_STUDENT);
            this.resetLearningData();
        }
    },

    getUsers() {
        return this.safeParse(localStorage.getItem(this.KEYS.USERS), []);
    },

    saveUsers(users) {
        localStorage.setItem(this.KEYS.USERS, JSON.stringify(users));
        this.syncLocalDatabase();
    },

    getCurrentUser() {
        const raw = localStorage.getItem(this.KEYS.CURRENT_USER);
        return this.safeParse(raw, null);
    },

    setCurrentUser(user) {
        if (!user) {
            localStorage.removeItem(this.KEYS.CURRENT_USER);
            this.syncLocalDatabase();
            return;
        }
        localStorage.setItem(this.KEYS.CURRENT_USER, JSON.stringify(user));
        this.syncLocalDatabase();
    },

    registerUser({ role, name, grade }) {
        const normalizedRole = role === 'teacher' ? 'teacher' : 'student';
        const normalizedName = (name || '').trim();

        if (!normalizedName) {
            return null;
        }

        const user = {
            id: `${normalizedRole}-account`,
            role: normalizedRole,
            name: normalizedName,
            grade: normalizedRole === 'student' ? Number(grade) || 8 : null,
            createdAt: Date.now()
        };

        const users = this.getUsers().filter(item => item.role !== normalizedRole);
        users.push(user);
        this.saveUsers(users);
        this.setCurrentUser(user);
        this.setCurrentRole(normalizedRole);

        if (normalizedRole === 'student') {
            const studentId = 'student-account';
            const students = this.getAllStudents();
            const studentIndex = students.findIndex(item => item.id === studentId);
            const studentRecord = {
                id: studentId,
                name: normalizedName,
                grade: user.grade,
                subject: 'English',
                firstVisit: true,
                diagnosticCompleted: false,
                skills: { Grammar: 0, Vocabulary: 0, Reading: 0, Listening: 0, Speaking: 0, Writing: 0 },
                completed: [],
                errors: [],
                streak: { count: 0, lastDate: null },
                xp: 0,
                achievements: [],
                learningPath: []
            };

            if (studentIndex >= 0) {
                students[studentIndex] = { ...students[studentIndex], name: normalizedName, grade: user.grade };
            } else {
                students.push(studentRecord);
            }

            localStorage.setItem(this.KEYS.STUDENTS, JSON.stringify(students));
            this.setCurrentStudentId(studentId);
        }

        this.syncLocalDatabase();

        return user;
    },

    loginUser(userId) {
        const user = this.getUsers().find(item => item.id === userId);
        if (!user) {
            return null;
        }

        this.setCurrentUser(user);
        this.setCurrentRole(user.role);

        if (user.role === 'student') {
            const studentId = 'student-account';
            this.setCurrentStudentId(studentId);
            const students = this.getAllStudents();
            const studentIndex = students.findIndex(item => item.id === studentId);

            if (studentIndex === -1) {
                students.push({
                    id: studentId,
                    name: user.name,
                    grade: user.grade || 8,
                    subject: 'English',
                    firstVisit: true,
                    diagnosticCompleted: false,
                    skills: { Grammar: 0, Vocabulary: 0, Reading: 0, Listening: 0, Speaking: 0, Writing: 0 },
                    completed: [],
                    errors: [],
                    streak: { count: 0, lastDate: null },
                    xp: 0,
                    achievements: [],
                    learningPath: []
                });
                localStorage.setItem(this.KEYS.STUDENTS, JSON.stringify(students));
            }
        }

        this.syncLocalDatabase();

        return user;
    },

    logoutUser() {
        this.setCurrentUser(null);
        this.setCurrentRole(null);
        this.setCurrentStudentId(null);
        return true;
    },

    getCurrentRole() {
        return localStorage.getItem(this.KEYS.CURRENT_ROLE) || null;
    },

    setCurrentRole(role) {
        if (role) {
            localStorage.setItem(this.KEYS.CURRENT_ROLE, role);
        } else {
            localStorage.removeItem(this.KEYS.CURRENT_ROLE);
        }
        this.syncLocalDatabase();
    },

    getCurrentStudentId() {
        return localStorage.getItem(this.KEYS.CURRENT_STUDENT) || null;
    },

    setCurrentStudentId(studentId) {
        if (studentId) {
            localStorage.setItem(this.KEYS.CURRENT_STUDENT, studentId);
        } else {
            localStorage.removeItem(this.KEYS.CURRENT_STUDENT);
        }
        this.syncLocalDatabase();
    },

    getStudentData() {
        const students = this.getAllStudents();
        const currentStudentId = this.getCurrentStudentId();
        const current = students.find(s => s.id === currentStudentId) || students[0];
        const currentUser = this.getCurrentUser();
        const fallback = {
            id: current?.id || 'student-account',
            name: current?.name || currentUser?.name || 'Student',
            grade: 8,
            subject: current?.subject || 'English',
            firstVisit: true,
            diagnosticCompleted: false
        };

        const saved = current || fallback;
        return { ...fallback, ...saved };
    },

    saveStudentData(data) {
        const students = this.getAllStudents();
        const currentStudentId = this.getCurrentStudentId();
        const index = students.findIndex(s => s.id === currentStudentId);

        if (index >= 0) {
            students[index] = { ...students[index], ...data, id: currentStudentId };
            localStorage.setItem(this.KEYS.STUDENTS, JSON.stringify(students));
            this.syncLocalDatabase();
            return;
        }

        localStorage.setItem(this.KEYS.STUDENT, JSON.stringify(data));
        this.syncLocalDatabase();
    },

    // Diagnostic Results
    getDiagnosticResult() {
        const data = localStorage.getItem(this.KEYS.DIAGNOSTIC);
        return this.safeParse(data, null);
    },

    saveDiagnosticResult(result) {
        localStorage.setItem(this.KEYS.DIAGNOSTIC, JSON.stringify(result));
        this.syncLocalDatabase();
    },

    // Skill Scores
    getSkillScores() {
        const data = localStorage.getItem(this.KEYS.SKILLS);
        return this.safeParse(data, {
            Grammar: 0,
            Vocabulary: 0,
            Reading: 0,
            Listening: 0,
            Speaking: 0,
            Writing: 0
        });
    },

    saveSkillScores(scores) {
        localStorage.setItem(this.KEYS.SKILLS, JSON.stringify(scores));
        this.syncLocalDatabase();
    },

    updateSkillScore(skill, score) {
        const scores = this.getSkillScores();
        // Weighted average: new score counts for 40%, old for 60%
        if (scores[skill] > 0) {
            scores[skill] = Math.round(scores[skill] * 0.6 + score * 0.4);
        } else {
            scores[skill] = score;
        }
        this.saveSkillScores(scores);
        return scores;
    },

    // Completed Lessons
    getCompletedLessons() {
        const data = localStorage.getItem(this.KEYS.COMPLETED);
        return this.safeParse(data, []);
    },

    completeLesson(lessonId) {
        const completed = this.getCompletedLessons();
        if (!completed.includes(lessonId)) {
            completed.push(lessonId);
            localStorage.setItem(this.KEYS.COMPLETED, JSON.stringify(completed));
            this.syncLocalDatabase();
        }
        return completed;
    },

    // Practice Results
    getPracticeResults() {
        const data = localStorage.getItem(this.KEYS.PRACTICE);
        return this.safeParse(data, []);
    },

    savePracticeResult(result) {
        const results = this.getPracticeResults();
        results.push({
            ...result,
            timestamp: Date.now()
        });
        localStorage.setItem(this.KEYS.PRACTICE, JSON.stringify(results));
        this.syncLocalDatabase();
    },

    // Errors
    getErrors() {
        const data = localStorage.getItem(this.KEYS.ERRORS);
        return this.safeParse(data, []);
    },

    addError(error) {
        const errors = this.getErrors();
        errors.push({
            ...error,
            timestamp: Date.now()
        });
        localStorage.setItem(this.KEYS.ERRORS, JSON.stringify(errors));
        this.syncLocalDatabase();
    },

    // Error History (categorized)
    getErrorHistory() {
        const data = localStorage.getItem(this.KEYS.ERROR_HISTORY);
        return this.safeParse(data, {
            Grammar: 0,
            Tenses: 0,
            'Word Order': 0,
            Vocabulary: 0,
            Prepositions: 0,
            Spelling: 0
        });
    },

    updateErrorHistory(category) {
        const history = this.getErrorHistory();
        if (history[category] !== undefined) {
            history[category]++;
        }
        localStorage.setItem(this.KEYS.ERROR_HISTORY, JSON.stringify(history));
        this.syncLocalDatabase();
    },

    // Learning Path
    getLearningPath() {
        const data = localStorage.getItem(this.KEYS.LEARNING_PATH);
        return this.safeParse(data, []);
    },

    saveLearningPath(path) {
        localStorage.setItem(this.KEYS.LEARNING_PATH, JSON.stringify(path));
        this.syncLocalDatabase();
    },

    updateLearningPath(path) {
        const current = this.getLearningPath();
        // Merge with existing
        const merged = [...current];
        path.forEach(item => {
            const existing = merged.findIndex(m => m.id === item.id);
            if (existing >= 0) {
                merged[existing] = item;
            } else {
                merged.push(item);
            }
        });
        this.saveLearningPath(merged);
    },

    // Writing Attempts
    getWritingAttempts() {
        const data = localStorage.getItem(this.KEYS.WRITING);
        return this.safeParse(data, []);
    },

    saveWritingAttempt(attempt) {
        const attempts = this.getWritingAttempts();
        attempts.push({
            ...attempt,
            timestamp: Date.now()
        });
        localStorage.setItem(this.KEYS.WRITING, JSON.stringify(attempts));
        this.syncLocalDatabase();
    },

    // Smart Shopping Challenge result
    getSmartShoppingResult() {
        const data = localStorage.getItem('aiCoach_smartShoppingResult');
        return this.safeParse(data, null);
    },

    saveSmartShoppingResult(result) {
        localStorage.setItem('aiCoach_smartShoppingResult', JSON.stringify(result));
        this.syncLocalDatabase();
    },

    // Streak
    getStreak() {
        const data = localStorage.getItem(this.KEYS.STREAK);
        return this.safeParse(data, { count: 0, lastDate: null });
    },

    updateStreak() {
        const streak = this.getStreak();
        const today = new Date().toDateString();
        const yesterday = new Date(Date.now() - 86400000).toDateString();

        if (streak.lastDate === today) {
            // Already counted today
            return streak;
        } else if (streak.lastDate === yesterday) {
            streak.count++;
            streak.lastDate = today;
        } else {
            streak.count = 1;
            streak.lastDate = today;
        }

        localStorage.setItem(this.KEYS.STREAK, JSON.stringify(streak));
        this.syncLocalDatabase();
        return streak;
    },

    // XP
    getXP() {
        const data = localStorage.getItem(this.KEYS.XP);
        return parseInt(data) || 0;
    },

    addXP(amount) {
        const current = this.getXP();
        const newXP = current + amount;
        localStorage.setItem(this.KEYS.XP, newXP.toString());
        this.syncLocalDatabase();
        return newXP;
    },

    // Achievements
    getAchievements() {
        const data = localStorage.getItem(this.KEYS.ACHIEVEMENTS);
        return this.safeParse(data, []);
    },

    earnAchievement(achievementId) {
        const earned = this.getAchievements();
        if (!earned.includes(achievementId)) {
            earned.push(achievementId);
            localStorage.setItem(this.KEYS.ACHIEVEMENTS, JSON.stringify(earned));
            this.syncLocalDatabase();
            return true; // New achievement
        }
        return false;
    },

    // Current Unit/Lesson
    getCurrentUnit() {
        return localStorage.getItem(this.KEYS.CURRENT_UNIT) || '1';
    },

    setCurrentUnit(unitId) {
        localStorage.setItem(this.KEYS.CURRENT_UNIT, unitId);
        this.syncLocalDatabase();
    },

    getCurrentLesson() {
        return localStorage.getItem(this.KEYS.CURRENT_LESSON) || null;
    },

    setCurrentLesson(lessonId) {
        localStorage.setItem(this.KEYS.CURRENT_LESSON, lessonId);
        this.syncLocalDatabase();
    },

    // Errors Corrected Count
    getErrorsCorrected() {
        const data = localStorage.getItem('aiCoach_errorsCorrected');
        return parseInt(data) || 0;
    },

    incrementErrorsCorrected() {
        const current = this.getErrorsCorrected();
        localStorage.setItem('aiCoach_errorsCorrected', (current + 1).toString());
        this.syncLocalDatabase();
        return current + 1;
    },

    // Settings
    getSettings() {
        const data = localStorage.getItem(this.KEYS.SETTINGS);
        const fallback = {
            aiEndpoint: null,
            aiConfigured: false,
            apiKey: null
        };

        const settings = this.safeParse(data, fallback);
        return { ...fallback, ...(settings || {}) };
    },

    saveSettings(settings) {
        const current = this.getSettings();
        localStorage.setItem(this.KEYS.SETTINGS, JSON.stringify({ ...current, ...settings }));
        this.syncLocalDatabase();
    },

    resetLearningData() {
        const learningKeys = [
            this.KEYS.STUDENT,
            this.KEYS.DIAGNOSTIC,
            this.KEYS.SKILLS,
            this.KEYS.COMPLETED,
            this.KEYS.PRACTICE,
            this.KEYS.ERRORS,
            this.KEYS.ERROR_HISTORY,
            this.KEYS.LEARNING_PATH,
            this.KEYS.WRITING,
            this.KEYS.STREAK,
            this.KEYS.ACHIEVEMENTS,
            this.KEYS.CURRENT_UNIT,
            this.KEYS.CURRENT_LESSON,
            this.KEYS.XP
        ];

        learningKeys.forEach(key => localStorage.removeItem(key));
        localStorage.removeItem('aiCoach_errorsCorrected');
        localStorage.removeItem('aiCoach_smartShoppingResult');

        const currentUser = this.getCurrentUser();
        const students = currentUser?.role === 'student'
            ? [{
                id: 'student-account',
                name: currentUser.name,
                grade: 8,
                subject: 'English',
                firstVisit: true,
                diagnosticCompleted: false,
                skills: { Grammar: 0, Vocabulary: 0, Reading: 0, Listening: 0, Speaking: 0, Writing: 0 },
                completed: [],
                errors: [],
                streak: { count: 0, lastDate: null },
                xp: 0,
                achievements: [],
                learningPath: []
            }]
            : [];

        localStorage.setItem(this.KEYS.STUDENTS, JSON.stringify(students));
        this.syncLocalDatabase();
    },

    // Reset All Data
    resetAll() {
        Object.values(this.KEYS).forEach(key => {
            localStorage.removeItem(key);
        });
        localStorage.removeItem('aiCoach_errorsCorrected');
    },

    // Get all data for teacher mode
    getAllStudentData() {
        const students = this.getAllStudents();
        const currentStudent = this.getStudentData();

        return {
            student: currentStudent,
            students,
            diagnostic: this.getDiagnosticResult(),
            skills: this.getSkillScores(),
            completed: this.getCompletedLessons(),
            practice: this.getPracticeResults(),
            errors: this.getErrors(),
            errorHistory: this.getErrorHistory(),
            learningPath: this.getLearningPath(),
            writing: this.getWritingAttempts(),
            streak: this.getStreak(),
            xp: this.getXP(),
            achievements: this.getAchievements(),
            errorsCorrected: this.getErrorsCorrected(),
            smartShoppingResult: this.getSmartShoppingResult()
        };
    }
};