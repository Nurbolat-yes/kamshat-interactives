/* ============================================
   AI ENGLISH COACH — Progress Module
   Progress tracking and learning path generation
   ============================================ */

const Progress = {
    generateLearningPath(diagnosticResults) {
        const path = [];
        const scores = diagnosticResults;
        
        // Sort skills by score (weakest first)
        const sorted = Object.entries(scores).sort((a, b) => a[1] - b[1]);
        
        // Generate recommendations based on weak areas
        const recommendations = {
            Grammar: [
                { id: 'lp-grammar-1', lessonId: '2-2', title: 'Present Perfect Basics', reason: 'Present Perfect needs practice based on your diagnostic results.' },
                { id: 'lp-grammar-2', lessonId: '2-4', title: 'Present Perfect Questions', reason: 'You need more practice forming Present Perfect questions.' },
                { id: 'lp-grammar-3', lessonId: '7-2', title: 'Past Perfect', reason: 'Strengthen your understanding of perfect tenses.' },
                { id: 'lp-grammar-4', lessonId: '8-2', title: 'First Conditional', reason: 'Conditional structures need more practice.' },
                { id: 'lp-grammar-5', lessonId: '9-2', title: 'Should / Must / Have to', reason: 'Modal verbs for obligation need review.' }
            ],
            Vocabulary: [
                { id: 'lp-vocab-1', lessonId: '2-1', title: 'Internet Vocabulary', reason: 'Build your technology vocabulary.' },
                { id: 'lp-vocab-2', lessonId: '2-5', title: 'Cybercrime Vocabulary', reason: 'Learn important safety vocabulary.' },
                { id: 'lp-vocab-3', lessonId: '6-1', title: 'Art Vocabulary', reason: 'Expand your descriptive vocabulary.' },
                { id: 'lp-vocab-4', lessonId: '8-1', title: 'Food & Action Vocabulary', reason: 'Learn vocabulary for real-world topics.' }
            ],
            Reading: [
                { id: 'lp-reading-1', lessonId: '2-3', title: 'Internet Addiction', reason: 'Practice reading comprehension with relevant topics.' },
                { id: 'lp-reading-2', lessonId: '3-3', title: 'Reality TV', reason: 'Develop critical reading skills.' },
                { id: 'lp-reading-3', lessonId: '7-4', title: 'Youth Travel', reason: 'Read about topics relevant to your life.' },
                { id: 'lp-reading-4', lessonId: '8-4', title: 'Food Waste', reason: 'Practice understanding complex texts.' }
            ],
            Listening: [
                { id: 'lp-listen-1', lessonId: '2-6', title: 'Online Shopping Speaking', reason: 'Practice listening and speaking together.' },
                { id: 'lp-listen-2', lessonId: '1-5', title: 'Offering Help', reason: 'Build listening skills with practical dialogues.' }
            ],
            Speaking: [
                { id: 'lp-speak-1', lessonId: '2-6', title: 'Experiences Speaking', reason: 'Practice speaking about your experiences.' },
                { id: 'lp-speak-2', lessonId: '1-5', title: 'Offering Help', reason: 'Learn useful phrases for conversation.' }
            ],
            Writing: [
                { id: 'lp-write-1', lessonId: '2-7', title: 'Website Comments', reason: 'Practice expressing opinions in writing.' },
                { id: 'lp-write-2', lessonId: '1-6', title: 'Environmental Email', reason: 'Practice formal and informal writing.' }
            ]
        };

        // Add lessons for weakest skills first
        sorted.forEach(([skill, score]) => {
            if (score < 75 && recommendations[skill]) {
                recommendations[skill].forEach(rec => {
                    path.push({
                        ...rec,
                        skill: skill,
                        status: 'pending'
                    });
                });
            }
        });

        // Add some standard lessons for balanced practice
        const standardPath = [
            { id: 'lp-standard-1', lessonId: '1-1', title: 'Everyday Objects & Quantifiers', skill: 'Vocabulary', status: 'pending', reason: 'Build a strong foundation.' },
            { id: 'lp-standard-2', lessonId: '1-2', title: 'The No Impact Family', skill: 'Reading', status: 'pending', reason: 'Practice reading comprehension.' },
            { id: 'lp-standard-3', lessonId: '1-7', title: 'Saving the Aral Sea', skill: 'Reading', status: 'pending', reason: 'Learn about Kazakhstan.' },
            { id: 'lp-standard-4', lessonId: '2-8', title: 'Shopping in Kazakhstan', skill: 'Reading', status: 'pending', reason: 'Connect learning to your life.' },
            { id: 'lp-standard-5', lessonId: '3-1', title: 'Television Vocabulary', skill: 'Vocabulary', status: 'pending', reason: 'Expand entertainment vocabulary.' }
        ];

        // Mark first item as current
        if (path.length > 0) {
            path[0].status = 'current';
        }

        // Add standard items
        path.push(...standardPath);

        // Save
        Storage.saveLearningPath(path);
        return path;
    },

    renderProgress() {
        const data = Storage.getAllStudentData();
        const scores = data.skills;
        const completed = data.completed;
        const streak = data.streak;
        const xp = data.xp;
        const achievements = data.achievements;
        const diagnostic = data.diagnostic;

        const container = document.getElementById('page-content');
        container.innerHTML = `
            <div>
                <h2>My Progress</h2>
                <p style="color: var(--text-secondary); margin-bottom: 24px;">Track your English learning journey.</p>

                <div class="progress-overview">
                    <div class="card">
                        <div class="card-header">
                            <span class="card-title">Skill Scores</span>
                        </div>
                        <div class="progress-chart">
                            ${Object.entries(scores).map(([skill, score]) => `
                                <div class="progress-bar-item">
                                    <span class="progress-bar-label">${skill}</span>
                                    <div class="progress-bar-track">
                                        <div class="progress-bar-value" style="width: ${score}%; background: ${this.getSkillColor(skill)}"></div>
                                    </div>
                                    <span class="progress-bar-percent">${score}%</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header">
                            <span class="card-title">Overview</span>
                        </div>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 800; color: var(--primary);">${diagnostic ? diagnostic.overallScore + '%' : '—'}</div>
                                <div style="font-size: 0.8rem; color: var(--text-muted);">Diagnostic Score</div>
                            </div>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 800; color: var(--accent-green);">${completed.length}</div>
                                <div style="font-size: 0.8rem; color: var(--text-muted);">Lessons Completed</div>
                            </div>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 800; color: var(--accent-orange);">${xp}</div>
                                <div style="font-size: 0.8rem; color: var(--text-muted);">Total XP</div>
                            </div>
                            <div>
                                <div style="font-size: 1.5rem; font-weight: 800; color: var(--accent-red);">${streak.count}</div>
                                <div style="font-size: 0.8rem; color: var(--text-muted);">Day Streak</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="insights-card" style="margin-bottom: 24px;">
                    <h4>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0l2.5 5 5.5.8-4 3.9.9 5.3L8 12.5 3.1 15l.9-5.3-4-3.9L5.5 5z"/></svg>
                        Learning Insight
                    </h4>
                    <p>${this.generateInsight(scores, completed, data)}</p>
                </div>

                <div class="card" style="margin-bottom: 24px;">
                    <div class="card-header">
                        <span class="card-title">Achievements</span>
                        <span class="card-subtitle">${achievements.length}/${CurriculumData.achievements.length}</span>
                    </div>
                    <div class="achievements-grid">
                        ${CurriculumData.achievements.map(ach => {
                            const earned = achievements.includes(ach.id);
                            return `
                                <div class="achievement ${earned ? 'earned' : 'locked'}">
                                    <div class="achievement-icon">${ach.icon}</div>
                                    <div class="achievement-name">${ach.name}</div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                </div>

                <div class="card">
                    <div class="card-header">
                        <span class="card-title">Recent Errors</span>
                    </div>
                    ${data.errors.length === 0 ? '<p style="color: var(--text-muted); font-size: 0.9rem;">No errors recorded yet. Keep practising!</p>' : `
                        <div style="display: flex; flex-direction: column; gap: 8px;">
                            ${data.errors.slice(-5).reverse().map(e => `
                                <div style="padding: 8px 12px; background: var(--bg-secondary); border-radius: var(--radius-sm); font-size: 0.85rem;">
                                    <strong>${e.category}:</strong> ${e.question}
                                </div>
                            `).join('')}
                        </div>
                    `}
                </div>
            </div>
        `;
    },

    getSkillColor(skill) {
        const colors = {
            Grammar: 'var(--primary)',
            Vocabulary: 'var(--accent-turquoise)',
            Reading: 'var(--accent-purple)',
            Listening: 'var(--accent-orange)',
            Speaking: 'var(--accent-red)',
            Writing: 'var(--accent-green)'
        };
        return colors[skill] || 'var(--primary)';
    },

    generateInsight(scores, completed, data) {
        const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
        const strongest = sorted[0];
        const weakest = sorted[sorted.length - 1];

        let insight = '';

        if (strongest[1] > 0) {
            insight += `${strongest[0]} is currently your strongest skill (${strongest[1]}%). `;
        }

        if (weakest[1] < strongest[1] && weakest[1] > 0) {
            insight += `Your next priority is ${weakest[0]} (${weakest[1]}%). `;
        }

        if (completed.length > 0) {
            insight += `You have completed ${completed.length} lessons. `;
        }

        if (data.streak.count >= 3) {
            insight += `Great streak — ${data.streak.count} days in a row! `;
        }

        if (!data.diagnostic) {
            insight = 'Complete your diagnostic test to get personalised insights about your strengths and areas for improvement.';
        }

        return insight || 'Start learning to see your progress here!';
    },

    renderLearningPath() {
        const path = Storage.getLearningPath();
        const completed = Storage.getCompletedLessons();

        const container = document.getElementById('page-content');
        container.innerHTML = `
            <div class="learning-path">
                <h2>My Learning Path</h2>
                <p style="color: var(--text-secondary); margin-bottom: 24px;">Your personalised roadmap to English success.</p>

                ${path.length === 0 ? `
                    <div class="card" style="text-align: center; padding: 40px;">
                        <p style="color: var(--text-muted); margin-bottom: 16px;">Complete your diagnostic test to generate your personal learning path.</p>
                        <button class="btn btn-primary" onclick="App.navigate('diagnostic')">Start Diagnostic</button>
                    </div>
                ` : `
                    <div class="path-timeline">
                        ${path.map((item, i) => {
                            const isCompleted = completed.includes(item.lessonId);
                            const isCurrent = !isCompleted && (i === 0 || path.slice(0, i).every(p => completed.includes(p.lessonId)));
                            const status = isCompleted ? 'completed' : isCurrent ? 'current' : '';
                            const statusText = isCompleted ? '✓ Completed' : isCurrent ? '→ Current' : 'Upcoming';

                            return `
                                <div class="path-item ${status}" onclick="Lessons.openLesson('${item.lessonId}')">
                                    <div class="path-item-title">${item.title}</div>
                                    <div class="path-item-reason">${item.reason}</div>
                                    <div class="path-item-status">${statusText}</div>
                                </div>
                            `;
                        }).join('')}
                    </div>
                `}
            </div>
        `;
    }
};