/* =========================================================
   MY FIRST GRAMMAR - Main Script
   ========================================================= */

// ---------- TOPIC DATA ----------
const TOPICS = [
  {
    id: 1,
    name: "I am / You are / He is / She is",
    icon: "😊",
    color: "#ff6fb5",
    learn: `
      <h3>Meet the Verb "to be" 🌟</h3>
      <p>We use <b>am</b>, <b>is</b>, and <b>are</b> to say who we are!</p>
      <div class="learn-example"><span class="emoji">👦</span> I <b>am</b> a boy.</div>
      <div class="learn-example"><span class="emoji">👧</span> She <b>is</b> a girl.</div>
      <div class="learn-example"><span class="emoji">🧒</span> He <b>is</b> my friend.</div>
      <div class="learn-example"><span class="emoji">👫</span> You <b>are</b> happy!</div>
      <p>👉 <b>I</b> → am &nbsp;|&nbsp; <b>He / She</b> → is &nbsp;|&nbsp; <b>You / We / They</b> → are</p>
    `,
    exercises: [
      { type: "fill", prompt: "I ___ a student.", answer: "am", options: ["am", "is", "are"] },
      { type: "fill", prompt: "She ___ my friend.", answer: "is", options: ["am", "is", "are"] },
      { type: "fill", prompt: "You ___ kind.", answer: "are", options: ["am", "is", "are"] },
      { type: "fill", prompt: "He ___ happy.", answer: "is", options: ["am", "is", "are"] },
      { type: "fill", prompt: "We ___ ready.", answer: "are", options: ["am", "is", "are"] }
    ],
    quiz: [
      { q: "I ___ sad.", a: "am", opts: ["am", "is", "are"] },
      { q: "She ___ a teacher.", a: "is", opts: ["am", "is", "are"] },
      { q: "You ___ smart.", a: "are", opts: ["am", "is", "are"] },
      { q: "He ___ my brother.", a: "is", opts: ["am", "is", "are"] },
      { q: "They ___ friends.", a: "are", opts: ["am", "is", "are"] }
    ]
  },
  {
    id: 2,
    name: "This / That",
    icon: "👉",
    color: "#4fc3f7",
    learn: `
      <h3>Near or Far? 🎯</h3>
      <p>Use <b>this</b> for things <b>near</b> you (close).</p>
      <div class="learn-example"><span class="emoji">🍎</span> <b>This</b> is an apple. (in my hand)</div>
      <p>Use <b>that</b> for things <b>far</b> from you.</p>
      <div class="learn-example"><span class="emoji">🌳</span> <b>That</b> is a tree. (over there)</div>
    `,
    exercises: [
      { type: "nearfar", prompt: "🍎 (in my hand)", answer: "This" },
      { type: "nearfar", prompt: "🌳 (far away)", answer: "That" },
      { type: "nearfar", prompt: "📱 (in my hand)", answer: "This" },
      { type: "nearfar", prompt: "🏔️ (far away)", answer: "That" },
      { type: "nearfar", prompt: "🐶 (next to me)", answer: "This" }
    ],
    quiz: [
      { q: "___ is my book (in my hand).", a: "This", opts: ["This", "That"] },
      { q: "___ is a bird (in the sky).", a: "That", opts: ["This", "That"] },
      { q: "___ is my toy (here).", a: "This", opts: ["This", "That"] },
      { q: "___ is a cloud (up there).", a: "That", opts: ["This", "That"] },
      { q: "___ is my cup (on my desk).", a: "This", opts: ["This", "That"] }
    ]
  },
  {
    id: 3,
    name: "These / Those",
    icon: "👉👉",
    color: "#81c784",
    learn: `
      <h3>Many Things! 🎈</h3>
      <p>Use <b>these</b> for many things <b>near</b> you.</p>
      <div class="learn-example"><span class="emoji">🍎🍎🍎</span> <b>These</b> are apples.</div>
      <p>Use <b>those</b> for many things <b>far</b> from you.</p>
      <div class="learn-example"><span class="emoji">🌳🌳🌳</span> <b>Those</b> are trees.</div>
    `,
    exercises: [
      { type: "nearfar", prompt: "🍎🍎🍎 (near me)", answer: "These" },
      { type: "nearfar", prompt: "🌳🌳🌳 (far away)", answer: "Those" },
      { type: "nearfar", prompt: "📚📚📚 (on my desk)", answer: "These" },
      { type: "nearfar", prompt: "🏠🏠🏠 (over there)", answer: "Those" },
      { type: "nearfar", prompt: "🐱🐱🐱 (next to me)", answer: "These" }
    ],
    quiz: [
      { q: "___ are my toys (here).", a: "These", opts: ["These", "Those"] },
      { q: "___ are birds (in the sky).", a: "Those", opts: ["These", "Those"] },
      { q: "___ are my shoes (by my feet).", a: "These", opts: ["These", "Those"] },
      { q: "___ are stars (up high).", a: "Those", opts: ["These", "Those"] },
      { q: "___ are cookies (on my plate).", a: "These", opts: ["These", "Those"] }
    ]
  },
  {
    id: 4,
    name: "A / An",
    icon: "🍎",
    color: "#ffd54f",
    learn: `
      <h3>Pick the Right Word! 🎁</h3>
      <p>Use <b>a</b> before words that start with a <b>consonant</b> sound (b, c, d, f, g...).</p>
      <div class="learn-example"><span class="emoji">🐶</span> <b>a</b> dog</div>
      <p>Use <b>an</b> before words that start with a <b>vowel</b> sound (a, e, i, o, u).</p>
      <div class="learn-example"><span class="emoji">🍎</span> <b>an</b> apple</div>
      <p>👉 Remember: <b>a, e, i, o, u</b> = use <b>an</b>!</p>
    `,
    exercises: [
      { type: "fill", prompt: "___ apple", answer: "an", options: ["a", "an"] },
      { type: "fill", prompt: "___ cat", answer: "a", options: ["a", "an"] },
      { type: "fill", prompt: "___ elephant", answer: "an", options: ["a", "an"] },
      { type: "fill", prompt: "___ book", answer: "a", options: ["a", "an"] },
      { type: "fill", prompt: "___ orange", answer: "an", options: ["a", "an"] }
    ],
    quiz: [
      { q: "___ umbrella", a: "an", opts: ["a", "an"] },
      { q: "___ banana", a: "a", opts: ["a", "an"] },
      { q: "___ ice cream", a: "an", opts: ["a", "an"] },
      { q: "___ fish", a: "a", opts: ["a", "an"] },
      { q: "___ egg", a: "an", opts: ["a", "an"] }
    ]
  },
  {
    id: 5,
    name: "Singular & Plural",
    icon: "🐱",
    color: "#ba68c8",
    learn: `
      <h3>One or Many? 🔢</h3>
      <p><b>Singular</b> = one thing.</p>
      <div class="learn-example"><span class="emoji">🐱</span> one <b>cat</b></div>
      <p><b>Plural</b> = more than one. Add <b>-s</b>!</p>
      <div class="learn-example"><span class="emoji">🐱🐱🐱</span> three <b>cats</b></div>
      <p>👉 Just add <b>s</b>: dog → dogs, book → books, apple → apples</p>
    `,
    exercises: [
      { type: "fill", prompt: "one cat → two ___", answer: "cats", options: ["cat", "cats"] },
      { type: "fill", prompt: "one dog → three ___", answer: "dogs", options: ["dog", "dogs"] },
      { type: "fill", prompt: "one book → five ___", answer: "books", options: ["book", "books"] },
      { type: "fill", prompt: "one apple → four ___", answer: "apples", options: ["apple", "apples"] },
      { type: "fill", prompt: "one bird → many ___", answer: "birds", options: ["bird", "birds"] }
    ],
    quiz: [
      { q: "one pen → two ___", a: "pens", opts: ["pen", "pens"] },
      { q: "one star → many ___", a: "stars", opts: ["star", "stars"] },
      { q: "one car → three ___", a: "cars", opts: ["car", "cars"] },
      { q: "one flower → ten ___", a: "flowers", opts: ["flower", "flowers"] },
      { q: "one ball → four ___", a: "balls", opts: ["ball", "balls"] }
    ]
  },
  {
    id: 6,
    name: "Have got / Has got",
    icon: "🎁",
    color: "#ffb74d",
    learn: `
      <h3>What Do You Have? 🎁</h3>
      <p>Use <b>have got</b> with I, you, we, they.</p>
      <div class="learn-example"><span class="emoji">👦</span> I <b>have got</b> a ball.</div>
      <p>Use <b>has got</b> with he, she, it.</p>
      <div class="learn-example"><span class="emoji">👧</span> She <b>has got</b> a doll.</div>
    `,
    exercises: [
      { type: "fill", prompt: "I ___ a toy.", answer: "have got", options: ["have got", "has got"] },
      { type: "fill", prompt: "She ___ a cat.", answer: "has got", options: ["have got", "has got"] },
      { type: "fill", prompt: "He ___ a bike.", answer: "has got", options: ["have got", "has got"] },
      { type: "fill", prompt: "They ___ a dog.", answer: "have got", options: ["have got", "has got"] },
      { type: "fill", prompt: "We ___ books.", answer: "have got", options: ["have got", "has got"] }
    ],
    quiz: [
      { q: "I ___ a pencil.", a: "have got", opts: ["have got", "has got"] },
      { q: "He ___ a hat.", a: "has got", opts: ["have got", "has got"] },
      { q: "You ___ a friend.", a: "have got", opts: ["have got", "has got"] },
      { q: "She ___ a bag.", a: "has got", opts: ["have got", "has got"] },
      { q: "We ___ a house.", a: "have got", opts: ["have got", "has got"] }
    ]
  },
  {
    id: 7,
    name: "Can / Can't",
    icon: "🐟",
    color: "#4fc3f7",
    learn: `
      <h3>What Can You Do? 🦸</h3>
      <p><b>Can</b> = able to do it! ✅</p>
      <div class="learn-example"><span class="emoji">🐟</span> A fish <b>can</b> swim.</div>
      <p><b>Can't</b> = not able to do it. ❌</p>
      <div class="learn-example"><span class="emoji">🐟</span> A fish <b>can't</b> fly.</div>
    `,
    exercises: [
      { type: "fill", prompt: "A bird ___ fly.", answer: "can", options: ["can", "can't"] },
      { type: "fill", prompt: "A fish ___ fly.", answer: "can't", options: ["can", "can't"] },
      { type: "fill", prompt: "A dog ___ bark.", answer: "can", options: ["can", "can't"] },
      { type: "fill", prompt: "A cat ___ swim well.", answer: "can't", options: ["can", "can't"] },
      { type: "fill", prompt: "A rabbit ___ jump.", answer: "can", options: ["can", "can't"] }
    ],
    quiz: [
      { q: "A monkey ___ climb.", a: "can", opts: ["can", "can't"] },
      { q: "A cow ___ fly.", a: "can't", opts: ["can", "can't"] },
      { q: "A duck ___ swim.", a: "can", opts: ["can", "can't"] },
      { q: "A snake ___ walk.", a: "can't", opts: ["can", "can't"] },
      { q: "A horse ___ run.", a: "can", opts: ["can", "can't"] }
    ]
  },
  {
    id: 8,
    name: "Imperatives",
    icon: "👆",
    color: "#ff6fb5",
    learn: `
      <h3>Do This! 👆</h3>
      <p>Imperatives tell someone to <b>do</b> something.</p>
      <div class="learn-example"><span class="emoji">🚪</span> <b>Open</b> the door.</div>
      <div class="learn-example"><span class="emoji">🪑</span> <b>Sit</b> down.</div>
      <div class="learn-example"><span class="emoji">👂</span> <b>Listen</b> carefully.</div>
      <p>👉 Just use the action word!</p>
    `,
    exercises: [
      { type: "match", pairs: [
        { emoji: "🚪", text: "Open the door" },
        { emoji: "🪑", text: "Sit down" },
        { emoji: "👂", text: "Listen" },
        { emoji: "📖", text: "Read the book" }
      ]},
      { type: "match", pairs: [
        { emoji: "✏️", text: "Write your name" },
        { emoji: "🖐️", text: "Stand up" },
        { emoji: "👀", text: "Look here" },
        { emoji: "🍽️", text: "Eat your food" }
      ]}
    ],
    quiz: [
      { q: "___ the window. (🪟)", a: "Close", opts: ["Close", "Closing", "Closes"] },
      { q: "___ down. (🪑)", a: "Sit", opts: ["Sit", "Sits", "Sitting"] },
      { q: "___ your name. (✏️)", a: "Write", opts: ["Write", "Writes", "Writing"] },
      { q: "___ up. (🖐️)", a: "Stand", opts: ["Stand", "Stands", "Standing"] },
      { q: "___ the book. (📖)", a: "Open", opts: ["Open", "Opens", "Opening"] }
    ]
  },
  {
    id: 9,
    name: "Prepositions of Place",
    icon: "📦",
    color: "#81c784",
    learn: `
      <h3>Where Is It? 📍</h3>
      <p><b>In</b> = inside something.</p>
      <div class="learn-example"><span class="emoji">🐱📦</span> The cat is <b>in</b> the box.</div>
      <p><b>On</b> = on top of something.</p>
      <div class="learn-example"><span class="emoji">📚🪑</span> The book is <b>on</b> the chair.</div>
      <p><b>Under</b> = below something.</p>
      <div class="learn-example"><span class="emoji">🐶🪑</span> The dog is <b>under</b> the chair.</div>
    `,
    exercises: [
      { type: "fill", prompt: "The cat is ___ the box. 🐱📦", answer: "in", options: ["in", "on", "under"] },
      { type: "fill", prompt: "The book is ___ the table. 📚🪵", answer: "on", options: ["in", "on", "under"] },
      { type: "fill", prompt: "The ball is ___ the chair. ⚽🪑", answer: "under", options: ["in", "on", "under"] },
      { type: "fill", prompt: "The apple is ___ the basket. 🍎🧺", answer: "in", options: ["in", "on", "under"] },
      { type: "fill", prompt: "The hat is ___ my head. 🎩👦", answer: "on", options: ["in", "on", "under"] }
    ],
    quiz: [
      { q: "The fish is ___ the water. 🐟💧", a: "in", opts: ["in", "on", "under"] },
      { q: "The cup is ___ the table. ☕🪵", a: "on", opts: ["in", "on", "under"] },
      { q: "The shoes are ___ the bed. 👟🛏️", a: "under", opts: ["in", "on", "under"] },
      { q: "The toy is ___ the box. 🧸📦", a: "in", opts: ["in", "on", "under"] },
      { q: "The picture is ___ the wall. 🖼️🧱", a: "on", opts: ["in", "on", "under"] }
    ]
  },
  {
    id: 10,
    name: "There is / There are",
    icon: "🔢",
    color: "#ffd54f",
    learn: `
      <h3>How Many? 🔢</h3>
      <p>Use <b>there is</b> for <b>one</b> thing.</p>
      <div class="learn-example"><span class="emoji">🍎</span> <b>There is</b> an apple.</div>
      <p>Use <b>there are</b> for <b>many</b> things.</p>
      <div class="learn-example"><span class="emoji">🍎🍎🍎</span> <b>There are</b> three apples.</div>
    `,
    exercises: [
      { type: "fill", prompt: "___ a cat. 🐱", answer: "There is", options: ["There is", "There are"] },
      { type: "fill", prompt: "___ three dogs. 🐶🐶🐶", answer: "There are", options: ["There is", "There are"] },
      { type: "fill", prompt: "___ a book. 📖", answer: "There is", options: ["There is", "There are"] },
      { type: "fill", prompt: "___ five birds. 🐦🐦🐦🐦🐦", answer: "There are", options: ["There is", "There are"] },
      { type: "fill", prompt: "___ a ball. ⚽", answer: "There is", options: ["There is", "There are"] }
    ],
    quiz: [
      { q: "___ two stars. ⭐⭐", a: "There are", opts: ["There is", "There are"] },
      { q: "___ a sun. ☀️", a: "There is", opts: ["There is", "There are"] },
      { q: "___ four flowers. 🌸🌸🌸🌸", a: "There are", opts: ["There is", "There are"] },
      { q: "___ a moon. 🌙", a: "There is", opts: ["There is", "There are"] },
      { q: "___ six fish. 🐟🐟🐟🐟🐟🐟", a: "There are", opts: ["There is", "There are"] }
    ]
  },
  {
    id: 11,
    name: "My / Your / His / Her",
    icon: "👨‍👩‍👧",
    color: "#ba68c8",
    learn: `
      <h3>Whose Is It? 🎁</h3>
      <p><b>My</b> = belongs to me.</p>
      <div class="learn-example"><span class="emoji">👦📖</span> <b>My</b> book.</div>
      <p><b>Your</b> = belongs to you.</p>
      <div class="learn-example"><span class="emoji">👉📖</span> <b>Your</b> book.</div>
      <p><b>His</b> = belongs to a boy/man.</p>
      <div class="learn-example"><span class="emoji">👦🎈</span> <b>His</b> balloon.</div>
      <p><b>Her</b> = belongs to a girl/woman.</p>
      <div class="learn-example"><span class="emoji">👧🎀</span> <b>Her</b> ribbon.</div>
    `,
    exercises: [
      { type: "fill", prompt: "I have a toy. It is ___ toy.", answer: "my", options: ["my", "your", "his", "her"] },
      { type: "fill", prompt: "You have a book. It is ___ book.", answer: "your", options: ["my", "your", "his", "her"] },
      { type: "fill", prompt: "He has a ball. It is ___ ball.", answer: "his", options: ["my", "your", "his", "her"] },
      { type: "fill", prompt: "She has a doll. It is ___ doll.", answer: "her", options: ["my", "your", "his", "her"] },
      { type: "fill", prompt: "The boy has a hat. It is ___ hat.", answer: "his", options: ["my", "your", "his", "her"] }
    ],
    quiz: [
      { q: "I have a pen. It is ___ pen.", a: "my", opts: ["my", "your", "his", "her"] },
      { q: "You have a cup. It is ___ cup.", a: "your", opts: ["my", "your", "his", "her"] },
      { q: "She has a cat. It is ___ cat.", a: "her", opts: ["my", "your", "his", "her"] },
      { q: "He has a bike. It is ___ bike.", a: "his", opts: ["my", "your", "his", "her"] },
      { q: "The girl has a flower. It is ___ flower.", a: "her", opts: ["my", "your", "his", "her"] }
    ]
  },
  {
    id: 12,
    name: "What / Who / Where",
    icon: "❓",
    color: "#ef5350",
    learn: `
      <h3>Ask Questions! ❓</h3>
      <p><b>What</b> = asks about a thing.</p>
      <div class="learn-example"><b>What</b> is this? → It's a ball. ⚽</div>
      <p><b>Who</b> = asks about a person.</p>
      <div class="learn-example"><b>Who</b> is he? → He is Tom. 👦</div>
      <p><b>Where</b> = asks about a place.</p>
      <div class="learn-example"><b>Where</b> is the cat? → Under the table. 🐱</div>
    `,
    exercises: [
      { type: "fill", prompt: "___ is this? (a thing)", answer: "What", options: ["What", "Who", "Where"] },
      { type: "fill", prompt: "___ is she? (a person)", answer: "Who", options: ["What", "Who", "Where"] },
      { type: "fill", prompt: "___ is my bag? (a place)", answer: "Where", options: ["What", "Who", "Where"] },
      { type: "fill", prompt: "___ is your name?", answer: "What", options: ["What", "Who", "Where"] },
      { type: "fill", prompt: "___ is the dog? (under the bed)", answer: "Where", options: ["What", "Who", "Where"] }
    ],
    quiz: [
      { q: "___ is this? (an apple)", a: "What", opts: ["What", "Who", "Where"] },
      { q: "___ is your teacher?", a: "Who", opts: ["What", "Who", "Where"] },
      { q: "___ do you live?", a: "Where", opts: ["What", "Who", "Where"] },
      { q: "___ is that? (a bird)", a: "What", opts: ["What", "Who", "Where"] },
      { q: "___ is the ball? (on the table)", a: "Where", opts: ["What", "Who", "Where"] }
    ]
  }
];

// ---------- STATE ----------
const STORAGE_KEY = "myFirstGrammarProgress_v1";
let state = loadState();

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch(e) {}
  return {
    completed: {},     // { topicId: starsEarned }
    totalStars: 0,
    correctAnswers: 0,
    totalAnswers: 0
  };
}
function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch(e) {}
}

// ---------- CURRENT TOPIC STATE ----------
let currentTopicId = null;
let currentExerciseIdx = 0;
let currentQuizIdx = 0;
let quizScore = 0;
let selectedAnswer = null;

// ---------- SOUND (Web Audio API) ----------
let audioCtx = null;
function beep(freq = 600, duration = 0.12, type = "sine", vol = 0.1) {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.value = vol;
    osc.connect(gain); gain.connect(audioCtx.destination);
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.stop(audioCtx.currentTime + duration);
  } catch(e) {}
}
function soundCorrect() { beep(800, 0.1); setTimeout(() => beep(1200, 0.15), 100); }
function soundWrong() { beep(200, 0.2, "sawtooth", 0.08); }
function soundClick() { beep(500, 0.05, "square", 0.05); }
function soundWin() {
  [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => beep(f, 0.15), i * 120));
}

// ---------- CONFETTI ----------
function fireConfetti() {
  if (typeof confetti !== "function") return;
  confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
}
function fireBigConfetti() {
  if (typeof confetti !== "function") return;
  const end = Date.now() + 1500;
  (function frame() {
    confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 } });
    confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 } });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

// ---------- MASCOT ----------
const mascot = document.getElementById("mascot");
const mascotBubble = document.getElementById("mascot-bubble");
let mascotTimer = null;
function mascotSay(text, duration = 3500) {
  mascotBubble.textContent = text;
  mascotBubble.classList.remove("hidden");
  clearTimeout(mascotTimer);
  mascotTimer = setTimeout(() => mascotBubble.classList.add("hidden"), duration);
}

// ---------- NAVIGATION ----------
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (pageId === "page-topics") renderTopicsMenu();
  if (pageId === "page-progress") renderProgressPage();
}

document.getElementById("nav-home").addEventListener("click", () => { soundClick(); showPage("page-home"); });
document.getElementById("nav-topics").addEventListener("click", () => { soundClick(); showPage("page-topics"); });
document.getElementById("nav-progress").addEventListener("click", () => { soundClick(); showPage("page-progress"); });
document.getElementById("start-btn").addEventListener("click", () => {
  soundClick();
  mascotSay("Let's learn! 📚");
  showPage("page-topics");
});

// ---------- TOPICS MENU ----------
function renderTopicsMenu() {
  const grid = document.getElementById("topics-grid");
  grid.innerHTML = "";
  TOPICS.forEach((topic, idx) => {
    const isUnlocked = true;
    const isCompleted = !!state.completed[topic.id];
    const card = document.createElement("div");
    card.className = "topic-card" + (isUnlocked ? "" : " locked") + (isCompleted ? " completed" : "");
    card.style.borderColor = topic.color;
    card.innerHTML = `
      <div class="topic-icon">${topic.icon}</div>
      <div class="topic-name">${topic.name}</div>
      ${isCompleted ? `<div class="topic-stars">${"⭐".repeat(state.completed[topic.id])}</div><div class="check-icon">✅</div>` : ""}
      ${!isUnlocked ? `<div class="lock-icon">🔒</div>` : ""}
    `;
    if (isUnlocked) {
      card.addEventListener("click", () => {
        soundClick();
        openTopic(topic.id);
      });
    } else {
      card.addEventListener("click", () => {
        mascotSay("Complete the previous topic first! 🔒");
      });
    }
    grid.appendChild(card);
  });
}

// Unlock all / reset
document.getElementById("unlock-all-btn").addEventListener("click", () => {
  if (confirm("Unlock all topics? (Parent/Teacher)")) {
    TOPICS.forEach(t => { if (!state.completed[t.id]) state.completed[t.id] = 0; });
    saveState();
    renderTopicsMenu();
    updateStarsDisplay();
    mascotSay("All topics unlocked! 🔓");
  }
});
document.getElementById("reset-progress-btn").addEventListener("click", () => {
  if (confirm("Reset ALL progress? This cannot be undone!")) {
    state = { completed: {}, totalStars: 0, correctAnswers: 0, totalAnswers: 0 };
    saveState();
    renderTopicsMenu();
    updateStarsDisplay();
    mascotSay("Progress reset! 🔄");
  }
});

// ---------- OPEN TOPIC ----------
function openTopic(id) {
  currentTopicId = id;
  const topic = TOPICS.find(t => t.id === id);
  document.getElementById("topic-title").textContent = `${topic.icon} ${topic.name}`;
  document.getElementById("learn-content").innerHTML = topic.learn;

  // Reset tabs
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.querySelector('.tab[data-tab="learn"]').classList.add("active");
  document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
  document.getElementById("tab-learn").classList.add("active");

  // Nav buttons
  document.getElementById("prev-topic-btn").disabled = id === 1;
  document.getElementById("next-topic-btn").disabled = id === TOPICS.length;

  mascotSay(`Let's learn about "${topic.name}"! 🎉`);
  showPage("page-topic");
}

document.getElementById("back-to-topics").addEventListener("click", () => { soundClick(); showPage("page-topics"); });
document.getElementById("prev-topic-btn").addEventListener("click", () => {
  if (currentTopicId > 1) { soundClick(); openTopic(currentTopicId - 1); }
});
document.getElementById("next-topic-btn").addEventListener("click", () => {
  if (currentTopicId < TOPICS.length) { soundClick(); openTopic(currentTopicId + 1); }
});

// ---------- TABS ----------
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    soundClick();
    const tabName = tab.dataset.tab;
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
    document.getElementById("tab-" + tabName).classList.add("active");
    if (tabName === "practice") startPractice();
    if (tabName === "quiz") startQuiz();
  });
});
document.getElementById("go-practice-btn").addEventListener("click", () => {
  soundClick();
  document.querySelector('.tab[data-tab="practice"]').click();
});

// ---------- PRACTICE ----------
function startPractice() {
  currentExerciseIdx = 0;
  selectedAnswer = null;
  document.getElementById("practice-feedback").textContent = "";
  document.getElementById("practice-feedback").className = "feedback";
  document.getElementById("check-answer-btn").classList.remove("hidden");
  document.getElementById("next-exercise-btn").classList.add("hidden");
  renderExercise();
}

function renderExercise() {
  const topic = TOPICS.find(t => t.id === currentTopicId);
  const ex = topic.exercises[currentExerciseIdx];
  const area = document.getElementById("practice-area");
  selectedAnswer = null;

  if (ex.type === "fill") {
    area.innerHTML = `
      <div class="exercise-prompt">Pick the right word! 🎯</div>
      <div class="fill-blank">${ex.prompt.replace("___", '<span class="blank" id="blank-slot">?</span>')}</div>
      <div class="exercise-options" id="options"></div>
    `;
    const opts = document.getElementById("options");
    ex.options.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.textContent = opt;
      btn.addEventListener("click", () => {
        soundClick();
        selectedAnswer = opt;
        opts.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
        document.getElementById("blank-slot").textContent = opt;
      });
      opts.appendChild(btn);
    });
  } else if (ex.type === "nearfar") {
    area.innerHTML = `
      <div class="exercise-prompt">Which word fits? 🎯</div>
      <div class="exercise-visual">${ex.prompt}</div>
      <div class="exercise-options" id="options"></div>
    `;
    const opts = document.getElementById("options");
    ["This", "That", "These", "Those"].filter(o => o === "This" || o === "That" || o === ex.answer).forEach(opt => {
      // Simpler: always show This/That or These/Those
    });
    // Show two options based on singular/plural
    const isPlural = ex.answer === "These" || ex.answer === "Those";
    const choices = isPlural ? ["These", "Those"] : ["This", "That"];
    choices.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.textContent = opt;
      btn.addEventListener("click", () => {
        soundClick();
        selectedAnswer = opt;
        opts.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));
        btn.classList.add("selected");
      });
      opts.appendChild(btn);
    });
  } else if (ex.type === "match") {
    area.innerHTML = `
      <div class="exercise-prompt">Match the picture with the sentence! 🎯</div>
      <div class="match-grid" id="match-grid"></div>
    `;
    buildMatchingGame(ex.pairs);
  }
}

// Matching game
let matchState = { selectedEmoji: null, matchedCount: 0, total: 0 };
function buildMatchingGame(pairs) {
  matchState = { selectedEmoji: null, matchedCount: 0, total: pairs.length };
  const grid = document.getElementById("match-grid");
  grid.innerHTML = "";
  // Shuffle
  const emojis = [...pairs].sort(() => Math.random() - 0.5);
  const texts = [...pairs].sort(() => Math.random() - 0.5);
  emojis.forEach(p => {
    const card = document.createElement("div");
    card.className = "match-card";
    card.dataset.type = "emoji";
    card.dataset.value = p.emoji;
    card.innerHTML = `<span class="match-emoji">${p.emoji}</span>`;
    card.addEventListener("click", () => handleMatchClick(card, "emoji", p.emoji));
    grid.appendChild(card);
  });
  texts.forEach(p => {
    const card = document.createElement("div");
    card.className = "match-card";
    card.dataset.type = "text";
    card.dataset.value = p.text;
    card.textContent = p.text;
    card.addEventListener("click", () => handleMatchClick(card, "text", p.text));
    grid.appendChild(card);
  });
}
function handleMatchClick(card, type, value) {
  if (card.classList.contains("matched")) return;
  soundClick();
  if (matchState.selectedEmoji === null) {
    matchState.selectedEmoji = { card, type, value };
    card.classList.add("selected");
  } else {
    const prev = matchState.selectedEmoji;
    if (prev.type === type) {
      prev.card.classList.remove("selected");
      matchState.selectedEmoji = { card, type, value };
      card.classList.add("selected");
      return;
    }
    // Check match
    const topic = TOPICS.find(t => t.id === currentTopicId);
    const ex = topic.exercises[currentExerciseIdx];
    const pair = ex.pairs.find(p =>
      (p.emoji === prev.value && p.text === value) ||
      (p.text === prev.value && p.emoji === value)
    );
    if (pair) {
      prev.card.classList.remove("selected");
      prev.card.classList.add("matched");
      card.classList.add("matched");
      matchState.matchedCount++;
      soundCorrect();
      if (matchState.matchedCount === matchState.total) {
        document.getElementById("practice-feedback").textContent = "Great job! 🎉 All matched!";
        document.getElementById("practice-feedback").className = "feedback correct";
        fireConfetti();
        document.getElementById("check-answer-btn").classList.add("hidden");
        document.getElementById("next-exercise-btn").classList.remove("hidden");
      }
    } else {
      prev.card.classList.remove("selected");
      card.classList.add("selected");
      setTimeout(() => card.classList.remove("selected"), 400);
      document.getElementById("practice-feedback").textContent = "Try again! 🙂";
      document.getElementById("practice-feedback").className = "feedback wrong";
      soundWrong();
    }
    matchState.selectedEmoji = null;
  }
}

// Check answer
document.getElementById("check-answer-btn").addEventListener("click", () => {
  const topic = TOPICS.find(t => t.id === currentTopicId);
  const ex = topic.exercises[currentExerciseIdx];
  const feedback = document.getElementById("practice-feedback");

  if (ex.type === "match") return; // handled in matching game

  if (selectedAnswer === null) {
    feedback.textContent = "Pick an answer first! 👆";
    feedback.className = "feedback wrong";
    return;
  }

  state.totalAnswers++;
  if (selectedAnswer === ex.answer) {
    feedback.textContent = "Correct! 🎉 Great job!";
    feedback.className = "feedback correct";
    soundCorrect();
    fireConfetti();
    state.correctAnswers++;
    document.getElementById("check-answer-btn").classList.add("hidden");
    document.getElementById("next-exercise-btn").classList.remove("hidden");
    // Highlight correct
    document.querySelectorAll(".option-btn").forEach(b => {
      if (b.textContent === ex.answer) b.classList.add("correct");
    });
  } else {
    feedback.textContent = "Try again! 🙂";
    feedback.className = "feedback wrong";
    soundWrong();
    document.querySelectorAll(".option-btn").forEach(b => {
      if (b.textContent === selectedAnswer) b.classList.add("wrong");
    });
    selectedAnswer = null;
    setTimeout(() => {
      document.querySelectorAll(".option-btn.wrong").forEach(b => b.classList.remove("wrong"));
    }, 600);
  }
  saveState();
  updateStarsDisplay();
});

document.getElementById("next-exercise-btn").addEventListener("click", () => {
  soundClick();
  const topic = TOPICS.find(t => t.id === currentTopicId);
  currentExerciseIdx++;
  if (currentExerciseIdx >= topic.exercises.length) {
    mascotSay("Practice done! Now try the quiz! 📝");
    document.querySelector('.tab[data-tab="quiz"]').click();
    return;
  }
  document.getElementById("practice-feedback").textContent = "";
  document.getElementById("check-answer-btn").classList.remove("hidden");
  document.getElementById("next-exercise-btn").classList.add("hidden");
  renderExercise();
});

// ---------- QUIZ ----------
function startQuiz() {
  currentQuizIdx = 0;
  quizScore = 0;
  document.getElementById("quiz-feedback").textContent = "";
  document.getElementById("quiz-feedback").className = "feedback";
  document.getElementById("quiz-next-btn").classList.add("hidden");
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const topic = TOPICS.find(t => t.id === currentTopicId);
  const q = topic.quiz[currentQuizIdx];
  const area = document.getElementById("quiz-area");
  area.innerHTML = `
    <div class="quiz-progress">Question ${currentQuizIdx + 1} of ${topic.quiz.length}</div>
    <div class="quiz-question">${q.q}</div>
    <div class="exercise-options" id="quiz-options"></div>
  `;
  const opts = document.getElementById("quiz-options");
  q.opts.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt;
    btn.addEventListener("click", () => handleQuizAnswer(btn, opt, q.a));
    opts.appendChild(btn);
  });
}

function handleQuizAnswer(btn, answer, correct) {
  const feedback = document.getElementById("quiz-feedback");
  state.totalAnswers++;
  if (answer === correct) {
    quizScore++;
    state.correctAnswers++;
    feedback.textContent = "Correct! 🎉";
    feedback.className = "feedback correct";
    btn.classList.add("correct");
    soundCorrect();
    fireConfetti();
  } else {
    feedback.textContent = "Oops! The answer is: " + correct;
    feedback.className = "feedback wrong";
    btn.classList.add("wrong");
    soundWrong();
    // Show correct one
    document.querySelectorAll("#quiz-options .option-btn").forEach(b => {
      if (b.textContent === correct) b.classList.add("correct");
    });
  }
  saveState();
  updateStarsDisplay();
  // Disable all buttons
  document.querySelectorAll("#quiz-options .option-btn").forEach(b => b.disabled = true);
  document.getElementById("quiz-next-btn").classList.remove("hidden");
}

document.getElementById("quiz-next-btn").addEventListener("click", () => {
  soundClick();
  const topic = TOPICS.find(t => t.id === currentTopicId);
  currentQuizIdx++;
  if (currentQuizIdx >= topic.quiz.length) {
    finishQuiz();
    return;
  }
  document.getElementById("quiz-feedback").textContent = "";
  document.getElementById("quiz-next-btn").classList.add("hidden");
  renderQuizQuestion();
});

function finishQuiz() {
  const topic = TOPICS.find(t => t.id === currentTopicId);
  const stars = quizScore >= 5 ? 3 : quizScore >= 3 ? 2 : quizScore >= 1 ? 1 : 0;

  // Save completion
  const prevStars = state.completed[topic.id] || 0;
  if (stars > prevStars) state.completed[topic.id] = stars;
  const starGain = Math.max(0, stars - prevStars);
  state.totalStars += starGain;
  saveState();
  updateStarsDisplay();

  // Show modal
  const modal = document.getElementById("modal");
  const body = document.getElementById("modal-body");
  body.innerHTML = `
    <h2>Quiz Done! 🎉</h2>
    <p>You got ${quizScore} out of ${topic.quiz.length} right!</p>
    <div class="stars-earned">${"⭐".repeat(stars)}${"☆".repeat(3 - stars)}</div>
    <p>${stars === 3 ? "PERFECT! 🏆" : stars >= 1 ? "Great job! 👏" : "Try again! You can do it! 💪"}</p>
  `;
  modal.classList.remove("hidden");
  if (stars >= 2) { soundWin(); fireBigConfetti(); }
  else fireConfetti();

  mascotSay(stars === 3 ? "Perfect! You're a star! 🌟" : "Good try! Keep going! 💪");
}

document.getElementById("modal-close").addEventListener("click", () => {
  soundClick();
  document.getElementById("modal").classList.add("hidden");
});

// ---------- PROGRESS PAGE ----------
function renderProgressPage() {
  const completedCount = Object.keys(state.completed).filter(k => state.completed[k] > 0).length;
  document.getElementById("completed-count").textContent = completedCount;
  document.getElementById("total-stars-big").textContent = state.totalStars;
  const accuracy = state.totalAnswers > 0 ? Math.round((state.correctAnswers / state.totalAnswers) * 100) : 0;
  document.getElementById("accuracy-display").textContent = accuracy + "%";

  const badges = document.getElementById("badges-grid");
  badges.innerHTML = "";
  TOPICS.forEach(t => {
    const stars = state.completed[t.id] || 0;
    const div = document.createElement("div");
    div.className = "badge" + (stars > 0 ? " earned" : "");
    div.innerHTML = `
      <span class="badge-icon">${stars > 0 ? t.icon : "🔒"}</span>
      <div>${t.name}</div>
      <div>${"⭐".repeat(stars)}${"☆".repeat(3 - stars)}</div>
    `;
    badges.appendChild(div);
  });

  // Diploma
  const diploma = document.getElementById("diploma");
  if (completedCount === 12) {
    diploma.classList.remove("hidden");
    document.getElementById("final-stars").textContent = state.totalStars;
  } else {
    diploma.classList.add("hidden");
  }
}

function updateStarsDisplay() {
  document.getElementById("total-stars").textContent = state.totalStars;
}

// ---------- INIT ----------
function init() {
  updateStarsDisplay();
  mascotSay("Hi! I'm Ollie! 🦉 Let's learn grammar!");
  // First-time welcome
  setTimeout(() => mascotSay("Tap Start Learning! 🚀"), 4000);
}
init();