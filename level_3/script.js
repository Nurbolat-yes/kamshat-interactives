/* =========================================================
   GRAMMAR EXPLORER - Level 3 - Main Script
   13 topics: tenses (past, present, future), comparatives,
   superlatives, much/many, must/mustn't
   All topics unlocked by default.
   ========================================================= */

// ---------- TOPIC DATA ----------
const TOPICS = [
  {
    id: 1,
    name: "Present Continuous — Affirmative",
    icon: "📖",
    color: "#0097a7",
    learn: `
      <h3>What's Happening NOW? 📖</h3>
      <p>We use <b>Present Continuous</b> for actions happening <b>right now</b>.</p>
      <p>Form: <b>am / is / are</b> + verb + <b>-ing</b></p>
      <div class="learn-example"><span class="emoji">👦📖</span> I <b>am reading</b> a book.</div>
      <div class="learn-example"><span class="emoji">👧⚽</span> She <b>is playing</b> football.</div>
      <div class="learn-example"><span class="emoji">👫🎵</span> They <b>are singing</b>.</div>
      <p>👉 <b>I</b> → am &nbsp;|&nbsp; <b>He/She/It</b> → is &nbsp;|&nbsp; <b>You/We/They</b> → are</p>
    `,
    exercises: [
      { type: "fill", prompt: "I ___ (read) a book now.", answer: "am reading", options: ["am reading", "is reading", "are reading"] },
      { type: "fill", prompt: "She ___ (play) the piano.", answer: "is playing", options: ["am playing", "is playing", "are playing"] },
      { type: "fill", prompt: "They ___ (watch) TV.", answer: "are watching", options: ["am watching", "is watching", "are watching"] },
      { type: "fill", prompt: "He ___ (run) fast.", answer: "is running", options: ["am running", "is running", "are running"] },
      { type: "match", pairs: [
        { emoji: "👦📖", text: "I am reading" },
        { emoji: "👧⚽", text: "She is playing" },
        { emoji: "👫🎵", text: "They are singing" },
        { emoji: "🐱😴", text: "It is sleeping" }
      ]}
    ],
    quiz: [
      { q: "We ___ (eat) lunch now.", a: "are eating", opts: ["am eating", "is eating", "are eating"] },
      { q: "My cat ___ (sleep) on the bed.", a: "is sleeping", opts: ["am sleeping", "is sleeping", "are sleeping"] },
      { q: "You ___ (study) English.", a: "are studying", opts: ["am studying", "is studying", "are studying"] },
      { q: "Tom ___ (write) a letter.", a: "is writing", opts: ["am writing", "is writing", "are writing"] },
      { q: "The birds ___ (fly) in the sky.", a: "are flying", opts: ["am flying", "is flying", "are flying"] }
    ]
  },
  {
    id: 2,
    name: "Present Continuous — Questions & Negatives",
    icon: "❓",
    color: "#6a1b9a",
    learn: `
      <h3>Asking & Saying NO! ❓🚫</h3>
      <p><b>Questions:</b> Move am/is/are to the front.</p>
      <div class="learn-example"><span class="emoji">❓</span> <b>Are</b> you reading? → Yes, I am.</div>
      <div class="learn-example"><span class="emoji">❓</span> <b>Is</b> she playing? → No, she isn't.</div>
      <p><b>Negatives:</b> Add <b>not</b> (or <b>n't</b>) after am/is/are.</p>
      <div class="learn-example"><span class="emoji">🚫</span> I <b>am not</b> sleeping.</div>
      <div class="learn-example"><span class="emoji">🚫</span> He <b>isn't</b> (is not) running.</div>
      <div class="learn-example"><span class="emoji">🚫</span> They <b>aren't</b> (are not) eating.</div>
    `,
    exercises: [
      { type: "fill", prompt: "___ you reading? (question)", answer: "Are", options: ["Are", "Is", "Am"] },
      { type: "fill", prompt: "She ___ sleeping. (negative)", answer: "isn't", options: ["isn't", "aren't", "am not"] },
      { type: "fill", prompt: "___ he playing football?", answer: "Is", options: ["Are", "Is", "Am"] },
      { type: "fill", prompt: "They ___ watching TV.", answer: "aren't", options: ["isn't", "aren't", "am not"] },
      { type: "fill", prompt: "I ___ eating now.", answer: "am not", options: ["isn't", "aren't", "am not"] }
    ],
    quiz: [
      { q: "___ it raining?", a: "Is", opts: ["Are", "Is", "Am"] },
      { q: "We ___ going to school.", a: "aren't", opts: ["isn't", "aren't", "am not"] },
      { q: "___ they playing?", a: "Are", opts: ["Are", "Is", "Am"] },
      { q: "He ___ listening.", a: "isn't", opts: ["isn't", "aren't", "am not"] },
      { q: "___ you hungry?", a: "Are", opts: ["Are", "Is", "Am"] }
    ]
  },
  {
    id: 3,
    name: "Present Simple vs Present Continuous",
    icon: "⏰",
    color: "#ff6f00",
    learn: `
      <h3>Habit vs NOW! ⏰</h3>
      <p><b>Present Simple</b> = habits, routines, things we do often.</p>
      <div class="learn-example"><span class="emoji">🌞</span> I <b>play</b> football every Sunday.</div>
      <p><b>Present Continuous</b> = happening right now.</p>
      <div class="learn-example"><span class="emoji">⚽</span> I <b>am playing</b> football now.</div>
      <p>👉 Look for time clues: <b>every day, always, usually</b> → Simple &nbsp;|&nbsp; <b>now, right now, at the moment</b> → Continuous</p>
    `,
    exercises: [
      { type: "fill", prompt: "I ___ football every Sunday.", answer: "play", options: ["play", "am playing"] },
      { type: "fill", prompt: "I ___ football now.", answer: "am playing", options: ["play", "am playing"] },
      { type: "fill", prompt: "She always ___ her homework.", answer: "does", options: ["does", "is doing"] },
      { type: "fill", prompt: "Look! She ___ her homework.", answer: "is doing", options: ["does", "is doing"] },
      { type: "sort", prompt: "Sort each sentence! 🧺",
        buckets: [
          { label: "HABIT 🌞", accept: ["I drink milk every day", "She reads books", "They go to school"] },
          { label: "NOW ⚡", accept: ["I am drinking milk", "She is reading", "They are going"] }
        ],
        items: ["I drink milk every day", "I am drinking milk", "She reads books", "She is reading", "They go to school", "They are going"]
      }
    ],
    quiz: [
      { q: "He ___ to school every day.", a: "walks", opts: ["walks", "is walking"] },
      { q: "He ___ to school now.", a: "is walking", opts: ["walks", "is walking"] },
      { q: "We usually ___ pizza on Fridays.", a: "eat", opts: ["eat", "are eating"] },
      { q: "We ___ pizza right now.", a: "are eating", opts: ["eat", "are eating"] },
      { q: "My mum always ___ coffee.", a: "drinks", opts: ["drinks", "is drinking"] }
    ]
  },
  {
    id: 4,
    name: "Was / Were",
    icon: "🕰️",
    color: "#0288d1",
    learn: `
      <h3>In the PAST... 🕰️</h3>
      <p><b>Was</b> is the past of <b>am / is</b>.</p>
      <div class="learn-example"><span class="emoji">👦😊</span> I <b>was</b> happy yesterday.</div>
      <div class="learn-example"><span class="emoji">👧😴</span> She <b>was</b> tired.</div>
      <p><b>Were</b> is the past of <b>are</b>.</p>
      <div class="learn-example"><span class="emoji">👫🏖️</span> They <b>were</b> at the beach.</div>
      <div class="learn-example"><span class="emoji">👫🏫</span> We <b>were</b> at school.</div>
      <p>👉 <b>I / He / She / It</b> → was &nbsp;|&nbsp; <b>You / We / They</b> → were</p>
    `,
    exercises: [
      { type: "fill", prompt: "I ___ happy yesterday.", answer: "was", options: ["was", "were"] },
      { type: "fill", prompt: "They ___ at school.", answer: "were", options: ["was", "were"] },
      { type: "fill", prompt: "She ___ tired last night.", answer: "was", options: ["was", "were"] },
      { type: "fill", prompt: "We ___ at the park.", answer: "were", options: ["was", "were"] },
      { type: "match", pairs: [
        { emoji: "👦", text: "I was" },
        { emoji: "👧", text: "She was" },
        { emoji: "👫", text: "They were" },
        { emoji: "🐶", text: "It was" }
      ]}
    ],
    quiz: [
      { q: "He ___ at home yesterday.", a: "was", opts: ["was", "were"] },
      { q: "You ___ my best friend.", a: "were", opts: ["was", "were"] },
      { q: "The cat ___ hungry.", a: "was", opts: ["was", "were"] },
      { q: "We ___ happy.", a: "were", opts: ["was", "were"] },
      { q: "It ___ cold last week.", a: "was", opts: ["was", "were"] }
    ]
  },
  {
    id: 5,
    name: "Past Simple — Regular Verbs",
    icon: "🎬",
    color: "#2e7d32",
    learn: `
      <h3>Finished Actions 🎬</h3>
      <p>For most verbs, we add <b>-ed</b> to talk about the past.</p>
      <div class="learn-example"><span class="emoji">⚽</span> play → <b>played</b></div>
      <div class="learn-example"><span class="emoji">👀</span> watch → <b>watched</b></div>
      <div class="learn-example"><span class="emoji">🎵</span> dance → <b>danced</b> (just add -d)</div>
      <div class="learn-example"><span class="emoji">😄</span> study → <b>studied</b> (y → ied)</div>
      <p>👉 We use past simple for finished actions in the past.</p>
    `,
    exercises: [
      { type: "fill", prompt: "Yesterday I ___ (play) football.", answer: "played", options: ["play", "played", "playing"] },
      { type: "fill", prompt: "She ___ (watch) TV last night.", answer: "watched", options: ["watch", "watched", "watching"] },
      { type: "fill", prompt: "We ___ (dance) at the party.", answer: "danced", options: ["dance", "danced", "dancing"] },
      { type: "fill", prompt: "He ___ (study) English yesterday.", answer: "studied", options: ["study", "studied", "studying"] },
      { type: "match", pairs: [
        { emoji: "⚽", text: "play → played" },
        { emoji: "👀", text: "watch → watched" },
        { emoji: "🎵", text: "dance → danced" },
        { emoji: "📚", text: "study → studied" }
      ]}
    ],
    quiz: [
      { q: "I ___ (clean) my room.", a: "cleaned", opts: ["clean", "cleaned", "cleaning"] },
      { q: "She ___ (cook) dinner.", a: "cooked", opts: ["cook", "cooked", "cooking"] },
      { q: "They ___ (play) games.", a: "played", opts: ["play", "played", "playing"] },
      { q: "He ___ (cry) yesterday.", a: "cried", opts: ["cry", "cried", "crying"] },
      { q: "We ___ (walk) to school.", a: "walked", opts: ["walk", "walked", "walking"] }
    ]
  },
  {
    id: 6,
    name: "Past Simple — Irregular Verbs",
    icon: "🎲",
    color: "#e53935",
    learn: `
      <h3>Special Past Verbs! 🎲</h3>
      <p>Some verbs don't follow the -ed rule. They have special past forms!</p>
      <div class="learn-example"><span class="emoji">🚶</span> go → <b>went</b></div>
      <div class="learn-example"><span class="emoji">🍎</span> eat → <b>ate</b></div>
      <div class="learn-example"><span class="emoji">👀</span> see → <b>saw</b></div>
      <div class="learn-example"><span class="emoji">📖</span> read → <b>read</b> (same spelling, different sound!)</div>
      <div class="learn-example"><span class="emoji">🏃</span> run → <b>ran</b></div>
      <p>👉 You have to learn these by heart!</p>
    `,
    exercises: [
      { type: "fill", prompt: "Yesterday I ___ (go) to the park.", answer: "went", options: ["go", "went", "gone"] },
      { type: "fill", prompt: "She ___ (eat) an apple.", answer: "ate", options: ["eat", "ate", "eaten"] },
      { type: "fill", prompt: "I ___ (see) a bird.", answer: "saw", options: ["see", "saw", "seen"] },
      { type: "fill", prompt: "He ___ (run) fast.", answer: "ran", options: ["run", "ran", "running"] },
      { type: "match", pairs: [
        { emoji: "🚶", text: "go → went" },
        { emoji: "🍎", text: "eat → ate" },
        { emoji: "👀", text: "see → saw" },
        { emoji: "🏃", text: "run → ran" }
      ]}
    ],
    quiz: [
      { q: "I ___ (have) a good day.", a: "had", opts: ["have", "had", "having"] },
      { q: "She ___ (buy) a new book.", a: "bought", opts: ["buy", "bought", "buying"] },
      { q: "We ___ (make) a cake.", a: "made", opts: ["make", "made", "making"] },
      { q: "He ___ (come) home late.", a: "came", opts: ["come", "came", "coming"] },
      { q: "They ___ (take) the bus.", a: "took", opts: ["take", "took", "taken"] }
    ]
  },
  {
    id: 7,
    name: "Past Simple — Questions & Negatives",
    icon: "❌",
    color: "#ba68c8",
    learn: `
      <h3>Asking & Saying NO in the Past! ❌</h3>
      <p>Use <b>did</b> for questions and negatives.</p>
      <div class="learn-example"><span class="emoji">❓</span> <b>Did</b> you go? → Yes, I did.</div>
      <div class="learn-example"><span class="emoji">🚫</span> I <b>didn't</b> (did not) go.</div>
      <p>👉 After <b>did / didn't</b>, the verb stays in the <b>base form</b> (no -ed, no past form).</p>
      <div class="learn-example">✅ I didn't <b>go</b>. (not "didn't went")</div>
    `,
    exercises: [
      { type: "fill", prompt: "___ you go to school?", answer: "Did", options: ["Did", "Do", "Were"] },
      { type: "fill", prompt: "I ___ go to the party. (negative)", answer: "didn't", options: ["didn't", "don't", "wasn't"] },
      { type: "fill", prompt: "___ she eat breakfast?", answer: "Did", options: ["Did", "Does", "Was"] },
      { type: "fill", prompt: "They ___ watch TV.", answer: "didn't", options: ["didn't", "don't", "weren't"] },
      { type: "fill", prompt: "He ___ play football.", answer: "didn't", options: ["didn't", "doesn't", "wasn't"] }
    ],
    quiz: [
      { q: "___ they come?", a: "Did", opts: ["Did", "Do", "Were"] },
      { q: "I ___ see the film.", a: "didn't", opts: ["didn't", "don't", "wasn't"] },
      { q: "___ he finish?", a: "Did", opts: ["Did", "Does", "Was"] },
      { q: "We ___ go out.", a: "didn't", opts: ["didn't", "don't", "weren't"] },
      { q: "___ it rain?", a: "Did", opts: ["Did", "Does", "Was"] }
    ]
  },
  {
    id: 8,
    name: "Be Going To — Future Plans",
    icon: "📅",
    color: "#ffa000",
    learn: `
      <h3>Plans for the Future! 📅</h3>
      <p>Use <b>am / is / are going to</b> + verb for plans.</p>
      <div class="learn-example"><span class="emoji">👵</span> I <b>am going to</b> visit my grandma.</div>
      <div class="learn-example"><span class="emoji">⚽</span> He <b>is going to</b> play football.</div>
      <div class="learn-example"><span class="emoji">🏖️</span> We <b>are going to</b> the beach.</div>
      <p>👉 We use it for plans we've already decided.</p>
    `,
    exercises: [
      { type: "fill", prompt: "I ___ visit my grandma.", answer: "am going to", options: ["am going to", "is going to", "are going to"] },
      { type: "fill", prompt: "She ___ buy a new book.", answer: "is going to", options: ["am going to", "is going to", "are going to"] },
      { type: "fill", prompt: "They ___ play tennis.", answer: "are going to", options: ["am going to", "is going to", "are going to"] },
      { type: "fill", prompt: "We ___ watch a film.", answer: "are going to", options: ["am going to", "is going to", "are going to"] },
      { type: "match", pairs: [
        { emoji: "👵", text: "I am going to visit" },
        { emoji: "⚽", text: "He is going to play" },
        { emoji: "🏖️", text: "We are going to swim" },
        { emoji: "📚", text: "She is going to read" }
      ]}
    ],
    quiz: [
      { q: "I ___ study tonight.", a: "am going to", opts: ["am going to", "is going to", "are going to"] },
      { q: "Tom ___ cook dinner.", a: "is going to", opts: ["am going to", "is going to", "are going to"] },
      { q: "We ___ travel to Spain.", a: "are going to", opts: ["am going to", "is going to", "are going to"] },
      { q: "She ___ visit her friend.", a: "is going to", opts: ["am going to", "is going to", "are going to"] },
      { q: "They ___ have a party.", a: "are going to", opts: ["am going to", "is going to", "are going to"] }
    ]
  },
  {
    id: 9,
    name: "Will — Future",
    icon: "🚀",
    color: "#1a237e",
    learn: `
      <h3>Predictions & Promises! 🚀</h3>
      <p>Use <b>will</b> + verb for:</p>
      <p>• Predictions: <b>It will rain</b> tomorrow.</p>
      <p>• Promises: <b>I will help</b> you.</p>
      <p>• Quick decisions: <b>I'll have</b> the red one.</p>
      <div class="learn-example"><span class="emoji">🌧️</span> It <b>will</b> rain tomorrow.</div>
      <div class="learn-example"><span class="emoji">🤝</span> I <b>will</b> call you.</div>
      <p>👉 <b>Will</b> is the same for all subjects!</p>
    `,
    exercises: [
      { type: "fill", prompt: "I ___ help you.", answer: "will", options: ["will", "am", "is"] },
      { type: "fill", prompt: "It ___ rain tomorrow.", answer: "will", options: ["will", "is", "are"] },
      { type: "fill", prompt: "She ___ be a doctor.", answer: "will", options: ["will", "is", "are"] },
      { type: "fill", prompt: "They ___ win the game.", answer: "will", options: ["will", "are", "is"] },
      { type: "reorder", prompt: "Build the sentence: (will / tomorrow / come / I)", answer: "I will come tomorrow.", words: ["I", "will", "come", "tomorrow"] }
    ],
    quiz: [
      { q: "He ___ be 10 next year.", a: "will", opts: ["will", "is", "are"] },
      { q: "We ___ visit you.", a: "will", opts: ["will", "are", "is"] },
      { q: "It ___ be sunny.", a: "will", opts: ["will", "is", "are"] },
      { q: "They ___ pass the test.", a: "will", opts: ["will", "are", "is"] },
      { q: "I ___ always love you.", a: "will", opts: ["will", "am", "is"] }
    ]
  },
  {
    id: 10,
    name: "Comparatives",
    icon: "🏎️",
    color: "#ff6f00",
    learn: `
      <h3>Comparing Two Things! 🏎️</h3>
      <p>Use comparatives to compare <b>two</b> things. Add <b>-er</b> or use <b>more</b>.</p>
      <div class="learn-example"><span class="emoji">🐘🐭</span> An elephant is <b>bigger</b> than a mouse.</div>
      <div class="learn-example"><span class="emoji">🏎️🚲</span> A car is <b>faster</b> than a bike.</div>
      <div class="learn-example"><span class="emoji">📚📖</span> This book is <b>more interesting</b> than that one.</div>
      <p>👉 Short words: add <b>-er</b> (big → bigger). Long words: use <b>more</b> (beautiful → more beautiful).</p>
      <p>👉 Special: good → <b>better</b>, bad → <b>worse</b></p>
    `,
    exercises: [
      { type: "fill", prompt: "A car is ___ (fast) than a bike.", answer: "faster", options: ["fast", "faster", "more fast"] },
      { type: "fill", prompt: "My dog is ___ (big) than your cat.", answer: "bigger", options: ["big", "bigger", "more big"] },
      { type: "fill", prompt: "This book is ___ (interesting) than that one.", answer: "more interesting", options: ["interestinger", "more interesting", "interesting"] },
      { type: "fill", prompt: "She is ___ (good) at maths than me.", answer: "better", options: ["gooder", "better", "more good"] },
      { type: "fill", prompt: "Today is ___ (hot) than yesterday.", answer: "hotter", options: ["hot", "hotter", "more hot"] }
    ],
    quiz: [
      { q: "An elephant is ___ (heavy) than a cat.", a: "heavier", opts: ["heavy", "heavier", "more heavy"] },
      { q: "This film is ___ (good) than the last one.", a: "better", opts: ["gooder", "better", "more good"] },
      { q: "My hair is ___ (long) than yours.", a: "longer", opts: ["long", "longer", "more long"] },
      { q: "English is ___ (easy) than maths.", a: "easier", opts: ["easy", "easier", "more easy"] },
      { q: "This bag is ___ (expensive) than that one.", a: "more expensive", opts: ["expensiver", "more expensive", "expensive"] }
    ]
  },
  {
    id: 11,
    name: "Superlatives",
    icon: "👑",
    color: "#6a1b9a",
    learn: `
      <h3>The Best of All! 👑</h3>
      <p>Use superlatives to say something is <b>the most</b> in a group.</p>
      <div class="learn-example"><span class="emoji">🐘🐭🐶</span> The elephant is <b>the biggest</b> animal.</div>
      <div class="learn-example"><span class="emoji">🏎️🚲🚶</span> The car is <b>the fastest</b>.</div>
      <p>👉 Short words: <b>the</b> + word + <b>-est</b> (the biggest)</p>
      <p>👉 Long words: <b>the most</b> + word (the most beautiful)</p>
      <p>👉 Special: good → <b>the best</b>, bad → <b>the worst</b></p>
    `,
    exercises: [
      { type: "fill", prompt: "This is ___ (good) cake in the world!", answer: "the best", options: ["the goodest", "the best", "the most good"] },
      { type: "fill", prompt: "He is ___ (tall) boy in the class.", answer: "the tallest", options: ["the tall", "the tallest", "the most tall"] },
      { type: "fill", prompt: "This is ___ (beautiful) picture.", answer: "the most beautiful", options: ["the beautifullest", "the most beautiful", "the beautifulest"] },
      { type: "fill", prompt: "She is ___ (smart) girl.", answer: "the smartest", options: ["the smart", "the smartest", "the most smart"] },
      { type: "fill", prompt: "That was ___ (bad) film ever.", answer: "the worst", options: ["the baddest", "the worst", "the most bad"] }
    ],
    quiz: [
      { q: "Jupiter is ___ (big) planet.", a: "the biggest", opts: ["the big", "the biggest", "the most big"] },
      { q: "She is ___ (nice) person I know.", a: "the nicest", opts: ["the nice", "the nicest", "the most nice"] },
      { q: "This is ___ (interesting) book.", a: "the most interesting", opts: ["the interestinger", "the most interesting", "the interestest"] },
      { q: "He runs ___ (fast) in the class.", a: "the fastest", opts: ["the fast", "the fastest", "the most fast"] },
      { q: "That was ___ (good) day ever!", a: "the best", opts: ["the goodest", "the best", "the most good"] }
    ]
  },
  {
    id: 12,
    name: "Much / Many",
    icon: "🧮",
    color: "#0097a7",
    learn: `
      <h3>How Much? How Many? 🧮</h3>
      <p>Use <b>much</b> with <b>uncountable</b> nouns (things we can't count).</p>
      <div class="learn-example"><span class="emoji">💧</span> How <b>much</b> water?</div>
      <div class="learn-example"><span class="emoji">💰</span> How <b>much</b> money?</div>
      <p>Use <b>many</b> with <b>countable</b> nouns (things we can count).</p>
      <div class="learn-example"><span class="emoji">🍎</span> How <b>many</b> apples?</div>
      <div class="learn-example"><span class="emoji">👫</span> How <b>many</b> friends?</div>
    `,
    exercises: [
      { type: "fill", prompt: "How ___ water do you have?", answer: "much", options: ["much", "many"] },
      { type: "fill", prompt: "How ___ apples are there?", answer: "many", options: ["much", "many"] },
      { type: "fill", prompt: "How ___ money do you need?", answer: "much", options: ["much", "many"] },
      { type: "fill", prompt: "How ___ books did you read?", answer: "many", options: ["much", "many"] },
      { type: "sort", prompt: "Sort into MUCH or MANY! 🧺",
        buckets: [
          { label: "MUCH 💧", accept: ["water", "money", "time", "sugar", "rice"] },
          { label: "MANY 🍎", accept: ["apples", "books", "friends", "cars", "days"] }
        ],
        items: ["water", "apples", "money", "books", "time", "friends", "sugar", "cars"]
      }
    ],
    quiz: [
      { q: "How ___ milk is there?", a: "much", opts: ["much", "many"] },
      { q: "How ___ students are here?", a: "many", opts: ["much", "many"] },
      { q: "How ___ time do we have?", a: "much", opts: ["much", "many"] },
      { q: "How ___ cakes did you eat?", a: "many", opts: ["much", "many"] },
      { q: "How ___ sugar do you want?", a: "much", opts: ["much", "many"] }
    ]
  },
  {
    id: 13,
    name: "Must / Mustn't",
    icon: "🚦",
    color: "#e53935",
    learn: `
      <h3>Rules! 🚦</h3>
      <p>Use <b>must</b> to say something is <b>necessary</b> or a rule.</p>
      <div class="learn-example"><span class="emoji">📚</span> You <b>must</b> do your homework.</div>
      <div class="learn-example"><span class="emoji">🦷</span> You <b>must</b> brush your teeth.</div>
      <p>Use <b>mustn't</b> to say something is <b>not allowed</b>.</p>
      <div class="learn-example"><span class="emoji">🚫🏃</span> You <b>mustn't</b> run in the corridor.</div>
      <div class="learn-example"><span class="emoji">🚫🗣️</span> You <b>mustn't</b> shout in the library.</div>
    `,
    exercises: [
      { type: "fill", prompt: "You ___ do your homework. (rule)", answer: "must", options: ["must", "mustn't"] },
      { type: "fill", prompt: "You ___ run in the corridor. (not allowed)", answer: "mustn't", options: ["must", "mustn't"] },
      { type: "fill", prompt: "You ___ listen to the teacher.", answer: "must", options: ["must", "mustn't"] },
      { type: "fill", prompt: "You ___ cheat in the test.", answer: "mustn't", options: ["must", "mustn't"] },
      { type: "match", pairs: [
        { emoji: "📚", text: "You must study" },
        { emoji: "🚫🏃", text: "You mustn't run" },
        { emoji: "🦷", text: "You must brush teeth" },
        { emoji: "🚫🗣️", text: "You mustn't shout" }
      ]}
    ],
    quiz: [
      { q: "You ___ wear a uniform. (rule)", a: "must", opts: ["must", "mustn't"] },
      { q: "You ___ talk in the exam. (not allowed)", a: "mustn't", opts: ["must", "mustn't"] },
      { q: "You ___ wash your hands. (necessary)", a: "must", opts: ["must", "mustn't"] },
      { q: "You ___ play with fire. (dangerous)", a: "mustn't", opts: ["must", "mustn't"] },
      { q: "You ___ be kind. (important)", a: "must", opts: ["must", "mustn't"] }
    ]
  }
];

// ---------- STATE ----------
const STORAGE_KEY = "grammarExplorerProgress_v3";
let state = loadState();

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch(e) {}
  return { completed: {}, totalStars: 0, correctAnswers: 0, totalAnswers: 0 };
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
let sortState = null;
let matchState = null;
let reorderState = null;

// ---------- SOUND ----------
let audioCtx = null;
function beep(freq = 600, duration = 0.12, type = "sine", vol = 0.1) {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type; osc.frequency.value = freq;
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
  soundClick(); mascotSay("Let's explore! 🧭"); showPage("page-topics");
});

// ---------- TOPICS MENU ----------
function renderTopicsMenu() {
  const grid = document.getElementById("topics-grid");
  grid.innerHTML = "";
  TOPICS.forEach((topic, idx) => {
    const isCompleted = !!state.completed[topic.id] && state.completed[topic.id] > 0;
    const card = document.createElement("div");
    card.className = "topic-card" + (isCompleted ? " completed" : "");
    card.style.borderColor = topic.color;
    const stars = state.completed[topic.id] || 0;
    card.innerHTML = `
      <div class="topic-number">${idx + 1}</div>
      <div class="topic-icon">${topic.icon}</div>
      <div class="topic-name">${topic.name}</div>
      ${isCompleted ? `<div class="topic-stars">${"⭐".repeat(stars)}</div><div class="check-icon">✅</div>` : ""}
    `;
    card.addEventListener("click", () => {
      soundClick(); openTopic(topic.id);
    });
    grid.appendChild(card);
  });
}

// ---------- OPEN TOPIC ----------
function openTopic(id) {
  currentTopicId = id;
  const topic = TOPICS.find(t => t.id === id);
  document.getElementById("topic-title").textContent = `${topic.icon} ${topic.name}`;
  document.getElementById("learn-content").innerHTML = topic.learn;

  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.querySelector('.tab[data-tab="learn"]').classList.add("active");
  document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
  document.getElementById("tab-learn").classList.add("active");

  document.getElementById("prev-topic-btn").disabled = id === 1;
  document.getElementById("next-topic-btn").disabled = id === TOPICS.length;

  mascotSay(`Expedition ${id}: "${topic.name}"! 🗺️`);
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

// =========================================================
// PRACTICE ENGINE
// =========================================================
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
  sortState = null; matchState = null; reorderState = null;

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
  }
  else if (ex.type === "match") {
    area.innerHTML = `
      <div class="exercise-prompt">Match the pairs! 🎯</div>
      <div class="match-grid" id="match-grid"></div>
    `;
    buildMatchingGame(ex.pairs);
  }
  else if (ex.type === "sort") {
    area.innerHTML = `
      <div class="exercise-prompt">${ex.prompt}</div>
      <div class="item-bank" id="item-bank"></div>
      <div class="sort-baskets" id="sort-baskets"></div>
      <p style="text-align:center;font-size:14px;color:#888;">Tap an item, then tap a basket.</p>
    `;
    buildSortExercise(ex);
  }
  else if (ex.type === "reorder") {
    area.innerHTML = `
      <div class="exercise-prompt">Build the sentence! 🧱</div>
      <div class="sentence-slots" id="sentence-slots"></div>
      <div class="word-bank" id="word-bank"></div>
    `;
    buildReorderExercise(ex);
  }
}

// ----- Matching game -----
function buildMatchingGame(pairs) {
  matchState = { selected: null, matchedCount: 0, total: pairs.length };
  const grid = document.getElementById("match-grid");
  grid.innerHTML = "";
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
  if (matchState.selected === null) {
    matchState.selected = { card, type, value };
    card.classList.add("selected");
  } else {
    const prev = matchState.selected;
    if (prev.type === type) {
      prev.card.classList.remove("selected");
      matchState.selected = { card, type, value };
      card.classList.add("selected");
      return;
    }
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
    matchState.selected = null;
  }
}

// ----- Sort exercise -----
function buildSortExercise(ex) {
  sortState = {
    selectedItem: null,
    buckets: ex.buckets.map((b, i) => ({ label: b.label, accept: b.accept, placed: [], idx: i })),
    items: [...ex.items].sort(() => Math.random() - 0.5)
  };
  const bank = document.getElementById("item-bank");
  bank.innerHTML = "";
  sortState.items.forEach(item => {
    const chip = document.createElement("div");
    chip.className = "item-chip";
    chip.textContent = item;
    chip.dataset.item = item;
    chip.addEventListener("click", () => {
      if (chip.classList.contains("used")) return;
      soundClick();
      bank.querySelectorAll(".item-chip").forEach(c => c.classList.remove("selected"));
      chip.classList.add("selected");
      sortState.selectedItem = item;
    });
    bank.appendChild(chip);
  });
  const baskets = document.getElementById("sort-baskets");
  baskets.innerHTML = "";
  sortState.buckets.forEach((bucket, bIdx) => {
    const div = document.createElement("div");
    const basketClass = bIdx === 0 ? "" : bIdx === 1 ? " b-basket" : " c-basket";
    div.className = "basket" + basketClass;
    div.innerHTML = `<h4>${bucket.label}</h4><div class="basket-items" data-bucket="${bIdx}"></div>`;
    div.addEventListener("click", (e) => {
      if (!sortState.selectedItem) {
        mascotSay("Pick an item first! 👆");
        return;
      }
      const item = sortState.selectedItem;
      const isCorrect = bucket.accept.includes(item);
      if (isCorrect) {
        soundCorrect();
        bucket.placed.push(item);
        const itemsDiv = div.querySelector(".basket-items");
        const tag = document.createElement("div");
        tag.className = "basket-item";
        tag.textContent = item;
        itemsDiv.appendChild(tag);
        const chip = bank.querySelector(`.item-chip[data-item="${item}"]`);
        if (chip) { chip.classList.add("used"); chip.classList.remove("selected"); }
        sortState.selectedItem = null;
        const totalPlaced = sortState.buckets.reduce((s, b) => s + b.placed.length, 0);
        if (totalPlaced === sortState.items.length) {
          document.getElementById("practice-feedback").textContent = "Great job! 🎉 All sorted!";
          document.getElementById("practice-feedback").className = "feedback correct";
          fireConfetti();
          document.getElementById("check-answer-btn").classList.add("hidden");
          document.getElementById("next-exercise-btn").classList.remove("hidden");
        }
      } else {
        soundWrong();
        document.getElementById("practice-feedback").textContent = "Hmm, try another basket! 🙂";
        document.getElementById("practice-feedback").className = "feedback wrong";
        const itemsDiv = div.querySelector(".basket-items");
        const tag = document.createElement("div");
        tag.className = "basket-item wrong-item";
        tag.textContent = item;
        itemsDiv.appendChild(tag);
        setTimeout(() => tag.remove(), 800);
      }
    });
    baskets.appendChild(div);
  });
}

// ----- Reorder exercise -----
function buildReorderExercise(ex) {
  reorderState = {
    answer: ex.answer,
    words: [...ex.words].sort(() => Math.random() - 0.5),
    placed: []
  };
  const slots = document.getElementById("sentence-slots");
  slots.innerHTML = "";
  slots.addEventListener("click", (e) => {
    if (e.target.classList.contains("word-slot")) {
      soundClick();
      const word = e.target.dataset.word;
      const idx = reorderState.placed.indexOf(word);
      if (idx > -1) {
        reorderState.placed.splice(idx, 1);
        e.target.remove();
        const chip = document.querySelector(`#word-bank .word-chip[data-word="${word}"]`);
        if (chip) chip.classList.remove("used");
      }
    }
  });
  const bank = document.getElementById("word-bank");
  bank.innerHTML = "";
  reorderState.words.forEach(word => {
    const chip = document.createElement("div");
    chip.className = "word-chip";
    chip.textContent = word;
    chip.dataset.word = word;
    chip.addEventListener("click", () => {
      if (chip.classList.contains("used")) return;
      soundClick();
      reorderState.placed.push(word);
      chip.classList.add("used");
      const slot = document.createElement("div");
      slot.className = "word-slot";
      slot.textContent = word;
      slot.dataset.word = word;
      slots.appendChild(slot);
    });
    bank.appendChild(chip);
  });
}

// =========================================================
// CHECK ANSWER
// =========================================================
document.getElementById("check-answer-btn").addEventListener("click", () => {
  const topic = TOPICS.find(t => t.id === currentTopicId);
  const ex = topic.exercises[currentExerciseIdx];
  const feedback = document.getElementById("practice-feedback");

  if (ex.type === "match" || ex.type === "sort") return;

  if (ex.type === "fill") {
    if (selectedAnswer === null) {
      feedback.textContent = "Pick an answer first! 👆";
      feedback.className = "feedback wrong";
      return;
    }
    state.totalAnswers++;
    if (selectedAnswer === ex.answer) {
      feedback.textContent = "Correct! 🎉 Great job!";
      feedback.className = "feedback correct";
      soundCorrect(); fireConfetti();
      state.correctAnswers++;
      document.getElementById("check-answer-btn").classList.add("hidden");
      document.getElementById("next-exercise-btn").classList.remove("hidden");
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
  }
  else if (ex.type === "reorder") {
    if (reorderState.placed.length === 0) {
      feedback.textContent = "Build the sentence first! 👆";
      feedback.className = "feedback wrong";
      return;
    }
    state.totalAnswers++;
    const built = reorderState.placed.join(" ");
    const normalize = s => s.toLowerCase().replace(/[.,!?]/g, "").trim();
    if (normalize(built) === normalize(ex.answer)) {
      feedback.textContent = "Correct! 🎉 Great sentence!";
      feedback.className = "feedback correct";
      soundCorrect(); fireConfetti();
      state.correctAnswers++;
      document.getElementById("check-answer-btn").classList.add("hidden");
      document.getElementById("next-exercise-btn").classList.remove("hidden");
    } else {
      feedback.textContent = "Not quite — try another order! 🙂";
      feedback.className = "feedback wrong";
      soundWrong();
    }
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

// =========================================================
// QUIZ
// =========================================================
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
    soundCorrect(); fireConfetti();
  } else {
    feedback.textContent = "Oops! The answer is: " + correct;
    feedback.className = "feedback wrong";
    btn.classList.add("wrong");
    soundWrong();
    document.querySelectorAll("#quiz-options .option-btn").forEach(b => {
      if (b.textContent === correct) b.classList.add("correct");
    });
  }
  saveState();
  updateStarsDisplay();
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
  const prevStars = state.completed[topic.id] || 0;
  if (stars > prevStars) state.completed[topic.id] = stars;
  const starGain = Math.max(0, stars - prevStars);
  state.totalStars += starGain;
  saveState();
  updateStarsDisplay();

  const modal = document.getElementById("modal");
  const body = document.getElementById("modal-body");
  body.innerHTML = `
    <h2>Expedition Done! 🎉</h2>
    <p>You got ${quizScore} out of ${topic.quiz.length} right!</p>
    <div class="stars-earned">${"⭐".repeat(stars)}${"☆".repeat(3 - stars)}</div>
    <p>${stars === 3 ? "PERFECT! 🏆" : stars >= 1 ? "Great job! 👏" : "Try again! You can do it! 💪"}</p>
  `;
  modal.classList.remove("hidden");
  if (stars >= 2) { soundWin(); fireBigConfetti(); } else fireConfetti();
  mascotSay(stars === 3 ? "You're a star explorer! 🌟" : "Good try! Keep exploring! 💪");
}

document.getElementById("modal-close").addEventListener("click", () => {
  soundClick();
  document.getElementById("modal").classList.add("hidden");
});

// =========================================================
// PROGRESS PAGE
// =========================================================
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
      <span class="badge-icon">${stars > 0 ? t.icon : "🗺️"}</span>
      <div>${t.name}</div>
      <div>${"⭐".repeat(stars)}${"☆".repeat(3 - stars)}</div>
    `;
    badges.appendChild(div);
  });

  const diploma = document.getElementById("diploma");
  if (completedCount === TOPICS.length) {
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
  mascotSay("Welcome, explorer! 🧭");
  setTimeout(() => mascotSay("Pick an expedition! 🗺️"), 4000);
}
init();