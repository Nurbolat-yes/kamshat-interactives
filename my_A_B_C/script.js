/* =========================================================
   MY ABC & PHONICS — Game Engine
   Vanilla ES6+ • localStorage persistence • Web Speech API
   ========================================================= */

// ============ CURRICULUM DATA ============
// Each zone: id, title, icon, gradient, words [{w, pic, sound?}]
const ZONES = [
  { id: 'abc', title: 'ABC Alphabet', icon: '🔤', gradient: 'linear-gradient(135deg,#ff6fb5,#f472b6)',
    words: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(l => ({ w: l, pic: l })) },
  { id: 'l1', title: 'CVC: a, b, c', icon: '🐱', gradient: 'linear-gradient(135deg,#fb923c,#f97316)',
    words: [{w:'cat',pic:'🐱'},{w:'bat',pic:'🦇'},{w:'cab',pic:'🚕'},{w:'cab',pic:'🚕'},{w:'cap',pic:'🧢'}] },
  { id: 'l2', title: 'CVC: d, e, h, n, p', icon: '🐕', gradient: 'linear-gradient(135deg,#fde047,#eab308)',
    words: [{w:'dog',pic:'🐕'},{w:'hen',pic:'🐔'},{w:'pen',pic:'🖊️'},{w:'den',pic:'🏠'},{w:'net',pic:'🥅'}] },
  { id: 'l3', title: 'CVC: g, i, o, u', icon: '🐷', gradient: 'linear-gradient(135deg,#4ade80,#22c55e)',
    words: [{w:'pig',pic:'🐷'},{w:'dog',pic:'🐕'},{w:'bug',pic:'🐛'},{w:'mug',pic:'🍵'},{w:'sun',pic:'☀️'}] },
  { id: 'l4', title: 'CVC: f, j, m, x', icon: '🦊', gradient: 'linear-gradient(135deg,#38bdf8,#0ea5e9)',
    words: [{w:'fox',pic:'🦊'},{w:'jam',pic:'🍯'},{w:'fan',pic:'🌀'},{w:'fin',pic:'🦈'},{w:'mix',pic:'🎛️'}] },
  { id: 'l5', title: 'CVC: k, l, s, v', icon: '🦁', gradient: 'linear-gradient(135deg,#a855f7,#9333ea)',
    words: [{w:'sun',pic:'☀️'},{w:'van',pic:'🚐'},{w:'lip',pic:'💋'},{w:'kit',pic:'🧰'},{w:'log',pic:'🪵'}] },
  { id: 'l6', title: 'CVC: q, w, y, z', icon: '🦓', gradient: 'linear-gradient(135deg,#f472b6,#ec4899)',
    words: [{w:'zip',pic:'🤐'},{w:'yam',pic:'🍠'},{w:'wig',pic:'💇'},{w:'web',pic:'🕸️'},{w:'zoo',pic:'🦁'}] },
  { id: 'l7', title: "Magic 'e': a_e, i_e", icon: '🪄', gradient: 'linear-gradient(135deg,#c084fc,#a855f7)',
    words: [{w:'tap',pic:'👆',magic:'tape'},{w:'kit',pic:'🧰',magic:'kite'},{w:'hop',pic:'🦘',magic:'hope'},{w:'cut',pic:'🔪',magic:'cute'}],
    magicE: true },
  { id: 'l8', title: "Magic 'e': o_e, u_e", icon: '✨', gradient: 'linear-gradient(135deg,#818cf8,#6366f1)',
    words: [{w:'hop',pic:'🦘',magic:'hope'},{w:'cut',pic:'🔪',magic:'cute'},{w:'tub',pic:'🛁',magic:'tube'},{w:'not',pic:'❌',magic:'note'}],
    magicE: true },
  { id: 'l9', title: 'Digraphs: sh, ch', icon: '🐚', gradient: 'linear-gradient(135deg,#2dd4bf,#14b8a6)',
    words: [{w:'ship',pic:'🚢'},{w:'shop',pic:'🏪'},{w:'chip',pic:'🍟'},{w:'chat',pic:'💬'},{w:'chin',pic:'😊'}] },
  { id: 'l10', title: 'Digraphs: th, wh, ph', icon: '📞', gradient: 'linear-gradient(135deg,#fb7185,#f43f5e)',
    words: [{w:'thin',pic:'📏'},{w:'thick',pic:'📚'},{w:'whale',pic:'🐋'},{w:'phone',pic:'📱'},{w:'photo',pic:'📸'}] },
  { id: 'l11', title: 'Soft C, G, Z', icon: '🌆', gradient: 'linear-gradient(135deg,#fbbf24,#f59e0b)',
    words: [{w:'city',pic:'🌆'},{w:'cycle',pic:'🚲'},{w:'gym',pic:'🤸'},{w:'giant',pic:'🗿'},{w:'zoo',pic:'🦁'}] },
  { id: 'l12', title: 'Blends: bl, cl, fl...', icon: '🔔', gradient: 'linear-gradient(135deg,#f87171,#ef4444)',
    words: [{w:'bell',pic:'🔔'},{w:'clap',pic:'👏'},{w:'flag',pic:'🏁'},{w:'glow',pic:'💡'},{w:'star',pic:'⭐'}],
    blends: true },
  { id: 'l13', title: 'Long Vowels: ai/ay', icon: '🌧️', gradient: 'linear-gradient(135deg,#60a5fa,#3b82f6)',
    words: [{w:'rain',pic:'🌧️'},{w:'day',pic:'☀️'},{w:'play',pic:'🎮'},{w:'train',pic:'🚂'},{w:'mail',pic:'📬'}] },
  { id: 'l14', title: 'Long E: ee, ea', icon: '🌳', gradient: 'linear-gradient(135deg,#34d399,#10b981)',
    words: [{w:'tree',pic:'🌳'},{w:'bee',pic:'🐝'},{w:'sea',pic:'🌊'},{w:'tea',pic:'🍵'},{w:'read',pic:'📖'}] },
  { id: 'l15', title: 'Long I: igh, ie, y', icon: '🪁', gradient: 'linear-gradient(135deg,#f472b6,#db2777)',
    words: [{w:'high',pic:'⛰️'},{w:'fly',pic:'🪁'},{w:'sky',pic:'🌌'},{w:'pie',pic:'🥧'},{w:'light',pic:'💡'}] },
  { id: 'l16', title: 'Long O: oa, ow', icon: '🚣', gradient: 'linear-gradient(135deg,#facc15,#ca8a04)',
    words: [{w:'boat',pic:'🚣'},{w:'goat',pic:'🐐'},{w:'snow',pic:'❄️'},{w:'bow',pic:'🎀'},{w:'road',pic:'🛣️'}] },
  { id: 'l17', title: 'OO, UE, EW', icon: '🥘', gradient: 'linear-gradient(135deg,#a78bfa,#7c3aed)',
    words: [{w:'moon',pic:'🌙'},{w:'food',pic:'🍲'},{w:'blue',pic:'🔵'},{w:'new',pic:'✨'},{w:'zoo',pic:'🦁'}] },
  { id: 'l18', title: 'R-Vowels: ar, or', icon: '🚗', gradient: 'linear-gradient(135deg,#f87171,#dc2626)',
    words: [{w:'car',pic:'🚗'},{w:'star',pic:'⭐'},{w:'corn',pic:'🌽'},{w:'fork',pic:'🍴'},{w:'door',pic:'🚪'}] },
  { id: 'l19', title: 'R-Vowels: ir, ur, er', icon: '🐦', gradient: 'linear-gradient(135deg,#22d3ee,#0891b2)',
    words: [{w:'bird',pic:'🐦'},{w:'girl',pic:'👧'},{w:'turn',pic:'🔄'},{w:'her',pic:'👩'},{w:'fern',pic:'🌿'}] },
  { id: 'l20', title: 'Diphthongs: ou, ow', icon: '🏠', gradient: 'linear-gradient(135deg,#fb923c,#ea580c)',
    words: [{w:'house',pic:'🏠'},{w:'mouse',pic:'🐭'},{w:'cow',pic:'🐄'},{w:'cloud',pic:'☁️'},{w:'town',pic:'🏙️'}] },
  { id: 'l21', title: 'Diphthongs: oi, oy', icon: '🧑‍🍳', gradient: 'linear-gradient(135deg,#facc15,#d97706)',
    words: [{w:'coin',pic:'🪙'},{w:'oil',pic:'🛢️'},{w:'boy',pic:'👦'},{w:'toy',pic:'🧸'},{w:'joy',pic:'😄'}] },
  { id: 'l22', title: 'AW, AU, ALL', icon: '🐾', gradient: 'linear-gradient(135deg,#a3e635,#65a30d)',
    words: [{w:'paw',pic:'🐾'},{w:'saw',pic:'🪚'},{w:'ball',pic:'⚽'},{w:'call',pic:'📞'},{w:'talk',pic:'🗣️'}] },
  { id: 'l23', title: 'Schwa & Silent', icon: '🤫', gradient: 'linear-gradient(135deg,#c084fc,#9333ea)',
    words: [{w:'knife',pic:'🔪'},{w:'write',pic:'✍️'},{w:'lamb',pic:'🐑'},{w:'comb',pic:'💇'},{w:'hour',pic:'⏰'}] },
  { id: 'l24', title: 'Endings: -tion, -sure', icon: '🎬', gradient: 'linear-gradient(135deg,#f472b6,#be185d)',
    words: [{w:'action',pic:'🎬'},{w:'motion',pic:'🎥'},{w:'treasure',pic:'💎'},{w:'pleasure',pic:'😌'}] },
  { id: 'l25', title: 'Boss Review!', icon: '👑', gradient: 'linear-gradient(135deg,#fbbf24,#dc2626)',
    words: [{w:'cat',pic:'🐱'},{w:'ship',pic:'🚢'},{w:'rain',pic:'🌧️'},{w:'bird',pic:'🐦'},{w:'house',pic:'🏠'}],
    boss: true }
];

// ============ GAME TYPES ============
const GAME_TYPES = [
  { id: 'sound', icon: '🔊', name: 'Sound Cards', desc: 'Tap letters to hear them' },
  { id: 'build', icon: '🧩', name: 'Word Builder', desc: 'Drag letters to build words' },
  { id: 'listen', icon: '👂', name: 'Listening Quiz', desc: 'Hear the word, pick the picture' },
  { id: 'memory', icon: '🧠', name: 'Memory Match', desc: 'Match letter to picture' },
  { id: 'bubble', icon: '🫧', name: 'Pop the Bubble', desc: 'Pop the right letters!' },
  { id: 'magic', icon: '🪄', name: "Magic 'e' Wand", desc: 'Zap short words into long!' },
  { id: 'unscramble', icon: '🔀', name: 'Unscramble', desc: 'Rearrange the letters' },
  { id: 'trace', icon: '✏️', name: 'Letter Trace', desc: 'Trace the letter with your finger' }
];

// ============ STATE ============
const STATE_KEY = 'abc_phonics_v1';
let state = loadState();

function loadState() {
  try {
    const s = JSON.parse(localStorage.getItem(STATE_KEY));
    if (s && s.stars) return s;
  } catch(e) {}
  return {
    stars: {},          // zoneId -> 0..3
    badges: [],         // badge ids
    streak: 0,
    lastPlay: null,
    muted: false,
    theme: 'light'
  };
}
function saveState() { localStorage.setItem(STATE_KEY, JSON.stringify(state)); }

// ============ AUDIO ============
let audioCtx = null;
function getAudio() {
  if (!audioCtx) {
    try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}
  }
  return audioCtx;
}
function beep(freq = 600, dur = 0.12, type = 'sine', vol = 0.15) {
  if (state.muted) return;
  const ctx = getAudio(); if (!ctx) return;
  const o = ctx.createOscillator(); const g = ctx.createGain();
  o.type = type; o.frequency.value = freq;
  g.gain.setValueAtTime(vol, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
  o.connect(g); g.connect(ctx.destination);
  o.start(); o.stop(ctx.currentTime + dur);
}
const SFX = {
  tap: () => beep(800, 0.08, 'square', 0.1),
  correct: () => { beep(523, 0.1); setTimeout(() => beep(659, 0.1), 100); setTimeout(() => beep(784, 0.15), 200); },
  wrong: () => { beep(200, 0.15, 'sawtooth', 0.12); setTimeout(() => beep(150, 0.2, 'sawtooth', 0.12), 120); },
  win: () => { [523,659,784,1047].forEach((f,i) => setTimeout(() => beep(f, 0.15, 'triangle', 0.18), i*120)); },
  unlock: () => { beep(880, 0.1); setTimeout(() => beep(1320, 0.2), 100); }
};
function speak(text, rate = 0.9) {
  if (state.muted) return;
  if (!('speechSynthesis' in window)) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US'; u.rate = rate; u.pitch = 1.2;
    speechSynthesis.speak(u);
  } catch(e) {}
}

// ============ DOM HELPERS ============
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
function el(tag, props = {}, ...children) {
  const e = document.createElement(tag);
  Object.entries(props).forEach(([k, v]) => {
    if (k === 'class') e.className = v;
    else if (k === 'style' && typeof v === 'object') Object.assign(e.style, v);
    else if (k.startsWith('on') && typeof v === 'function') e.addEventListener(k.slice(2).toLowerCase(), v);
    else if (k in e) e[k] = v;
    else e.setAttribute(k, v);
  });
  children.flat().forEach(c => {
    if (c == null) return;
    e.append(typeof c === 'string' ? document.createTextNode(c) : c);
  });
  return e;
}

// ============ MASCOT ============
const mascot = {
  el: $('#mascot'),
  bubble: $('#mascotBubble'),
  say(msg, duration = 3000) {
    this.bubble.textContent = msg;
    this.bubble.style.animation = 'none';
    void this.bubble.offsetWidth;
    this.bubble.style.animation = '';
    clearTimeout(this._t);
    this._t = setTimeout(() => { this.bubble.textContent = ''; }, duration);
  },
  cheer() { this.el.classList.remove('sad'); this.el.classList.add('cheer'); setTimeout(() => this.el.classList.remove('cheer'), 600); },
  sad() { this.el.classList.remove('cheer'); this.el.classList.add('sad'); setTimeout(() => this.el.classList.remove('sad'), 500); },
  wave() { this.say('Hi friend! 👋'); }
};

// ============ CONFETTI ============
const confettiCanvas = $('#confettiCanvas');
const confettiCtx = confettiCanvas.getContext('2d');
let confetti = [];
function resizeConfetti() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeConfetti);
resizeConfetti();

function launchConfetti(count = 80) {
  const colors = ['#ff6fb5','#a855f7','#38bdf8','#4ade80','#fde047','#fb923c','#f87171'];
  for (let i = 0; i < count; i++) {
    confetti.push({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      vx: (Math.random() - 0.5) * 15,
      vy: (Math.random() - 1) * 15 - 5,
      g: 0.4,
      size: 6 + Math.random() * 8,
      color: colors[Math.floor(Math.random() * colors.length)],
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.3,
      life: 120
    });
  }
}
function tickConfetti() {
  confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confetti = confetti.filter(p => p.life > 0);
  confetti.forEach(p => {
    p.vy += p.g; p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life--;
    confettiCtx.save();
    confettiCtx.translate(p.x, p.y);
    confettiCtx.rotate(p.rot);
    confettiCtx.fillStyle = p.color;
    confettiCtx.fillRect(-p.size/2, -p.size/2, p.size, p.size * 0.6);
    confettiCtx.restore();
  });
  requestAnimationFrame(tickConfetti);
}
tickConfetti();

// ============ NAVIGATION ============
function showScreen(id) {
  $$('.screen').forEach(s => s.classList.remove('active'));
  $('#' + id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============ RENDER MAP ============
function renderMap() {
  const map = $('#questMap');
  map.innerHTML = '';
  ZONES.forEach((z, i) => {
    const stars = state.stars[z.id] || 0;
    const starStr = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);
    const node = el('div', {
      class: 'zone-node' + (stars === 0 ? ' pulse' : ''),
      style: { background: z.gradient },
      onclick: () => openLesson(z.id),
      onmouseenter: () => { SFX.tap(); mascot.say(`Let's try ${z.title}!`); }
    },
      el('div', { class: 'zone-icon' }, z.icon),
      el('div', { class: 'zone-title' }, z.title),
      el('div', { class: 'zone-stars' }, starStr)
    );
    map.append(node);
  });
  updateHUD();
}

function updateHUD() {
  const totalStars = Object.values(state.stars).reduce((a,b) => a+b, 0);
  const maxStars = ZONES.length * 3;
  $('#totalStars').textContent = totalStars;
  $('#streakCount').textContent = state.streak;
  $('#badgeCount').textContent = state.badges.length;
  const pct = (totalStars / maxStars) * 100;
  $('#overallProgress').style.width = pct + '%';
}

// ============ LESSON SCREEN ============
let currentZone = null;
function openLesson(zoneId) {
  SFX.tap();
  currentZone = ZONES.find(z => z.id === zoneId);
  if (!currentZone) return;
  $('#lessonIcon').textContent = currentZone.icon;
  $('#lessonIcon').style.background = currentZone.gradient;
  $('#lessonTitle').textContent = currentZone.title;
  $('#lessonDesc').textContent = `Fun activities for "${currentZone.title}"`;
  const stars = state.stars[currentZone.id] || 0;
  $('#lessonStars').textContent = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);

  // Pick 4 game types suitable for this zone
  const picker = $('#gamePicker');
  picker.innerHTML = '';
  let games = [...GAME_TYPES];
  if (!currentZone.magicE) games = games.filter(g => g.id !== 'magic');
  // Shuffle and take 4
  games = games.sort(() => Math.random() - 0.5).slice(0, 4);
  games.forEach(g => {
    const card = el('div', {
      class: 'game-card',
      onclick: () => startGame(g.id)
    },
      el('div', { class: 'gc-icon' }, g.icon),
      el('div', { class: 'gc-title' }, g.name),
      el('div', { class: 'gc-desc' }, g.desc)
    );
    picker.append(card);
  });
  showScreen('lessonScreen');
  mascot.say(`Pick a game! 🎮`);
}

// ============ GAME ENGINE ============
let gameState = null;
function startGame(gameId) {
  SFX.tap();
  showScreen('gameScreen');
  const area = $('#gameArea');
  area.innerHTML = '';
  $('#nextBtn').style.display = 'none';
  gameState = {
    zone: currentZone,
    gameId,
    score: 0,
    mistakes: 0,
    total: 0,
    done: 0,
    words: [...currentZone.words].sort(() => Math.random() - 0.5)
  };
  $('#hudStars').textContent = 0;
  $('#hudScore').textContent = 0;
  $('#hudProgress').textContent = `0/${gameState.words.length}`;

  switch (gameId) {
    case 'sound': buildSoundCards(); break;
    case 'build': buildWordBuilder(); break;
    case 'listen': buildListeningQuiz(); break;
    case 'memory': buildMemoryMatch(); break;
    case 'bubble': buildBubblePop(); break;
    case 'magic': buildMagicE(); break;
    case 'unscramble': buildUnscramble(); break;
    case 'trace': buildTrace(); break;
  }
}

// ---------- Sound Cards ----------
function buildSoundCards() {
  const area = $('#gameArea');
  const wrap = el('div', { class: 'sound-cards' });
  gameState.words.forEach(w => {
    const card = el('div', {
      class: 'sound-card',
      onclick: (e) => {
        card.classList.add('playing');
        speak(w.w);
        SFX.tap();
        setTimeout(() => card.classList.remove('playing'), 600);
      }
    }, w.pic, el('div', { class: 'sc-sub' }, w.w));
    wrap.append(card);
  });
  area.append(wrap);
  // Mark done after tapping all
  let tapped = new Set();
  area.addEventListener('click', e => {
    const c = e.target.closest('.sound-card');
    if (!c) return;
    const idx = [...wrap.children].indexOf(c);
    tapped.add(idx);
    if (tapped.size === gameState.words.length) finishGame();
  });
  mascot.say('Tap every card! 👆');
}

// ---------- Word Builder (Drag & Drop) ----------
function buildWordBuilder() {
  const area = $('#gameArea');
  let idx = 0;
  const next = () => {
    if (idx >= gameState.words.length) { finishGame(); return; }
    area.innerHTML = '';
    const w = gameState.words[idx];
    const letters = w.w.split('');
    const shuffled = [...letters].sort(() => Math.random() - 0.5);
    gameState.total = gameState.words.length;

    area.append(
      el('div', { class: 'target-word' },
        el('span', { class: 'pic' }, w.pic),
        `Build: ${w.w.toUpperCase()}`
      )
    );
    const slots = el('div', { class: 'word-slots' });
    letters.forEach(() => slots.append(el('div', { class: 'word-slot', 'data-expected': '' })));
    area.append(slots);

    const pool = el('div', { class: 'letter-tiles' });
    shuffled.forEach((l, i) => {
      const t = el('div', {
        class: 'letter-tile',
        draggable: 'true',
        'data-letter': l,
        'data-id': i
      }, l);
      // Drag events
      t.addEventListener('dragstart', e => {
        t.classList.add('dragging');
        e.dataTransfer.setData('text/plain', JSON.stringify({ l, id: i }));
      });
      t.addEventListener('dragend', () => t.classList.remove('dragging'));
      // Click fallback for mobile
      t.addEventListener('click', () => {
        if (t.classList.contains('used')) return;
        const emptySlot = slots.querySelector('.word-slot:not(.filled)');
        if (emptySlot) placeLetter(t, emptySlot);
      });
      pool.append(t);
    });
    area.append(pool);

    // Drop zones
    slots.querySelectorAll('.word-slot').forEach((slot, sIdx) => {
      slot.setAttribute('data-expected', letters[sIdx]);
      slot.addEventListener('dragover', e => { e.preventDefault(); slot.classList.add('hover'); });
      slot.addEventListener('dragleave', () => slot.classList.remove('hover'));
      slot.addEventListener('drop', e => {
        e.preventDefault();
        slot.classList.remove('hover');
        if (slot.classList.contains('filled')) return;
        try {
          const data = JSON.parse(e.dataTransfer.getData('text/plain'));
          const tile = pool.querySelector(`[data-id="${data.id}"]`);
          placeLetter(tile, slot);
        } catch(err) {}
      });
    });

    function placeLetter(tile, slot) {
      if (!tile || tile.classList.contains('used')) return;
      const expected = slot.getAttribute('data-expected');
      if (tile.getAttribute('data-letter') === expected) {
        slot.textContent = expected;
        slot.classList.add('filled');
        tile.classList.add('used');
        SFX.correct();
        // Check completion
        if ([...slots.querySelectorAll('.filled')].length === letters.length) {
          gameState.score++;
          mascot.cheer();
          setTimeout(() => { idx++; next(); }, 900);
        }
      } else {
        SFX.wrong();
        mascot.sad();
        slot.style.animation = 'shake 0.4s';
        setTimeout(() => slot.style.animation = '', 400);
      }
      updateHUD2();
    }
    mascot.say(`Build "${w.w}"! 🧩`);
  };
  next();
}

// ---------- Listening Quiz ----------
function buildListeningQuiz() {
  const area = $('#gameArea');
  let idx = 0;
  const next = () => {
    if (idx >= gameState.words.length) { finishGame(); return; }
    area.innerHTML = '';
    const correct = gameState.words[idx];
    // Pick 3 distractors
    const others = gameState.words.filter(w => w.w !== correct.w).sort(() => Math.random() - 0.5).slice(0, 3);
    const options = [correct, ...others].sort(() => Math.random() - 0.5);
    gameState.total = gameState.words.length;

    const prompt = el('div', { class: 'quiz-prompt' },
      el('div', {}, 'Listen and pick! 👂')
    );
    area.append(prompt);

    const playBtn = el('button', { class: 'wand-btn', onclick: () => speak(correct.w) }, '🔊 Play Sound');
    area.append(playBtn);
    setTimeout(() => speak(correct.w), 400);

    const grid = el('div', { class: 'quiz-options' });
    options.forEach(opt => {
      const b = el('div', { class: 'quiz-option', onclick: () => {
        if (b.classList.contains('correct') || b.classList.contains('wrong')) return;
        if (opt.w === correct.w) {
          b.classList.add('correct');
          SFX.correct();
          mascot.cheer();
          gameState.score++;
          launchConfetti(30);
          setTimeout(() => { idx++; next(); }, 1100);
        } else {
          b.classList.add('wrong');
          SFX.wrong();
          mascot.sad();
          gameState.mistakes++;
        }
        updateHUD2();
      }}, el('div', { style: { fontSize: '2.5rem' } }, opt.pic), opt.w);
      grid.append(b);
    });
    area.append(grid);
    mascot.say('Listen carefully! 🎧');
  };
  next();
}

// ---------- Memory Match ----------
function buildMemoryMatch() {
  const area = $('#gameArea');
  const words = gameState.words.slice(0, 6); // 6 pairs
  gameState.total = words.length;
  const pairs = [];
  words.forEach((w, i) => {
    pairs.push({ id: i, type: 'pic', content: w.pic, match: i });
    pairs.push({ id: i, type: 'word', content: w.w, match: i });
  });
  pairs.sort(() => Math.random() - 0.5);

  const grid = el('div', { class: 'memory-grid' });
  let flipped = [];
  let matched = 0;
  pairs.forEach((p, idx) => {
    const card = el('div', { class: 'mem-card', onclick: () => {
      if (card.classList.contains('flipped') || card.classList.contains('matched')) return;
      card.classList.add('flipped');
      SFX.tap();
      flipped.push({ card, p });
      if (flipped.length === 2) {
        const [a, b] = flipped;
        if (a.p.match === b.p.match && a.p.type !== b.p.type) {
          setTimeout(() => {
            a.card.classList.add('matched');
            b.card.classList.add('matched');
            SFX.correct();
            matched++;
            gameState.score = matched;
            updateHUD2();
            if (matched === words.length) { mascot.cheer(); launchConfetti(60); setTimeout(finishGame, 900); }
          }, 400);
          flipped = [];
        } else {
          setTimeout(() => {
            a.card.classList.remove('flipped');
            b.card.classList.remove('flipped');
            SFX.wrong();
          }, 900);
          flipped = [];
        }
      }
    }},
      el('div', { class: 'mem-card-inner' },
        el('div', { class: 'mem-face mem-front' }, '?'),
        el('div', { class: 'mem-face mem-back' }, p.content)
      )
    );
    grid.append(card);
  });
  area.append(grid);
  mascot.say('Match letter to picture! 🧠');
}

// ---------- Pop the Bubble ----------
function buildBubblePop() {
  const area = $('#gameArea');
  const targetLetters = gameState.words.slice(0, 3).map(w => w.w[0].toUpperCase());
  const targetStr = targetLetters.join(', ');
  let popped = 0;
  const target = targetLetters.length;
  gameState.total = target;

  area.append(el('div', { class: 'bubble-target' }, `Pop bubbles starting with: ${targetStr}`));
  const field = el('div', { class: 'bubble-field' });
  area.append(field);

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let spawnInt = setInterval(() => {
    if (popped >= target) { clearInterval(spawnInt); return; }
    const letter = Math.random() < 0.5
      ? targetLetters[Math.floor(Math.random() * targetLetters.length)]
      : alphabet[Math.floor(Math.random() * 26)];
    const b = el('div', { class: 'pop-bubble', style: { left: (Math.random() * 85 + 5) + '%' } }, letter);
    b.addEventListener('click', () => {
      if (b.classList.contains('popped')) return;
      b.classList.add('popped');
      if (targetLetters.includes(letter)) {
        SFX.correct();
        popped++;
        mascot.cheer();
        gameState.score = popped;
        updateHUD2();
        if (popped >= target) { clearInterval(spawnInt); launchConfetti(60); setTimeout(finishGame, 700); }
      } else {
        SFX.wrong();
        mascot.sad();
      }
    });
    field.append(b);
    setTimeout(() => b.remove(), 6000);
  }, 900);

  mascot.say('Pop the right bubbles! 🫧');
}

// ---------- Magic E Wand ----------
function buildMagicE() {
  const area = $('#gameArea');
  const words = (currentZone.words || []).filter(w => w.magic);
  if (words.length === 0) {
    area.append(el('div', {}, 'No magic-e words here. Try another game!'));
    setTimeout(finishGame, 1500);
    return;
  }
  let idx = 0;
  gameState.total = words.length;

  const next = () => {
    if (idx >= words.length) { finishGame(); return; }
    area.innerHTML = '';
    const w = words[idx];
    const wrap = el('div', { class: 'magic-e-area' });
    wrap.append(el('div', { class: 'target-word' },
      el('span', { class: 'pic' }, w.pic),
      `Short word: ${w.w.toUpperCase()}`
    ));
    const wordEl = el('div', { class: 'magic-word' });
    w.w.split('').forEach(ch => wordEl.append(el('span', { class: 'm-letter' }, ch)));
    wrap.append(wordEl);

    const btn = el('button', { class: 'wand-btn', onclick: () => {
      btn.disabled = true;
      // Add silent e
      const eSpan = el('span', { class: 'm-letter silent-e' }, 'e');
      wordEl.append(eSpan);
      // Zap vowels
      setTimeout(() => {
        [...wordEl.querySelectorAll('.m-letter')].forEach(l => l.classList.add('zapped'));
        speak(w.magic);
        SFX.unlock();
        mascot.cheer();
        launchConfetti(30);
        gameState.score++;
        updateHUD2();
        setTimeout(() => { idx++; next(); }, 1400);
      }, 500);
    }}, '🪄 Zap with Magic E!');
    wrap.append(btn);
    area.append(wrap);
    mascot.say('Wave the magic wand! 🪄');
  };
  next();
}

// ---------- Unscramble ----------
function buildUnscramble() {
  const area = $('#gameArea');
  let idx = 0;
  gameState.total = gameState.words.length;
  const next = () => {
    if (idx >= gameState.words.length) { finishGame(); return; }
    area.innerHTML = '';
    const w = gameState.words[idx];
    const letters = w.w.split('');
    const shuffled = [...letters].sort(() => Math.random() - 0.5);

    area.append(el('div', { class: 'unscramble-target' },
      el('span', { style: { fontSize: '3rem', display: 'block' } }, w.pic),
      `Unscramble!`
    ));
    const build = el('div', { class: 'unscramble-build' });
    area.append(build);
    const pool = el('div', { class: 'letter-tiles' });
    const placed = [];

    shuffled.forEach((l, i) => {
      const t = el('div', {
        class: 'letter-tile',
        'data-letter': l,
        'data-id': i,
        onclick: () => {
          if (t.classList.contains('used')) return;
          t.classList.add('used');
          placed.push({ l, t });
          build.append(el('span', { style: { fontSize: '2rem', fontWeight: 800 } }, l));
          SFX.tap();
          if (placed.length === letters.length) {
            const formed = placed.map(p => p.l).join('');
            if (formed === w.w) {
              SFX.correct();
              mascot.cheer();
              gameState.score++;
              launchConfetti(30);
              setTimeout(() => { idx++; next(); }, 1000);
            } else {
              SFX.wrong();
              mascot.sad();
              setTimeout(() => {
                placed.forEach(p => p.t.classList.remove('used'));
                placed.length = 0;
                build.innerHTML = '';
              }, 800);
            }
            updateHUD2();
          }
        }
      }, l);
      pool.append(t);
    });
    area.append(pool);

    // Hint button
    $('#hintBtn').onclick = () => {
      if (placed.length < letters.length) {
        const nextLetter = letters[placed.length];
        const tile = pool.querySelector(`.letter-tile:not(.used)[data-letter="${nextLetter}"]`);
        if (tile) tile.click();
      }
    };
    mascot.say(`Spell "${w.w}"! 🔀`);
  };
  next();
}

// ---------- Canvas Trace ----------
function buildTrace() {
  const area = $('#gameArea');
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let idx = 0;
  gameState.total = Math.min(5, letters.length);

  const canvas = document.createElement('canvas');
  canvas.id = 'traceCanvas';
  canvas.width = 320; canvas.height = 320;
  const ctx = canvas.getContext('2d');

  const wrap = el('div', { class: 'trace-wrap' });
  const label = el('div', { style: { fontSize: '1.3rem', fontWeight: 700, marginBottom: 10 } } , 'Trace the letter!');
  wrap.append(label);
  wrap.append(canvas);

  const controls = el('div', { class: 'trace-controls' });
  const clearBtn = el('button', { class: 'btn-chunky', onclick: drawGuide }, '🧹 Clear');
  const doneBtn = el('button', { class: 'btn-chunky btn-next', onclick: () => {
    SFX.correct();
    gameState.score++;
    mascot.cheer();
    launchConfetti(20);
    idx++;
    if (idx >= gameState.total) finishGame();
    else drawGuide();
    updateHUD2();
  }}, '✅ Done');
  controls.append(clearBtn, doneBtn);
  wrap.append(controls);
  area.append(wrap);

  function drawGuide() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#f3f4f6';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = 'bold 240px Baloo 2, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = 'rgba(168, 85, 247, 0.2)';
    ctx.fillText(letters[idx], canvas.width/2, canvas.height/2);
    ctx.strokeStyle = 'rgba(168, 85, 247, 0.5)';
    ctx.setLineDash([8, 8]);
    ctx.lineWidth = 3;
    ctx.strokeText(letters[idx], canvas.width/2, canvas.height/2);
    label.textContent = `Trace: ${letters[idx]}`;
  }

  // Drawing
  let drawing = false, lastX = 0, lastY = 0;
  function getPos(e) {
    const r = canvas.getBoundingClientRect();
    const t = e.touches ? e.touches[0] : e;
    return {
      x: (t.clientX - r.left) * (canvas.width / r.width),
      y: (t.clientY - r.top) * (canvas.height / r.height)
    };
  }
  function start(e) { e.preventDefault(); drawing = true; const p = getPos(e); lastX = p.x; lastY = p.y; }
  function move(e) {
    if (!drawing) return;
    e.preventDefault();
    const p = getPos(e);
    ctx.setLineDash([]);
    ctx.strokeStyle = '#ec4899';
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    lastX = p.x; lastY = p.y;
  }
  function end() { drawing = false; }
  canvas.addEventListener('mousedown', start);
  canvas.addEventListener('mousemove', move);
  canvas.addEventListener('mouseup', end);
  canvas.addEventListener('mouseleave', end);
  canvas.addEventListener('touchstart', start);
  canvas.addEventListener('touchmove', move);
  canvas.addEventListener('touchend', end);

  drawGuide();
  mascot.say('Trace with your finger! ✏️');
}

// ---------- HUD update during game ----------
function updateHUD2() {
  $('#hudStars').textContent = gameState.score;
  $('#hudScore').textContent = gameState.score;
  $('#hudProgress').textContent = `${gameState.score}/${gameState.total}`;
}

// ---------- Finish game ----------
function finishGame() {
  SFX.win();
  launchConfetti(120);
  const score = gameState.score;
  const total = gameState.total || 1;
  const ratio = score / total;
  let stars = 0;
  if (ratio >= 0.95) stars = 3;
  else if (ratio >= 0.7) stars = 2;
  else if (ratio >= 0.4) stars = 1;

  // Save best
  const prev = state.stars[currentZone.id] || 0;
  if (stars > prev) state.stars[currentZone.id] = stars;

  // Streak
  const today = new Date().toDateString();
  if (state.lastPlay !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    state.streak = (state.lastPlay === yesterday) ? state.streak + 1 : 1;
    state.lastPlay = today;
  }

  // Badges
  checkBadges();
  saveState();

  // Modal
  showModal(el('div', {},
    el('h2', {}, '🎉 Level Complete!'),
    el('div', { class: 'big-stars' }, '⭐'.repeat(stars) + '☆'.repeat(3 - stars)),
    el('p', {}, `Score: ${score} / ${total}`),
    el('div', { class: 'modal-buttons' },
      el('button', { class: 'btn-chunky', onclick: () => { closeModal(); startGame(gameState.gameId); } }, '🔁 Play Again'),
      el('button', { class: 'btn-chunky btn-next', onclick: () => { closeModal(); showScreen('mapScreen'); renderMap(); } }, '🗺️ Map')
    )
  ));
  mascot.cheer();
  mascot.say(`You earned ${stars} star${stars !== 1 ? 's' : ''}! 🌟`);
}

// ============ BADGES ============
const BADGES = [
  { id: 'first_star', name: 'First Star', icon: '⭐', check: () => Object.values(state.stars).some(s => s > 0) },
  { id: 'abc_master', name: 'ABC Master', icon: '🔤', check: () => (state.stars.abc || 0) === 3 },
  { id: 'cvc_king', name: 'CVC King', icon: '🐱', check: () => ['l1','l2','l3','l4','l5','l6'].every(id => (state.stars[id] || 0) >= 2) },
  { id: 'blend_boss', name: 'Blend Boss', icon: '🔔', check: () => (state.stars.l12 || 0) === 3 },
  { id: 'streak_3', name: '3-Day Streak', icon: '🔥', check: () => state.streak >= 3 },
  { id: 'streak_7', name: 'Week Warrior', icon: '💎', check: () => state.streak >= 7 },
  { id: 'half_way', name: 'Halfway Hero', icon: '🦸', check: () => Object.values(state.stars).filter(s => s > 0).length >= 13 },
  { id: 'champion', name: 'Phonics Champ', icon: '👑', check: () => Object.values(state.stars).filter(s => s === 3).length >= 20 }
];
function checkBadges() {
  BADGES.forEach(b => {
    if (!state.badges.includes(b.id) && b.check()) {
      state.badges.push(b.id);
      SFX.unlock();
      setTimeout(() => {
        mascot.say(`New badge: ${b.name}! 🏆`);
        showModal(el('div', {},
          el('h2', {}, '🏆 Badge Unlocked!'),
          el('div', { style: { fontSize: '4rem' } }, b.icon),
          el('p', { style: { fontSize: '1.3rem', fontWeight: 700 } }, b.name),
          el('div', { class: 'modal-buttons' },
            el('button', { class: 'btn-chunky', onclick: closeModal }, 'Awesome!')
          )
        ));
      }, 1200);
    }
  });
}

// ============ MODAL ============
function showModal(content) {
  const root = $('#modalRoot');
  root.innerHTML = '';
  const modal = el('div', { class: 'modal' }, content);
  root.append(modal);
  root.classList.add('active');
}
function closeModal() { $('#modalRoot').classList.remove('active'); }

// ============ TROPHY ROOM ============
function openTrophyRoom() {
  SFX.tap();
  const grid = el('div', { class: 'trophy-grid' });
  BADGES.forEach(b => {
    const unlocked = state.badges.includes(b.id);
    grid.append(el('div', { class: 'trophy' + (unlocked ? '' : ' locked') },
      el('div', { class: 't-icon' }, b.icon),
      el('div', { class: 't-name' }, b.name)
    ));
  });
  showModal(el('div', {},
    el('h2', {}, '🏆 Trophy Room'),
    el('p', {}, `${state.badges.length} / ${BADGES.length} badges`),
    grid,
    el('div', { class: 'modal-buttons' },
      el('button', { class: 'btn-chunky', onclick: closeModal }, 'Close')
    )
  ));
}

// ============ EVENT WIRING ============
$('#backBtn').onclick = () => { SFX.tap(); showScreen('mapScreen'); renderMap(); };
$('#exitGameBtn').onclick = () => {
  SFX.tap();
  if (confirm('Exit this game? Progress will be lost.')) {
    showScreen('lessonScreen');
    openLesson(currentZone.id);
  }
};
$('#muteBtn').onclick = () => {
  state.muted = !state.muted;
  $('#muteBtn').textContent = state.muted ? '🔇' : '🔊';
  saveState();
};
$('#trophyBtn').onclick = openTrophyRoom;
$('#themeBtn').onclick = () => {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', state.theme);
  $('#themeBtn').textContent = state.theme === 'light' ? '🌙' : '☀️';
  saveState();
};
$('#hintBtn').onclick = () => { mascot.say('You can do it! 💪'); SFX.tap(); };

// ============ INIT ============
function init() {
  if (state.theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    $('#themeBtn').textContent = '☀️';
  }
  if (state.muted) $('#muteBtn').textContent = '🔇';
  renderMap();
  mascot.wave();
  // Resume audio on first interaction
  document.addEventListener('click', () => { getAudio(); if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume(); }, { once: true });
}
init();
