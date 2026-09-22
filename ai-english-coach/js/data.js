/* ============================================
   AI ENGLISH COACH — Curriculum Data
   Complete Grade 8 English curriculum for Kazakhstan
   ============================================ */

const CurriculumData = {
    units: [
        {
            id: 1,
            title: "Our World",
            topics: ["Everyday objects", "much/many/a lot of", "Compound nouns", "Relative pronouns", "Pollution vocabulary", "too/too much/enough", "Offering help", "Environmental email"],
            color: "#1a56db",
            lessons: [
                {
                    id: "1-1",
                    type: "vocabulary",
                    title: "Everyday Objects & Quantifiers",
                    description: "Learn vocabulary for everyday objects and how to use much, many, a lot of, some, any",
                    content: {
                        explanation: "We use different quantifiers with countable and uncountable nouns. Use 'much' with uncountable nouns, 'many' with countable nouns, and 'a lot of' with both.",
                        examples: [
                            "How much water do you drink every day?",
                            "There are many books on the shelf.",
                            "She has a lot of friends at school."
                        ],
                        vocabulary: [
                            { word: "bottle", meaning: "a container for liquids" },
                            { word: "carton", meaning: "a small box/container for food or drink" },
                            { word: "roll", meaning: "a small piece of bread" },
                            { word: "can", meaning: "a metal container for food or drink" },
                            { word: "packet", meaning: "a small container made of paper or plastic" },
                            { word: "jar", meaning: "a glass container with a wide mouth" }
                        ],
                        practice: [
                            { type: "mcq", question: "How ___ milk do we need?", options: ["many", "much", "a lot", "some"], correct: 1, explanation: "We use 'much' with uncountable nouns like milk." },
                            { type: "mcq", question: "There are ___ students in our class.", options: ["much", "a lot", "many", "any"], correct: 2, explanation: "We use 'many' with countable nouns like students." },
                            { type: "fill", question: "She doesn't have ___ money. (much/many)", correct: "much", explanation: "We use 'much' with uncountable nouns like money." },
                            { type: "mcq", question: "Do you have ___ brothers or sisters?", options: ["much", "some", "any", "a lot"], correct: 2, explanation: "We use 'any' in questions with countable nouns." }
                        ]
                    }
                },
                {
                    id: "1-2",
                    type: "reading",
                    title: "Reading: The No Impact Family",
                    description: "Read about a family trying to reduce their environmental impact",
                    content: {
                        text: "The No Impact Family\n\nThe Johnson family decided to try something different. For one whole year, they tried to live without hurting the environment. They called it their 'No Impact Project.'\n\nFirst, they stopped buying plastic bottles. Instead, they used reusable containers for water. The family also started composting their food waste. They collected fruit peels, vegetable scraps, and eggshells in a special bin in the garden.\n\nThey also changed how they travelled. Mr Johnson cycled to work every day, and the children walked to school. At weekends, they used public transport instead of the family car.\n\nThe most difficult change was giving up packaged food. They shopped at local markets and cooked everything from fresh ingredients. It took more time, but the food tasted much better.\n\nAfter a year, the family was amazed. They had saved money, felt healthier, and helped the planet. 'We didn't realise how much waste we produced,' said Mrs Johnson. 'Now we recycle, reuse, and save energy every day.'",
                        questions: [
                            { type: "mcq", question: "What did the Johnson family stop buying?", options: ["Fresh food", "Plastic bottles", "Public transport", "Reusable containers"], correct: 1, explanation: "The text says they stopped buying plastic bottles." },
                            { type: "mcq", question: "How did Mr Johnson travel to work?", options: ["By car", "By bus", "By bicycle", "On foot"], correct: 2, explanation: "The text says Mr Johnson cycled to work." },
                            { type: "mcq", question: "What was the most difficult change?", options: ["Walking to school", "Composting food", "Giving up packaged food", "Using public transport"], correct: 2, explanation: "The text says the most difficult change was giving up packaged food." },
                            { type: "short", question: "Name two things the family put in their compost bin.", correct: ["fruit peels", "vegetable scraps", "eggshells"], explanation: "The text mentions fruit peels, vegetable scraps, and eggshells." }
                        ]
                    }
                },
                {
                    id: "1-3",
                    type: "grammar",
                    title: "Relative Pronouns & Compound Nouns",
                    description: "Learn to use who, which, that, where and form compound nouns",
                    content: {
                        explanation: "Relative pronouns (who, which, that, where) connect clauses and give more information about a noun. Compound nouns are made from two or more words combined together.",
                        examples: [
                            "The boy who won the prize is my friend. (who = for people)",
                            "The book which I read was interesting. (which = for things)",
                            "This is the school where I study. (where = for places)",
                            "tooth + brush = toothbrush, sun + light = sunlight"
                        ],
                        practice: [
                            { type: "mcq", question: "The woman ___ lives next door is a doctor.", options: ["which", "who", "where", "what"], correct: 1, explanation: "We use 'who' for people." },
                            { type: "mcq", question: "The car ___ he bought is very fast.", options: ["who", "where", "which", "when"], correct: 2, explanation: "We use 'which' or 'that' for things." },
                            { type: "fill", question: "Make a compound noun: water + fall = ___", correct: "waterfall", explanation: "Waterfall is a compound noun." },
                            { type: "mcq", question: "This is the park ___ we play football.", options: ["who", "which", "where", "that"], correct: 2, explanation: "We use 'where' for places." }
                        ]
                    }
                },
                {
                    id: "1-4",
                    type: "grammar",
                    title: "Too / Too Much / Too Many / Enough",
                    description: "Learn to express excess and sufficiency",
                    content: {
                        explanation: "We use 'too' before adjectives and adverbs, 'too much' before uncountable nouns, 'too many' before countable nouns, and 'enough' after adjectives or before nouns to show sufficiency.",
                        examples: [
                            "This bag is too heavy. (too + adjective)",
                            "There is too much noise in this room. (too much + uncountable)",
                            "There are too many people here. (too many + countable)",
                            "The water is warm enough to swim. (adjective + enough)"
                        ],
                        practice: [
                            { type: "mcq", question: "There is ___ traffic in the city centre.", options: ["too many", "too much", "too", "enough"], correct: 1, explanation: "Traffic is uncountable, so we use 'too much'." },
                            { type: "mcq", question: "She has ___ homework to do tonight.", options: ["too many", "too much", "too", "enough"], correct: 1, explanation: "Homework is uncountable, so we use 'too much'." },
                            { type: "fill", question: "There are ___ cars on the road. (too many/too much)", correct: "too many", explanation: "Cars are countable, so we use 'too many'." },
                            { type: "mcq", question: "He is old ___ to drive a car.", options: ["too", "enough", "too much", "very"], correct: 1, explanation: "We use 'enough' after adjectives: old enough." }
                        ]
                    }
                },
                {
                    id: "1-5",
                    type: "speaking",
                    title: "Speaking: Offering and Asking for Help",
                    description: "Learn useful phrases for offering help and responding",
                    content: {
                        explanation: "When we offer help, we use polite expressions. When we accept or decline, we should also be polite.",
                        phrases: [
                            "Do you want me to help you with that?",
                            "Shall I carry that for you?",
                            "Would you like some help?",
                            "I'd really appreciate it if you could help me.",
                            "That's very kind of you, thank you.",
                            "No thanks, I can manage."
                        ],
                        prompt: "Your friend is carrying heavy bags. Offer to help them. Then your friend asks you to help with their English homework. Accept politely.",
                        practice: [
                            { type: "speaking", question: "Offer to help your friend who looks confused in class. Use 'Shall I...' or 'Do you want me to...'", correct: "any", explanation: "Use polite offering phrases." }
                        ]
                    }
                },
                {
                    id: "1-6",
                    type: "writing",
                    title: "Writing: An Environmental Problem",
                    description: "Write an email about an environmental issue using so/because",
                    content: {
                        explanation: "When writing about environmental problems, describe the problem, explain causes, and suggest solutions. Use 'so' and 'because' to show cause and effect.",
                        phrases: [
                            "I'm writing to tell you about...",
                            "The problem is that...",
                            "This is because...",
                            "So we need to...",
                            "I think we should...",
                            "If we don't do something,..."
                        ],
                        prompt: "Write an email (80-100 words) to your friend about an environmental problem in your area. Describe the problem, explain why it is happening, and suggest what people can do to help. Use 'so' and 'because' in your writing."
                    }
                },
                {
                    id: "1-7",
                    type: "culture",
                    title: "My Country: Saving the Aral Sea",
                    description: "Learn about the environmental disaster and efforts to save the Aral Sea",
                    content: {
                        text: "The Aral Sea was once one of the largest lakes in the world. It was located between Kazakhstan and Uzbekistan. In the 1960s, the rivers that fed the Aral Sea were used for irrigation to grow cotton. As a result, the sea began to shrink.\n\nBy the 2000s, the Aral Sea had lost most of its water. The fishing industry disappeared, and the climate became more extreme. Dust storms carried salt and chemicals from the dry seabed, causing health problems for local people.\n\nHowever, there is hope. Kazakhstan built a dam called Kok-Aral to save the Northern Aral Sea. By 2008, water levels had risen, and fish returned. Some fishing villages are working again. The project shows that with determination, we can repair environmental damage.",
                        questions: [
                            { type: "mcq", question: "Why did the Aral Sea start to shrink?", options: ["Climate change", "Rivers were used for irrigation", "It was always small", "Earthquakes"], correct: 1, explanation: "The rivers that fed the sea were used for irrigation." },
                            { type: "short", question: "What did Kazakhstan build to help save the Northern Aral Sea?", correct: ["dam", "kok-aral", "a dam"], explanation: "Kazakhstan built the Kok-Aral dam." }
                        ]
                    }
                },
                {
                    id: "1-8",
                    type: "review",
                    title: "Unit 1 Review",
                    description: "Test your knowledge of Unit 1 topics",
                    content: {
                        practice: [
                            { type: "mcq", question: "Which is correct? 'There isn't ___ bread left.'", options: ["many", "much", "a lot", "some"], correct: 1, explanation: "Bread is uncountable, use 'much' in negative sentences." },
                            { type: "mcq", question: "Choose the correct relative pronoun: 'The girl ___ won the competition is from Almaty.'", options: ["which", "who", "where", "what"], correct: 1, explanation: "Use 'who' for people." },
                            { type: "fill", question: "The tea is ___ hot to drink. (too/too much)", correct: "too", explanation: "Use 'too' before adjectives." },
                            { type: "mcq", question: "Which is a compound noun?", options: ["beautiful", "sunflower", "quickly", "running"], correct: 1, explanation: "Sunflower = sun + flower, a compound noun." }
                        ]
                    }
                }
            ]
        },
        {
            id: 2,
            title: "Daily Life and Shopping",
            topics: ["Internet vocabulary", "Present Perfect", "Internet Addiction", "Cybercrime", "Online Shopping", "Website comments"],
            color: "#06b6d4",
            lessons: [
                {
                    id: "2-1",
                    type: "vocabulary",
                    title: "Internet Vocabulary",
                    description: "Learn vocabulary related to the internet and digital communication",
                    content: {
                        explanation: "The internet has changed how we communicate. We use many new words to describe online activities.",
                        examples: [
                            "I sent her an email about the project.",
                            "We use instant messaging to chat with friends.",
                            "File sharing makes it easy to send documents.",
                            "Always use a strong password to protect your account."
                        ],
                        vocabulary: [
                            { word: "email", meaning: "electronic messages sent over the internet" },
                            { word: "instant messaging", meaning: "real-time text communication online" },
                            { word: "file sharing", meaning: "sending digital files to other people" },
                            { word: "download", meaning: "to copy a file from the internet to your device" },
                            { word: "upload", meaning: "to send a file from your device to the internet" },
                            { word: "password", meaning: "a secret word to protect your account" },
                            { word: "browser", meaning: "a program used to access websites" },
                            { word: "website", meaning: "a collection of web pages on the internet" },
                            { word: "social media", meaning: "platforms for online social interaction" },
                            { word: "cybercrime", meaning: "criminal activities carried out online" }
                        ],
                        practice: [
                            { type: "mcq", question: "What do you use to visit websites?", options: ["password", "browser", "download", "upload"], correct: 1, explanation: "A browser is a program used to access websites." },
                            { type: "mcq", question: "Which activity involves sending files to others online?", options: ["downloading", "file sharing", "browsing", "messaging"], correct: 1, explanation: "File sharing means sending digital files to other people." },
                            { type: "fill", question: "You need a strong ___ to protect your account.", correct: "password", explanation: "A password protects your online accounts." },
                            { type: "mcq", question: "What is cybercrime?", options: ["Online shopping", "Criminal activities online", "Sending emails", "Using social media"], correct: 1, explanation: "Cybercrime refers to criminal activities carried out online." }
                        ]
                    }
                },
                {
                    id: "2-2",
                    type: "grammar",
                    title: "Present Perfect: Affirmative & Negative",
                    description: "Learn to form and use the Present Perfect tense",
                    content: {
                        explanation: "The Present Perfect connects the past to the present. We use it for experiences, changes, and continuing situations. Form: have/has + past participle.",
                        examples: [
                            "I have visited Astana three times. (experience)",
                            "She has finished her homework. (completed action)",
                            "We haven't seen that film yet. (negative)",
                            "They have lived in Almaty since 2015. (continuing situation)"
                        ],
                        rules: [
                            "I/You/We/They + have + past participle",
                            "He/She/It + has + past participle",
                            "Negative: haven't/hasn't + past participle"
                        ],
                        practice: [
                            { type: "mcq", question: "She ___ visited London.", options: ["have", "has", "did", "is"], correct: 1, explanation: "We use 'has' with he, she, and it." },
                            { type: "mcq", question: "They ___ finished the project yet.", options: ["hasn't", "haven't", "didn't", "don't"], correct: 1, explanation: "We use 'haven't' with they/you/we/I." },
                            { type: "fill", question: "I ___ (eat) sushi before. Use Present Perfect.", correct: "have eaten", explanation: "I + have + past participle (eaten)." },
                            { type: "mcq", question: "He ___ never been to Japan.", options: ["have", "has", "is", "was"], correct: 1, explanation: "We use 'has' with he/she/it." },
                            { type: "fill", question: "We ___ (live) here for five years.", correct: "have lived", explanation: "We + have + past participle (lived)." }
                        ]
                    }
                },
                {
                    id: "2-3",
                    type: "reading",
                    title: "Reading: Internet Addiction",
                    description: "Read about internet addiction and its effects on young people",
                    content: {
                        text: "Internet Addiction\n\nIn today's world, it's hard to imagine life without the internet. Most teenagers use the internet every day for schoolwork, social media, games, and entertainment. But for some young people, internet use has become a serious problem.\n\nInternet addiction means spending so much time online that it affects your real life. Addicted teenagers may stop doing homework, lose interest in sports, and spend less time with family and friends. Some even have problems sleeping because they stay online late at night.\n\nExperts say that spending two to three hours online each day is normal for teenagers. But when a person spends five or more hours online and cannot stop, it may be a sign of addiction.\n\nWhat can we do? First, set a time limit for internet use. Second, find other activities you enjoy, like sport, reading, or meeting friends. Third, turn off your phone or computer at least one hour before bedtime.\n\nThe internet is a wonderful tool, but we must use it wisely. Balance is the key to a healthy life.",
                        questions: [
                            { type: "mcq", question: "What does internet addiction mean?", options: ["Using the internet for school", "Spending so much time online it affects real life", "Playing games online", "Sending emails"], correct: 1, explanation: "Internet addiction means spending so much time online that it affects your real life." },
                            { type: "mcq", question: "How many hours online per day is considered normal for teenagers?", options: ["1 hour", "2-3 hours", "5 hours", "8 hours"], correct: 1, explanation: "Experts say 2-3 hours is normal." },
                            { type: "mcq", question: "What is one suggestion to avoid internet addiction?", options: ["Use the internet more", "Set a time limit", "Stop using computers forever", "Only use social media"], correct: 1, explanation: "The text suggests setting a time limit." },
                            { type: "short", question: "Name two activities the text suggests instead of spending time online.", correct: ["sport", "reading", "meeting friends"], explanation: "The text suggests sport, reading, or meeting friends." }
                        ]
                    }
                },
                {
                    id: "2-4",
                    type: "grammar",
                    title: "Present Perfect: Questions & Experiences",
                    description: "Learn to ask and answer questions using Present Perfect",
                    content: {
                        explanation: "To form Present Perfect questions, we put have/has before the subject. We use 'ever' to ask about experiences and 'never' in negative answers.",
                        examples: [
                            "Have you ever been to London? — Yes, I have. / No, I haven't.",
                            "Has she ever eaten sushi? — Yes, she has. / No, she hasn't.",
                            "Have they finished their project? — Yes, they have.",
                            "I have never seen such a beautiful place."
                        ],
                        rules: [
                            "Have/Has + subject + ever + past participle?",
                            "Yes, I have. / No, I haven't.",
                            "I have never + past participle."
                        ],
                        practice: [
                            { type: "mcq", question: "___ you ever visited Astana?", options: ["Has", "Have", "Did", "Do"], correct: 1, explanation: "We use 'Have' with 'you'." },
                            { type: "mcq", question: "___ she ever eaten beshbarmak?", options: ["Have", "Has", "Did", "Is"], correct: 1, explanation: "We use 'Has' with 'she'." },
                            { type: "fill", question: "Have you ever ___ (see) a whale?", correct: "seen", explanation: "Past participle of 'see' is 'seen'." },
                            { type: "mcq", question: "I have ___ been to Europe. (I want to say 'not once')", options: ["ever", "never", "already", "yet"], correct: 1, explanation: "We use 'never' to mean 'not once'." },
                            { type: "mcq", question: "Have they finished their homework ___?", options: ["ever", "never", "yet", "already"], correct: 2, explanation: "We use 'yet' in questions and negatives at the end of the sentence." }
                        ]
                    }
                },
                {
                    id: "2-5",
                    type: "vocabulary",
                    title: "Cybercrime Vocabulary",
                    description: "Learn vocabulary related to online safety and cybercrime",
                    content: {
                        explanation: "As we spend more time online, it's important to understand cybercrime and how to protect ourselves.",
                        vocabulary: [
                            { word: "hacker", meaning: "a person who illegally accesses computer systems" },
                            { word: "virus", meaning: "a harmful program that damages computers" },
                            { word: "firewall", meaning: "a security system that protects a network" },
                            { word: "identity theft", meaning: "stealing someone's personal information" },
                            { word: "phishing", meaning: "tricking people into giving personal information" },
                            { word: "encryption", meaning: "converting data into a code for security" },
                            { word: "malware", meaning: "software designed to harm computers" },
                            { word: "scam", meaning: "a dishonest plan to trick people" }
                        ],
                        practice: [
                            { type: "mcq", question: "What is a hacker?", options: ["A web designer", "Someone who illegally accesses computers", "A type of virus", "A security program"], correct: 1, explanation: "A hacker illegally accesses computer systems." },
                            { type: "mcq", question: "What does a firewall do?", options: ["Creates viruses", "Protects a network", "Deletes files", "Sends emails"], correct: 1, explanation: "A firewall is a security system that protects a network." },
                            { type: "fill", question: "A ___ is a harmful program that damages computers.", correct: "virus", explanation: "A virus is a harmful computer program." }
                        ]
                    }
                },
                {
                    id: "2-6",
                    type: "speaking",
                    title: "Speaking: Online Shopping & Experiences",
                    description: "Practice talking about online shopping and life experiences",
                    content: {
                        explanation: "When talking about online shopping, describe what you bought, how much it cost, and whether you were satisfied. For experiences, use Present Perfect.",
                        phrases: [
                            "I've bought many things online.",
                            "The best thing I've ever ordered was...",
                            "I've never tried online shopping for...",
                            "Have you ever bought something that was different from the picture?",
                            "I prefer shopping online because...",
                            "The delivery took about..."
                        ],
                        prompt: "Talk about your online shopping experiences. What have you bought online? What was the best thing you've ever ordered? Have you ever had a problem with an online purchase?",
                        practice: [
                            { type: "speaking", question: "Describe the best thing you have ever bought online. Use Present Perfect.", correct: "any", explanation: "Use 'I have bought/ordered/got...' and describe the experience." }
                        ]
                    }
                },
                {
                    id: "2-7",
                    type: "writing",
                    title: "Writing: A Comment on a Website",
                    description: "Write a comment expressing your opinion about a product or service",
                    content: {
                        explanation: "When writing a website comment, state your opinion clearly, give reasons, and use linkers for addition and contrast.",
                        phrases: [
                            "I think this product is...",
                            "In my opinion, ...",
                            "I really like/dislike...",
                            "However, ...",
                            "In addition, ...",
                            "On the other hand, ...",
                            "I would recommend this because...",
                            "Overall, I think..."
                        ],
                        prompt: "Write a comment (60-80 words) on a website about a new smartphone app you have used. Say what you like and don't like about it. Use linkers like 'however', 'in addition', and 'overall'."
                    }
                },
                {
                    id: "2-8",
                    type: "culture",
                    title: "My Country: Let's Go Shopping!",
                    description: "Learn about shopping culture in Kazakhstan",
                    content: {
                        text: "Shopping in Kazakhstan has changed a lot in recent years. In the past, people shopped at local bazaars and small shops. The famous Green Bazaar (Zelyony Bazaar) in Almaty is still popular today. There, you can buy fresh fruit, vegetables, meat, cheese, and traditional sweets.\n\nNow, modern shopping malls are everywhere. Mega Silk Way in Astana and Mega Alma-Ata are some of the largest. People can buy international brands, watch films, eat at restaurants, and even visit aquariums — all in one place.\n\nOnline shopping is also growing fast. Kaspi.kz and Wildberries are very popular. People order everything from clothes to electronics. Delivery is often free and very fast.\n\nHowever, many Kazakhstani people still enjoy the traditional shopping experience. At the bazaar, you can talk to sellers, try food before buying, and sometimes get a lower price if you bargain!",
                        questions: [
                            { type: "mcq", question: "What is the Green Bazaar famous for?", options: ["Electronics", "Fresh food and traditional sweets", "Clothes only", "Books"], correct: 1, explanation: "The Green Bazaar sells fresh fruit, vegetables, meat, cheese, and traditional sweets." },
                            { type: "short", question: "Name two popular online shopping platforms in Kazakhstan.", correct: ["kaspi", "wildberries", "kaspi.kz"], explanation: "Kaspi.kz and Wildberries are popular online shopping platforms." }
                        ]
                    }
                },
                {
                    id: "2-9",
                    type: "review",
                    title: "Unit 2 Review",
                    description: "Test your knowledge of Unit 2 topics",
                    content: {
                        practice: [
                            { type: "mcq", question: "She ___ never used online shopping.", options: ["have", "has", "did", "is"], correct: 1, explanation: "We use 'has' with she." },
                            { type: "mcq", question: "Have you ___ eaten at a restaurant online?", options: ["never", "ever", "yet", "already"], correct: 1, explanation: "We use 'ever' in questions about experiences." },
                            { type: "fill", question: "A ___ is a person who illegally accesses computers.", correct: "hacker", explanation: "A hacker illegally accesses computer systems." },
                            { type: "mcq", question: "Which sentence is correct?", options: ["I have saw that film.", "I have seen that film.", "I has seen that film.", "I have see that film."], correct: 1, explanation: "Present Perfect: I + have + past participle (seen)." }
                        ]
                    }
                }
            ]
        },
        {
            id: 3,
            title: "Entertainment and Media",
            topics: ["TV vocabulary", "was/were/there was", "Reality TV", "Past Simple", "TV programmes", "News articles"],
            color: "#8b5cf6",
            lessons: [
                {
                    id: "3-1",
                    type: "vocabulary",
                    title: "Television Vocabulary",
                    description: "Learn vocabulary related to TV and entertainment",
                    content: {
                        explanation: "Television offers many types of programmes. Each type has its own name and purpose.",
                        vocabulary: [
                            { word: "show", meaning: "a television programme" },
                            { word: "advert/advertizement", meaning: "a short film promoting a product" },
                            { word: "viewer", meaning: "a person who watches TV" },
                            { word: "channel", meaning: "a TV station" },
                            { word: "drama series", meaning: "a story told over many episodes" },
                            { word: "documentary", meaning: "a factual programme about real subjects" },
                            { word: "reality show", meaning: "a show with real people in competitions" },
                            { word: "chat show", meaning: "a show where a host interviews guests" },
                            { word: "news", meaning: "reports about current events" },
                            { word: "comedy", meaning: "a funny programme or film" }
                        ],
                        practice: [
                            { type: "mcq", question: "A programme about real facts is called a...", options: ["comedy", "documentary", "drama", "reality show"], correct: 1, explanation: "A documentary is a factual programme." },
                            { type: "mcq", question: "A person who watches TV is called a...", options: ["channel", "viewer", "show", "host"], correct: 1, explanation: "A viewer is a person who watches TV." },
                            { type: "fill", question: "A ___ is a funny TV programme or film.", correct: "comedy", explanation: "Comedy is a type of entertainment that makes people laugh." }
                        ]
                    }
                },
                {
                    id: "3-2",
                    type: "grammar",
                    title: "Past Simple: was/were/there was/there were",
                    description: "Learn to describe past situations and existence",
                    content: {
                        explanation: "We use was/were to describe past states. There was/there were show that something existed in the past.",
                        examples: [
                            "I was at school yesterday. (I/he/she/it + was)",
                            "They were at the park. (you/we/they + were)",
                            "There was a big tree in the garden. (singular)",
                            "There were many people at the concert. (plural)"
                        ],
                        practice: [
                            { type: "mcq", question: "She ___ at home last night.", options: ["were", "was", "is", "are"], correct: 1, explanation: "We use 'was' with she." },
                            { type: "mcq", question: "There ___ many students in the classroom.", options: ["was", "were", "is", "are"], correct: 1, explanation: "We use 'were' with plural nouns." },
                            { type: "fill", question: "There ___ a beautiful park near my house. (past)", correct: "was", explanation: "We use 'there was' for singular nouns in the past." },
                            { type: "mcq", question: "We ___ happy with the results.", options: ["was", "were", "is", "are"], correct: 1, explanation: "We use 'were' with we." }
                        ]
                    }
                },
                {
                    id: "3-3",
                    type: "reading",
                    title: "Reading: Reality TV",
                    description: "Read about reality television and different opinions about it",
                    content: {
                        text: "Reality TV\n\nReality television has become one of the most popular types of entertainment in the world. Shows like talent competitions, survival challenges, and dating programmes attract millions of viewers every week.\n\nSupporters of reality TV say it is entertaining and gives ordinary people a chance to become famous. They argue that these shows are more real and relatable than scripted dramas. Some shows also raise money for charity and help unknown talented people start their careers.\n\nHowever, critics say reality TV is harmful. They argue that it promotes bad behaviour, creates unrealistic expectations, and invades people's privacy. Some contestants experience mental health problems after being on television. Critics also say these shows are cheap to produce because they don't need professional actors or writers.\n\nIn Kazakhstan, reality shows have also become popular. Local versions of international formats attract large audiences. But many parents worry about the effect on young viewers.\n\nWhat do you think? Is reality TV harmless entertainment or a negative influence on society?",
                        questions: [
                            { type: "mcq", question: "What do supporters say about reality TV?", options: ["It's expensive", "It gives ordinary people a chance to become famous", "It's boring", "It uses professional actors"], correct: 1, explanation: "Supporters say it gives ordinary people a chance to become famous." },
                            { type: "mcq", question: "What is one criticism of reality TV?", options: ["It's too expensive", "It promotes bad behaviour", "It uses too many actors", "It's educational"], correct: 1, explanation: "Critics say it promotes bad behaviour." },
                            { type: "short", question: "Name one concern parents have about reality TV.", correct: ["effect on young viewers", "negative influence", "worries about young"], explanation: "Parents worry about the effect on young viewers." }
                        ]
                    }
                },
                {
                    id: "3-4",
                    type: "grammar",
                    title: "Past Simple: Regular and Irregular Verbs",
                    description: "Learn to use past simple with regular and irregular verbs",
                    content: {
                        explanation: "The Past Simple describes completed actions in the past. Regular verbs add -ed. Irregular verbs have special past forms.",
                        examples: [
                            "I watched a great film last night. (regular: watch → watched)",
                            "She wrote a letter to her friend. (irregular: write → wrote)",
                            "They played football yesterday. (regular: play → played)",
                            "He saw a documentary about animals. (irregular: see → saw)"
                        ],
                        practice: [
                            { type: "mcq", question: "What is the past simple of 'go'?", options: ["goed", "went", "gone", "going"], correct: 1, explanation: "Go is irregular: go → went." },
                            { type: "mcq", question: "What is the past simple of 'watch'?", options: ["watched", "watch", "watching", "watches"], correct: 0, explanation: "Watch is regular: watch → watched." },
                            { type: "fill", question: "She ___ (buy) a new phone yesterday.", correct: "bought", explanation: "Buy is irregular: buy → bought." },
                            { type: "mcq", question: "What is the past simple of 'eat'?", options: ["eated", "ate", "eaten", "eating"], correct: 1, explanation: "Eat is irregular: eat → ate." }
                        ]
                    }
                },
                {
                    id: "3-5",
                    type: "writing",
                    title: "Writing: A News Article",
                    description: "Write a news article using time connectors",
                    content: {
                        explanation: "A news article reports facts about an event. Use time connectors to organise information chronologically.",
                        phrases: [
                            "Yesterday / Last week / On Monday...",
                            "First / Then / After that / Finally...",
                            "According to...",
                            "The event took place...",
                            "Witnesses said that...",
                            "As a result,..."
                        ],
                        prompt: "Write a short news article (80-100 words) about an interesting event that happened at your school. Use time connectors to organise your article. Include what happened, when, where, and how people reacted."
                    }
                },
                {
                    id: "3-6",
                    type: "review",
                    title: "Unit 3 Review",
                    description: "Test your knowledge of Unit 3 topics",
                    content: {
                        practice: [
                            { type: "mcq", question: "A ___ is a factual TV programme about real subjects.", options: ["comedy", "documentary", "chat show", "advert"], correct: 1, explanation: "A documentary is a factual programme." },
                            { type: "mcq", question: "There ___ a lot of viewers last night.", options: ["was", "were", "is", "are"], correct: 1, explanation: "We use 'were' with plural nouns." },
                            { type: "fill", question: "He ___ (see) the news at 7 o'clock.", correct: "saw", explanation: "See is irregular: see → saw." },
                            { type: "mcq", question: "Which is the past simple of 'write'?", options: ["writed", "wrote", "written", "writing"], correct: 1, explanation: "Write is irregular: write → wrote." }
                        ]
                    }
                }
            ]
        },
        {
            id: 4,
            title: "Sport, Health and Exercise",
            topics: ["Personality adjectives", "Adverbs of degree", "Sport Superstars", "Present Perfect with still/yet/just/already", "Biographies"],
            color: "#f59e0b",
            lessons: [
                {
                    id: "4-1",
                    type: "vocabulary",
                    title: "Personality Adjectives & Adverbs of Degree",
                    description: "Learn adjectives to describe personality and adverbs of degree",
                    content: {
                        explanation: "We use adjectives to describe personality and adverbs of degree (very, really, quite, extremely) to show intensity.",
                        vocabulary: [
                            { word: "friendly", meaning: "kind and pleasant to others" },
                            { word: "sensitive", meaning: "understanding other people's feelings" },
                            { word: "ambitious", meaning: "having a strong desire to succeed" },
                            { word: "confident", meaning: "believing in yourself" },
                            { word: "patient", meaning: "able to wait calmly" },
                            { word: "determined", meaning: "not giving up easily" },
                            { word: "generous", meaning: "willing to share and help others" },
                            { word: "reliable", meaning: "someone you can trust" }
                        ],
                        practice: [
                            { type: "mcq", question: "She is very ___. She always helps others.", options: ["ambitious", "generous", "confident", "patient"], correct: 1, explanation: "Generous means willing to share and help others." },
                            { type: "mcq", question: "He never gives up. He is very ___.", options: ["sensitive", "friendly", "determined", "patient"], correct: 2, explanation: "Determined means not giving up easily." },
                            { type: "fill", question: "She is ___ confident to speak in front of the class. (enough/too)", correct: "enough", explanation: "We use 'enough' after adjectives to show sufficiency." }
                        ]
                    }
                },
                {
                    id: "4-2",
                    type: "grammar",
                    title: "Present Perfect with still/yet/just/already",
                    description: "Learn to use these adverbs with Present Perfect",
                    content: {
                        explanation: "These adverbs add meaning to Present Perfect sentences. 'Still' = continuing situation. 'Yet' = expected but hasn't happened (questions/negatives). 'Just' = a very short time ago. 'Already' = sooner than expected.",
                        examples: [
                            "I still haven't finished my homework. (continuing)",
                            "Has the film started yet? (question)",
                            "She has just arrived. (very recently)",
                            "They have already eaten lunch. (sooner than expected)"
                        ],
                        practice: [
                            { type: "mcq", question: "I have ___ finished! I did it two minutes ago!", options: ["still", "yet", "just", "already"], correct: 2, explanation: "'Just' means a very short time ago." },
                            { type: "mcq", question: "She hasn't called me ___.", options: ["yet", "just", "already", "still"], correct: 0, explanation: "'Yet' is used in negatives for expected actions." },
                            { type: "fill", question: "I ___ haven't understood this grammar rule. (still/yet)", correct: "still", explanation: "'Still' shows a continuing situation." },
                            { type: "mcq", question: "Have you done your homework ___?", options: ["just", "already", "yet", "still"], correct: 2, explanation: "'Yet' is used at the end of questions." }
                        ]
                    }
                },
                {
                    id: "4-3",
                    type: "reading",
                    title: "Reading: Sport Superstars",
                    description: "Read about famous athletes and their achievements",
                    content: {
                        text: "Sport Superstars\n\nMany young people dream of becoming professional athletes. But what does it take to become a sport superstar?\n\nFirst, superstars are extremely determined. They train for many hours every day, even when they are tired or injured. For example, swimmer Michael Phelps trained six days a week for many years. He has won 23 Olympic gold medals — more than any other athlete in history.\n\nSecond, superstars are disciplined. They follow strict diets, get enough sleep, and avoid unhealthy habits. Kazakhstan's Gennady Golovkin, one of the best boxers in the world, is known for his discipline and hard work.\n\nThird, superstars are mentally strong. They can handle pressure and stay focused during important competitions. Tennis player Serena Williams has said that mental strength is more important than physical ability.\n\nHowever, being a superstar also has challenges. Athletes often spend time away from family, face injuries, and deal with public pressure. Many retire young and must find new careers.\n\nWhat qualities do you think are most important for a sport superstar?",
                        questions: [
                            { type: "mcq", question: "How many Olympic gold medals has Michael Phelps won?", options: ["13", "20", "23", "30"], correct: 2, explanation: "Michael Phelps has won 23 Olympic gold medals." },
                            { type: "mcq", question: "What Kazakh boxer is mentioned in the text?", options: ["Alexander Vinokourov", "Gennady Golovkin", "Dmitriy Balandin", "Olga Rypikova"], correct: 1, explanation: "Gennady Golovkin is mentioned as one of the best boxers." },
                            { type: "short", question: "Name two qualities that sport superstars have according to the text.", correct: ["determined", "disciplined", "mentally strong"], explanation: "The text mentions determined, disciplined, and mentally strong." }
                        ]
                    }
                },
                {
                    id: "4-4",
                    type: "writing",
                    title: "Writing: A Biography",
                    description: "Write a short biography of a sportsperson or famous person",
                    content: {
                        explanation: "A biography tells the story of someone's life. Include key facts, achievements, and interesting details. Use Past Simple for completed events and Present Perfect for continuing situations.",
                        phrases: [
                            "He/She was born in... in...",
                            "He/She started... when he/she was...",
                            "He/She has won/achieved...",
                            "He/She is known for...",
                            "One of his/her greatest achievements was...",
                            "He/She still continues to..."
                        ],
                        prompt: "Write a short biography (80-100 words) of a famous sportsperson or another person you admire. Include when they were born, what they are famous for, their achievements, and why you admire them."
                    }
                },
                {
                    id: "4-5",
                    type: "review",
                    title: "Unit 4 Review",
                    description: "Test your knowledge of Unit 4 topics",
                    content: {
                        practice: [
                            { type: "mcq", question: "She has ___ arrived. She came one minute ago.", options: ["still", "yet", "just", "already"], correct: 2, explanation: "'Just' means a very short time ago." },
                            { type: "mcq", question: "He is very ___. He wants to be the best student.", options: ["generous", "ambitious", "patient", "sensitive"], correct: 1, explanation: "Ambitious means having a strong desire to succeed." },
                            { type: "fill", question: "I haven't finished ___. (yet/just)", correct: "yet", explanation: "'Yet' is used at the end of negatives." },
                            { type: "mcq", question: "She is ___ kind to everyone.", options: ["extreme", "extremely", "extremes", "more extreme"], correct: 1, explanation: "We use adverbs (extremely) to modify adjectives (kind)." }
                        ]
                    }
                }
            ]
        },
        {
            id: 5,
            title: "Reading for Pleasure",
            topics: ["Book genres", "verbs + -ing/to", "Movie Technology", "Second Conditional", "Book reviews"],
            color: "#10b981",
            lessons: [
                {
                    id: "5-1",
                    type: "vocabulary",
                    title: "Books and Films: Genres",
                    description: "Learn vocabulary for different types of books and films",
                    content: {
                        explanation: "Books and films come in many genres. Each genre has its own style and audience.",
                        vocabulary: [
                            { word: "comedy", meaning: "funny, makes you laugh" },
                            { word: "thriller", meaning: "exciting and suspenseful" },
                            { word: "drama", meaning: "serious story about real-life situations" },
                            { word: "horror", meaning: "designed to scare the audience" },
                            { word: "science fiction", meaning: "stories about future technology or space" },
                            { word: "romance", meaning: "love stories" },
                            { word: "fantasy", meaning: "stories with magic and imaginary worlds" },
                            { word: "adventure", meaning: "exciting stories about journeys and exploration" }
                        ],
                        practice: [
                            { type: "mcq", question: "A film with magic and imaginary worlds is called...", options: ["thriller", "fantasy", "comedy", "drama"], correct: 1, explanation: "Fantasy involves magic and imaginary worlds." },
                            { type: "mcq", question: "A scary film is a...", options: ["comedy", "romance", "horror", "adventure"], correct: 2, explanation: "Horror films are designed to scare." },
                            { type: "fill", question: "A ___ is an exciting story about journeys and exploration.", correct: "adventure", explanation: "Adventure stories involve exciting journeys." }
                        ]
                    }
                },
                {
                    id: "5-2",
                    type: "grammar",
                    title: "Verbs + -ing / to infinitive",
                    description: "Learn which verbs are followed by -ing or to + infinitive",
                    content: {
                        explanation: "Some verbs are followed by -ing, others by to + infinitive. Some can take both with different meanings.",
                        examples: [
                            "I enjoy reading. (enjoy + -ing)",
                            "She wants to travel. (want + to + infinitive)",
                            "He started learning English. / He started to learn English. (both OK)",
                            "I like swimming. = I like to swim. (similar meaning)"
                        ],
                        practice: [
                            { type: "mcq", question: "I enjoy ___ books.", options: ["read", "to read", "reading", "reads"], correct: 2, explanation: "Enjoy is followed by -ing." },
                            { type: "mcq", question: "She wants ___ a doctor.", options: ["become", "becoming", "to become", "became"], correct: 2, explanation: "Want is followed by to + infinitive." },
                            { type: "fill", question: "He decided ___ English harder. (study)", correct: "to study", explanation: "Decide is followed by to + infinitive." },
                            { type: "mcq", question: "Would you mind ___ the window?", options: ["open", "to open", "opening", "opened"], correct: 2, explanation: "Mind is followed by -ing." }
                        ]
                    }
                },
                {
                    id: "5-3",
                    type: "grammar",
                    title: "Second Conditional",
                    description: "Learn to talk about imaginary or unlikely situations",
                    content: {
                        explanation: "The Second Conditional describes imaginary or unlikely situations in the present or future. Form: If + past simple, would + infinitive.",
                        examples: [
                            "If I had more time, I would read more books.",
                            "If she were famous, she would live in Hollywood.",
                            "If we won the lottery, we would travel the world.",
                            "I would help you if I could."
                        ],
                        practice: [
                            { type: "mcq", question: "If I ___ a million dollars, I would buy a house.", options: ["have", "had", "will have", "would have"], correct: 1, explanation: "Second Conditional: If + past simple (had)." },
                            { type: "mcq", question: "If she studied harder, she ___ get better marks.", options: ["will", "would", "can", "does"], correct: 1, explanation: "Second Conditional: would + infinitive." },
                            { type: "fill", question: "If I ___ (be) you, I would apologise.", correct: "were", explanation: "In Second Conditional, we use 'were' for all subjects (If I were...)." },
                            { type: "mcq", question: "What would you do if you ___ a ghost?", options: ["see", "saw", "will see", "would see"], correct: 1, explanation: "Second Conditional: If + past simple (saw)." }
                        ]
                    }
                },
                {
                    id: "5-4",
                    type: "writing",
                    title: "Writing: A Book Review",
                    description: "Write a review of a book or film you have read/watched",
                    content: {
                        explanation: "A book review gives your opinion about a book. Include the title, author, genre, plot summary (no spoilers!), and your opinion.",
                        phrases: [
                            "The book/film is called... by...",
                            "It is a ... (genre).",
                            "The story is about...",
                            "The main character is...",
                            "I really enjoyed / didn't enjoy...",
                            "The best part was...",
                            "I would recommend this to...",
                            "I give it ... out of 5 stars."
                        ],
                        prompt: "Write a review (80-100 words) of a book or film you have recently read or watched. Include the title, genre, what it is about, and your opinion. Would you recommend it?"
                    }
                },
                {
                    id: "5-5",
                    type: "review",
                    title: "Unit 5 Review",
                    description: "Test your knowledge of Unit 5 topics",
                    content: {
                        practice: [
                            { type: "mcq", question: "I enjoy ___ films.", options: ["watch", "to watch", "watching", "watched"], correct: 2, explanation: "Enjoy is followed by -ing." },
                            { type: "mcq", question: "If I ___ rich, I would travel the world.", options: ["am", "was/were", "will be", "would be"], correct: 1, explanation: "Second Conditional: If + past simple (were)." },
                            { type: "fill", question: "A story with magic is a ___ book.", correct: "fantasy", explanation: "Fantasy involves magic and imaginary worlds." },
                            { type: "mcq", question: "She decided ___ a new language.", options: ["learn", "learning", "to learn", "learned"], correct: 2, explanation: "Decide is followed by to + infinitive." }
                        ]
                    }
                }
            ]
        },
        {
            id: 6,
            title: "The Natural World",
            topics: ["Art vocabulary", "Present Passive", "Past Passive", "Describing art", "Rock art"],
            color: "#ef4444",
            lessons: [
                {
                    id: "6-1",
                    type: "vocabulary",
                    title: "Art Vocabulary",
                    description: "Learn vocabulary related to art and describing artworks",
                    content: {
                        explanation: "Art comes in many forms. Learn the vocabulary to describe different types of art and their qualities.",
                        vocabulary: [
                            { word: "painting", meaning: "a picture made with paint" },
                            { word: "sculpture", meaning: "a 3D artwork made from stone, metal, or wood" },
                            { word: "gallery", meaning: "a place where art is displayed" },
                            { word: "portrait", meaning: "a painting/photo of a person" },
                            { word: "landscape", meaning: "a painting of natural scenery" },
                            { word: "beautiful", meaning: "very pleasing to look at" },
                            { word: "controversial", meaning: "causing disagreement or discussion" },
                            { word: "amusing", meaning: "funny and entertaining" },
                            { word: "shocking", meaning: "surprising and upsetting" }
                        ],
                        practice: [
                            { type: "mcq", question: "A 3D artwork made from stone is called a...", options: ["painting", "sculpture", "portrait", "landscape"], correct: 1, explanation: "A sculpture is a 3D artwork." },
                            { type: "mcq", question: "A painting of a person is called a...", options: ["landscape", "portrait", "sculpture", "gallery"], correct: 1, explanation: "A portrait is a painting of a person." },
                            { type: "fill", question: "A place where art is displayed is called a ___.", correct: "gallery", explanation: "A gallery displays art." }
                        ]
                    }
                },
                {
                    id: "6-2",
                    type: "grammar",
                    title: "Present & Past Passive",
                    description: "Learn to form and use passive voice",
                    content: {
                        explanation: "The passive voice focuses on the action or the object, not who does it. Present Passive: am/is/are + past participle. Past Passive: was/were + past participle.",
                        examples: [
                            "This painting was painted by a famous artist. (Past Passive)",
                            "English is spoken in many countries. (Present Passive)",
                            "The sculpture was made of bronze. (Past Passive)",
                            "These photos are taken every day. (Present Passive)"
                        ],
                        practice: [
                            { type: "mcq", question: "This book ___ written by Abai.", options: ["is", "was", "were", "are"], correct: 1, explanation: "Past Passive: was + past participle (written)." },
                            { type: "mcq", question: "English ___ spoken all over the world.", options: ["was", "were", "is", "are"], correct: 2, explanation: "Present Passive: is + past participle (spoken)." },
                            { type: "fill", question: "The pyramids ___ (build) thousands of years ago.", correct: "were built", explanation: "Past Passive: were + past participle (built)." },
                            { type: "mcq", question: "The letter ___ sent yesterday.", options: ["is", "was", "were", "are"], correct: 1, explanation: "Past Passive with singular: was + past participle." }
                        ]
                    }
                },
                {
                    id: "6-3",
                    type: "reading",
                    title: "Reading: The Lost World",
                    description: "Read about a fascinating natural discovery",
                    content: {
                        text: "The Lost World\n\nDeep in the mountains of South America, there is a huge flat-topped mountain called Mount Roraima. It is one of the oldest geological formations on Earth — about 2 billion years old!\n\nThe top of the mountain is like another world. Unique plants and animals live there that cannot be found anywhere else. Some of these species have been isolated for millions of years. Strange rock formations, crystal caves, and constant mist make the landscape look like something from a fantasy film.\n\nThe area was first explored by European scientists in the 19th century. Since then, it has been studied by researchers from around the world. Many new species of insects and plants have been discovered there in recent years.\n\nThe mountain is also important to indigenous people who live nearby. They believe it is a sacred place. Today, tourists can hike to the top, but the journey is difficult and takes several days.\n\nMount Roraima reminds us that there are still many mysteries in the natural world waiting to be discovered.",
                        questions: [
                            { type: "mcq", question: "How old is Mount Roraima?", options: ["1 million years", "100 million years", "2 billion years", "10 billion years"], correct: 2, explanation: "Mount Roraima is about 2 billion years old." },
                            { type: "mcq", question: "What makes the top of the mountain special?", options: ["It has a city", "Unique plants and animals live there", "It is very flat", "It has many people"], correct: 1, explanation: "Unique species live there that cannot be found anywhere else." },
                            { type: "short", question: "Who believes Mount Roraima is a sacred place?", correct: ["indigenous people", "local people"], explanation: "Indigenous people who live nearby believe it is sacred." }
                        ]
                    }
                },
                {
                    id: "6-4",
                    type: "culture",
                    title: "My Country: Tamgaly Petroglyphs",
                    description: "Learn about ancient rock art in Kazakhstan",
                    content: {
                        text: "Tamgaly Petroglyphs — Rock Art\n\nTamgaly is an ancient archaeological site located about 170 km from Almaty, Kazakhstan. It is a UNESCO World Heritage Site and contains more than 5,000 rock carvings (petroglyphs) dating from the Bronze Age to the 20th century.\n\nThe petroglyphs show scenes of daily life, hunting, animals, and sun-headed gods. They were carved into dark rocks in a beautiful gorge surrounded by mountains. The most famous images are the sun-headed deities — human figures with rays coming from their heads.\n\nThe site was discovered by archaeologists in the 1950s. Since then, it has been protected and studied. Researchers believe the gorge was used for religious ceremonies and rituals.\n\nToday, Tamgaly is a popular place for tourists and students. It helps us understand how ancient people lived and what they believed. The rock art is a precious part of Kazakhstan's cultural heritage.",
                        questions: [
                            { type: "mcq", question: "How many rock carvings does Tamgaly contain?", options: ["500", "1,000", "5,000", "50,000"], correct: 2, explanation: "Tamgaly contains more than 5,000 petroglyphs." },
                            { type: "short", question: "What are the most famous images at Tamgaly?", correct: ["sun-headed deities", "sun-headed gods"], explanation: "The most famous images are sun-headed deities." }
                        ]
                    }
                },
                {
                    id: "6-5",
                    type: "review",
                    title: "Unit 6 Review",
                    description: "Test your knowledge of Unit 6 topics",
                    content: {
                        practice: [
                            { type: "mcq", question: "This painting ___ created in the 19th century.", options: ["is", "was", "were", "are"], correct: 1, explanation: "Past Passive: was + past participle." },
                            { type: "mcq", question: "A painting of natural scenery is called a...", options: ["portrait", "sculpture", "landscape", "gallery"], correct: 2, explanation: "A landscape shows natural scenery." },
                            { type: "fill", question: "English ___ (speak) in many countries. (Present Passive)", correct: "is spoken", explanation: "Present Passive: is + past participle." },
                            { type: "mcq", question: "The sculptures ___ made of marble.", options: ["was", "were", "is", "are"], correct: 1, explanation: "Past Passive with plural: were + past participle." }
                        ]
                    }
                }
            ]
        },
        {
            id: 7,
            title: "Travel and Transport",
            topics: ["Transport vocabulary", "Past Perfect", "Reported Speech", "Youth Travel", "Travel brochure"],
            color: "#3b82f6",
            lessons: [
                {
                    id: "7-1",
                    type: "vocabulary",
                    title: "Transport Vocabulary",
                    description: "Learn vocabulary for different types of transport and travel",
                    content: {
                        explanation: "There are many ways to travel. Each type of transport has specific vocabulary.",
                        vocabulary: [
                            { word: "flight", meaning: "a journey by plane" },
                            { word: "platform", meaning: "the area at a station where you wait for a train" },
                            { word: "departure", meaning: "the time when a vehicle leaves" },
                            { word: "arrival", meaning: "the time when a vehicle arrives" },
                            { word: "destination", meaning: "the place you are travelling to" },
                            { word: "boarding pass", meaning: "a document that allows you to get on a plane" },
                            { word: "delay", meaning: "when something is late" },
                            { word: "route", meaning: "the way you travel from one place to another" },
                            { word: "luggage", meaning: "bags and suitcases you take when travelling" },
                            { word: "ticket", meaning: "a document that gives you permission to travel" }
                        ],
                        practice: [
                            { type: "mcq", question: "Where do you wait for a train?", options: ["platform", "gate", "terminal", "counter"], correct: 0, explanation: "You wait on a platform for a train." },
                            { type: "mcq", question: "What document allows you to board a plane?", options: ["ticket", "passport", "boarding pass", "visa"], correct: 2, explanation: "A boarding pass allows you to get on a plane." },
                            { type: "fill", question: "The ___ of the flight is 3:30 PM. (time it leaves)", correct: "departure", explanation: "Departure is when a vehicle leaves." }
                        ]
                    }
                },
                {
                    id: "7-2",
                    type: "grammar",
                    title: "Past Perfect",
                    description: "Learn to talk about actions completed before another past action",
                    content: {
                        explanation: "The Past Perfect describes an action completed before another action in the past. Form: had + past participle.",
                        examples: [
                            "When I arrived at the station, the train had already left.",
                            "She had finished her homework before dinner.",
                            "They had never flown before their trip to London.",
                            "By the time we got there, the film had started."
                        ],
                        practice: [
                            { type: "mcq", question: "When I arrived, the film ___ already started.", options: ["has", "have", "had", "was"], correct: 2, explanation: "Past Perfect: had + past participle." },
                            { type: "mcq", question: "She ___ never been abroad before last summer.", options: ["has", "had", "have", "was"], correct: 1, explanation: "Past Perfect: had + past participle." },
                            { type: "fill", question: "By the time we arrived, they ___ (finish) eating.", correct: "had finished", explanation: "Past Perfect: had + past participle (finished)." },
                            { type: "mcq", question: "He realised he ___ forgotten his passport.", options: ["has", "had", "have", "was"], correct: 1, explanation: "Past Perfect: had + past participle (forgotten)." }
                        ]
                    }
                },
                {
                    id: "7-3",
                    type: "grammar",
                    title: "Reported Speech",
                    description: "Learn to report what someone said",
                    content: {
                        explanation: "Reported Speech tells someone what another person said. We usually change the tense back one step and change pronouns.",
                        examples: [
                            "Direct: 'I am tired,' she said. → Reported: She said (that) she was tired.",
                            "Direct: 'I like English,' he said. → Reported: He said (that) he liked English.",
                            "Direct: 'We will come,' they said. → Reported: They said (that) they would come.",
                            "Direct: 'I have visited Paris,' she said. → Reported: She said she had visited Paris."
                        ],
                        practice: [
                            { type: "mcq", question: "She said she ___ tired.", options: ["is", "was", "has been", "will be"], correct: 1, explanation: "Present Simple → Past Simple in reported speech." },
                            { type: "mcq", question: "He said he ___ English.", options: ["likes", "liked", "has liked", "will like"], correct: 1, explanation: "Present Simple → Past Simple in reported speech." },
                            { type: "fill", question: "They said they ___ come. (will → reported)", correct: "would", explanation: "Will → would in reported speech." },
                            { type: "mcq", question: "'I am studying,' she said. → She said she ___ studying.", options: ["is", "was", "has been", "were"], correct: 1, explanation: "Present Continuous → Past Continuous in reported speech." }
                        ]
                    }
                },
                {
                    id: "7-4",
                    type: "reading",
                    title: "Reading: Youth Travel",
                    description: "Read about young people travelling and exploring the world",
                    content: {
                        text: "Youth Travel\n\nMore and more young people are travelling without their parents. Youth travel has become a popular way to learn about other cultures, practise languages, and gain independence.\n\nMany teenagers participate in exchange programmes. For example, students from Kazakhstan can spend a semester at a school in another country. They live with a host family, attend classes, and experience daily life in a new culture. These experiences help young people become more confident and open-minded.\n\nVolunteer travel is also popular. Young people can help with environmental projects, teach English, or work with animals in different countries. This type of travel teaches responsibility and gives a sense of purpose.\n\nHowever, youth travel also has challenges. Young travellers may feel homesick, face language barriers, or have difficulties adapting to new food and customs. Budget is another concern — travel can be expensive.\n\nDespite these challenges, most young travellers say the experience changed their lives. 'I learned more in three months of travelling than in years at school,' said one student from Astana.",
                        questions: [
                            { type: "mcq", question: "What is one benefit of exchange programmes?", options: ["They are free", "Students learn about other cultures", "They are easy", "Students don't study"], correct: 1, explanation: "Exchange programmes help students learn about other cultures." },
                            { type: "mcq", question: "What is volunteer travel?", options: ["Free holidays", "Helping with projects in other countries", "Travelling with parents", "Studying abroad"], correct: 1, explanation: "Volunteer travel involves helping with projects in other countries." },
                            { type: "short", question: "Name one challenge of youth travel mentioned in the text.", correct: ["homesick", "language barriers", "budget", "adapting to new food"], explanation: "The text mentions homesickness, language barriers, adapting to new food, and budget." }
                        ]
                    }
                },
                {
                    id: "7-5",
                    type: "culture",
                    title: "My Country: Almaty Metro",
                    description: "Learn about the Almaty underground metro system",
                    content: {
                        text: "Almaty Metro — Going Underground\n\nThe Almaty Metro is the first underground railway system in Kazakhstan. It opened in 2011 after many years of construction. Although Almaty is not a very large city, the metro was built to solve traffic problems and provide fast, comfortable transport.\n\nThe metro currently has one line with 11 stations. Each station has a unique design. Some stations are decorated with traditional Kazakh patterns, marble, and beautiful lighting. The station called 'Abai' is named after the famous Kazakh poet and philosopher.\n\nBuilding the metro was not easy. Almaty is in an earthquake zone, so special engineering solutions were needed. The construction took many years and cost a lot of money.\n\nToday, thousands of people use the metro every day. It has become a symbol of modern Almaty and a point of pride for Kazakhstani people. Plans exist to expand the system with new lines in the future.",
                        questions: [
                            { type: "mcq", question: "When did the Almaty Metro open?", options: ["2001", "2011", "2015", "2020"], correct: 1, explanation: "The Almaty Metro opened in 2011." },
                            { type: "short", question: "How many stations does the Almaty Metro currently have?", correct: ["11", "eleven"], explanation: "The metro has 11 stations." }
                        ]
                    }
                },
                {
                    id: "7-6",
                    type: "writing",
                    title: "Writing: A Memorable Journey",
                    description: "Write about a journey that was special to you",
                    content: {
                        explanation: "When writing about a journey, describe where you went, how you travelled, what you saw and did, and why it was memorable.",
                        phrases: [
                            "Last summer/holiday, I travelled to...",
                            "We went by... (car/train/plane)",
                            "The most memorable part was...",
                            "I was amazed by...",
                            "I will never forget...",
                            "If I could go again, I would..."
                        ],
                        prompt: "Write about a memorable journey you have taken (80-100 words). Describe where you went, how you travelled, what you did, and why it was special to you."
                    }
                },
                {
                    id: "7-7",
                    type: "review",
                    title: "Unit 7 Review",
                    description: "Test your knowledge of Unit 7 topics",
                    content: {
                        practice: [
                            { type: "mcq", question: "When I got home, my family ___ already eaten.", options: ["has", "have", "had", "was"], correct: 2, explanation: "Past Perfect: had + past participle." },
                            { type: "mcq", question: "She said she ___ a student.", options: ["is", "was", "has been", "will be"], correct: 1, explanation: "In reported speech, present → past." },
                            { type: "fill", question: "He said he ___ (will) help me.", correct: "would", explanation: "Will → would in reported speech." },
                            { type: "mcq", question: "Where do you wait for a train?", options: ["gate", "platform", "terminal", "counter"], correct: 1, explanation: "You wait on a platform for a train." }
                        ]
                    }
                }
            ]
        },
        {
            id: 8,
            title: "Food and Drink",
            topics: ["Action verbs", "First Conditional", "Food Waste", "Phrasal verbs", "Formal letters"],
            color: "#06b6d4",
            lessons: [
                {
                    id: "8-1",
                    type: "vocabulary",
                    title: "Food & Action Vocabulary",
                    description: "Learn vocabulary for food, campaigns, and actions",
                    content: {
                        explanation: "Learn words related to food issues and taking action to solve problems.",
                        vocabulary: [
                            { word: "publicize", meaning: "to make something known to the public" },
                            { word: "campaign", meaning: "an organized effort to achieve a goal" },
                            { word: "boycott", meaning: "to refuse to buy something as a protest" },
                            { word: "waste", meaning: "using more than you need" },
                            { word: "donate", meaning: "to give money or goods to help others" },
                            { word: "volunteer", meaning: "to offer to do something without being paid" },
                            { word: "ingredient", meaning: "one of the things that food is made from" },
                            { word: "recipe", meaning: "instructions for cooking a dish" },
                            { word: "organic", meaning: "produced without artificial chemicals" },
                            { word: "preservative", meaning: "a substance that keeps food fresh" }
                        ],
                        practice: [
                            { type: "mcq", question: "To refuse to buy something as a protest is called a...", options: ["campaign", "boycott", "donation", "volunteer"], correct: 1, explanation: "A boycott is refusing to buy something as a protest." },
                            { type: "mcq", question: "An organized effort to achieve a goal is a...", options: ["waste", "recipe", "campaign", "ingredient"], correct: 2, explanation: "A campaign is an organized effort." },
                            { type: "fill", question: "To ___ means to give money or goods to help others.", correct: "donate", explanation: "Donate means to give to help others." }
                        ]
                    }
                },
                {
                    id: "8-2",
                    type: "grammar",
                    title: "First Conditional",
                    description: "Learn to talk about real possible future situations",
                    content: {
                        explanation: "The First Conditional describes real or likely future situations. Form: If + present simple, will + infinitive.",
                        examples: [
                            "If it rains tomorrow, I will stay at home.",
                            "If you study hard, you will pass the exam.",
                            "She will be angry if you are late.",
                            "If we don't act now, the problem will get worse."
                        ],
                        practice: [
                            { type: "mcq", question: "If it ___ tomorrow, we will cancel the picnic.", options: ["rains", "will rain", "rained", "would rain"], correct: 0, explanation: "First Conditional: If + present simple." },
                            { type: "mcq", question: "If you heat ice, it ___.", options: ["melts", "will melt", "melted", "would melt"], correct: 1, explanation: "First Conditional: will + infinitive in the main clause." },
                            { type: "fill", question: "If she ___ (not hurry), she will miss the bus.", correct: "doesn't hurry", explanation: "First Conditional: If + present simple (negative)." },
                            { type: "mcq", question: "I will help you if you ___ me.", options: ["ask", "will ask", "asked", "would ask"], correct: 0, explanation: "First Conditional: If + present simple." }
                        ]
                    }
                },
                {
                    id: "8-3",
                    type: "grammar",
                    title: "Future Forms: will / be going to / Present Continuous",
                    description: "Learn when to use different future forms",
                    content: {
                        explanation: "We use different forms for different types of future meaning. 'Will' for predictions and instant decisions. 'Be going to' for plans and intentions. 'Present Continuous' for fixed arrangements.",
                        examples: [
                            "I think it will rain later. (prediction)",
                            "I'll help you with that! (instant decision)",
                            "I'm going to study medicine. (plan/intention)",
                            "We're meeting friends at 7 PM. (fixed arrangement)"
                        ],
                        practice: [
                            { type: "mcq", question: "Look at those clouds! It ___ rain.", options: ["will", "is going to", "rains", "rained"], correct: 1, explanation: "We use 'going to' for predictions based on evidence." },
                            { type: "mcq", question: "I ___ help you carry those bags! (instant decision)", options: ["am going to", "will", "am", "would"], correct: 1, explanation: "We use 'will' for instant decisions." },
                            { type: "fill", question: "We ___ (meet) Sarah at the cinema at 6. (arrangement)", correct: "are meeting", explanation: "Present Continuous for fixed arrangements." },
                            { type: "mcq", question: "She ___ (study) hard. She wants to be a doctor. (intention)", options: ["will study", "is going to study", "studies", "studied"], correct: 1, explanation: "'Going to' for plans and intentions." }
                        ]
                    }
                },
                {
                    id: "8-4",
                    type: "reading",
                    title: "Reading: The Food Waste Scandal",
                    description: "Read about food waste and its global impact",
                    content: {
                        text: "The Food Waste Scandal\n\nEvery year, about one-third of all food produced in the world is wasted. That's about 1.3 billion tonnes of food! Meanwhile, nearly 800 million people go hungry. This is one of the biggest problems of our time.\n\nFood waste happens at every stage: on farms, in shops, in restaurants, and in our homes. In developing countries, food is often lost because of poor storage and transport. In wealthy countries, people buy too much and throw away food that is still edible.\n\nSupermarkets contribute to the problem. They often reject fruit and vegetables that look imperfect but are perfectly good to eat. They also offer deals like 'buy one get one free' which encourage people to buy more than they need.\n\nRestaurants also waste enormous amounts of food. Large portions mean that customers cannot finish their meals, and the rest is thrown away.\n\nWhat can we do? First, plan your meals and only buy what you need. Second, use leftovers creatively. Third, support restaurants and shops that try to reduce waste. Fourth, donate unused food to charities.\n\nIf everyone made small changes, we could solve this problem. The question is: are we ready to act?",
                        questions: [
                            { type: "mcq", question: "How much food is wasted globally each year?", options: ["One-tenth", "One-quarter", "One-third", "One-half"], correct: 2, explanation: "About one-third of all food produced is wasted." },
                            { type: "mcq", question: "Why do supermarkets contribute to food waste?", options: ["They sell too cheaply", "They reject imperfect food", "They don't have storage", "They cook too much"], correct: 1, explanation: "Supermarkets reject fruit and vegetables that look imperfect." },
                            { type: "short", question: "Name two things we can do to reduce food waste at home.", correct: ["plan meals", "use leftovers", "donate food", "buy only what you need"], explanation: "The text suggests planning meals, using leftovers, and donating food." }
                        ]
                    }
                },
                {
                    id: "8-5",
                    type: "writing",
                    title: "Writing: A Formal Letter",
                    description: "Learn to write a formal letter about a food or environmental issue",
                    content: {
                        explanation: "A formal letter has a specific structure. Use formal language and clear organisation.",
                        phrases: [
                            "Dear Sir/Madam,",
                            "I am writing to...",
                            "I would like to draw your attention to...",
                            "I believe that...",
                            "I would be grateful if you could...",
                            "I look forward to your reply.",
                            "Yours faithfully,"
                        ],
                        prompt: "Write a formal letter (80-100 words) to your school canteen manager about reducing food waste. Suggest specific actions they could take. Use formal language and the structure of a formal letter."
                    }
                },
                {
                    id: "8-6",
                    type: "review",
                    title: "Unit 8 Review",
                    description: "Test your knowledge of Unit 8 topics",
                    content: {
                        practice: [
                            { type: "mcq", question: "If you ___ hard, you will pass.", options: ["study", "will study", "studied", "would study"], correct: 0, explanation: "First Conditional: If + present simple." },
                            { type: "mcq", question: "I ___ call you later! (instant decision)", options: ["am going to", "will", "am", "would"], correct: 1, explanation: "'Will' for instant decisions." },
                            { type: "fill", question: "To refuse to buy something as a protest is a ___.", correct: "boycott", explanation: "A boycott is refusing to buy as a protest." },
                            { type: "mcq", question: "How much food is wasted globally each year?", options: ["10%", "25%", "33%", "50%"], correct: 2, explanation: "About one-third (33%) of food is wasted." }
                        ]
                    }
                }
            ]
        },
        {
            id: 9,
            title: "The World of Work",
            topics: ["School life", "should/must/have to", "Cheating", "School types", "Opinion essays"],
            color: "#8b5cf6",
            lessons: [
                {
                    id: "9-1",
                    type: "vocabulary",
                    title: "School Life Vocabulary",
                    description: "Learn vocabulary related to school life and education",
                    content: {
                        explanation: "School life involves many activities and responsibilities. Learn the vocabulary to describe them.",
                        vocabulary: [
                            { word: "get good marks", meaning: "to achieve high grades" },
                            { word: "pass exams", meaning: "to succeed in tests" },
                            { word: "play truant", meaning: "to stay away from school without permission" },
                            { word: "cheat", meaning: "to act dishonestly to get an advantage" },
                            { word: "revise", meaning: "to study again before an exam" },
                            { word: "assignment", meaning: "a piece of work given by a teacher" },
                            { word: "deadline", meaning: "the last day/time to submit work" },
                            { word: "curriculum", meaning: "the subjects studied in school" },
                            { word: "scholarship", meaning: "money given to a good student for education" },
                            { word: "career", meaning: "a job or profession over a long period" }
                        ],
                        practice: [
                            { type: "mcq", question: "To stay away from school without permission is to...", options: ["revise", "play truant", "pass exams", "cheat"], correct: 1, explanation: "Playing truant means staying away from school without permission." },
                            { type: "mcq", question: "The last day to submit work is the...", options: ["assignment", "curriculum", "deadline", "scholarship"], correct: 2, explanation: "A deadline is the last day/time to submit work." },
                            { type: "fill", question: "To study again before an exam is to ___.", correct: "revise", explanation: "Revise means to study again before an exam." }
                        ]
                    }
                },
                {
                    id: "9-2",
                    type: "grammar",
                    title: "Should / Must / Have to",
                    description: "Learn to express obligation, advice, and necessity",
                    content: {
                        explanation: "We use different modals to express different levels of obligation. 'Should' = advice. 'Must' = strong obligation (personal). 'Have to' = strong obligation (external rules).",
                        examples: [
                            "You should study harder. (advice)",
                            "You must wear a uniform. (strong personal obligation)",
                            "Students have to pass all exams. (external rule)",
                            "You don't have to come early. (no obligation)",
                            "You shouldn't eat too much junk food. (negative advice)"
                        ],
                        practice: [
                            { type: "mcq", question: "You ___ wear a school uniform. (it's the rule)", options: ["should", "must", "can", "might"], correct: 1, explanation: "'Must' expresses strong obligation from rules." },
                            { type: "mcq", question: "You ___ eat more vegetables. (advice)", options: ["must", "have to", "should", "can"], correct: 2, explanation: "'Should' gives advice." },
                            { type: "fill", question: "Students ___ pass all their exams to graduate. (external rule)", correct: "have to", explanation: "'Have to' expresses external obligation." },
                            { type: "mcq", question: "You ___ come early. It's not necessary.", options: ["mustn't", "don't have to", "shouldn't", "can't"], correct: 1, explanation: "'Don't have to' means there is no obligation." }
                        ]
                    }
                },
                {
                    id: "9-3",
                    type: "reading",
                    title: "Reading: Cheating",
                    description: "Read about cheating in schools and different opinions",
                    content: {
                        text: "Cheating\n\nCheating in school is a serious problem all over the world. Students cheat in different ways: copying from others, using phones during tests, or copying from the internet. But why do students cheat?\n\nSome students cheat because they are under too much pressure. Parents and teachers expect high marks, and students feel they must achieve them. Others cheat because they haven't studied enough and are afraid of failing. Some simply think it's easier than working hard.\n\nBut cheating has serious consequences. Students who cheat don't really learn, so they are not prepared for future challenges. They also risk punishment — they might fail the exam or even be expelled from school. Most importantly, cheating is dishonest and unfair to other students who work hard.\n\nSome people argue that the education system itself is partly to blame. If exams only test memorisation, students may feel that cheating is the only way to succeed. They suggest that schools should focus more on understanding and creativity rather than just test results.\n\nWhat do you think? Is cheating ever acceptable, or should there be zero tolerance?",
                        questions: [
                            { type: "mcq", question: "Why do some students cheat?", options: ["They are lazy", "They are under too much pressure", "They don't like school", "Teachers encourage it"], correct: 1, explanation: "Some students cheat because they are under too much pressure." },
                            { type: "mcq", question: "What is one consequence of cheating?", options: ["Better marks", "Students don't really learn", "More friends", "More homework"], correct: 1, explanation: "Students who cheat don't really learn." },
                            { type: "short", question: "What do some people suggest schools should focus on instead of memorisation?", correct: ["understanding", "creativity"], explanation: "They suggest focusing on understanding and creativity." }
                        ]
                    }
                },
                {
                    id: "9-4",
                    type: "writing",
                    title: "Writing: An Opinion Essay",
                    description: "Write an essay expressing your opinion about a school-related topic",
                    content: {
                        explanation: "An opinion essay presents your view on a topic. Include an introduction, arguments for and against, and a conclusion.",
                        phrases: [
                            "In my opinion, ...",
                            "I strongly believe that...",
                            "On the one hand, ...",
                            "On the other hand, ...",
                            "Furthermore, ...",
                            "However, ...",
                            "In conclusion, ...",
                            "For these reasons, I believe..."
                        ],
                        prompt: "Write an opinion essay (100-120 words) about this topic: 'Should students be allowed to use phones at school?' Give reasons for your opinion and consider the other side."
                    }
                },
                {
                    id: "9-5",
                    type: "culture",
                    title: "My Country: Dream Jobs in Kazakhstan",
                    description: "Learn about career aspirations of young Kazakhstani people",
                    content: {
                        text: "What Is Your Dream Job?\n\nYoung people in Kazakhstan have diverse career aspirations. According to recent surveys, the most popular dream jobs among teenagers include IT specialist, doctor, engineer, teacher, and entrepreneur.\n\nThe IT sector is growing rapidly in Kazakhstan. The government supports tech education through programmes like Digital Kazakhstan. Many young people want to work for international tech companies or start their own businesses.\n\nMedicine remains a respected profession. Many students dream of helping people and are willing to study for many years to become doctors.\n\nTeaching is also popular, especially among students who want to make a difference in their communities. The government offers scholarships for students who commit to teaching in rural areas after graduation.\n\nInterestingly, new professions are appearing too. Young Kazakhstani people are interested in becoming bloggers, content creators, and social media managers. These jobs didn't exist 20 years ago!\n\nWhat is your dream job? What skills will you need?",
                        questions: [
                            { type: "mcq", question: "What is one of the most popular dream jobs in Kazakhstan?", options: ["Farmer", "IT specialist", "Pilot", "Sailor"], correct: 1, explanation: "IT specialist is one of the most popular dream jobs." },
                            { type: "short", question: "Name two new professions that interest young Kazakhstani people.", correct: ["blogger", "content creator", "social media manager"], explanation: "Bloggers, content creators, and social media managers are new popular professions." }
                        ]
                    }
                },
                {
                    id: "9-6",
                    type: "review",
                    title: "Unit 9 Review",
                    description: "Test your knowledge of Unit 9 topics",
                    content: {
                        practice: [
                            { type: "mcq", question: "You ___ study for your exam. (advice)", options: ["must", "should", "have to", "can"], correct: 1, explanation: "'Should' gives advice." },
                            { type: "mcq", question: "Students ___ wear a uniform. (school rule)", options: ["should", "must", "can", "might"], correct: 1, explanation: "'Must' expresses strong obligation from rules." },
                            { type: "fill", question: "To stay away from school without permission is to play ___.", correct: "truant", explanation: "Playing truant means staying away without permission." },
                            { type: "mcq", question: "You ___ come early. It's not necessary.", options: ["mustn't", "don't have to", "shouldn't", "can't"], correct: 1, explanation: "'Don't have to' means no obligation." }
                        ]
                    }
                }
            ]
        }
    ],

    // Diagnostic test questions
    diagnostic: [
        // GRAMMAR (4 questions)
        { id: 1, skill: "Grammar", type: "mcq", question: "She ___ visited London three times.", options: ["have", "has", "did", "is"], correct: 1, explanation: "We use 'has' with he, she, and it in Present Perfect." },
        { id: 2, skill: "Grammar", type: "mcq", question: "If it ___ tomorrow, we will stay home.", options: ["rains", "will rain", "rained", "would rain"], correct: 0, explanation: "First Conditional: If + present simple." },
        { id: 3, skill: "Grammar", type: "fill", question: "The letter ___ (write) by a famous author. (Past Passive)", correct: "was written", explanation: "Past Passive: was + past participle (written)." },
        { id: 4, skill: "Grammar", type: "mcq", question: "You ___ eat more vegetables. It's good for you.", options: ["must", "should", "have to", "can"], correct: 1, explanation: "'Should' gives advice." },

        // VOCABULARY (3 questions)
        { id: 5, skill: "Vocabulary", type: "mcq", question: "A person who illegally accesses computers is called a...", options: ["browser", "hacker", "viewer", "downloader"], correct: 1, explanation: "A hacker illegally accesses computer systems." },
        { id: 6, skill: "Vocabulary", type: "mcq", question: "A painting of natural scenery is called a...", options: ["portrait", "sculpture", "landscape", "gallery"], correct: 2, explanation: "A landscape is a painting of natural scenery." },
        { id: 7, skill: "Vocabulary", type: "fill", question: "To refuse to buy something as a protest is called a ___.", correct: "boycott", explanation: "A boycott is refusing to buy as a protest." },

        // READING (3 questions)
        { id: 8, skill: "Reading", type: "reading", text: "The internet has changed education. Students can now access information from anywhere in the world. Online courses allow people to learn at their own pace. However, some teachers worry that students spend too much time on screens and not enough time developing social skills. They believe that face-to-face interaction is essential for learning.", question: "What is one concern teachers have about internet use in education?", options: ["Students learn too fast", "Students spend too much time on screens", "Online courses are too expensive", "The internet doesn't work in schools"], correct: 1, explanation: "Teachers worry students spend too much time on screens." },
        { id: 9, skill: "Reading", type: "reading", text: "Kazakhstan has a rich tradition of horse games. One of the most famous is 'Kokpar' — a game where riders compete to grab a goat carcass and carry it to a goal. It requires great skill, strength, and teamwork. Another traditional game is 'Kyz Kuu' — a chase game on horseback. These games are still played at festivals and celebrations today.", question: "What does Kokpar require from its players?", options: ["Speed only", "Skill, strength, and teamwork", "A special horse", "Many years of training"], correct: 1, explanation: "Kokpar requires skill, strength, and teamwork." },
        { id: 10, skill: "Reading", type: "short", question: "Read: 'The Aral Sea was once one of the largest lakes in the world. Rivers that fed it were used for irrigation, causing it to shrink. Kazakhstan built a dam to save the Northern part.' What did Kazakhstan build to help the Aral Sea?", correct: ["dam", "a dam", "kok-aral"], explanation: "Kazakhstan built a dam (Kok-Aral) to help the Aral Sea." },

        // LISTENING (2 questions)
        { id: 11, skill: "Listening", type: "listening", text: "Hello, my name is Maria. I am fifteen years old and I live in Almaty. I study at school number 125. My favourite subject is English because I want to travel and work abroad. After school, I go to my art class. I love painting landscapes. At weekends, I usually spend time with my family or read books.", question: "What is Maria's favourite subject?", options: ["Art", "English", "Maths", "Science"], correct: 1, explanation: "Maria says her favourite subject is English." },
        { id: 12, skill: "Listening", type: "listening", text: "Good morning, students. Today I want to talk about our school trip. We are going to visit the Central State Museum on Friday. Please bring a notebook and a pen. We will leave school at nine o'clock and return at two o'clock. Lunch is not included, so please bring your own food. If you have any questions, see me after class.", question: "What time will students leave school?", options: ["8 o'clock", "9 o'clock", "10 o'clock", "2 o'clock"], correct: 1, explanation: "The teacher says they will leave at nine o'clock." },

        // SPEAKING (1 question)
        { id: 13, skill: "Speaking", type: "speaking", prompt: "Describe your best friend. Say what they look like and what they are like as a person. Speak for 30 seconds.", correct: "any", explanation: "Good speaking practice!" },

        // WRITING (1 question)
        { id: 14, skill: "Writing", type: "writing", prompt: "Write 4-5 sentences about your favourite way of spending free time. Include what you do, why you enjoy it, and who you do it with.", correct: "any", explanation: "Good writing practice!" },

        // More Grammar (2 questions)
        { id: 15, skill: "Grammar", type: "mcq", question: "When I arrived, the film ___ already started.", options: ["has", "have", "had", "was"], correct: 2, explanation: "Past Perfect: had + past participle." },
        { id: 16, skill: "Grammar", type: "mcq", question: "She said she ___ a student.", options: ["is", "was", "has been", "will be"], correct: 1, explanation: "In reported speech, present simple changes to past simple." },

        // More Vocabulary (1 question)
        { id: 17, skill: "Vocabulary", type: "mcq", question: "A 3D artwork made from stone or metal is called a...", options: ["painting", "sculpture", "portrait", "landscape"], correct: 1, explanation: "A sculpture is a 3D artwork." },

        // More Reading (1 question)
        { id: 18, skill: "Reading", type: "mcq", question: "Which genre has magic and imaginary worlds?", options: ["thriller", "comedy", "fantasy", "documentary"], correct: 2, explanation: "Fantasy involves magic and imaginary worlds." }
    ],

    // Practice question bank
    practiceBank: {
        Grammar: {
            support: [
                { question: "She ___ a student.", options: ["am", "is", "are", "be"], correct: 1, explanation: "We use 'is' with she." },
                { question: "They ___ playing football now.", options: ["is", "am", "are", "be"], correct: 2, explanation: "We use 'are' with they." },
                { question: "I ___ to school every day.", options: ["go", "goes", "going", "gone"], correct: 0, explanation: "We use the base form with I." },
                { question: "He ___ TV yesterday.", options: ["watch", "watches", "watched", "watching"], correct: 2, explanation: "Past Simple: watch → watched." }
            ],
            standard: [
                { question: "She ___ visited Paris twice.", options: ["have", "has", "did", "is"], correct: 1, explanation: "We use 'has' with she in Present Perfect." },
                { question: "If it rains, we ___ cancel the trip.", options: ["would", "will", "had", "have"], correct: 1, explanation: "First Conditional: will + infinitive." },
                { question: "The books ___ on the shelf yesterday.", options: ["was put", "were put", "are put", "is put"], correct: 1, explanation: "Past Passive with plural: were + past participle." },
                { question: "He said he ___ help us.", options: ["will", "would", "can", "may"], correct: 1, explanation: "Will → would in reported speech." }
            ],
            challenge: [
                { question: "By the time she arrived, we ___ already left.", options: ["have", "has", "had", "were"], correct: 2, explanation: "Past Perfect: had + past participle." },
                { question: "If I ___ you, I would apologise immediately.", options: ["am", "was", "were", "would be"], correct: 2, explanation: "Second Conditional: If + were (for all subjects)." },
                { question: "Not only ___ she pass the exam, but she also got the highest score.", options: ["do", "does", "did", "had"], correct: 2, explanation: "After 'Not only' at the beginning, we use auxiliary + subject (inversion)." },
                { question: "The report ___ by the time the meeting starts.", options: ["will finish", "will be finished", "will have been finished", "finishes"], correct: 2, explanation: "Future Perfect Passive: will have been + past participle." }
            ]
        },
        Vocabulary: {
            support: [
                { question: "A container for water is a...", options: ["roll", "bottle", "carton", "can"], correct: 1, explanation: "A bottle is a container for liquids." },
                { question: "A person who watches TV is a...", options: ["channel", "show", "viewer", "host"], correct: 2, explanation: "A viewer watches TV." },
                { question: "A funny film is a...", options: ["drama", "thriller", "comedy", "horror"], correct: 2, explanation: "Comedy is funny." },
                { question: "To study again before an exam is to...", options: ["cheat", "revise", "play truant", "donate"], correct: 1, explanation: "Revise means to study again." }
            ],
            standard: [
                { question: "A person who illegally accesses computers is a...", options: ["browser", "hacker", "firewall", "virus"], correct: 1, explanation: "A hacker illegally accesses computers." },
                { question: "To refuse to buy as a protest is a...", options: ["campaign", "boycott", "donation", "volunteer"], correct: 1, explanation: "A boycott is refusing to buy as protest." },
                { question: "A painting of a person is a...", options: ["landscape", "sculpture", "portrait", "gallery"], correct: 2, explanation: "A portrait is a painting of a person." },
                { question: "An organized effort to achieve a goal is a...", options: ["waste", "recipe", "campaign", "ingredient"], correct: 2, explanation: "A campaign is an organized effort." }
            ],
            challenge: [
                { question: "The word 'controversial' means...", options: ["beautiful", "causing disagreement", "amusing", "shocking"], correct: 1, explanation: "Controversial means causing disagreement or discussion." },
                { question: "Which word means 'converting data into a code for security'?", options: ["malware", "phishing", "encryption", "scam"], correct: 2, explanation: "Encryption converts data into a code." },
                { question: "'Publicize' means to...", options: ["hide something", "make something known publicly", "create something", "destroy something"], correct: 1, explanation: "Publicize means to make something known to the public." },
                { question: "A 'preservative' is...", options: ["a type of food", "a substance that keeps food fresh", "a cooking method", "a recipe"], correct: 1, explanation: "A preservative keeps food fresh." }
            ]
        },
        Reading: {
            support: [
                { question: "What is the main idea of a text about recycling?", options: ["How to cook", "How to reuse materials", "How to travel", "How to read"], correct: 1, explanation: "Recycling is about reusing materials." },
                { question: "What does 'environment' mean?", options: ["A type of food", "The natural world around us", "A school subject", "A sport"], correct: 1, explanation: "Environment refers to the natural world." }
            ],
            standard: [
                { question: "If a text says 'The sea shrank because rivers were diverted', what caused the problem?", options: ["Climate change", "Rivers were used for irrigation", "Earthquakes", "Pollution"], correct: 1, explanation: "Rivers were diverted for irrigation." },
                { question: "What is the author's purpose in a text about food waste?", options: ["To entertain", "To inform and persuade", "To describe a person", "To tell a story"], correct: 1, explanation: "Such texts inform and persuade." }
            ],
            challenge: [
                { question: "What inference can you make if a text says 'Many students cheat because of pressure'?", options: ["Students are lazy", "The education system may need changes", "Teachers encourage cheating", "Exams are too easy"], correct: 1, explanation: "The text suggests the system may contribute to cheating." }
            ]
        }
    },

    // Achievements
    achievements: [
        { id: "first-lesson", name: "First Lesson", description: "Complete your first lesson", icon: "📚", condition: (data) => data.completedLessons && data.completedLessons.length >= 1 },
        { id: "grammar-explorer", name: "Grammar Explorer", description: "Complete 5 grammar lessons", icon: "📝", condition: (data) => data.completedLessons && data.completedLessons.filter(l => l.includes('grammar')).length >= 3 },
        { id: "five-day-streak", name: "5-Day Streak", description: "Learn for 5 days in a row", icon: "🔥", condition: (data) => data.streak >= 5 },
        { id: "vocab-star", name: "Vocabulary Star", description: "Score 90%+ in vocabulary practice", icon: "⭐", condition: (data) => data.skillScores && data.skillScores.Vocabulary >= 90 },
        { id: "error-detective", name: "Error Detective", description: "Correct 10 errors in Error Lab", icon: "🔍", condition: (data) => data.errorsCorrected >= 10 },
        { id: "diagnostic-done", name: "Diagnostic Complete", description: "Complete the diagnostic test", icon: "✅", condition: (data) => data.diagnosticCompleted === true },
        { id: "unit-master", name: "Unit Master", description: "Complete all lessons in a unit", icon: "🏆", condition: (data) => data.completedLessons && data.completedLessons.length >= 8 },
        { id: "writer", name: "Writer", description: "Complete 3 writing tasks", icon: "✍️", condition: (data) => data.writingAttempts >= 3 }
    ]
};