/* =========================================================
   MY GRAMMAR WORLD - Level 2 - Main Script
   13 topics focused on Present Simple & everyday English
   All topics are unlocked by default.
   ========================================================= */
// ---------- TOPIC DATA ----------
const TOPICS = [
  {
    id: 1,
    name: "Possessive 's",
    icon: "🎒",
    color: "#ff6fb5",
    learn: `
      <h3>Who Does It Belong To? 🎁</h3>
      <p>We add <b>'s</b> to show something belongs to someone.</p>
      <div class="learn-example"><span class="emoji">👦📖</span> <b>Tom's</b> book = the book of Tom</div>
      <div class="learn-example"><span class="emoji">👩👜</span> <b>Mum's</b> bag = the bag of Mum</div>
      <div class="learn-example"><span class="emoji">🐶🦴</span> The <b>dog's</b> bone = the bone of the dog</div>
      <p>👉 Just add <b>'s</b> after the name!</p>
    `,
    exercises: [
      { type: "fill", prompt: "This is (Emma) ___ dress.", answer: "Emma's", options: ["Emma's", "Emmas", "Emma"] },
      { type: "fill", prompt: "That is (Dad) ___ car.", answer: "Dad's", options: ["Dads", "Dad's", "Dad"] },
      { type: "fill", prompt: "This is (the cat) ___ toy.", answer: "cat's", options: ["cats", "cat's", "cat"] },
      { type: "fill", prompt: "That is (my friend) ___ ball.", answer: "friend's", options: ["friends", "friend's", "friend"] },
      { type: "match", pairs: [
        { emoji: "👧🎀", text: "Lily's ribbon" },
        { emoji: "👦⚽", text: "Ben's ball" },
        { emoji: "👩📱", text: "Mum's phone" },
        { emoji: "🐱🥛", text: "The cat's milk" }
      ]}
    ],
    quiz: [
      { q: "This is (Tom) ___ hat.", a: "Tom's", opts: ["Toms", "Tom's", "Tom"] },
      { q: "That is (the boy) ___ bike.", a: "boy's", opts: ["boys", "boy's", "boy"] },
      { q: "This is (Anna) ___ doll.", a: "Anna's", opts: ["Annas", "Anna's", "Anna"] },
      { q: "That is (my sister) ___ book.", a: "sister's", opts: ["sisters", "sister's", "sister"] },
      { q: "This is (the dog) ___ bone.", a: "dog's", opts: ["dogs", "dog's", "dog"] }
    ]
  },
  {
    id: 2,
    name: "Have / Has",
    icon: "🎁",
    color: "#4fc3f7",
    learn: `
      <h3>What Do You Have? 🎁</h3>
      <p>Use <b>have</b> with I, you, we, they.</p>
      <div class="learn-example"><span class="emoji">👦</span> I <b>have</b> a ball.</div>
      <div class="learn-example"><span class="emoji">👫</span> We <b>have</b> a dog.</div>
      <p>Use <b>has</b> with he, she, it.</p>
      <div class="learn-example"><span class="emoji">👧</span> She <b>has</b> a cat.</div>
      <div class="learn-example"><span class="emoji">🐶</span> It <b>has</b> a tail.</div>
    `,
    exercises: [
      { type: "fill", prompt: "I ___ a new toy.", answer: "have", options: ["have", "has"] },
      { type: "fill", prompt: "She ___ a red bike.", answer: "has", options: ["have", "has"] },
      { type: "fill", prompt: "They ___ two cats.", answer: "have", options: ["have", "has"] },
      { type: "fill", prompt: "He ___ a big house.", answer: "has", options: ["have", "has"] },
      { type: "reorder", prompt: "Build the sentence: (she / an apple / has)", answer: "She has an apple.", words: ["She", "has", "an apple"] }
    ],
    quiz: [
      { q: "We ___ a garden.", a: "have", opts: ["have", "has"] },
      { q: "The dog ___ a bone.", a: "has", opts: ["have", "has"] },
      { q: "You ___ a nice bag.", a: "have", opts: ["have", "has"] },
      { q: "My mum ___ a car.", a: "has", opts: ["have", "has"] },
      { q: "The children ___ toys.", a: "have", opts: ["have", "has"] }
    ]
  },
  {
    id: 3,
    name: "Present Simple — Affirmative",
    icon: "⚽",
    color: "#81c784",
    learn: `
      <h3>Things We Do Every Day! 🌞</h3>
      <p>Use the verb as it is with I, you, we, they.</p>
      <div class="learn-example"><span class="emoji">👦📖</span> I <b>read</b> books.</div>
      <p>Add <b>-s</b> or <b>-es</b> with he, she, it.</p>
      <div class="learn-example"><span class="emoji">👧⚽</span> She <b>plays</b> tennis.</div>
      <div class="learn-example"><span class="emoji">👦🚌</span> He <b>goes</b> to school.</div>
    `,
    exercises: [
      { type: "fill", prompt: "She ___ tennis every day.", answer: "plays", options: ["play", "plays"] },
      { type: "fill", prompt: "They ___ to school.", answer: "go", options: ["go", "goes"] },
      { type: "fill", prompt: "He ___ milk.", answer: "drinks", options: ["drink", "drinks"] },
      { type: "fill", prompt: "I ___ English.", answer: "study", options: ["study", "studies"] },
      { type: "fill", prompt: "My cat ___ fish.", answer: "likes", options: ["like", "likes"] }
    ],
    quiz: [
      { q: "We ___ breakfast at 8.", a: "have", opts: ["have", "has"] },
      { q: "Tom ___ football.", a: "plays", opts: ["play", "plays"] },
      { q: "My sister ___ TV.", a: "watches", opts: ["watch", "watches"] },
      { q: "The birds ___ in the sky.", a: "fly", opts: ["fly", "flies"] },
      { q: "She ___ to music.", a: "listens", opts: ["listen", "listens"] }
    ]
  },
  {
    id: 4,
    name: "Present Simple — Negative",
    icon: "🚫",
    color: "#ba68c8",
    learn: `
      <h3>Saying NO! 🚫</h3>
      <p>Use <b>don't</b> with I, you, we, they.</p>
      <div class="learn-example"><span class="emoji">👦🥛</span> I <b>don't</b> like milk.</div>
      <p>Use <b>doesn't</b> with he, she, it.</p>
      <div class="learn-example"><span class="emoji">👧🐟</span> She <b>doesn't</b> eat fish.</div>
      <p>👉 After don't/doesn't, the verb stays simple (no -s)!</p>
    `,
    exercises: [
      { type: "fill", prompt: "I ___ like carrots.", answer: "don't", options: ["don't", "doesn't"] },
      { type: "fill", prompt: "He ___ play tennis.", answer: "doesn't", options: ["don't", "doesn't"] },
      { type: "fill", prompt: "We ___ go to school on Sunday.", answer: "don't", options: ["don't", "doesn't"] },
      { type: "fill", prompt: "She ___ watch TV.", answer: "doesn't", options: ["don't", "doesn't"] },
      { type: "fill", prompt: "They ___ eat meat.", answer: "don't", options: ["don't", "doesn't"] }
    ],
    quiz: [
      { q: "My cat ___ like water.", a: "doesn't", opts: ["don't", "doesn't"] },
      { q: "I ___ have a brother.", a: "don't", opts: ["don't", "doesn't"] },
      { q: "Tom ___ eat pizza.", a: "doesn't", opts: ["don't", "doesn't"] },
      { q: "You ___ know the answer.", a: "don't", opts: ["don't", "doesn't"] },
      { q: "She ___ speak French.", a: "doesn't", opts: ["don't", "doesn't"] }
    ]
  },
  {
    id: 5,
    name: "Present Simple — Questions",
    icon: "❓",
    color: "#ffb74d",
    learn: `
      <h3>Asking Questions! ❓</h3>
      <p>Start with <b>Do</b> for I, you, we, they.</p>
      <div class="learn-example"><span class="emoji">🍎</span> <b>Do</b> you like apples? → Yes, I do.</div>
      <p>Start with <b>Does</b> for he, she, it.</p>
      <div class="learn-example"><span class="emoji">🐶</span> <b>Does</b> she have a dog? → No, she doesn't.</div>
    `,
    exercises: [
      { type: "fill", prompt: "___ you like ice cream?", answer: "Do", options: ["Do", "Does"] },
      { type: "fill", prompt: "___ he play football?", answer: "Does", options: ["Do", "Does"] },
      { type: "fill", prompt: "___ they go to school?", answer: "Do", options: ["Do", "Does"] },
      { type: "fill", prompt: "___ she speak English?", answer: "Does", options: ["Do", "Does"] },
      { type: "match", pairs: [
        { emoji: "❓🍕", text: "Do you like pizza?" },
        { emoji: "✅", text: "Yes, I do." },
        { emoji: "❓🐱", text: "Does she have a cat?" },
        { emoji: "❌", text: "No, she doesn't." }
      ]}
    ],
    quiz: [
      { q: "___ we have homework?", a: "Do", opts: ["Do", "Does"] },
      { q: "___ Tom live here?", a: "Does", opts: ["Do", "Does"] },
      { q: "___ they play games?", a: "Do", opts: ["Do", "Does"] },
      { q: "___ your mum cook well?", a: "Does", opts: ["Do", "Does"] },
      { q: "___ it rain a lot?", a: "Does", opts: ["Do", "Does"] }
    ]
  },
  {
    id: 6,
    name: "Adverbs of Frequency",
    icon: "🗓️",
    color: "#26c6da",
    learn: `
      <h3>How Often? 🗓️</h3>
      <p>These words tell us <b>how often</b> we do something:</p>
      <div class="learn-example">
        <b>always</b> (100%) → <b>usually</b> → <b>sometimes</b> → <b>never</b> (0%)
      </div>
      <div class="learn-example"><span class="emoji">🌞🌞🌞</span> I <b>always</b> brush my teeth.</div>
      <div class="learn-example"><span class="emoji">🍕</span> I <b>sometimes</b> eat pizza.</div>
      <div class="learn-example"><span class="emoji">🐘</span> I <b>never</b> fly like an elephant.</div>
    `,
    exercises: [
      { type: "scale", prompt: "Place each adverb on the right spot! 📊",
        items: ["always", "usually", "sometimes", "never"],
        slots: [
          { label: "100%", accept: "always" },
          { label: "75%", accept: "usually" },
          { label: "50%", accept: "sometimes" },
          { label: "0%", accept: "never" }
        ]
      },
      { type: "fill", prompt: "I go to school every day. I ___ go to school.", answer: "always", options: ["never", "always", "sometimes"] },
      { type: "fill", prompt: "I don't eat spiders. I ___ eat spiders.", answer: "never", options: ["never", "always", "sometimes"] },
      { type: "fill", prompt: "On Saturdays I play. I ___ play on Saturdays.", answer: "sometimes", options: ["never", "always", "sometimes"] }
    ],
    quiz: [
      { q: "She goes to bed at 9 every night. She ___ goes to bed at 9.", a: "always", opts: ["never", "always", "sometimes"] },
      { q: "He eats sushi once a year. He ___ eats sushi.", a: "sometimes", opts: ["never", "always", "sometimes"] },
      { q: "Pigs can't fly. Pigs ___ fly.", a: "never", opts: ["never", "always", "sometimes"] },
      { q: "I go to school on weekdays. I ___ go to school.", a: "usually", opts: ["never", "usually", "sometimes"] },
      { q: "We eat cake on birthdays. We ___ eat cake on birthdays.", a: "always", opts: ["never", "always", "sometimes"] }
    ]
  },
  {
    id: 7,
    name: "Like / Love / Hate + Nouns",
    icon: "😍",
    color: "#ef5350",
    learn: `
      <h3>How Do You Feel? 😍🙂😖</h3>
      <p><b>Love</b> = ❤️❤️❤️ (very very like!)</p>
      <div class="learn-example"><span class="emoji">🍫😍</span> I <b>love</b> chocolate!</div>
      <p><b>Like</b> = 🙂 (it's nice)</p>
      <div class="learn-example"><span class="emoji">🍎🙂</span> I <b>like</b> apples.</div>
      <p><b>Hate</b> = 😖 (don't like at all)</p>
      <div class="learn-example"><span class="emoji">🥦😖</span> I <b>hate</b> broccoli.</div>
    `,
    exercises: [
      { type: "match", pairs: [
        { emoji: "🍫😍", text: "loves chocolate" },
        { emoji: "🍎🙂", text: "likes apples" },
        { emoji: "🥦😖", text: "hates broccoli" },
        { emoji: "🍕😍", text: "loves pizza" }
      ]},
      { type: "fill", prompt: "I ___ ice cream! (❤️❤️❤️)", answer: "love", options: ["hate", "love", "like"] },
      { type: "fill", prompt: "She ___ spiders. (😖)", answer: "hates", options: ["loves", "likes", "hates"] },
      { type: "fill", prompt: "He ___ bananas. (🙂)", answer: "likes", options: ["loves", "likes", "hates"] }
    ],
    quiz: [
      { q: "I ___ football! (❤️❤️❤️)", a: "love", opts: ["hate", "love", "like"] },
      { q: "She ___ homework. (😖)", a: "hates", opts: ["loves", "likes", "hates"] },
      { q: "We ___ holidays. (🙂)", a: "like", opts: ["hate", "love", "like"] },
      { q: "Tom ___ his dog. (❤️❤️❤️)", a: "loves", opts: ["hates", "loves", "likes"] },
      { q: "I ___ cold weather. (😖)", a: "hate", opts: ["love", "like", "hate"] }
    ]
  },
  {
    id: 8,
    name: "Like + -ing",
    icon: "🏊",
    color: "#ffd54f",
    learn: `
      <h3>Activities We Enjoy! 🏊</h3>
      <p>After <b>like / love / hate</b>, we use the verb + <b>-ing</b>.</p>
      <div class="learn-example"><span class="emoji">🏊</span> I like <b>swimming</b>.</div>
      <div class="learn-example"><span class="emoji">📖</span> She loves <b>reading</b>.</div>
      <div class="learn-example"><span class="emoji">🏃</span> He hates <b>running</b>.</div>
      <p>👉 Just add <b>-ing</b> to the verb!</p>
    `,
    exercises: [
      { type: "fill", prompt: "I like ___ (swim).", answer: "swimming", options: ["swim", "swimming", "swims"] },
      { type: "fill", prompt: "She loves ___ (dance).", answer: "dancing", options: ["dance", "dancing", "dances"] },
      { type: "fill", prompt: "He hates ___ (cook).", answer: "cooking", options: ["cook", "cooking", "cooks"] },
      { type: "fill", prompt: "We like ___ (play).", answer: "playing", options: ["play", "playing", "plays"] },
      { type: "match", pairs: [
        { emoji: "🏊", text: "swimming" },
        { emoji: "📖", text: "reading" },
        { emoji: "🎨", text: "drawing" },
        { emoji: "🎤", text: "singing" }
      ]}
    ],
    quiz: [
      { q: "I like ___ (run).", a: "running", opts: ["run", "running", "runs"] },
      { q: "She loves ___ (sing).", a: "singing", opts: ["sing", "singing", "sings"] },
      { q: "He hates ___ (clean).", a: "cleaning", opts: ["clean", "cleaning", "cleans"] },
      { q: "We like ___ (play) football.", a: "playing", opts: ["play", "playing", "plays"] },
      { q: "They love ___ (watch) TV.", a: "watching", opts: ["watch", "watching", "watches"] }
    ]
  },
  {
    id: 9,
    name: "Question Words",
    icon: "❔",
    color: "#4fc3f7",
    learn: `
      <h3>The Question Family! ❔</h3>
      <div class="learn-example"><b>What</b> = asks about a thing 🎁</div>
      <div class="learn-example"><b>Who</b> = asks about a person 👤</div>
      <div class="learn-example"><b>Where</b> = asks about a place 📍</div>
      <div class="learn-example"><b>When</b> = asks about time 🕐</div>
      <div class="learn-example"><b>Why</b> = asks for a reason 💭</div>
      <div class="learn-example"><b>How</b> = asks about the way 🛠️</div>
    `,
    exercises: [
      { type: "fill", prompt: "___ is your name? (a thing)", answer: "What", options: ["What", "Who", "Where"] },
      { type: "fill", prompt: "___ is your teacher? (a person)", answer: "Who", options: ["What", "Who", "When"] },
      { type: "fill", prompt: "___ do you live? (a place)", answer: "Where", options: ["What", "Where", "Why"] },
      { type: "fill", prompt: "___ is your birthday? (a time)", answer: "When", options: ["When", "Where", "Who"] },
      { type: "match", pairs: [
        { emoji: "🎁", text: "What" },
        { emoji: "👤", text: "Who" },
        { emoji: "📍", text: "Where" },
        { emoji: "🕐", text: "When" }
      ]}
    ],
    quiz: [
      { q: "___ is this? (a pen)", a: "What", opts: ["What", "Who", "Where"] },
      { q: "___ is she? (my friend)", a: "Who", opts: ["What", "Who", "When"] },
      { q: "___ is the cat? (under the bed)", a: "Where", opts: ["What", "Where", "Why"] },
      { q: "___ do you go to bed? (at 9)", a: "When", opts: ["When", "Where", "Who"] },
      { q: "___ are you sad? (because...)", a: "Why", opts: ["What", "Why", "When"] }
    ]
  },
  {
    id: 10,
    name: "Prepositions of Time",
    icon: "🕐",
    color: "#ba68c8",
    learn: `
      <h3>When Does It Happen? 🕐</h3>
      <p><b>At</b> → for clock times 🕒</p>
      <div class="learn-example"><span class="emoji">🕒</span> <b>at</b> 7 o'clock</div>
      <p><b>On</b> → for days and dates 📅</p>
      <div class="learn-example"><span class="emoji">📅</span> <b>on</b> Monday, <b>on</b> my birthday</div>
      <p><b>In</b> → for months, years, parts of the day 🌞</p>
      <div class="learn-example"><span class="emoji">🌞</span> <b>in</b> June, <b>in</b> the morning</div>
    `,
    exercises: [
      { type: "sort", prompt: "Sort each time into the right basket! 🧺",
        buckets: [
          { label: "AT 🕒", accept: ["7 o'clock", "noon", "midnight", "5:30"] },
          { label: "ON 📅", accept: ["Monday", "my birthday", "Friday", "Christmas Day"] },
          { label: "IN 🌞", accept: ["June", "2024", "the morning", "summer"] }
        ],
        items: ["7 o'clock", "Monday", "June", "noon", "my birthday", "the morning", "2024", "Friday"]
      },
      { type: "fill", prompt: "I wake up ___ 7 o'clock.", answer: "at", options: ["at", "on", "in"] },
      { type: "fill", prompt: "My birthday is ___ May.", answer: "in", options: ["at", "on", "in"] },
      { type: "fill", prompt: "We play ___ Saturday.", answer: "on", options: ["at", "on", "in"] }
    ],
    quiz: [
      { q: "The lesson starts ___ 9 o'clock.", a: "at", opts: ["at", "on", "in"] },
      { q: "I was born ___ 2016.", a: "in", opts: ["at", "on", "in"] },
      { q: "We meet ___ Sunday.", a: "on", opts: ["at", "on", "in"] },
      { q: "She sleeps ___ night.", a: "at", opts: ["at", "on", "in"] },
      { q: "School starts ___ September.", a: "in", opts: ["at", "on", "in"] }
    ]
  },
  {
    id: 11,
    name: "Object Pronouns",
    icon: "👥",
    color: "#ff6fb5",
    learn: `
      <h3>Instead of Names! 👥</h3>
      <p>Use object pronouns after verbs:</p>
      <div class="learn-example">I → <b>me</b> &nbsp;|&nbsp; you → <b>you</b></div>
      <div class="learn-example">he → <b>him</b> &nbsp;|&nbsp; she → <b>her</b></div>
      <div class="learn-example">it → <b>it</b> &nbsp;|&nbsp; we → <b>us</b> &nbsp;|&nbsp; they → <b>them</b></div>
      <div class="learn-example"><span class="emoji">👦🎁</span> I see <b>him</b>. (not "I see he")</div>
    `,
    exercises: [
      { type: "fill", prompt: "I see Tom. I see ___.", answer: "him", options: ["he", "him", "his"] },
      { type: "fill", prompt: "She is my friend. I like ___.", answer: "her", options: ["she", "her", "hers"] },
      { type: "fill", prompt: "The cats are cute. I love ___.", answer: "them", options: ["they", "them", "their"] },
      { type: "fill", prompt: "We are here. Come with ___.", answer: "us", options: ["we", "us", "our"] },
      { type: "match", pairs: [
        { emoji: "👦", text: "him" },
        { emoji: "👧", text: "her" },
        { emoji: "🐶", text: "it" },
        { emoji: "👫", text: "them" }
      ]}
    ],
    quiz: [
      { q: "I know Anna. I know ___.", a: "her", opts: ["she", "her", "hers"] },
      { q: "Call Ben. Call ___.", a: "him", opts: ["he", "him", "his"] },
      { q: "Help us! Help ___!", a: "us", opts: ["we", "us", "our"] },
      { q: "The book is good. I like ___.", a: "it", opts: ["it", "its", "it's"] },
      { q: "They are my friends. I love ___.", a: "them", opts: ["they", "them", "their"] }
    ]
  },
  {
    id: 12,
    name: "Countable / Uncountable",
    icon: "🍎💧",
    color: "#26c6da",
    learn: `
      <h3>Can We Count It? 🔢</h3>
      <p><b>Countable</b> = we can count (1, 2, 3...)</p>
      <div class="learn-example"><span class="emoji">🍎🍎🍎</span> one apple, two apples, three apples</div>
      <p><b>Uncountable</b> = we can't count (liquids, powders, ideas)</p>
      <div class="learn-example"><span class="emoji">💧💧💧</span> water, milk, sugar, rice</div>
    `,
    exercises: [
      { type: "sort", prompt: "Sort into Countable or Uncountable! 🧺",
        buckets: [
          { label: "COUNTABLE 🔢", accept: ["apple", "book", "cat", "egg", "chair"] },
          { label: "UNCOUNTABLE 💧", accept: ["water", "milk", "sugar", "rice", "bread"] }
        ],
        items: ["apple", "water", "book", "milk", "cat", "sugar", "egg", "rice"]
      },
      { type: "fill", prompt: "I have ___ apple. (one)", answer: "an", options: ["an", "some"] },
      { type: "fill", prompt: "I drink ___ water.", answer: "some", options: ["an", "some"] },
      { type: "fill", prompt: "She has ___ cats.", answer: "some", options: ["an", "some"] }
    ],
    quiz: [
      { q: "I eat ___ bread.", a: "some", opts: ["an", "some"] },
      { q: "She has ___ dog.", a: "a", opts: ["a", "some"] },
      { q: "We need ___ milk.", a: "some", opts: ["a", "some"] },
      { q: "He ate ___ egg.", a: "an", opts: ["an", "some"] },
      { q: "I have ___ books.", a: "some", opts: ["a", "some"] }
    ]
  },
  {
    id: 13,
    name: "Some / Any",
    icon: "🧺",
    color: "#ffb74d",
    learn: `
      <h3>Some or Any? 🧺</h3>
      <p>Use <b>some</b> in positive sentences ✅</p>
      <div class="learn-example"><span class="emoji">🍎🍎</span> I have <b>some</b> apples.</div>
      <p>Use <b>any</b> in negative sentences ❌ and questions ❓</p>
      <div class="learn-example"><span class="emoji">🚫</span> I don't have <b>any</b> apples.</div>
      <div class="learn-example"><span class="emoji">❓</span> Do you have <b>any</b> apples?</div>
    `,
    exercises: [
      { type: "fill", prompt: "I have ___ friends. (✅)", answer: "some", options: ["some", "any"] },
      { type: "fill", prompt: "I don't have ___ money. (❌)", answer: "any", options: ["some", "any"] },
      { type: "fill", prompt: "Do you have ___ brothers? (❓)", answer: "any", options: ["some", "any"] },
      { type: "fill", prompt: "She wants ___ water. (✅)", answer: "some", options: ["some", "any"] },
      { type: "fill", prompt: "There aren't ___ cookies left. (❌)", answer: "any", options: ["some", "any"] }
    ],
    quiz: [
      { q: "We need ___ eggs. (✅)", a: "some", opts: ["some", "any"] },
      { q: "He doesn't have ___ time. (❌)", a: "any", opts: ["some", "any"] },
      { q: "Is there ___ milk? (❓)", a: "any", opts: ["some", "any"] },
      { q: "I'd like ___ tea, please. (✅)", a: "some", opts: ["some", "any"] },
      { q: "There aren't ___ chairs. (❌)", a: "any", opts: ["some", "any"] }
    ]
  }
];

// ---------- STATE ----------
const STORAGE_KEY = "myGrammarWorldProgress_v2";
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

// Special state for advanced exercises
let scaleState = null;   // for adverb scale
let sortState = null;    // for sort baskets
let reorderState = null; // for sentence reorder
let matchState = null;   // for matching game

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
  soundClick(); mascotSay("Let's explore! 🌍"); showPage("page-topics");
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
  scaleState = null; sortState = null; reorderState = null; matchState = null;

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
  else if (ex.type === "scale") {
    area.innerHTML = `
      <div class="exercise-prompt">${ex.prompt}</div>
      <div class="adverb-bank" id="adverb-bank"></div>
      <div class="frequency-scale" id="frequency-scale"></div>
      <p style="text-align:center;font-size:14px;color:#888;">Tap an adverb, then tap a slot to place it.</p>
    `;
    buildScaleExercise(ex);
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

// ----- Scale exercise (adverbs of frequency) -----
function buildScaleExercise(ex) {
  scaleState = {
    selectedAdverb: null,
    placements: {}, // slotIndex -> adverb
    items: [...ex.items].sort(() => Math.random() - 0.5),
    slots: ex.slots
  };
  const bank = document.getElementById("adverb-bank");
  bank.innerHTML = "";
  scaleState.items.forEach(adv => {
    const chip = document.createElement("div");
    chip.className = "adverb-chip";
    chip.textContent = adv;
    chip.addEventListener("click", () => {
      if (chip.classList.contains("used")) return;
      soundClick();
      bank.querySelectorAll(".adverb-chip").forEach(c => c.classList.remove("selected"));
      chip.classList.add("selected");
      scaleState.selectedAdverb = adv;
    });
    chip.dataset.adv = adv;
    bank.appendChild(chip);
  });
  const scale = document.getElementById("frequency-scale");
  scale.innerHTML = "";
  scaleState.slots.forEach((slot, idx) => {
    const div = document.createElement("div");
    div.className = "scale-slot";
    div.innerHTML = `<div class="slot-label">${slot.label}</div><div class="slot-value">—</div>`;
    div.addEventListener("click", () => {
      if (!scaleState.selectedAdverb) {
        mascotSay("Pick an adverb first! 👆");
        return;
      }
      soundClick();
      // If slot already filled, put old one back
      if (scaleState.placements[idx]) {
        const old = scaleState.placements[idx];
        const oldChip = bank.querySelector(`.adverb-chip[data-adv="${old}"]`);
        if (oldChip) oldChip.classList.remove("used");
      }
      scaleState.placements[idx] = scaleState.selectedAdverb;
      div.querySelector(".slot-value").textContent = scaleState.selectedAdverb;
      div.classList.add("filled");
      const chip = bank.querySelector(`.adverb-chip[data-adv="${scaleState.selectedAdverb}"]`);
      if (chip) { chip.classList.add("used"); chip.classList.remove("selected"); }
      scaleState.selectedAdverb = null;
    });
    scale.appendChild(div);
  });
}

// ----- Sort exercise -----
function buildSortExercise(ex) {
  sortState = {
    selectedItem: null,
    buckets: ex.buckets.map(b => ({ label: b.label, accept: b.accept, placed: [] })),
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
    div.className = "basket" + (bIdx % 2 === 1 ? " b-basket" : "");
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
        // Check if all sorted
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
// CHECK ANSWER (for fill, reorder, scale)
// =========================================================
document.getElementById("check-answer-btn").addEventListener("click", () => {
  const topic = TOPICS.find(t => t.id === currentTopicId);
  const ex = topic.exercises[currentExerciseIdx];
  const feedback = document.getElementById("practice-feedback");

  // Match and sort handle themselves
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
  else if (ex.type === "scale") {
    // Check if all slots filled
    const filledCount = Object.keys(scaleState.placements).length;
    if (filledCount < scaleState.slots.length) {
      feedback.textContent = "Fill all the slots first! 👆";
      feedback.className = "feedback wrong";
      return;
    }
    state.totalAnswers++;
    let allCorrect = true;
    Object.keys(scaleState.placements).forEach(idx => {
      const placed = scaleState.placements[idx];
      const expected = scaleState.slots[idx].accept;
      if (placed !== expected) allCorrect = false;
    });
    if (allCorrect) {
      feedback.textContent = "Perfect! 🎉 All in the right place!";
      feedback.className = "feedback correct";
      soundCorrect(); fireConfetti();
      state.correctAnswers++;
      document.getElementById("check-answer-btn").classList.add("hidden");
      document.getElementById("next-exercise-btn").classList.remove("hidden");
    } else {
      feedback.textContent = "Not quite — try again! 🙂";
      feedback.className = "feedback wrong";
      soundWrong();
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
    // Accept with flexible capitalization/punctuation
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
    <h2>Quiz Done! 🎉</h2>
    <p>You got ${quizScore} out of ${topic.quiz.length} right!</p>
    <div class="stars-earned">${"⭐".repeat(stars)}${"☆".repeat(3 - stars)}</div>
    <p>${stars === 3 ? "PERFECT! 🏆" : stars >= 1 ? "Great job! 👏" : "Try again! You can do it! 💪"}</p>
  `;
  modal.classList.remove("hidden");
  if (stars >= 2) { soundWin(); fireBigConfetti(); } else fireConfetti();
  mascotSay(stars === 3 ? "Perfect! You're a star! 🌟" : "Good try! Keep going! 💪");
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
      <span class="badge-icon">${stars > 0 ? t.icon : "📚"}</span>
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
  mascotSay("Welcome back! I'm Ollie! 🦉");
  setTimeout(() => mascotSay("Pick any topic to start! 🌍"), 4000);
}
init();
