/* =========================================================
   AI VOCAB LAB — Main Script
   Grade 8 Research Project
   ========================================================= */

/* ---------- VOCABULARY DATA ---------- */
const vocabulary = {
  unit1: [
    {
      word: "pollution",
      emoji: "🏭",
      pronunciation: "/pəˈluːʃən/",
      definition: "damage caused to water, air, or land by harmful substances",
      kazakh: "ластану",
      example: "Air pollution is a big problem in many cities.",
      personalizedExamples: {
        sports: "Pollution makes outdoor sports fields unsafe for players.",
        gaming: "Pollution in games can destroy the virtual environment.",
        music: "Pollution near concert halls can ruin outdoor music events.",
        technology: "Electronic pollution from old devices harms the environment.",
        films: "Pollution in the film showed a sad future for the planet.",
        art: "The artist painted pollution to show how it destroys nature."
      },
      memoryTip: "Think of smoke coming from a factory — that's pollution."
    },
    {
      word: "environment",
      emoji: "🌍",
      pronunciation: "/ɪnˈvaɪrənmənt/",
      definition: "the natural world around us — air, water, land, plants, animals",
      kazakh: "қоршаған орта",
      example: "We must protect the environment for future generations.",
      personalizedExamples: {
        sports: "A clean environment helps athletes train better outside.",
        gaming: "The game's environment looked like a real forest.",
        music: "Musicians perform better in a peaceful environment.",
        technology: "Technology can help us study the environment.",
        films: "The film showed a beautiful environment before humans came.",
        art: "Artists love to paint the natural environment."
      },
      memoryTip: "Environ = around. The environment is everything around us."
    },
    {
      word: "recycle",
      emoji: "♻️",
      pronunciation: "/riːˈsaɪkəl/",
      definition: "to process used materials so they can be used again",
      kazakh: "қайта өңдеу",
      example: "We recycle plastic bottles at school.",
      personalizedExamples: {
        sports: "The stadium recycles old sports equipment into new gear.",
        gaming: "Some games let you recycle items to make new ones.",
        music: "Musicians recycle old instruments into art.",
        technology: "We should recycle old phones and computers.",
        films: "The character learned to recycle after seeing the dirty city.",
        art: "Artists recycle old materials to create new artworks."
      },
      memoryTip: "Re (again) + cycle (circle) — use things again and again."
    },
    {
      word: "reuse",
      emoji: "🔄",
      pronunciation: "/riːˈjuːz/",
      definition: "to use something again instead of throwing it away",
      kazakh: "қайта қолдану",
      example: "We can reuse old bags when we go shopping.",
      personalizedExamples: {
        sports: "Players reuse their water bottles during training.",
        gaming: "Good gamers reuse strategies that work well.",
        music: "Musicians reuse melodies in new songs.",
        technology: "We can reuse old devices for learning.",
        films: "The hero reused a tool to save the day.",
        art: "Artists reuse paper and cloth to make new art."
      },
      memoryTip: "Re (again) + use — use it one more time!"
    },
    {
      word: "save",
      emoji: "💾",
      pronunciation: "/seɪv/",
      definition: "to keep something safe or not waste it",
      kazakh: "сақтау, үнемдеу",
      example: "We should save water every day.",
      personalizedExamples: {
        sports: "The goalkeeper made a great save in the final minute.",
        gaming: "Remember to save your game before the boss fight!",
        music: "Musicians save their best songs for the concert finale.",
        technology: "Always save your work on the computer.",
        films: "The hero saved the city from danger.",
        art: "Artists save their best ideas in a sketchbook."
      },
      memoryTip: "Save = keep safe. Save water, save money, save the planet."
    },
    {
      word: "pollute",
      emoji: "🌫️",
      pronunciation: "/pəˈluːt/",
      definition: "to make air, water, or land dirty and harmful",
      kazakh: "ластау",
      example: "Factories pollute the air with smoke.",
      personalizedExamples: {
        sports: "Fans should not pollute the stadium with trash.",
        gaming: "Bad players pollute the game with cheating.",
        music: "Loud noise at night pollutes the quiet environment.",
        technology: "Some websites pollute the internet with fake news.",
        films: "The villain tried to pollute the river in the movie.",
        art: "The artist showed how people pollute the ocean."
      },
      memoryTip: "Pollute = make dirty. The opposite of 'clean'."
    },
    {
      word: "waste",
      emoji: "🗑️",
      pronunciation: "/weɪst/",
      definition: "to use too much of something, or things we throw away",
      kazakh: "ысырап ету, қалдық",
      example: "Don't waste food — many people are hungry.",
      personalizedExamples: {
        sports: "Don't waste time — train every day to improve.",
        gaming: "Don't waste your coins on useless items in the game.",
        music: "Don't waste your talent — practice every day.",
        technology: "Don't waste battery — turn off unused apps.",
        films: "The film showed how people waste water every day.",
        art: "Don't waste paper — use both sides."
      },
      memoryTip: "Waste = use too much or throw away. Don't waste your time!"
    },
    {
      word: "protect",
      emoji: "🛡️",
      pronunciation: "/prəˈtekt/",
      definition: "to keep someone or something safe from harm",
      kazakh: "қорғау",
      example: "We must protect animals and their homes.",
      personalizedExamples: {
        sports: "Players should protect the football field from litter.",
        gaming: "A strong password helps protect your gaming account.",
        music: "We should protect parks where outdoor concerts are held.",
        technology: "A firewall helps protect a computer network.",
        films: "The hero protected the village from the dragon.",
        art: "Artists protect old paintings in museums."
      },
      memoryTip: "Protect = keep safe. Like a shield 🛡️."
    },
    {
      word: "reduce",
      emoji: "📉",
      pronunciation: "/rɪˈdjuːs/",
      definition: "to make something smaller or less",
      kazakh: "азайту",
      example: "We should reduce the amount of plastic we use.",
      personalizedExamples: {
        sports: "The coach helped reduce the team's mistakes.",
        gaming: "Reduce the volume if the game is too loud.",
        music: "Reduce the noise so others can study.",
        technology: "Reduce screen time to protect your eyes.",
        films: "The hero reduced the enemy's power.",
        art: "Reduce the details to make the drawing clearer."
      },
      memoryTip: "Reduce = make smaller. Reduce, reuse, recycle!"
    },
    {
      word: "energy",
      emoji: "⚡",
      pronunciation: "/ˈenədʒi/",
      definition: "the power from electricity, gas, sun, etc. that makes things work",
      kazakh: "энергия, қуат",
      example: "Solar energy comes from the sun.",
      personalizedExamples: {
        sports: "Athletes need lots of energy to play well.",
        gaming: "Your character needs energy to fight the boss.",
        music: "The band had amazing energy on stage.",
        technology: "Renewable energy helps power our devices.",
        films: "The film was full of action and energy.",
        art: "The painting was full of color and energy."
      },
      memoryTip: "Energy = power. Sun, food, and electricity give us energy."
    }
  ],
  unit2: [
    {
      word: "email",
      emoji: "📧",
      pronunciation: "/ˈiːmeɪl/",
      definition: "a way to send messages electronically over the internet",
      kazakh: "электрондық пошта",
      example: "I sent an email to my teacher about the homework.",
      personalizedExamples: {
        sports: "The coach sent an email about tomorrow's match.",
        gaming: "The game company sent me an email with a free gift.",
        music: "The band emailed fans about the new concert.",
        technology: "Email is one of the oldest internet tools.",
        films: "The detective found a clue in an old email.",
        art: "The artist emailed her new pictures to the gallery."
      },
      memoryTip: "E (electronic) + mail — like a letter, but on the internet."
    },
    {
      word: "instant messaging",
      emoji: "💬",
      pronunciation: "/ˈɪnstənt ˈmesɪdʒɪŋ/",
      definition: "sending messages in real time over the internet",
      kazakh: "лезде хабар алмасу",
      example: "We use instant messaging to chat with friends.",
      personalizedExamples: {
        sports: "The team uses instant messaging to plan practice.",
        gaming: "Gamers use instant messaging during matches.",
        music: "Fans use instant messaging to talk about new songs.",
        technology: "Instant messaging apps are very popular today.",
        films: "The characters talked through instant messaging in the film.",
        art: "Artists use instant messaging to share ideas."
      },
      memoryTip: "Instant = right now. Messaging = talking. Talk right now!"
    },
    {
      word: "file sharing",
      emoji: "📂",
      pronunciation: "/faɪl ˈʃeərɪŋ/",
      definition: "sending or sharing digital files with other people online",
      kazakh: "файл алмасу",
      example: "File sharing makes it easy to send photos to friends.",
      personalizedExamples: {
        sports: "The coach uses file sharing to send training videos.",
        gaming: "Gamers use file sharing to share mods and maps.",
        music: "Musicians use file sharing to send songs to producers.",
        technology: "File sharing helps people work on projects together.",
        films: "The film showed how file sharing can be dangerous.",
        art: "Artists use file sharing to send big artwork files."
      },
      memoryTip: "File = document. Sharing = giving to others. Share files online."
    },
    {
      word: "hacker",
      emoji: "👨‍💻",
      pronunciation: "/ˈhækər/",
      definition: "a person who breaks into computer systems, often to steal information",
      kazakh: "хакер",
      example: "The hacker tried to steal passwords from the website.",
      personalizedExamples: {
        sports: "A hacker tried to change the scores in the sports app.",
        gaming: "Hackers try to cheat in online games.",
        music: "A hacker stole the singer's new songs online.",
        technology: "A good hacker helps find problems in software.",
        films: "The hacker in the film saved the world.",
        art: "A hacker broke into the museum's computer system."
      },
      memoryTip: "Hack = break in. A hacker breaks into computers."
    },
    {
      word: "virus",
      emoji: "🦠",
      pronunciation: "/ˈvaɪrəs/",
      definition: "a harmful program that can damage a computer",
      kazakh: "вирус",
      example: "A virus can delete all your files.",
      personalizedExamples: {
        sports: "A computer virus stopped the team's training app.",
        gaming: "A virus destroyed my saved game!",
        music: "A virus deleted all my favorite songs.",
        technology: "Antivirus software protects your computer from a virus.",
        films: "The virus in the film attacked the whole city.",
        art: "The artist painted a virus to show how dangerous it is."
      },
      memoryTip: "Virus = sick program. Like a cold, but for computers."
    },
    {
      word: "password",
      emoji: "🔑",
      pronunciation: "/ˈpæswɜːrd/",
      definition: "a secret word or code that lets you use a computer or account",
      kazakh: "құпия сөз",
      example: "Never share your password with anyone.",
      personalizedExamples: {
        sports: "The team's password for the app is changed every week.",
        gaming: "Use a strong password for your gaming account.",
        music: "The fan club needs a password to join.",
        technology: "A good password has letters, numbers, and symbols.",
        films: "The hero guessed the password to open the secret door.",
        art: "The artist used a password to protect her online gallery."
      },
      memoryTip: "Pass (go) + word — the word that lets you pass in."
    },
    {
      word: "firewall",
      emoji: "🧱",
      pronunciation: "/ˈfaɪərwɔːl/",
      definition: "a security system that protects a computer network from danger",
      kazakh: "отқорғауыш, брандмауэр",
      example: "The school's firewall blocks dangerous websites.",
      personalizedExamples: {
        sports: "The team's firewall protects their training data.",
        gaming: "Turn on the firewall before playing online.",
        music: "The studio uses a firewall to protect new songs.",
        technology: "A firewall is like a security guard for a computer network.",
        films: "The firewall in the film stopped the hackers.",
        art: "The gallery's firewall protects digital art collections."
      },
      memoryTip: "Fire + wall — a wall that stops fire (danger) from entering."
    },
    {
      word: "cybercrime",
      emoji: "🕵️",
      pronunciation: "/ˈsaɪbərkraɪm/",
      definition: "criminal activities done using a computer or the internet",
      kazakh: "киберқылмыс",
      example: "Cybercrime is a growing problem around the world.",
      personalizedExamples: {
        sports: "Cybercrime can affect online sports betting sites.",
        gaming: "Cybercrime includes stealing gaming accounts.",
        music: "Cybercrime includes stealing songs from artists.",
        technology: "Police fight cybercrime every day.",
        films: "The film was about a cybercrime detective.",
        art: "Cybercrime can include stealing digital art."
      },
      memoryTip: "Cyber (computer) + crime (bad act) — bad acts on computers."
    },
    {
      word: "account",
      emoji: "👤",
      pronunciation: "/əˈkaʊnt/",
      definition: "a personal area on a website or app where you keep your information",
      kazakh: "аккаунт, тіркелгі",
      example: "I created a new account on the learning website.",
      personalizedExamples: {
        sports: "The athlete's account shows all her records.",
        gaming: "My gaming account has 100 levels!",
        music: "My music account has all my favorite playlists.",
        technology: "Every app needs an account to save your data.",
        films: "The character lost access to his account in the film.",
        art: "The artist's account shows all her new paintings."
      },
      memoryTip: "Account = your personal place online. Like a digital home."
    },
    {
      word: "download",
      emoji: "⬇️",
      pronunciation: "/ˈdaʊnloʊd/",
      definition: "to copy files from the internet to your computer or phone",
      kazakh: "жүктеп алу",
      example: "I will download the new song to my phone.",
      personalizedExamples: {
        sports: "Download the coach's training plan to your phone.",
        gaming: "Download the new game update before playing.",
        music: "Download the new album to listen offline.",
        technology: "Download only from safe websites.",
        films: "Download the film to watch on the plane.",
        art: "Download the artist's new wallpaper."
      },
      memoryTip: "Down (to your device) + load (bring) — bring files down to you."
    }
  ]
};

/* ---------- STATE ---------- */
const state = {
  interest: null,
  activity: null,
  style: null,
  currentUnit: null,
  currentWordIndex: 0,
  learnedWords: new Set(),
  strongWords: new Set(),
  weakWords: new Set(),
  quizScores: [],
  activitiesCompleted: 0,
  achievements: new Set(),
  review: { day1: false, day3: false, day7: false },
  currentQuiz: null,
  currentPractice: null,
  vocabbotWord: null
};

/* ---------- LOCAL STORAGE ---------- */
const storage = {
  save() {
    const data = {
      interest: state.interest,
      activity: state.activity,
      style: state.style,
      learnedWords: [...state.learnedWords],
      strongWords: [...state.strongWords],
      weakWords: [...state.weakWords],
      quizScores: state.quizScores,
      activitiesCompleted: state.activitiesCompleted,
      achievements: [...state.achievements],
      review: state.review
    };
    localStorage.setItem('aiVocabLab', JSON.stringify(data));
  },
  load() {
    const raw = localStorage.getItem('aiVocabLab');
    if (!raw) return;
    try {
      const data = JSON.parse(raw);
      state.interest = data.interest || null;
      state.activity = data.activity || null;
      state.style = data.style || null;
      state.learnedWords = new Set(data.learnedWords || []);
      state.strongWords = new Set(data.strongWords || []);
      state.weakWords = new Set(data.weakWords || []);
      state.quizScores = data.quizScores || [];
      state.activitiesCompleted = data.activitiesCompleted || 0;
      state.achievements = new Set(data.achievements || []);
      state.review = data.review || { day1: false, day3: false, day7: false };
    } catch (e) { console.warn('Could not load saved data'); }
  },
  reset() {
    localStorage.removeItem('aiVocabLab');
    state.interest = null;
    state.activity = null;
    state.style = null;
    state.learnedWords = new Set();
    state.strongWords = new Set();
    state.weakWords = new Set();
    state.quizScores = [];
    state.activitiesCompleted = 0;
    state.achievements = new Set();
    state.review = { day1: false, day3: false, day7: false };
  }
};

/* ---------- ACHIEVEMENTS DEFINITIONS ---------- */
const achievementsList = [
  { id: 'firstStep', icon: '🌱', title: 'First Step', desc: 'Learn your first word.' },
  { id: 'explorer', icon: '📚', title: 'Vocabulary Explorer', desc: 'Learn 10 words.' },
  { id: 'ecoExpert', icon: '🌍', title: 'Eco Expert', desc: 'Complete Unit 1.' },
  { id: 'cyberDefender', icon: '🛡️', title: 'Cyber Defender', desc: 'Complete Unit 2.' },
  { id: 'memoryMaster', icon: '🧠', title: 'Memory Master', desc: 'Score 90% or higher.' },
  { id: 'reviewHero', icon: '🔥', title: 'Review Hero', desc: 'Complete a Day 7 review.' }
];

/* ---------- SOUND EFFECTS (Web Audio API) ---------- */
let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) {
    try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
    catch (e) { return null; }
  }
  return audioCtx;
}
function playTone(freq, duration = 0.15, type = 'sine', volume = 0.1) {
  const ctx = getAudioCtx();
  if (!ctx) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(volume, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + duration);
}
const sfx = {
  click: () => playTone(600, 0.05, 'square', 0.05),
  success: () => {
    playTone(523, 0.1, 'sine', 0.12);
    setTimeout(() => playTone(659, 0.1, 'sine', 0.12), 80);
    setTimeout(() => playTone(784, 0.15, 'sine', 0.12), 160);
  },
  wrong: () => {
    playTone(200, 0.15, 'sawtooth', 0.1);
    setTimeout(() => playTone(150, 0.2, 'sawtooth', 0.1), 100);
  },
  flip: () => playTone(440, 0.08, 'triangle', 0.08),
  achievement: () => {
    [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => playTone(f, 0.15, 'sine', 0.12), i * 100));
  },
  nav: () => playTone(500, 0.04, 'square', 0.04)
};

/* ---------- NAVIGATION ---------- */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById(id);
  if (target) target.classList.add('active');
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const link = document.querySelector(`.nav-link[data-nav="${id}"]`);
  if (link) link.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Close mobile menu
  document.getElementById('navLinks').classList.remove('open');
  document.getElementById('navToggle').setAttribute('aria-expanded', 'false');
  // Refresh dynamic pages
  if (id === 'progress') renderProgress();
  if (id === 'review') renderReview();
  if (id === 'learn') {
    // If no unit selected, show units
    if (!state.currentUnit) {
      document.getElementById('flashcardArea').classList.add('hidden');
      document.querySelector('.units-grid').classList.remove('hidden');
    }
  }
}

document.querySelectorAll('[data-nav]').forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    sfx.nav();
    const target = el.dataset.nav;
    if (target === 'how') {
      showPage('home');
      setTimeout(() => {
        document.getElementById('how').scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    showPage(target);
  });
});

// Mobile menu
document.getElementById('navToggle').addEventListener('click', () => {
  const links = document.getElementById('navLinks');
  const open = links.classList.toggle('open');
  document.getElementById('navToggle').setAttribute('aria-expanded', open);
});

/* ---------- TOAST ---------- */
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2500);
}

/* ---------- CONFETTI ---------- */
function launchConfetti() {
  const canvas = document.getElementById('confetti');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const colors = ['#4f46e5', '#8b5cf6', '#ec4899', '#3b82f6', '#10b981', '#f59e0b'];
  const pieces = [];
  for (let i = 0; i < 80; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * 200,
      w: 6 + Math.random() * 6,
      h: 10 + Math.random() * 6,
      color: colors[Math.floor(Math.random() * colors.length)],
      vy: 2 + Math.random() * 3,
      vx: -2 + Math.random() * 4,
      rot: Math.random() * Math.PI,
      vr: -0.1 + Math.random() * 0.2
    });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      p.y += p.vy;
      p.x += p.vx;
      p.rot += p.vr;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
      ctx.restore();
    });
    frame++;
    if (frame < 180) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  draw();
}

/* ---------- PERSONALIZATION ---------- */
function setupPersonalize() {
  document.querySelectorAll('.interest-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      sfx.click();
      document.querySelectorAll('.interest-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      state.interest = btn.dataset.interest;
      setTimeout(() => {
        document.getElementById('pq1').classList.add('hidden');
        document.getElementById('pq2').classList.remove('hidden');
      }, 300);
    });
  });
  document.querySelectorAll('.activity-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      sfx.click();
      document.querySelectorAll('.activity-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      state.activity = btn.dataset.activity;
      setTimeout(() => {
        document.getElementById('pq2').classList.add('hidden');
        document.getElementById('pq3').classList.remove('hidden');
      }, 300);
    });
  });
  document.querySelectorAll('.style-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      sfx.click();
      document.querySelectorAll('.style-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      state.style = btn.dataset.style;
      setTimeout(() => finalizePersonalize(), 300);
    });
  });
  document.getElementById('restartPersonalize').addEventListener('click', () => {
    sfx.click();
    document.getElementById('pqResult').classList.add('hidden');
    document.getElementById('pq1').classList.remove('hidden');
    document.querySelectorAll('.interest-btn, .activity-btn, .style-btn').forEach(b => b.classList.remove('selected'));
  });
}
function finalizePersonalize() {
  const interestLabels = { sports: '⚽ Sports', gaming: '🎮 Gaming', music: '🎵 Music', films: '🎬 Films', technology: '💻 Technology', art: '🎨 Art' };
  const activityLabels = { quiz: '📝 Quiz', story: '📖 Short Story', dialogue: '💬 Dialogue', game: '🎲 Game', fill: '✏️ Fill in the Gaps' };
  const styleLabels = { visual: '👁️ Visual', reading: '📚 Reading', active: '🏃 Active' };
  const summary = document.getElementById('resultSummary');
  summary.innerHTML = `
    <div><b>🎯 Your interest:</b> ${interestLabels[state.interest]}</div>
    <div><b>🎮 Your activity:</b> ${activityLabels[state.activity]}</div>
    <div><b>🧠 Your style:</b> ${styleLabels[state.style]}</div>
  `;
  document.getElementById('pq3').classList.add('hidden');
  document.getElementById('pqResult').classList.remove('hidden');
  storage.save();
  sfx.success();
  showToast('Your learning path is ready! 🎉');
}

/* ---------- FLASHCARDS ---------- */
function startUnit(unit) {
  state.currentUnit = unit;
  state.currentWordIndex = 0;
  document.querySelector('.units-grid').classList.add('hidden');
  document.getElementById('flashcardArea').classList.remove('hidden');
  renderFlashcard();
  renderFlashcardDots();
}

function renderFlashcard() {
  const words = vocabulary[state.currentUnit];
  const word = words[state.currentWordIndex];
  document.getElementById('fcProgress').textContent = `Word ${state.currentWordIndex + 1} of ${words.length}`;
  document.getElementById('wordEmoji').textContent = word.emoji;
  document.getElementById('wordMain').textContent = word.word;
  document.getElementById('wordPron').textContent = word.pronunciation;
  document.getElementById('meaningText').textContent = word.definition;
  document.getElementById('kazakhText').textContent = word.kazakh;
  document.getElementById('exampleText').textContent = `"${word.example}"`;

  // Personalized example
  const personalBlock = document.getElementById('personalBlock');
  const personalText = document.getElementById('personalText');
  if (state.interest && word.personalizedExamples[state.interest]) {
    personalBlock.classList.remove('hidden');
    personalText.textContent = `"${word.personalizedExamples[state.interest]}"`;
  } else {
    personalBlock.classList.add('hidden');
  }

  // Reset flip
  document.getElementById('flashcardInner').classList.remove('flipped');
  // Mark learned
  state.learnedWords.add(word.word);
  storage.save();
  updateDots();
  checkAchievements();
}

function renderFlashcardDots() {
  const words = vocabulary[state.currentUnit];
  const dots = document.getElementById('fcDots');
  dots.innerHTML = '';
  words.forEach((w, i) => {
    const dot = document.createElement('div');
    dot.className = 'fc-dot' + (i === state.currentWordIndex ? ' active' : '') + (state.learnedWords.has(w.word) ? ' done' : '');
    dot.addEventListener('click', () => {
      sfx.click();
      state.currentWordIndex = i;
      renderFlashcard();
      updateDots();
    });
    dots.appendChild(dot);
  });
}

function updateDots() {
  const dots = document.querySelectorAll('#fcDots .fc-dot');
  const words = vocabulary[state.currentUnit];
  dots.forEach((d, i) => {
    d.classList.remove('active', 'done');
    if (i === state.currentWordIndex) d.classList.add('active');
    if (state.learnedWords.has(words[i].word)) d.classList.add('done');
  });
}

document.getElementById('showMeaningBtn').addEventListener('click', () => {
  sfx.flip();
  document.getElementById('flashcardInner').classList.add('flipped');
});
document.getElementById('nextWordBtn').addEventListener('click', () => {
  sfx.click();
  const words = vocabulary[state.currentUnit];
  if (state.currentWordIndex < words.length - 1) {
    state.currentWordIndex++;
    renderFlashcard();
    updateDots();
  } else {
    showToast(`🎉 You finished ${state.currentUnit === 'unit1' ? 'Unit 1' : 'Unit 2'}!`);
    sfx.success();
    launchConfetti();
    checkAchievements();
    document.getElementById('flashcardArea').classList.add('hidden');
    document.querySelector('.units-grid').classList.remove('hidden');
    state.currentUnit = null;
  }
});
document.getElementById('speakBtn').addEventListener('click', () => {
  const word = vocabulary[state.currentUnit][state.currentWordIndex];
  if ('speechSynthesis' in window) {
    const u = new SpeechSynthesisUtterance(word.word);
    u.lang = 'en-US';
    u.rate = 0.85;
    speechSynthesis.speak(u);
  } else {
    sfx.flip();
    showToast('🔊 Speech not supported in this browser');
  }
});
document.getElementById('backToUnits').addEventListener('click', () => {
  sfx.click();
  document.getElementById('flashcardArea').classList.add('hidden');
  document.querySelector('.units-grid').classList.remove('hidden');
  state.currentUnit = null;
});
document.querySelectorAll('.unit-card').forEach(card => {
  card.addEventListener('click', () => {
    sfx.click();
    startUnit(card.dataset.unit);
  });
});

/* ---------- PRACTICE ---------- */
let practiceState = { mode: null, words: [], current: 0, score: 0, total: 0, selected: [] };

function setupPractice() {
  document.querySelectorAll('.practice-card').forEach(card => {
    card.addEventListener('click', () => {
      sfx.click();
      practiceState.mode = card.dataset.mode;
      document.getElementById('practiceMenu').classList.add('hidden');
      document.getElementById('practiceSetup').classList.remove('hidden');
    });
  });
  document.querySelectorAll('[data-practice-unit]').forEach(btn => {
    btn.addEventListener('click', () => {
      sfx.click();
      const unit = btn.dataset.practiceUnit;
      let words = [];
      if (unit === 'unit1') words = [...vocabulary.unit1];
      else if (unit === 'unit2') words = [...vocabulary.unit2];
      else words = [...vocabulary.unit1, ...vocabulary.unit2];
      words = shuffle(words).slice(0, Math.min(8, words.length));
      practiceState.words = words;
      practiceState.current = 0;
      practiceState.score = 0;
      practiceState.total = words.length;
      document.getElementById('practiceSetup').classList.add('hidden');
      document.getElementById('practiceArea').classList.remove('hidden');
      document.getElementById('practiceTotal').textContent = practiceState.total;
      renderPractice();
    });
  });
  document.getElementById('backPracticeMenu').addEventListener('click', () => {
    sfx.click();
    document.getElementById('practiceSetup').classList.add('hidden');
    document.getElementById('practiceMenu').classList.remove('hidden');
  });
  document.getElementById('backPracticeSetup').addEventListener('click', () => {
    sfx.click();
    document.getElementById('practiceArea').classList.add('hidden');
    document.getElementById('practiceSetup').classList.remove('hidden');
  });
  document.getElementById('nextPracticeBtn').addEventListener('click', () => {
    sfx.click();
    practiceState.current++;
    if (practiceState.current >= practiceState.total) {
      finishPractice();
    } else {
      renderPractice();
    }
  });
}

function renderPractice() {
  document.getElementById('practiceScore').textContent = practiceState.score;
  document.getElementById('practiceFeedback').classList.remove('show');
  document.getElementById('nextPracticeBtn').classList.add('hidden');
  const word = practiceState.words[practiceState.current];
  const content = document.getElementById('practiceContent');
  content.innerHTML = '';

  if (practiceState.mode === 'match') renderMatch(content);
  else if (practiceState.mode === 'gap') renderGap(content, word);
  else if (practiceState.mode === 'meaning') renderMeaning(content, word);
  else if (practiceState.mode === 'context') renderContext(content, word);
  else if (practiceState.mode === 'tf') renderTF(content, word);
}

/* Match */
function renderMatch(container) {
  const words = practiceState.words;
  const defs = shuffle([...words]).map(w => ({ word: w.word, def: w.definition }));
  const wordList = shuffle([...words]).map(w => w.word);

  let selectedWord = null, selectedDef = null;
  let matched = 0;
  const total = words.length;

  container.innerHTML = `
    <p style="text-align:center;margin-bottom:16px;color:var(--text-light)">Match each word with its meaning.</p>
    <div class="match-grid">
      <div class="match-col" id="matchWords"></div>
      <div class="match-col" id="matchDefs"></div>
    </div>
  `;
  const wc = container.querySelector('#matchWords');
  const dc = container.querySelector('#matchDefs');
  wordList.forEach(w => {
    const b = document.createElement('button');
    b.className = 'match-item';
    b.textContent = w;
    b.dataset.word = w;
    b.addEventListener('click', () => {
      sfx.click();
      wc.querySelectorAll('.match-item').forEach(x => x.classList.remove('selected'));
      b.classList.add('selected');
      selectedWord = w;
      tryMatch();
    });
    wc.appendChild(b);
  });
  defs.forEach(d => {
    const b = document.createElement('button');
    b.className = 'match-item';
    b.textContent = d.def;
    b.dataset.word = d.word;
    b.addEventListener('click', () => {
      sfx.click();
      dc.querySelectorAll('.match-item').forEach(x => x.classList.remove('selected'));
      b.classList.add('selected');
      selectedDef = d.word;
      tryMatch();
    });
    dc.appendChild(b);
  });

  function tryMatch() {
    if (selectedWord && selectedDef) {
      if (selectedWord === selectedDef) {
        sfx.success();
        wc.querySelector(`[data-word="${selectedWord}"]`).classList.add('correct');
        dc.querySelector(`[data-word="${selectedDef}"]`).classList.add('correct');
        matched++;
        practiceState.score++;
        document.getElementById('practiceScore').textContent = practiceState.score;
        if (matched === total) {
          setTimeout(() => {
            showFeedback(true, '🎉 All matched! Great job!');
            document.getElementById('nextPracticeBtn').classList.remove('hidden');
          }, 400);
        }
      } else {
        sfx.wrong();
        const wEl = wc.querySelector(`[data-word="${selectedWord}"]`);
        const dEl = dc.querySelector(`[data-word="${selectedDef}"]`);
        wEl.classList.add('wrong');
        dEl.classList.add('wrong');
        setTimeout(() => {
          wEl.classList.remove('wrong', 'selected');
          dEl.classList.remove('wrong', 'selected');
        }, 600);
        showFeedback(false, `Not a match. Try again!`);
      }
      selectedWord = null;
      selectedDef = null;
    }
  }
}

/* Gap */
function renderGap(container, word) {
  const sentence = state.interest && word.personalizedExamples[state.interest]
    ? word.personalizedExamples[state.interest]
    : word.example;
  const blanked = sentence.replace(new RegExp(word.word, 'i'), '_____');
  const options = shuffle([word.word, ...getDistractors(word, 3)]);

  container.innerHTML = `
    <div class="gap-sentence">"${blanked}"</div>
    <div class="options-grid" id="gapOptions"></div>
  `;
  const opts = container.querySelector('#gapOptions');
  options.forEach(opt => {
    const b = document.createElement('button');
    b.className = 'option-btn';
    b.textContent = opt;
    b.addEventListener('click', () => {
      opts.querySelectorAll('.option-btn').forEach(x => x.classList.add('disabled'));
      if (opt === word.word) {
        b.classList.add('correct');
        sfx.success();
        practiceState.score++;
        state.strongWords.add(word.word);
        showFeedback(true, `Correct! The word is "${word.word}".`);
      } else {
        b.classList.add('wrong');
        opts.querySelector(`[data-word="${word.word}"], .option-btn`)
        // highlight correct
        opts.querySelectorAll('.option-btn').forEach(x => {
          if (x.textContent === word.word) x.classList.add('correct');
        });
        sfx.wrong();
        state.weakWords.add(word.word);
        showFeedback(false, `Not quite. The correct answer is "${word.word}".`);
      }
      document.getElementById('practiceScore').textContent = practiceState.score;
      document.getElementById('nextPracticeBtn').classList.remove('hidden');
      storage.save();
    });
    opts.appendChild(b);
  });
}

/* Meaning */
function renderMeaning(container, word) {
  const correctDef = word.definition;
  const otherDefs = getDistractorDefs(word, 3);
  const options = shuffle([correctDef, ...otherDefs]);

  container.innerHTML = `
    <div class="gap-sentence"><b style="font-size:28px;color:var(--primary)">${word.emoji} ${word.word}</b><br><small style="color:var(--text-light)">${word.pronunciation}</small></div>
    <div class="options-grid" id="meaningOptions"></div>
  `;
  const opts = container.querySelector('#meaningOptions');
  options.forEach(opt => {
    const b = document.createElement('button');
    b.className = 'option-btn';
    b.textContent = opt;
    b.style.textAlign = 'left';
    b.style.fontSize = '14px';
    b.addEventListener('click', () => {
      opts.querySelectorAll('.option-btn').forEach(x => x.classList.add('disabled'));
      if (opt === correctDef) {
        b.classList.add('correct');
        sfx.success();
        practiceState.score++;
        state.strongWords.add(word.word);
        showFeedback(true, 'Correct! Great job.');
      } else {
        b.classList.add('wrong');
        opts.querySelectorAll('.option-btn').forEach(x => {
          if (x.textContent === correctDef) x.classList.add('correct');
        });
        sfx.wrong();
        state.weakWords.add(word.word);
        showFeedback(false, `Not quite. The correct meaning is: "${correctDef}"`);
      }
      document.getElementById('practiceScore').textContent = practiceState.score;
      document.getElementById('nextPracticeBtn').classList.remove('hidden');
      storage.save();
    });
    opts.appendChild(b);
  });
}

/* Context */
function renderContext(container, word) {
  const situation = getContextSituation(word);
  const correct = word.word;
  const options = shuffle([correct, ...getDistractors(word, 3)]);

  container.innerHTML = `
    <div class="gap-sentence">💡 ${situation}</div>
    <div class="options-grid" id="ctxOptions"></div>
  `;
  const opts = container.querySelector('#ctxOptions');
  options.forEach(opt => {
    const b = document.createElement('button');
    b.className = 'option-btn';
    b.textContent = opt;
    b.addEventListener('click', () => {
      opts.querySelectorAll('.option-btn').forEach(x => x.classList.add('disabled'));
      if (opt === correct) {
        b.classList.add('correct');
        sfx.success();
        practiceState.score++;
        state.strongWords.add(word.word);
        showFeedback(true, `Correct! "${word.word}" fits perfectly.`);
      } else {
        b.classList.add('wrong');
        opts.querySelectorAll('.option-btn').forEach(x => {
          if (x.textContent === correct) x.classList.add('correct');
        });
        sfx.wrong();
        state.weakWords.add(word.word);
        showFeedback(false, `Not quite. The correct answer is "${correct}".`);
      }
      document.getElementById('practiceScore').textContent = practiceState.score;
      document.getElementById('nextPracticeBtn').classList.remove('hidden');
      storage.save();
    });
    opts.appendChild(b);
  });
}

function getContextSituation(word) {
  const interest = state.interest || 'technology';
  if (word.personalizedExamples[interest]) {
    const ex = word.personalizedExamples[interest];
    return `Which word fits? "${ex.replace(new RegExp(word.word, 'i'), '______')}"`;
  }
  return `Which word fits? "${word.example.replace(new RegExp(word.word, 'i'), '______')}"`;
}

/* True/False */
function renderTF(container, word) {
  const isTrue = Math.random() > 0.5;
  let sentence;
  if (isTrue) {
    sentence = state.interest && word.personalizedExamples[state.interest]
      ? word.personalizedExamples[state.interest]
      : word.example;
  } else {
    // make a false sentence
    const wrongWord = getDistractors(word, 1)[0];
    const base = state.interest && word.personalizedExamples[state.interest]
      ? word.personalizedExamples[state.interest]
      : word.example;
    sentence = base.replace(new RegExp(word.word, 'i'), wrongWord);
  }

  container.innerHTML = `
    <div class="gap-sentence">🤔 Is this sentence correct?<br><br><i>"${sentence}"</i></div>
    <div class="options-grid" id="tfOptions">
      <button class="option-btn" data-val="true" style="padding:20px;font-size:18px">✅ TRUE</button>
      <button class="option-btn" data-val="false" style="padding:20px;font-size:18px">❌ FALSE</button>
    </div>
  `;
  container.querySelectorAll('#tfOptions .option-btn').forEach(b => {
    b.addEventListener('click', () => {
      container.querySelectorAll('#tfOptions .option-btn').forEach(x => x.classList.add('disabled'));
      const userVal = b.dataset.val === 'true';
      if (userVal === isTrue) {
        b.classList.add('correct');
        sfx.success();
        practiceState.score++;
        state.strongWords.add(word.word);
        showFeedback(true, `Correct! The sentence is ${isTrue ? 'true' : 'false'}.`);
      } else {
        b.classList.add('wrong');
        sfx.wrong();
        state.weakWords.add(word.word);
        showFeedback(false, `Not quite. The sentence is actually ${isTrue ? 'true' : 'false'}.`);
      }
      document.getElementById('practiceScore').textContent = practiceState.score;
      document.getElementById('nextPracticeBtn').classList.remove('hidden');
      storage.save();
    });
  });
}

function showFeedback(correct, msg) {
  const f = document.getElementById('practiceFeedback');
  f.textContent = msg;
  f.className = 'practice-feedback show ' + (correct ? 'correct' : 'wrong');
}

function finishPractice() {
  state.activitiesCompleted++;
  storage.save();
  const pct = Math.round((practiceState.score / practiceState.total) * 100);
  const content = document.getElementById('practiceContent');
  content.innerHTML = `
    <div style="text-align:center;padding:20px">
      <div style="font-size:64px;margin-bottom:10px">${pct >= 70 ? '🏆' : pct >= 50 ? '👍' : '💪'}</div>
      <h2>Practice Complete!</h2>
      <p style="font-size:22px;margin:14px 0;color:var(--primary);font-weight:700">${practiceState.score} / ${practiceState.total} (${pct}%)</p>
      <p style="color:var(--text-light);margin-bottom:20px">${pct >= 70 ? 'Excellent work!' : pct >= 50 ? 'Good job! Keep practicing.' : 'Keep going! Review the words and try again.'}</p>
      <button class="btn btn-primary" onclick="showPage('practice');document.getElementById('practiceMenu').classList.remove('hidden');document.getElementById('practiceArea').classList.add('hidden')">Try Another Mode</button>
    </div>
  `;
  document.getElementById('practiceFeedback').classList.remove('show');
  document.getElementById('nextPracticeBtn').classList.add('hidden');
  if (pct >= 70) { sfx.success(); launchConfetti(); }
  checkAchievements();
}

/* ---------- QUIZ ---------- */
let quizState = { unit: null, questions: [], current: 0, score: 0, mistakes: [] };

function setupQuiz() {
  document.querySelectorAll('[data-quiz-unit]').forEach(btn => {
    btn.addEventListener('click', () => {
      sfx.click();
      startQuiz(btn.dataset.quizUnit);
    });
  });
  document.getElementById('quizNextBtn').addEventListener('click', () => {
    sfx.click();
    quizState.current++;
    if (quizState.current >= quizState.questions.length) {
      finishQuiz();
    } else {
      renderQuizQuestion();
    }
  });
  document.getElementById('tryAgainBtn').addEventListener('click', () => {
    sfx.click();
    document.getElementById('quizResult').classList.add('hidden');
    document.getElementById('quizSetup').classList.remove('hidden');
  });
  document.getElementById('reviewMistakesBtn').addEventListener('click', () => {
    sfx.click();
    if (quizState.mistakes.length === 0) {
      showToast('No mistakes to review! 🎉');
      return;
    }
    // Start a new quiz with only mistakes
    const words = quizState.mistakes.map(w => findWord(w)).filter(Boolean);
    quizState.questions = generateQuizQuestions(words, Math.min(10, words.length * 2));
    quizState.current = 0;
    quizState.score = 0;
    quizState.mistakes = [];
    document.getElementById('quizResult').classList.add('hidden');
    document.getElementById('quizArea').classList.remove('hidden');
    renderQuizQuestion();
  });
}

function startQuiz(unit) {
  let words = [];
  if (unit === 'unit1') words = [...vocabulary.unit1];
  else if (unit === 'unit2') words = [...vocabulary.unit2];
  else words = [...vocabulary.unit1, ...vocabulary.unit2];
  words = shuffle(words);
  quizState.unit = unit;
  quizState.questions = generateQuizQuestions(words, 10);
  quizState.current = 0;
  quizState.score = 0;
  quizState.mistakes = [];
  document.getElementById('quizSetup').classList.add('hidden');
  document.getElementById('quizArea').classList.remove('hidden');
  renderQuizQuestion();
}

function generateQuizQuestions(words, count) {
  const questions = [];
  const types = ['mc', 'meaning', 'gap', 'context', 'tf'];
  const shuffled = shuffle([...words]);
  for (let i = 0; i < Math.min(count, shuffled.length); i++) {
    const w = shuffled[i];
    const type = types[i % types.length];
    questions.push(buildQuestion(w, type));
  }
  return shuffle(questions);
}

function buildQuestion(word, type) {
  if (type === 'mc') {
    const options = shuffle([word.word, ...getDistractors(word, 3)]);
    return {
      type: 'mc',
      word: word,
      question: `Which word means: "${word.definition}"?`,
      options,
      answer: word.word
    };
  } else if (type === 'meaning') {
    const options = shuffle([word.definition, ...getDistractorDefs(word, 3)]);
    return {
      type: 'meaning',
      word: word,
      question: `What does "${word.word}" mean?`,
      options,
      answer: word.definition
    };
  } else if (type === 'gap') {
    const sentence = state.interest && word.personalizedExamples[state.interest]
      ? word.personalizedExamples[state.interest]
      : word.example;
    const blanked = sentence.replace(new RegExp(word.word, 'i'), '_____');
    const options = shuffle([word.word, ...getDistractors(word, 3)]);
    return {
      type: 'gap',
      word: word,
      question: `Fill in the blank: "${blanked}"`,
      options,
      answer: word.word
    };
  } else if (type === 'context') {
    const situation = getContextSituation(word);
    const options = shuffle([word.word, ...getDistractors(word, 3)]);
    return {
      type: 'context',
      word: word,
      question: situation,
      options,
      answer: word.word
    };
  } else {
    const isTrue = Math.random() > 0.5;
    let sentence;
    if (isTrue) {
      sentence = state.interest && word.personalizedExamples[state.interest]
        ? word.personalizedExamples[state.interest]
        : word.example;
    } else {
      const wrongWord = getDistractors(word, 1)[0];
      const base = state.interest && word.personalizedExamples[state.interest]
        ? word.personalizedExamples[state.interest]
        : word.example;
      sentence = base.replace(new RegExp(word.word, 'i'), wrongWord);
    }
    return {
      type: 'tf',
      word: word,
      question: `Is this sentence correct? "${sentence}"`,
      options: ['TRUE', 'FALSE'],
      answer: isTrue ? 'TRUE' : 'FALSE'
    };
  }
}

function renderQuizQuestion() {
  const q = quizState.questions[quizState.current];
  document.getElementById('qNum').textContent = quizState.current + 1;
  document.getElementById('qProgress').style.width = `${((quizState.current) / quizState.questions.length) * 100}%`;
  document.getElementById('quizQuestion').textContent = q.question;
  document.getElementById('quizFeedback').classList.add('hidden');
  document.getElementById('quizNextBtn').classList.add('hidden');

  const opts = document.getElementById('quizOptions');
  opts.innerHTML = '';
  q.options.forEach(opt => {
    const b = document.createElement('button');
    b.className = 'option-btn';
    b.textContent = opt;
    if (q.type === 'meaning') {
      b.style.textAlign = 'left';
      b.style.fontSize = '14px';
    }
    b.addEventListener('click', () => {
      opts.querySelectorAll('.option-btn').forEach(x => x.classList.add('disabled'));
      const correct = opt === q.answer;
      if (correct) {
        b.classList.add('correct');
        sfx.success();
        quizState.score++;
        state.strongWords.add(q.word.word);
        state.weakWords.delete(q.word.word);
        showQuizFeedback(true, `Correct! Great job.`);
      } else {
        b.classList.add('wrong');
        opts.querySelectorAll('.option-btn').forEach(x => {
          if (x.textContent === q.answer) x.classList.add('correct');
        });
        sfx.wrong();
        state.weakWords.add(q.word.word);
        state.strongWords.delete(q.word.word);
        quizState.mistakes.push(q.word.word);
        showQuizFeedback(false, `Not quite. The correct answer is "${q.answer}".`);
      }
      storage.save();
      document.getElementById('quizNextBtn').classList.remove('hidden');
    });
    opts.appendChild(b);
  });
}

function showQuizFeedback(correct, msg) {
  const f = document.getElementById('quizFeedback');
  f.textContent = msg;
  f.className = 'quiz-feedback show ' + (correct ? 'correct' : 'wrong');
}

function finishQuiz() {
  const total = quizState.questions.length;
  const score = quizState.score;
  const pct = Math.round((score / total) * 100);
  state.quizScores.push({ score, total, pct, date: Date.now() });
  state.activitiesCompleted++;
  storage.save();

  document.getElementById('quizArea').classList.add('hidden');
  document.getElementById('quizResult').classList.remove('hidden');
  document.getElementById('resultScore').textContent = `${score} / ${total}`;
  document.getElementById('resultPercent').textContent = `${pct}%`;
  document.getElementById('qProgress').style.width = '100%';

  let msg, emoji;
  if (pct >= 90) { msg = 'Excellent! You remember these words very well.'; emoji = '🏆'; }
  else if (pct >= 70) { msg = 'Great work! Review a few words and try again.'; emoji = '🌟'; }
  else if (pct >= 50) { msg = 'Good start. Practice the difficult words again.'; emoji = '👍'; }
  else { msg = 'Keep going! Review the vocabulary cards and try again.'; emoji = '💪'; }
  document.getElementById('resultMessage').textContent = msg;
  document.getElementById('resultEmoji').textContent = emoji;

  if (pct >= 70) { sfx.success(); launchConfetti(); }
  else sfx.click();
  checkAchievements();
}

/* ---------- PROGRESS ---------- */
function renderProgress() {
  const totalWords = vocabulary.unit1.length + vocabulary.unit2.length;
  const learned = state.learnedWords.size;
  document.getElementById('psWords').textContent = `${learned} / ${totalWords}`;

  const avg = state.quizScores.length > 0
    ? Math.round(state.quizScores.reduce((a, s) => a + s.pct, 0) / state.quizScores.length)
    : 0;
  document.getElementById('psAccuracy').textContent = `${avg}%`;
  document.getElementById('psActivities').textContent = state.activitiesCompleted;
  document.getElementById('psReview').textContent = state.weakWords.size;

  // Unit progress
  const u1learned = vocabulary.unit1.filter(w => state.learnedWords.has(w.word)).length;
  const u2learned = vocabulary.unit2.filter(w => state.learnedWords.has(w.word)).length;
  const u1pct = Math.round((u1learned / vocabulary.unit1.length) * 100);
  const u2pct = Math.round((u2learned / vocabulary.unit2.length) * 100);
  const overallPct = Math.round((learned / totalWords) * 100);
  document.getElementById('pbUnit1').style.width = u1pct + '%';
  document.getElementById('pbUnit1Text').textContent = u1pct + '%';
  document.getElementById('pbUnit2').style.width = u2pct + '%';
  document.getElementById('pbUnit2Text').textContent = u2pct + '%';
  document.getElementById('pbOverall').style.width = overallPct + '%';
  document.getElementById('pbOverallText').textContent = overallPct + '%';

  // Chart
  renderChart();

  // Strong / Weak words
  const strong = document.getElementById('strongWords');
  const weak = document.getElementById('weakWords');
  if (state.strongWords.size === 0) {
    strong.innerHTML = '<p class="empty">Answer quiz questions correctly to build your strong words list.</p>';
  } else {
    strong.innerHTML = [...state.strongWords].map(w => `<span class="wl-tag">${w}</span>`).join('');
  }
  if (state.weakWords.size === 0) {
    weak.innerHTML = '<p class="empty">No words to review yet. Great job!</p>';
    document.getElementById('practiceWeakBtn').classList.add('hidden');
  } else {
    weak.innerHTML = [...state.weakWords].map(w => `<span class="wl-tag weak">${w}</span>`).join('');
    document.getElementById('practiceWeakBtn').classList.remove('hidden');
  }

  // Achievements
  renderAchievements();
}

function renderChart() {
  const chart = document.getElementById('chart');
  const empty = document.getElementById('chartEmpty');
  chart.innerHTML = '';
  if (state.quizScores.length === 0) {
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');
  const recent = state.quizScores.slice(-10);
  recent.forEach((s, i) => {
    const bar = document.createElement('div');
    bar.className = 'chart-bar';
    bar.style.height = '0%';
    bar.dataset.score = s.pct + '%';
    bar.title = `Quiz ${i + 1}: ${s.score}/${s.total} (${s.pct}%)`;
    chart.appendChild(bar);
    setTimeout(() => { bar.style.height = s.pct + '%'; }, i * 80);
  });
}

function renderAchievements() {
  const grid = document.getElementById('achievementsGrid');
  grid.innerHTML = '';
  achievementsList.forEach(a => {
    const unlocked = state.achievements.has(a.id);
    const card = document.createElement('div');
    card.className = 'ach-card ' + (unlocked ? 'unlocked' : 'locked');
    card.innerHTML = `
      <div class="ach-icon">${a.icon}</div>
      <div class="ach-title">${a.title}</div>
      <div class="ach-desc">${a.desc}</div>
    `;
    grid.appendChild(card);
  });
}

function checkAchievements() {
  let newAch = false;
  // First Step
  if (state.learnedWords.size >= 1 && !state.achievements.has('firstStep')) {
    state.achievements.add('firstStep'); newAch = true;
    unlockToast('🌱 First Step');
  }
  // Explorer
  if (state.learnedWords.size >= 10 && !state.achievements.has('explorer')) {
    state.achievements.add('explorer'); newAch = true;
    unlockToast('📚 Vocabulary Explorer');
  }
  // Eco Expert
  const u1done = vocabulary.unit1.every(w => state.learnedWords.has(w.word));
  if (u1done && !state.achievements.has('ecoExpert')) {
    state.achievements.add('ecoExpert'); newAch = true;
    unlockToast('🌍 Eco Expert');
  }
  // Cyber Defender
  const u2done = vocabulary.unit2.every(w => state.learnedWords.has(w.word));
  if (u2done && !state.achievements.has('cyberDefender')) {
    state.achievements.add('cyberDefender'); newAch = true;
    unlockToast('🛡️ Cyber Defender');
  }
  // Memory Master
  if (state.quizScores.some(s => s.pct >= 90) && !state.achievements.has('memoryMaster')) {
    state.achievements.add('memoryMaster'); newAch = true;
    unlockToast('🧠 Memory Master');
  }
  // Review Hero
  if (state.review.day7 && !state.achievements.has('reviewHero')) {
    state.achievements.add('reviewHero'); newAch = true;
    unlockToast('🔥 Review Hero');
  }
  if (newAch) storage.save();
}

function unlockToast(name) {
  sfx.achievement();
  showToast(`🏆 Achievement unlocked: ${name}`);
}

/* ---------- REVIEW ---------- */
function renderReview() {
  const list = document.getElementById('reviewWordsList');
  if (state.weakWords.size === 0) {
    list.innerHTML = '<p class="empty">No words to review yet. Great job!</p>';
    document.getElementById('practiceReviewBtn').classList.add('hidden');
  } else {
    list.innerHTML = [...state.weakWords].map(w => `<span class="wl-tag weak">${w}</span>`).join('');
    document.getElementById('practiceReviewBtn').classList.remove('hidden');
  }

  // Timeline
  ['day1', 'day3', 'day7'].forEach(d => {
    const el = document.getElementById('rt' + d.charAt(0).toUpperCase() + d.slice(1));
    const cb = document.getElementById('rc' + d.charAt(0).toUpperCase() + d.slice(1));
    if (state.review[d]) {
      el.classList.add('done');
      cb.checked = true;
    } else {
      el.classList.remove('done');
      cb.checked = false;
    }
  });
}

document.querySelectorAll('.rc-item input').forEach(cb => {
  cb.addEventListener('change', () => {
    sfx.click();
    const day = cb.id.replace('rc', '').toLowerCase();
    state.review[day] = cb.checked;
    storage.save();
    renderReview();
    checkAchievements();
    if (cb.checked) showToast(`✅ ${day.toUpperCase()} review completed!`);
  });
});

document.getElementById('practiceReviewBtn').addEventListener('click', () => {
  sfx.click();
  const words = [...state.weakWords].map(w => findWord(w)).filter(Boolean);
  if (words.length === 0) return;
  practiceState.mode = 'gap';
  practiceState.words = shuffle(words);
  practiceState.current = 0;
  practiceState.score = 0;
  practiceState.total = words.length;
  showPage('practice');
  document.getElementById('practiceMenu').classList.add('hidden');
  document.getElementById('practiceSetup').classList.add('hidden');
  document.getElementById('practiceArea').classList.remove('hidden');
  document.getElementById('practiceTotal').textContent = practiceState.total;
  renderPractice();
});

document.getElementById('practiceWeakBtn').addEventListener('click', () => {
  document.getElementById('practiceReviewBtn').click();
});

/* ---------- HELPERS ---------- */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getDistractors(word, count) {
  const all = [...vocabulary.unit1, ...vocabulary.unit2].filter(w => w.word !== word.word);
  return shuffle(all).slice(0, count).map(w => w.word);
}

function getDistractorDefs(word, count) {
  const all = [...vocabulary.unit1, ...vocabulary.unit2].filter(w => w.word !== word.word);
  return shuffle(all).slice(0, count).map(w => w.definition);
}

function findWord(wordStr) {
  const all = [...vocabulary.unit1, ...vocabulary.unit2];
  return all.find(w => w.word === wordStr);
}

/* ---------- VOCABBOT ---------- */
function setupVocabBot() {
  const toggle = document.getElementById('vocabbotToggle');
  const bot = document.getElementById('vocabbot');
  const close = document.getElementById('vocabbotClose');
  const select = document.getElementById('vbWordSelect');

  // Populate word list
  const all = [...vocabulary.unit1, ...vocabulary.unit2];
  all.forEach(w => {
    const opt = document.createElement('option');
    opt.value = w.word;
    opt.textContent = w.word;
    select.appendChild(opt);
  });
  state.vocabbotWord = all[0].word;

  toggle.addEventListener('click', () => {
    sfx.click();
    bot.classList.toggle('open');
  });
  close.addEventListener('click', () => {
    sfx.click();
    bot.classList.remove('open');
  });
  select.addEventListener('change', () => {
    sfx.click();
    state.vocabbotWord = select.value;
  });

  document.querySelectorAll('[data-vb]').forEach(btn => {
    btn.addEventListener('click', () => {
      sfx.click();
      const action = btn.dataset.vb;
      const word = all.find(w => w.word === state.vocabbotWord);
      if (!word) return;
      addUserMsg(btn.textContent);
      setTimeout(() => {
        const response = generateBotResponse(word, action);
        addBotMsg(response);
      }, 400);
    });
  });
}

function addUserMsg(text) {
  const body = document.getElementById('vbBody');
  const div = document.createElement('div');
  div.className = 'vb-msg user';
  div.textContent = text;
  body.appendChild(div);
  body.scrollTop = body.scrollHeight;
}

function addBotMsg(text) {
  const body = document.getElementById('vbBody');
  const div = document.createElement('div');
  div.className = 'vb-msg bot';
  div.textContent = text;
  body.appendChild(div);
  body.scrollTop = body.scrollHeight;
}

function generateBotResponse(word, action) {
  const interest = state.interest || 'technology';
  if (action === 'example') {
    const ex = word.personalizedExamples[interest] || word.example;
    return `Here's an example for you: "${ex}"`;
  } else if (action === 'explain') {
    return `"${word.word}" means: ${word.definition} In Kazakh: ${word.kazakh}`;
  } else if (action === 'challenge') {
    const sentence = (word.personalizedExamples[interest] || word.example).replace(new RegExp(word.word, 'i'), '_____');
    return `Challenge! Fill in the blank: "${sentence}" What's the word? 🤔`;
  } else if (action === 'remember') {
    return `💡 Memory tip: ${word.memoryTip} Try to use "${word.word}" in your own sentence today!`;
  }
  return 'Hmm, I am not sure. Try another question!';
}

/* ---------- FEEDBACK ---------- */
document.getElementById('feedbackForm').addEventListener('submit', (e) => {
  e.preventDefault();
  sfx.success();
  const data = {};
  ['q1', 'q2', 'q3', 'q4'].forEach(q => {
    const checked = document.querySelector(`input[name="${q}"]:checked`);
    if (checked) data[q] = checked.value;
  });
  const existing = JSON.parse(localStorage.getItem('aiVocabLabFeedback') || '[]');
  existing.push({ ...data, date: Date.now() });
  localStorage.setItem('aiVocabLabFeedback', JSON.stringify(existing));
  document.getElementById('feedbackForm').classList.add('hidden');
  document.getElementById('feedbackThanks').classList.remove('hidden');
  showToast('Thank you for your feedback! 🙏');
});

/* ---------- RESET ---------- */
document.getElementById('resetProgressBtn').addEventListener('click', () => {
  if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
    storage.reset();
    showToast('Progress reset.');
    renderProgress();
    renderReview();
  }
});

/* ---------- INIT ---------- */
function init() {
  storage.load();
  setupPersonalize();
  setupPractice();
  setupQuiz();
  setupVocabBot();
  // If user already personalized, show summary on personalize page
  if (state.interest) {
    // They've done it before — still let them redo
  }
  renderProgress();
  renderReview();
  // Unlock first achievement if already learned words
  checkAchievements();
}

init();

// Handle resize for confetti canvas
window.addEventListener('resize', () => {
  const canvas = document.getElementById('confetti');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});