// ===== CURRICULUM DATA =====
const CURRICULUM = {
    abc: {
        letters: [
            { letter: 'A', lower: 'a', word: 'Apple', emoji: '🍎', kazakh: 'Алма (Alma)', sound: 'æ' },
            { letter: 'B', lower: 'b', word: 'Ball', emoji: '⚽', kazakh: 'Доп (Dop)', sound: 'b' },
            { letter: 'C', lower: 'c', word: 'Cat', emoji: '🐱', kazakh: 'Мысық (Mysyq)', sound: 'k' },
            { letter: 'D', lower: 'd', word: 'Dog', emoji: '🐕', kazakh: 'Ит (It)', sound: 'd' },
            { letter: 'E', lower: 'e', word: 'Elephant', emoji: '🐘', kazakh: 'Піл (Pil)', sound: 'ɛ' },
            { letter: 'F', lower: 'f', word: 'Fish', emoji: '🐟', kazakh: 'Балық (Balyq)', sound: 'f' },
            { letter: 'G', lower: 'g', word: 'Grapes', emoji: '🍇', kazakh: 'Жүзім (Jüzim)', sound: 'g' },
            { letter: 'H', lower: 'h', word: 'Hat', emoji: '🎩', kazakh: 'Бас киім (Bas kiim)', sound: 'h' },
            { letter: 'I', lower: 'i', word: 'Ice cream', emoji: '🍦', kazakh: 'Балмұздақ (Balmuzdaq)', sound: 'aɪ' },
            { letter: 'J', lower: 'j', word: 'Juice', emoji: '🧃', kazakh: 'Шырын (Shyryn)', sound: 'dʒ' },
            { letter: 'K', lower: 'k', word: 'Kite', emoji: '🪁', kazakh: 'Ұшқыш (Ushqysh)', sound: 'k' },
            { letter: 'L', lower: 'l', word: 'Lion', emoji: '🦁', kazakh: 'Арыстан (Arystan)', sound: 'l' },
            { letter: 'M', lower: 'm', word: 'Moon', emoji: '🌙', kazakh: 'Ай (Ai)', sound: 'm' },
            { letter: 'N', lower: 'n', word: 'Nest', emoji: '🪺', kazakh: 'Ұя (Uia)', sound: 'n' },
            { letter: 'O', lower: 'o', word: 'Orange', emoji: '🍊', kazakh: 'Апельсин (Apelsin)', sound: 'ɒ' },
            { letter: 'P', lower: 'p', word: 'Penguin', emoji: '🐧', kazakh: 'Пингвин (Pingvin)', sound: 'p' },
            { letter: 'Q', lower: 'q', word: 'Queen', emoji: '👸', kazakh: 'Ханшайым (Khan sha iym)', sound: 'kw' },
            { letter: 'R', lower: 'r', word: 'Rainbow', emoji: '🌈', kazakh: 'Кемпірқосақ (Kempirqosaq)', sound: 'r' },
            { letter: 'S', lower: 's', word: 'Sun', emoji: '☀️', kazakh: 'Күн (Kün)', sound: 's' },
            { letter: 'T', lower: 't', word: 'Tree', emoji: '🌳', kazakh: 'Ағаш (Agash)', sound: 't' },
            { letter: 'U', lower: 'u', word: 'Umbrella', emoji: '☂️', kazakh: 'Қолшатыр (Qolshatyr)', sound: 'ʌ' },
            { letter: 'V', lower: 'v', word: 'Violin', emoji: '🎻', kazakh: 'Скрипка (Skripka)', sound: 'v' },
            { letter: 'W', lower: 'w', word: 'Whale', emoji: '🐋', kazakh: 'Кит (Kit)', sound: 'w' },
            { letter: 'X', lower: 'x', word: 'X-ray', emoji: '🩻', kazakh: 'Рентген (Rentgen)', sound: 'ks' },
            { letter: 'Y', lower: 'y', word: 'Yellow', emoji: '🟡', kazakh: 'Сары (Sary)', sound: 'j' },
            { letter: 'Z', lower: 'z', word: 'Zebra', emoji: '🦓', kazakh: 'Зебра (Zebra)', sound: 'z' }
        ]
    },
    lessons: [
        {
            id: 1,
            title: 'Lesson 1: CVC Words - a, b, c, r, t',
            description: 'Short vowel "a" with consonants b, c, r, t',
            words: [
                { word: 'bat', emoji: '🦇' },
                { word: 'cat', emoji: '🐱' },
                { word: 'rat', emoji: '🐀' },
                { word: 'cab', emoji: '🚕' },
                { word: 'tab', emoji: '📑' },
                { word: 'car', emoji: '🚗' },
                { word: 'bar', emoji: '🍫' },
                { word: 'arc', emoji: '🌈' },
                { word: 'act', emoji: '🎭' },
                { word: 'art', emoji: '🎨' }
            ],
            letters: ['a', 'b', 'c', 'r', 't']
        },
        {
            id: 2,
            title: 'Lesson 2: CVC Words - d, e, h, n, p',
            description: 'Short vowel "e" with consonants d, h, n, p',
            words: [
                { word: 'hen', emoji: '🐔' },
                { word: 'pen', emoji: '🖊️' },
                { word: 'den', emoji: '🏠' },
                { word: 'net', emoji: '🥅' },
                { word: 'pet', emoji: '🐾' },
                { word: 'bed', emoji: '🛏️' },
                { word: 'red', emoji: '🔴' },
                { word: 'hen', emoji: '🐔' },
                { word: 'end', emoji: '🏁' },
                { word: 'had', emoji: '✋' }
            ],
            letters: ['d', 'e', 'h', 'n', 'p']
        },
        {
            id: 3,
            title: 'Lesson 3: CVC Words - g, i, o, u',
            description: 'Short vowels "i" and "o" with g, u',
            words: [
                { word: 'pig', emoji: '🐷' },
                { word: 'dig', emoji: '⛏️' },
                { word: 'big', emoji: '📦' },
                { word: 'got', emoji: '✅' },
                { word: 'hot', emoji: '🔥' },
                { word: 'pot', emoji: '🍯' },
                { word: 'dot', emoji: '⚫' },
                { word: 'cut', emoji: '✂️' },
                { word: 'nut', emoji: '🥜' },
                { word: 'gut', emoji: '🫃' }
            ],
            letters: ['g', 'i', 'o', 'u']
        },
        {
            id: 4,
            title: 'Lesson 4: CVC Words - f, j, m, x',
            description: 'Consonants f, j, m, x with vowels',
            words: [
                { word: 'fox', emoji: '🦊' },
                { word: 'fix', emoji: '🔧' },
                { word: 'mix', emoji: '🥣' },
                { word: 'jam', emoji: '🍯' },
                { word: 'map', emoji: '🗺️' },
                { word: 'fan', emoji: '🌀' },
                { word: 'fin', emoji: '🦈' },
                { word: 'fun', emoji: '🎉' },
                { word: 'fat', emoji: '🐻' },
                { word: 'jet', emoji: '✈️' }
            ],
            letters: ['f', 'j', 'm', 'x']
        },
        {
            id: 5,
            title: 'Lesson 5: CVC Words - k, l, s, v',
            description: 'Consonants k, l, s, v with vowels',
            words: [
                { word: 'cat', emoji: '🐱' },
                { word: 'kit', emoji: '🧰' },
                { word: 'log', emoji: '🪵' },
                { word: 'lip', emoji: '💋' },
                { word: 'sun', emoji: '☀️' },
                { word: 'sit', emoji: '🪑' },
                { word: 'van', emoji: '🚐' },
                { word: 'vet', emoji: '👨‍⚕️' },
                { word: 'sad', emoji: '😢' },
                { word: 'lap', emoji: '🦵' }
            ],
            letters: ['k', 'l', 's', 'v']
        },
        {
            id: 6,
            title: 'Lesson 6: CVC Words - q, w, y, z',
            description: 'Consonants q, w, y, z with vowels',
            words: [
                { word: 'zip', emoji: '🤐' },
                { word: 'zap', emoji: '⚡' },
                { word: 'web', emoji: '🕸️' },
                { word: 'wig', emoji: '💇' },
                { word: 'yak', emoji: '🐂' },
                { word: 'yes', emoji: '✅' },
                { word: 'yam', emoji: '🍠' },
                { word: 'wax', emoji: '🕯️' },
                { word: 'wet', emoji: '💧' },
                { word: 'won', emoji: '🏆' }
            ],
            letters: ['q', 'w', 'y', 'z']
        },
        {
            id: 7,
            title: 'Lesson 7: Magic E - a_e, i_e',
            description: 'Long vowels with silent e: a_e and i_e',
            words: [
                { word: 'cape', emoji: '🦸' },
                { word: 'tape', emoji: '📼' },
                { word: 'gate', emoji: '🚪' },
                { word: 'lake', emoji: '🏞️' },
                { word: 'kite', emoji: '🪁' },
                { word: 'bite', emoji: '🦷' },
                { word: 'ride', emoji: '🚲' },
                { word: 'time', emoji: '⏰' },
                { word: 'five', emoji: '🖐️' },
                { word: 'pine', emoji: '🌲' }
            ],
            magicE: [
                { short: 'cap', long: 'cape', emoji: '🧢' },
                { short: 'tap', long: 'tape', emoji: '📼' },
                { short: 'can', long: 'cane', emoji: '🦯' },
                { short: 'kit', long: 'kite', emoji: '🪁' },
                { short: 'bit', long: 'bite', emoji: '🦷' },
                { short: 'rid', long: 'ride', emoji: '🚲' },
                { short: 'tim', long: 'time', emoji: '⏰' },
                { short: 'pin', long: 'pine', emoji: '🌲' }
            ],
            letters: ['a_e', 'i_e']
        },
        {
            id: 8,
            title: 'Lesson 8: Magic E - o_e, u_e',
            description: 'Long vowels with silent e: o_e and u_e',
            words: [
                { word: 'rope', emoji: '🪢' },
                { word: 'bone', emoji: '🦴' },
                { word: 'home', emoji: '🏠' },
                { word: 'nose', emoji: '👃' },
                { word: 'cute', emoji: '🥰' },
                { word: 'tube', emoji: '🧪' },
                { word: 'cube', emoji: '🧊' },
                { word: 'mule', emoji: '🫏' },
                { word: 'hope', emoji: '🙏' },
                { word: 'hole', emoji: '🕳️' }
            ],
            magicE: [
                { short: 'hop', long: 'hope', emoji: '🦘' },
                { short: 'rob', long: 'robe', emoji: '👘' },
                { short: 'not', long: 'note', emoji: '🎵' },
                { short: 'cut', long: 'cute', emoji: '🥰' },
                { short: 'tub', long: 'tube', emoji: '🧪' },
                { short: 'cub', long: 'cube', emoji: '🧊' }
            ],
            letters: ['o_e', 'u_e']
        },
        {
            id: 9,
            title: 'Lesson 9: Digraphs - sh, ch, tch',
            description: 'Consonant digraphs: sh, ch, tch',
            words: [
                { word: 'ship', emoji: '🚢' },
                { word: 'shop', emoji: '🏪' },
                { word: 'fish', emoji: '🐟' },
                { word: 'dish', emoji: '🍽️' },
                { word: 'chip', emoji: '🍟' },
                { word: 'chat', emoji: '💬' },
                { word: 'chin', emoji: '🧔' },
                { word: 'rich', emoji: '💰' },
                { word: 'catch', emoji: '🥎' },
                { word: 'match', emoji: '🔥' }
            ],
            letters: ['sh', 'ch', 'tch']
        },
        {
            id: 10,
            title: 'Lesson 10: Digraphs - wh, th, ph, ck',
            description: 'More digraphs: wh, th, ph, ck',
            words: [
                { word: 'whale', emoji: '🐋' },
                { word: 'wheel', emoji: '🎡' },
                { word: 'thin', emoji: '📏' },
                { word: 'think', emoji: '💭' },
                { word: 'this', emoji: '👉' },
                { word: 'phone', emoji: '📱' },
                { word: 'photo', emoji: '📷' },
                { word: 'duck', emoji: '🦆' },
                { word: 'rock', emoji: '🪨' },
                { word: 'sock', emoji: '🧦' }
            ],
            letters: ['wh', 'th', 'ph', 'ck']
        },
        {
            id: 11,
            title: 'Lesson 11: Soft C, Soft G, Voiced S',
            description: 'Soft C [s], Soft G [dʒ], Voiced S [z]',
            words: [
                { word: 'city', emoji: '🏙️' },
                { word: 'cent', emoji: '💰' },
                { word: 'circle', emoji: '⭕' },
                { word: 'giant', emoji: '🗿' },
                { word: 'gem', emoji: '💎' },
                { word: 'giraffe', emoji: '🦒' },
                { word: 'zoo', emoji: '🦁' },
                { word: 'buzz', emoji: '🐝' },
                { word: 'fizz', emoji: '🥤' },
                { word: 'nose', emoji: '👃' }
            ],
            letters: ['soft c', 'soft g', 'z']
        },
        {
            id: 12,
            title: 'Lesson 12: Consonant Blends',
            description: 'Blends: bl, cl, fl, gl, br, cr, sk, st',
            words: [
                { word: 'blue', emoji: '🔵' },
                { word: 'clam', emoji: '🐚' },
                { word: 'flag', emoji: '🚩' },
                { word: 'globe', emoji: '🌍' },
                { word: 'bread', emoji: '🍞' },
                { word: 'crab', emoji: '🦀' },
                { word: 'skip', emoji: '🏃' },
                { word: 'star', emoji: '⭐' },
                { word: 'frog', emoji: '🐸' },
                { word: 'tree', emoji: '🌳' }
            ],
            letters: ['bl', 'cl', 'fl', 'br', 'cr', 'sk', 'st']
        },
        {
            id: 13,
            title: 'Lesson 13: Long Vowels - ai, ay',
            description: 'Vowel teams ai and ay for long A',
            words: [
                { word: 'rain', emoji: '🌧️' },
                { word: 'tail', emoji: '🐕' },
                { word: 'mail', emoji: '📬' },
                { word: 'train', emoji: '🚂' },
                { word: 'day', emoji: '☀️' },
                { word: 'play', emoji: '🎮' },
                { word: 'stay', emoji: '🏠' },
                { word: 'tray', emoji: '🍽️' },
                { word: 'paint', emoji: '🎨' },
                { word: 'snail', emoji: '🐌' }
            ],
            letters: ['ai', 'ay']
        },
        {
            id: 14,
            title: 'Lesson 14: Long Vowels - ee, ea',
            description: 'Vowel teams ee, ea, y, ey for long E',
            words: [
                { word: 'tree', emoji: '🌳' },
                { word: 'bee', emoji: '🐝' },
                { word: 'feet', emoji: '🦶' },
                { word: 'seed', emoji: '🌱' },
                { word: 'read', emoji: '📖' },
                { word: 'beach', emoji: '🏖️' },
                { word: 'meat', emoji: '🥩' },
                { word: 'team', emoji: '👥' },
                { word: 'key', emoji: '🔑' },
                { word: 'money', emoji: '💰' }
            ],
            letters: ['ee', 'ea', 'ey']
        },
        {
            id: 15,
            title: 'Lesson 15: Long Vowels - igh, ie, y',
            description: 'Long I patterns: igh, ie, y',
            words: [
                { word: 'light', emoji: '💡' },
                { word: 'night', emoji: '🌙' },
                { word: 'high', emoji: '⬆️' },
                { word: 'right', emoji: '✅' },
                { word: 'pie', emoji: '🥧' },
                { word: 'tie', emoji: '👔' },
                { word: 'fly', emoji: '🪰' },
                { word: 'cry', emoji: '😢' },
                { word: 'sky', emoji: '🌤️' },
                { word: 'try', emoji: '💪' }
            ],
            letters: ['igh', 'ie', 'y']
        },
        {
            id: 16,
            title: 'Lesson 16: Long Vowels - oa, ow',
            description: 'Long O patterns: oa, ow',
            words: [
                { word: 'boat', emoji: '⛵' },
                { word: 'coat', emoji: '🧥' },
                { word: 'road', emoji: '🛣️' },
                { word: 'goat', emoji: '🐐' },
                { word: 'snow', emoji: '❄️' },
                { word: 'grow', emoji: '🌱' },
                { word: 'flow', emoji: '🌊' },
                { word: 'bowl', emoji: '🥣' },
                { word: 'toast', emoji: '🍞' },
                { word: 'crow', emoji: '🐦‍⬛' }
            ],
            letters: ['oa', 'ow']
        },
        {
            id: 17,
            title: 'Lesson 17: Long Vowels - ue, ui, ew, oo',
            description: 'Long U patterns: ue, ui, ew, oo',
            words: [
                { word: 'blue', emoji: '🔵' },
                { word: 'glue', emoji: '🧴' },
                { word: 'clue', emoji: '🔍' },
                { word: 'fruit', emoji: '🍎' },
                { word: 'new', emoji: '✨' },
                { word: 'few', emoji: '🔢' },
                { word: 'dew', emoji: '💧' },
                { word: 'moon', emoji: '🌙' },
                { word: 'spoon', emoji: '🥄' },
                { word: 'zoo', emoji: '🦁' }
            ],
            letters: ['ue', 'ew', 'oo']
        },
        {
            id: 18,
            title: 'Lesson 18: R-controlled - ar, or',
            description: 'Bossy R: ar and or sounds',
            words: [
                { word: 'car', emoji: '🚗' },
                { word: 'star', emoji: '⭐' },
                { word: 'farm', emoji: '🌾' },
                { word: 'park', emoji: '🏞️' },
                { word: 'horn', emoji: '📯' },
                { word: 'corn', emoji: '🌽' },
                { word: 'fork', emoji: '🍴' },
                { word: 'port', emoji: '🚢' },
                { word: 'dark', emoji: '🌑' },
                { word: 'storm', emoji: '⛈️' }
            ],
            letters: ['ar', 'or']
        },
        {
            id: 19,
            title: 'Lesson 19: R-controlled - ir, ur, er',
            description: 'Bossy R: ir, ur, er sounds',
            words: [
                { word: 'bird', emoji: '🐦' },
                { word: 'girl', emoji: '👧' },
                { word: 'dirt', emoji: '🟤' },
                { word: 'shirt', emoji: '👕' },
                { word: 'turn', emoji: '🔄' },
                { word: 'burn', emoji: '🔥' },
                { word: 'hurt', emoji: '🤕' },
                { word: 'her', emoji: '👩' },
                { word: 'fern', emoji: '🌿' },
                { word: 'verb', emoji: '📝' }
            ],
            letters: ['ir', 'ur', 'er']
        },
        {
            id: 20,
            title: 'Lesson 20: Diphthongs - ou, ow',
            description: 'Diphthongs: ou and ow /aʊ/',
            words: [
                { word: 'house', emoji: '🏠' },
                { word: 'mouse', emoji: '🐭' },
                { word: 'cloud', emoji: '☁️' },
                { word: 'mouth', emoji: '👄' },
                { word: 'cow', emoji: '🐄' },
                { word: 'bow', emoji: '🎀' },
                { word: 'town', emoji: '🏘️' },
                { word: 'down', emoji: '⬇️' },
                { word: 'crown', emoji: '👑' },
                { word: 'brown', emoji: '🟤' }
            ],
            letters: ['ou', 'ow']
        },
        {
            id: 21,
            title: 'Lesson 21: Diphthongs - oi, oy',
            description: 'Diphthongs: oi and oy /ɔɪ/',
            words: [
                { word: 'coin', emoji: '🪙' },
                { word: 'boil', emoji: '🫕' },
                { word: 'oil', emoji: '🛢️' },
                { word: 'soil', emoji: '🌍' },
                { word: 'toy', emoji: '🧸' },
                { word: 'boy', emoji: '👦' },
                { word: 'joy', emoji: '😊' },
                { word: 'royal', emoji: '👑' },
                { word: 'point', emoji: '👆' },
                { word: 'noise', emoji: '🔊' }
            ],
            letters: ['oi', 'oy']
        },
        {
            id: 22,
            title: 'Lesson 22: Diphthongs - oo, au, aw',
            description: 'Diphthongs: oo /ɔː/, au, aw, all, wa',
            words: [
                { word: 'ball', emoji: '⚽' },
                { word: 'call', emoji: '📞' },
                { word: 'tall', emoji: '🏢' },
                { word: 'walk', emoji: '🚶' },
                { word: 'saw', emoji: '🪚' },
                { word: 'draw', emoji: '🎨' },
                { word: 'law', emoji: '⚖️' },
                { word: 'pause', emoji: '⏸️' },
                { word: 'author', emoji: '✍️' },
                { word: 'door', emoji: '🚪' }
            ],
            letters: ['au', 'aw', 'all', 'oor']
        },
        {
            id: 23,
            title: 'Lesson 23: Schwa & Silent Letters',
            description: 'Schwa sound, silent kn, wr, mb, e',
            words: [
                { word: 'knee', emoji: '🦵' },
                { word: 'knife', emoji: '🔪' },
                { word: 'know', emoji: '🧠' },
                { word: 'write', emoji: '✍️' },
                { word: 'wrong', emoji: '❌' },
                { word: 'wrap', emoji: '🎁' },
                { word: 'lamb', emoji: '🐑' },
                { word: 'climb', emoji: '🧗' },
                { word: 'thumb', emoji: '👍' },
                { word: 'bone', emoji: '🦴' }
            ],
            letters: ['kn', 'wr', 'mb', 'silent e']
        },
        {
            id: 24,
            title: 'Lesson 24: Word Endings - tion, sion',
            description: 'Suffixes: ture, sure, tion, sion',
            words: [
                { word: 'picture', emoji: '🖼️' },
                { word: 'nature', emoji: '🌿' },
                { word: 'capture', emoji: '📸' },
                { word: 'ocean', emoji: '🌊' },
                { word: 'motion', emoji: '🎬' },
                { word: 'nation', emoji: '🏳️' },
                { word: 'station', emoji: '🚉' },
                { word: 'television', emoji: '📺' },
                { word: 'mission', emoji: '🚀' },
                { word: 'passion', emoji: '❤️' }
            ],
            letters: ['tion', 'sion', 'ture']
        },
        {
            id: 25,
            title: 'Lesson 25: Advanced Endings - ous, ful',
            description: 'Suffixes: ous, ful, and review',
            words: [
                { word: 'famous', emoji: '🌟' },
                { word: 'dangerous', emoji: '⚠️' },
                { word: 'happy', emoji: '😊' },
                { word: 'beautiful', emoji: '🌸' },
                { word: 'careful', emoji: '🤔' },
                { word: 'helpful', emoji: '🤝' },
                { word: 'playful', emoji: '🎈' },
                { word: 'wonderful', emoji: '✨' },
                { word: 'colorful', emoji: '🌈' },
                { word: 'powerful', emoji: '💪' }
            ],
            letters: ['ous', 'ful']
        }
    ]
};

// ===== APP STATE =====
class AppState {
    constructor() {
        this.state = this.loadState();
    }

    getDefaultUnlockedLevels() {
        return Array.from({ length: 26 }, (_, index) => index); // 0..25
    }

    loadState() {
        const saved = localStorage.getItem('abc_phonics_state');
        if (saved) {
            return JSON.parse(saved);
        }
        return {
            totalStars: 0,
            currentLevel: 0,
            unlockedLevels: this.getDefaultUnlockedLevels(),
            completedLevels: [],
            levelStars: {},
            currentView: 'quest-map'
        };
    }

    saveState() {
        localStorage.setItem('abc_phonics_state', JSON.stringify(this.state));
    }

    addStars(levelId, stars) {
        const prev = this.state.levelStars[levelId] || 0;
        if (stars > prev) {
            this.state.totalStars += (stars - prev);
            this.state.levelStars[levelId] = stars;
        }
        this.saveState();
    }

    completeLevel(levelId) {
        if (!this.state.completedLevels.includes(levelId)) {
            this.state.completedLevels.push(levelId);
        }
        // Unlock next level
        const nextLevel = levelId + 1;
        if (nextLevel <= 25 && !this.state.unlockedLevels.includes(nextLevel)) {
            this.state.unlockedLevels.push(nextLevel);
        }
        this.addStars(levelId, 1);
        this.saveState();
    }

    isUnlocked(levelId) {
        return this.state.unlockedLevels.includes(levelId);
    }

    isCompleted(levelId) {
        return this.state.completedLevels.includes(levelId);
    }

    getStars(levelId) {
        return this.state.levelStars[levelId] || 0;
    }

    getTotalStars() {
        return this.state.totalStars;
    }

    reset() {
        this.state = {
            totalStars: 0,
            currentLevel: 0,
            unlockedLevels: this.getDefaultUnlockedLevels(),
            completedLevels: [],
            levelStars: {},
            currentView: 'quest-map'
        };
        this.saveState();
    }
}

// ===== AUDIO MANAGER =====
class AudioManager {
    constructor() {
        this.synth = window.speechSynthesis;
        this.audioContext = null;
    }

    speak(text, rate = 0.8) {
        if (!this.synth) return;
        this.synth.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = rate;
        utterance.pitch = 1.1;
        utterance.lang = 'en-US';
        
        // Try to find a good English voice
        const voices = this.synth.getVoices();
        const englishVoice = voices.find(v => v.lang.startsWith('en') && v.name.includes('Female')) 
            || voices.find(v => v.lang.startsWith('en'))
            || voices[0];
        if (englishVoice) utterance.voice = englishVoice;
        
        this.synth.speak(utterance);
    }

    playSound(type) {
        try {
            if (!this.audioContext) {
                this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            }
            const ctx = this.audioContext;
            const oscillator = ctx.createOscillator();
            const gainNode = ctx.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(ctx.destination);
            
            switch(type) {
                case 'success':
                    oscillator.frequency.setValueAtTime(523, ctx.currentTime);
                    oscillator.frequency.setValueAtTime(659, ctx.currentTime + 0.1);
                    oscillator.frequency.setValueAtTime(784, ctx.currentTime + 0.2);
                    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
                    oscillator.start(ctx.currentTime);
                    oscillator.stop(ctx.currentTime + 0.5);
                    break;
                case 'error':
                    oscillator.frequency.setValueAtTime(200, ctx.currentTime);
                    oscillator.frequency.setValueAtTime(150, ctx.currentTime + 0.1);
                    gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
                    oscillator.start(ctx.currentTime);
                    oscillator.stop(ctx.currentTime + 0.3);
                    break;
                case 'click':
                    oscillator.frequency.setValueAtTime(800, ctx.currentTime);
                    gainNode.gain.setValueAtTime(0.1, ctx.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
                    oscillator.start(ctx.currentTime);
                    oscillator.stop(ctx.currentTime + 0.05);
                    break;
                case 'magic':
                    oscillator.frequency.setValueAtTime(400, ctx.currentTime);
                    oscillator.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.3);
                    gainNode.gain.setValueAtTime(0.2, ctx.currentTime);
                    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
                    oscillator.start(ctx.currentTime);
                    oscillator.stop(ctx.currentTime + 0.5);
                    break;
            }
        } catch(e) {
            // Audio not supported
        }
    }
}

// ===== CELEBRATION MANAGER =====
class CelebrationManager {
    static show(text = 'You earned a star! ⭐') {
        const overlay = document.getElementById('celebration');
        const textEl = document.getElementById('celebration-text');
        textEl.textContent = text;
        overlay.classList.remove('hidden');
        CelebrationManager.createConfetti();
    }

    static hide() {
        document.getElementById('celebration').classList.add('hidden');
    }

    static createConfetti() {
        const container = document.getElementById('confetti-container');
        container.innerHTML = '';
        const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#A78BFA', '#F472B6', '#60A5FA', '#34D399', '#FB923C'];
        
        for (let i = 0; i < 50; i++) {
            const piece = document.createElement('div');
            piece.className = 'confetti-piece';
            piece.style.left = Math.random() * 100 + '%';
            piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            piece.style.animationDelay = Math.random() * 2 + 's';
            piece.style.animationDuration = (Math.random() * 2 + 2) + 's';
            piece.style.width = (Math.random() * 10 + 5) + 'px';
            piece.style.height = (Math.random() * 10 + 5) + 'px';
            piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            container.appendChild(piece);
        }

        setTimeout(() => {
            container.innerHTML = '';
        }, 4000);
    }
}

// ===== VIEW MANAGER =====
class ViewManager {
    constructor(appState, audioManager) {
        this.appState = appState;
        this.audio = audioManager;
        this.currentView = 'quest-map';
        this.currentLesson = null;
        this.init();
    }

    init() {
        // Navigation buttons
        document.querySelectorAll('.back-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const target = btn.dataset.view;
                this.showView(target);
            });
        });

        document.getElementById('home-btn').addEventListener('click', () => {
            this.showView('quest-map');
        });

        document.getElementById('close-celebration').addEventListener('click', () => {
            CelebrationManager.hide();
        });

        // Load voices
        if (window.speechSynthesis) {
            window.speechSynthesis.onvoiceschanged = () => {
                window.speechSynthesis.getVoices();
            };
        }

        this.showView('quest-map');
    }

    showView(viewId) {
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        const view = document.getElementById(viewId);
        if (view) {
            view.classList.add('active');
            this.currentView = viewId;
        }

        // Render view content
        switch(viewId) {
            case 'quest-map':
                this.renderQuestMap();
                break;
            case 'abc-view':
                this.renderABCView();
                break;
            case 'lesson-view':
                if (this.currentLesson) this.renderLessonView(this.currentLesson);
                break;
        }

        this.updateHeader();
    }

    updateHeader() {
        document.getElementById('total-stars').textContent = this.appState.getTotalStars();
        const completedCount = this.appState.state.completedLevels.length;
        document.getElementById('level-badge').textContent = `Level ${completedCount + 1}`;
    }

    // ===== QUEST MAP =====
    renderQuestMap() {
        const abcZone = document.getElementById('abc-zone-levels');
        const phonicsZone = document.getElementById('phonics-zone-levels');

        // ABC Card
        abcZone.innerHTML = '';
        const abcCard = this.createLevelCard(0, 'ABC', '🔤', true);
        abcCard.addEventListener('click', () => {
            this.audio.playSound('click');
            this.showView('abc-view');
        });
        abcZone.appendChild(abcCard);

        // Lesson Cards
        phonicsZone.innerHTML = '';
        CURRICULUM.lessons.forEach(lesson => {
            const card = this.createLevelCard(
                lesson.id,
                `L${lesson.id}`,
                this.getLessonEmoji(lesson.id),
                this.appState.isUnlocked(lesson.id)
            );
            card.addEventListener('click', () => {
                if (this.appState.isUnlocked(lesson.id)) {
                    this.audio.playSound('click');
                    this.currentLesson = lesson;
                    this.showView('lesson-view');
                }
            });
            phonicsZone.appendChild(card);
        });
    }

    createLevelCard(id, number, emoji, unlocked) {
        const card = document.createElement('div');
        card.className = 'level-card';
        if (!unlocked) card.classList.add('locked');
        if (this.appState.isCompleted(id)) card.classList.add('completed');

        const stars = this.appState.getStars(id);
        const starDisplay = '⭐'.repeat(stars) + '☆'.repeat(Math.max(0, 3 - stars));

        card.innerHTML = `
            <div class="level-number">${emoji}</div>
            <div class="level-name">${number}</div>
            <div class="level-stars">${unlocked ? starDisplay : ''}</div>
        `;
        return card;
    }

    getLessonEmoji(id) {
        const emojis = ['📖', '🐱', '🐷', '🦊', '🌳', '🦓', '✨', '🎩', '🐟', '📱', '💎', '🌈', '🌧️', '🐝', '💡', '⛵', '🔵', '⭐', '🐦', '🏠', '🪙', '⚽', '🔪', '🎬', '🌸'];
        return emojis[id] || '📚';
    }

    // ===== ABC VIEW =====
    renderABCView() {
        const grid = document.getElementById('abc-grid');
        grid.innerHTML = '';

        CURRICULUM.abc.letters.forEach(item => {
            const card = document.createElement('div');
            card.className = 'abc-letter-card';
            card.innerHTML = `
                <div class="letter">${item.letter}</div>
                <div class="letter-small">${item.lower}</div>
                <div class="letter-emoji">${item.emoji}</div>
            `;
            card.addEventListener('click', () => {
                this.audio.speak(`${item.letter}. ${item.word}`);
                this.showTranslationPopup(item);
            });
            grid.appendChild(card);
        });

        // ABC Quiz button
        document.getElementById('abc-quiz-btn').onclick = () => {
            this.startListeningGame(CURRICULUM.abc.letters.map(l => ({ word: l.word, emoji: l.emoji })));
        };

        // Trace button
        document.getElementById('abc-trace-btn').onclick = () => {
            this.showView('tracing-game');
            this.initTracingGame();
        };
    }

    showTranslationPopup(item) {
        const popup = document.getElementById('translation-popup');
        document.getElementById('popup-letter').textContent = `${item.letter} ${item.lower}`;
        document.getElementById('popup-word').textContent = item.word;
        document.getElementById('popup-image').textContent = item.emoji;
        document.getElementById('popup-kazakh').textContent = `🇰🇿 ${item.kazakh}`;
        popup.classList.remove('hidden');

        document.getElementById('popup-sound-btn').onclick = () => {
            this.audio.speak(item.word);
        };

        document.getElementById('close-popup').onclick = () => {
            popup.classList.add('hidden');
        };

        popup.onclick = (e) => {
            if (e.target === popup) popup.classList.add('hidden');
        };
    }

    // ===== LESSON VIEW =====
    renderLessonView(lesson) {
        document.getElementById('lesson-title').textContent = lesson.title;

        const content = document.getElementById('lesson-content');
        content.innerHTML = `
            <p style="margin-bottom:1rem; color: var(--text-light);">${lesson.description}</p>
            <div class="lesson-words-grid" id="lesson-words-grid"></div>
        `;

        const wordsGrid = document.getElementById('lesson-words-grid');
        lesson.words.forEach(item => {
            const card = document.createElement('div');
            card.className = 'word-card';
            card.innerHTML = `
                <div class="word-emoji">${item.emoji}</div>
                <div class="word-text">${item.word}</div>
            `;
            card.addEventListener('click', () => {
                this.audio.speak(item.word);
                card.style.borderColor = 'var(--green)';
                setTimeout(() => card.style.borderColor = '', 500);
            });
            wordsGrid.appendChild(card);
        });

        // Game options
        const games = document.getElementById('lesson-games');
        games.innerHTML = '';

        const gameOptions = [
            { id: 'sound-cards', icon: '🔊', name: 'Sound Cards' },
            { id: 'drag-drop', icon: '🧩', name: 'Word Builder' },
            { id: 'listening', icon: '👂', name: 'Listening Quiz' },
            { id: 'unscramble', icon: '🔀', name: 'Unscramble' }
        ];

        // Add Magic E game if lesson has it
        if (lesson.magicE) {
            gameOptions.splice(2, 0, { id: 'magic-e', icon: '✨', name: "Magic 'e'" });
        }

        gameOptions.forEach(game => {
            const card = document.createElement('div');
            card.className = 'lesson-game-card';
            card.innerHTML = `
                <div class="game-icon">${game.icon}</div>
                <div class="game-name">${game.name}</div>
            `;
            card.addEventListener('click', () => {
                this.audio.playSound('click');
                this.startGame(game.id, lesson);
            });
            games.appendChild(card);
        });
    }

    startGame(gameId, lesson) {
        switch(gameId) {
            case 'sound-cards':
                this.showView('sound-cards-game');
                this.initSoundCardsGame(lesson);
                break;
            case 'drag-drop':
                this.showView('drag-drop-game');
                this.initDragDropGame(lesson);
                break;
            case 'magic-e':
                this.showView('magic-e-game');
                this.initMagicEGame(lesson);
                break;
            case 'listening':
                this.showView('listening-game');
                this.initListeningGame(lesson);
                break;
            case 'unscramble':
                this.showView('unscramble-game');
                this.initUnscrambleGame(lesson);
                break;
        }
    }

    // ===== SOUND CARDS GAME =====
    initSoundCardsGame(lesson) {
        const area = document.getElementById('sound-cards-area');
        area.innerHTML = '<div class="sound-cards-grid" id="sound-cards-grid"></div>';
        const grid = document.getElementById('sound-cards-grid');

        lesson.words.forEach(item => {
            const card = document.createElement('div');
            card.className = 'sound-card';
            card.innerHTML = `
                <div class="card-letter">${item.word.charAt(0).toUpperCase()}</div>
                <div class="card-word">${item.emoji} ${item.word}</div>
            `;
            card.addEventListener('click', () => {
                this.audio.speak(item.word);
                card.classList.add('playing');
                setTimeout(() => card.classList.remove('playing'), 1000);
            });
            grid.appendChild(card);
        });
    }

    // ===== DRAG AND DROP GAME =====
    initDragDropGame(lesson) {
        this.dragDropState = {
            words: [...lesson.words].sort(() => Math.random() - 0.5).slice(0, 5),
            currentIndex: 0,
            correctCount: 0
        };
        this.renderDragDropWord();
    }

    renderDragDropWord() {
        const state = this.dragDropState;
        if (state.currentIndex >= state.words.length) {
            // Game complete
            this.appState.completeLevel(this.currentLesson.id);
            CelebrationManager.show(`Amazing! You built ${state.correctCount} words! ⭐`);
            return;
        }

        const word = state.words[state.currentIndex];
        const letters = word.word.split('');
        const shuffled = [...letters].sort(() => Math.random() - 0.5);
        // Add some extra random letters
        const extras = 'abcdefghijklmnopqrstuvwxyz'.split('').filter(l => !letters.includes(l));
        const extraLetters = extras.sort(() => Math.random() - 0.5).slice(0, 2);
        const allTiles = [...shuffled, ...extraLetters].sort(() => Math.random() - 0.5);

        document.getElementById('word-display').textContent = `Spell the word:`;
        document.getElementById('word-image').textContent = word.emoji;

        // Drop zone
        const dropZone = document.getElementById('drop-zone');
        dropZone.innerHTML = '';
        letters.forEach((_, i) => {
            const slot = document.createElement('div');
            slot.className = 'drop-slot';
            slot.dataset.index = i;
            slot.addEventListener('dragover', (e) => {
                e.preventDefault();
                dropZone.classList.add('drag-over');
            });
            slot.addEventListener('dragleave', () => {
                dropZone.classList.remove('drag-over');
            });
            slot.addEventListener('drop', (e) => {
                e.preventDefault();
                dropZone.classList.remove('drag-over');
                const letter = e.dataTransfer.getData('text');
                const tileIndex = e.dataTransfer.getData('tile-index');
                slot.textContent = letter;
                slot.classList.add('filled');
                slot.dataset.letter = letter;
                slot.dataset.tileIndex = tileIndex;
                // Mark tile as used
                const tile = document.querySelector(`.letter-tile[data-index="${tileIndex}"]`);
                if (tile) tile.classList.add('used');
            });
            // Click to remove
            slot.addEventListener('click', () => {
                if (slot.classList.contains('filled')) {
                    const tileIdx = slot.dataset.tileIndex;
                    const tile = document.querySelector(`.letter-tile[data-index="${tileIdx}"]`);
                    if (tile) tile.classList.remove('used');
                    slot.textContent = '';
                    slot.classList.remove('filled');
                    delete slot.dataset.letter;
                    delete slot.dataset.tileIndex;
                }
            });
            dropZone.appendChild(slot);
        });

        // Letter tiles
        const tilesContainer = document.getElementById('letter-tiles');
        tilesContainer.innerHTML = '';
        allTiles.forEach((letter, i) => {
            const tile = document.createElement('div');
            tile.className = 'letter-tile';
            tile.textContent = letter;
            tile.draggable = true;
            tile.dataset.index = i;
            tile.dataset.letter = letter;

            tile.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text', letter);
                e.dataTransfer.setData('tile-index', i.toString());
                tile.style.opacity = '0.5';
            });
            tile.addEventListener('dragend', () => {
                tile.style.opacity = '';
            });

            // Touch/click support
            tile.addEventListener('click', () => {
                if (tile.classList.contains('used')) return;
                const emptySlot = dropZone.querySelector('.drop-slot:not(.filled)');
                if (emptySlot) {
                    emptySlot.textContent = letter;
                    emptySlot.classList.add('filled');
                    emptySlot.dataset.letter = letter;
                    emptySlot.dataset.tileIndex = i.toString();
                    tile.classList.add('used');
                }
            });

            tilesContainer.appendChild(tile);
        });

        // Check button
        document.getElementById('check-word-btn').onclick = () => {
            const slots = dropZone.querySelectorAll('.drop-slot');
            let correct = true;
            slots.forEach((slot, i) => {
                if (slot.dataset.letter === letters[i]) {
                    slot.classList.add('correct');
                } else {
                    slot.classList.add('incorrect');
                    correct = false;
                }
            });

            if (correct) {
                this.audio.playSound('success');
                this.audio.speak(word.word);
                state.correctCount++;
                setTimeout(() => {
                    state.currentIndex++;
                    this.renderDragDropWord();
                }, 1500);
            } else {
                this.audio.playSound('error');
                setTimeout(() => {
                    slots.forEach(s => {
                        s.classList.remove('correct', 'incorrect');
                    });
                }, 1000);
            }
        };

        // Next button
        document.getElementById('next-word-btn').onclick = () => {
            state.currentIndex++;
            this.renderDragDropWord();
        };
    }

    // ===== MAGIC E GAME =====
    initMagicEGame(lesson) {
        if (!lesson.magicE) return;
        this.magicEState = {
            pairs: [...lesson.magicE].sort(() => Math.random() - 0.5),
            currentIndex: 0,
            revealed: false
        };
        this.renderMagicEWord();
    }

    renderMagicEWord() {
        const state = this.magicEState;
        if (state.currentIndex >= state.pairs.length) {
            this.appState.completeLevel(this.currentLesson.id);
            CelebrationManager.show("You're a Magic E master! ✨⭐");
            return;
        }

        const pair = state.pairs[state.currentIndex];
        state.revealed = false;

        document.getElementById('word-before').textContent = pair.short.toUpperCase();
        document.getElementById('word-after').textContent = pair.long.toUpperCase();
        document.getElementById('word-after').classList.remove('revealed');
        document.getElementById('magic-e-explanation').textContent = '';

        document.getElementById('wand-btn').onclick = () => {
            if (!state.revealed) {
                state.revealed = true;
                this.audio.playSound('magic');
                document.getElementById('word-after').classList.add('revealed');
                document.getElementById('magic-e-explanation').textContent = 
                    `Adding 'e' at the end makes the vowel say its name! ${pair.short} → ${pair.long}`;
                setTimeout(() => this.audio.speak(pair.long), 500);
            }
        };

        document.getElementById('next-magic-btn').onclick = () => {
            state.currentIndex++;
            this.renderMagicEWord();
        };
    }

    // ===== LISTENING GAME =====
    initListeningGame(lesson) {
        this.listeningState = {
            words: [...lesson.words].sort(() => Math.random() - 0.5),
            currentIndex: 0,
            score: 0,
            total: Math.min(5, lesson.words.length)
        };
        this.renderListeningRound();
    }

    startListeningGame(words) {
        this.currentLesson = { id: 0, words: words };
        this.showView('listening-game');
        this.initListeningGame({ words: words });
    }

    renderListeningRound() {
        const state = this.listeningState;
        if (state.currentIndex >= state.total) {
            // Game complete
            if (this.currentLesson.id > 0) {
                this.appState.completeLevel(this.currentLesson.id);
            }
            CelebrationManager.show(`Quiz complete! Score: ${state.score}/${state.total} 🎉`);
            return;
        }

        const correctWord = state.words[state.currentIndex];
        const otherWords = state.words.filter(w => w.word !== correctWord.word).sort(() => Math.random() - 0.5).slice(0, 3);
        const options = [correctWord, ...otherWords].sort(() => Math.random() - 0.5);

        document.getElementById('listening-score').textContent = state.score;

        const playBtn = document.getElementById('play-sound-btn');
        playBtn.onclick = () => {
            this.audio.speak(correctWord.word);
        };

        // Auto-play
        setTimeout(() => this.audio.speak(correctWord.word), 500);

        const optionsContainer = document.getElementById('listening-options');
        optionsContainer.innerHTML = '';
        let answered = false;

        options.forEach(option => {
            const btn = document.createElement('div');
            btn.className = 'listening-option';
            btn.innerHTML = `${option.emoji}<br>${option.word}`;
            btn.addEventListener('click', () => {
                if (answered) return;
                answered = true;

                if (option.word === correctWord.word) {
                    btn.classList.add('correct');
                    this.audio.playSound('success');
                    state.score++;
                    document.getElementById('listening-score').textContent = state.score;
                } else {
                    btn.classList.add('incorrect');
                    this.audio.playSound('error');
                    // Show correct answer
                    optionsContainer.querySelectorAll('.listening-option').forEach(o => {
                        if (o.textContent.includes(correctWord.word)) {
                            o.classList.add('correct');
                        }
                    });
                }

                setTimeout(() => {
                    state.currentIndex++;
                    this.renderListeningRound();
                }, 1500);
            });
            optionsContainer.appendChild(btn);
        });
    }

    // ===== UNSCRAMBLE GAME =====
    initUnscrambleGame(lesson) {
        this.unscrambleState = {
            words: [...lesson.words].sort(() => Math.random() - 0.5).slice(0, 5),
            currentIndex: 0,
            correctCount: 0
        };
        this.renderUnscrambleWord();
    }

    renderUnscrambleWord() {
        const state = this.unscrambleState;
        if (state.currentIndex >= state.words.length) {
            this.appState.completeLevel(this.currentLesson.id);
            CelebrationManager.show(`Great unscrambling! ${state.correctCount} words correct! 🔀⭐`);
            return;
        }

        const word = state.words[state.currentIndex];
        const letters = word.word.split('');
        const shuffled = [...letters].sort(() => Math.random() - 0.5);
        // Ensure it's actually shuffled
        if (shuffled.join('') === letters.join('') && letters.length > 1) {
            shuffled.reverse();
        }

        state.currentAnswer = [];
        state.currentLetters = shuffled;

        document.getElementById('unscramble-hint').textContent = word.emoji;

        // Slots
        const slotsContainer = document.getElementById('unscramble-slots');
        slotsContainer.innerHTML = '';
        letters.forEach((_, i) => {
            const slot = document.createElement('div');
            slot.className = 'unscramble-slot';
            slot.dataset.index = i;
            slot.addEventListener('click', () => {
                if (slot.classList.contains('filled')) {
                    // Remove letter from slot
                    const tileIdx = slot.dataset.tileIndex;
                    const tile = document.querySelector(`.unscramble-tile[data-index="${tileIdx}"]`);
                    if (tile) tile.classList.remove('used');
                    slot.textContent = '';
                    slot.classList.remove('filled');
                    state.currentAnswer[i] = null;
                    delete slot.dataset.tileIndex;
                }
            });
            slotsContainer.appendChild(slot);
        });

        // Tiles
        const tilesContainer = document.getElementById('unscramble-tiles');
        tilesContainer.innerHTML = '';
        shuffled.forEach((letter, i) => {
            const tile = document.createElement('button');
            tile.className = 'unscramble-tile';
            tile.textContent = letter;
            tile.dataset.index = i;
            tile.addEventListener('click', () => {
                if (tile.classList.contains('used')) return;
                const emptySlot = slotsContainer.querySelector('.unscramble-slot:not(.filled)');
                if (emptySlot) {
                    emptySlot.textContent = letter;
                    emptySlot.classList.add('filled');
                    emptySlot.dataset.tileIndex = i.toString();
                    state.currentAnswer[parseInt(emptySlot.dataset.index)] = letter;
                    tile.classList.add('used');
                }
            });
            tilesContainer.appendChild(tile);
        });

        // Clear button
        document.getElementById('clear-unscramble-btn').onclick = () => {
            slotsContainer.querySelectorAll('.unscramble-slot').forEach(slot => {
                const tileIdx = slot.dataset.tileIndex;
                const tile = document.querySelector(`.unscramble-tile[data-index="${tileIdx}"]`);
                if (tile) tile.classList.remove('used');
                slot.textContent = '';
                slot.classList.remove('filled');
                delete slot.dataset.tileIndex;
            });
            state.currentAnswer = [];
        };

        // Check button
        document.getElementById('check-unscramble-btn').onclick = () => {
            const slots = slotsContainer.querySelectorAll('.unscramble-slot');
            let correct = true;
            slots.forEach((slot, i) => {
                if (slot.textContent === letters[i]) {
                    slot.style.borderColor = 'var(--green)';
                    slot.style.background = '#d1fae5';
                } else {
                    slot.style.borderColor = 'var(--primary)';
                    slot.style.background = '#fee2e2';
                    correct = false;
                }
            });

            if (correct) {
                this.audio.playSound('success');
                this.audio.speak(word.word);
                state.correctCount++;
                setTimeout(() => {
                    state.currentIndex++;
                    this.renderUnscrambleWord();
                }, 1500);
            } else {
                this.audio.playSound('error');
                setTimeout(() => {
                    slots.forEach(s => {
                        s.style.borderColor = '';
                        s.style.background = '';
                    });
                }, 1000);
            }
        };
    }

    // ===== TRACING GAME =====
    initTracingGame() {
        this.tracingState = {
            currentIndex: 0,
            letters: CURRICULUM.abc.letters,
            isDrawing: false
        };

        const canvas = document.getElementById('tracing-canvas');
        const ctx = canvas.getContext('2d');
        
        // Set canvas size based on container
        const container = canvas.parentElement;
        canvas.width = container.offsetWidth;
        canvas.height = container.offsetHeight;

        ctx.strokeStyle = '#FF6B6B';
        ctx.lineWidth = 8;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // Mouse events
        canvas.addEventListener('mousedown', (e) => this.startDraw(e, canvas));
        canvas.addEventListener('mousemove', (e) => this.draw(e, canvas));
        canvas.addEventListener('mouseup', () => this.stopDraw());
        canvas.addEventListener('mouseleave', () => this.stopDraw());

        // Touch events
        canvas.addEventListener('touchstart', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            const mouseEvent = new MouseEvent('mousedown', {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            canvas.dispatchEvent(mouseEvent);
        });
        canvas.addEventListener('touchmove', (e) => {
            e.preventDefault();
            const touch = e.touches[0];
            const mouseEvent = new MouseEvent('mousemove', {
                clientX: touch.clientX,
                clientY: touch.clientY
            });
            canvas.dispatchEvent(mouseEvent);
        });
        canvas.addEventListener('touchend', () => this.stopDraw());

        // Buttons
        document.getElementById('prev-letter-btn').onclick = () => {
            this.tracingState.currentIndex = Math.max(0, this.tracingState.currentIndex - 1);
            this.updateTracingLetter();
        };

        document.getElementById('next-letter-btn').onclick = () => {
            this.tracingState.currentIndex = Math.min(25, this.tracingState.currentIndex + 1);
            this.updateTracingLetter();
        };

        document.getElementById('clear-canvas-btn').onclick = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        };

        document.getElementById('complete-trace-btn').onclick = () => {
            this.audio.playSound('success');
            CelebrationManager.show('Beautiful letter! ✏️⭐');
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            this.tracingState.currentIndex = Math.min(25, this.tracingState.currentIndex + 1);
            this.updateTracingLetter();
        };

        this.updateTracingLetter();
    }

    startDraw(e, canvas) {
        this.tracingState.isDrawing = true;
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) * (canvas.width / rect.width);
        const y = (e.clientY - rect.top) * (canvas.height / rect.height);
        ctx.beginPath();
        ctx.moveTo(x, y);
    }

    draw(e, canvas) {
        if (!this.tracingState.isDrawing) return;
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) * (canvas.width / rect.width);
        const y = (e.clientY - rect.top) * (canvas.height / rect.height);
        ctx.lineTo(x, y);
        ctx.stroke();
    }

    stopDraw() {
        this.tracingState.isDrawing = false;
    }

    updateTracingLetter() {
        const letter = this.tracingState.letters[this.tracingState.currentIndex];
        document.getElementById('current-trace-letter').textContent = letter.letter;
        document.getElementById('guide-letter').textContent = letter.letter;
        
        // Clear canvas
        const canvas = document.getElementById('tracing-canvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}

// ===== INITIALIZE APP =====
document.addEventListener('DOMContentLoaded', () => {
    // Loading screen
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            document.getElementById('app').classList.remove('hidden');
        }, 500);
    }, 1800);

    // Initialize app
    const appState = new AppState();
    const audioManager = new AudioManager();
    const viewManager = new ViewManager(appState, audioManager);

    // Make accessible for debugging
    window.app = { appState, audioManager, viewManager };
});