const events = [
    {
        artist: [
                    "Imago",
                    "bird.", 
                    "The Vowels They Orbit", 
                    "Gloryen",
                ], 
        date: new Date("2024-09-11T20:00:00"),
        type: "gig",
        venue: venues.bistro
    },
    {
        artist: [
                    "Hindley Street Country Club",
                ],
        date: new Date("2024-09-29T20:00:00"),
        type: "concert",
        venue: venues.frontier
    },
    {
        artist: [
                    "SB19",
                ],
        date: new Date("2024-10-27T20:00:00"),
        type: "concert",
        venue: venues.araneta
    },
    {
        artist: [
                    "SB19",
                ],
        date: new Date("2024-10-26T20:00:00"),
        type: "concert",
        venue: venues.araneta
    },
    {
        artist: [
                    "Zild",
                    "One Click Straight",
                    "Shanni",
                ],
        date: new Date("2024-09-28T19:00:00"),
        type: "gig",
        venue: venues.onetwothree
    },
    {
        artist: [
                    "Aster",
                    "Cloud 7",
                    "GenZix",
                    "Y07",
                    "Ramjul",
                    "Shone",
                    "Athalia Badere",
                    "Ice Reyes",
                ],
        date: new Date("2024-09-20T16:00:00"),
        type: "mall",
        venue: venues.smlaspinas
    },
    {
        artist: [
                    "Joey Ayala",
                    "The Dawn",
                    "Sandwich",
                    "We Got",
                ],
        date: new Date("2024-09-20T20:00:00"),
        type: "gig",
        venue: venues.nineteeneast
    },
    {
        artist: [
                    "Paolo Santos Trio",
                ],
        date: new Date("2024-09-17"),
        type: "gig",
        venue: venues.twelvemonkeys
    },
    {
        artist: [
                    "bird.",
                    "Blaster and the Celestial Klownz",
                    "Cheats",
                    "Party Pace",
                    "Waiian",
                ],
        date: new Date("2024-09-07T17:00:00"),
        type: "gig",
        venue: venues.metrotent
    },
    {
        artist: [
                    "crwn",
                    "izzy mariano",
                    "Jolianne",
                    "Rjay Ty",
                    "Tarsius",
                ],
        date: new Date("2024-09-08T17:00:00"),
        type: "gig",
        venue: venues.metrotent
    },
    {
        artist: [
                    "bird.",
                    "Party Pace",
                    "Cinéma Lumière",
                    "Turning Tendencies",
                    "LANO",
                    "OnlyKwans",
                    "Chain Messages",
                ],
        date: new Date("2024-10-04"),
        type: "gig",
        venue: venues.rabbithole
    },
    {
        artist: [
                    "Ely Buendia",
                ],
        date: new Date("2024-09-14T20:00:00"),
        type: "concert",
        venue: venues.newport
    },
    {
        artist: [
                    "Tanya Markova",
                    "Barq",
                    "Growing Pains",
                    "People Watching People",
                    "Feverdream",
                    "Arvo",
                    "Ugh!",
                    "Hey, Leona",
                ],
        date: new Date("2024-10-26T17:00:00"),
        type: "gig",
        venue: venues.centralcraftbalanga
    },
    {
        artist: [
                    "Maroon 5",
                ],
        date: new Date("2025-01-29"),
        announced: new Date("2024-09-09T11:41:00"),
        type: "concert",
        venue: venues.moaarena
    },
    {
        name: "Billboard Philippines Mainstage",
        artist: [
                    "Gary Valenciano",
                    "Regine Velasquez-Alcasid",
                    "SB19",
                    "BINI",
                    "Ben&Ben",
                    "Yeng Constantino",
                    "Moira",
                    "Erik Santos",
                    "Sandwich",
                    "KZ Tandingan",
                    "James Reid",
                    "Dilaw",
                    "Maki",
                    "Adie",
                    "TJ Monterde",
                    "Cup of Joe",
                    "O Side Mafia",
                    "Hev Abi",
                    "G22",
                    "Alamat",
                    "KAIA",
                    "Zae",
                    "Felip",
                    "Josh Cullen",
                    "Illest Morena",
                    "YGIG",
                    "AJAA",
                    "Over October",
                    "Playertwo",
                    "Tus Brothers",
                ],
        date: new Date("2024-10-15T19:00:00"),
        announced: new Date("2024-09-07T10:00:00"),
        type: "concert",
        venue: venues.moaarena
    },
    {
        artist: [
                    "Overtone",
                ],
        date: new Date("2024-09-15"),
        type: "gig",
        venue: venues.twelvemonkeys
    },
    {
        name: "Maselang Bahaghari: Eraserheads Covers Night",
        artist: [
                    "FT. Pidiong",
                    "Lumanay",
                    "Duskphile",
                    "Hemlockz",
                    "ZROW",
                    "Lazy Daisy",
                ],
        date: new Date("2024-09-14T20:00:00"),
        type: "gig",
        venue: venues.gighouse
    },
    {
        name: "Bente + 1",
        artist: [
                    "SUYEN",
                    "SHANNi",
                    "Frank Ely",
                    "Sean Archer",
                ],
        date: new Date("2024-09-21T18:00:00"),
        type: "gig",
        venue: venues.imajin
    },
    {
        name: "Paramore Night 44",
        artist: [
                    "Gracenote",
                    "FIONA",
                    "Julia Daniel",
                    "Night Over Alaska",
                    "NaïV",
                    "ULTRAVIOLET",
                ],
        date: new Date("2024-09-13"),
        type: "gig",
        venue: venues.saguijo
    },
    {
        artist: [
                    "AJAA",
                ],
        date: new Date("2024-09-28T16:00:00"),
        type: "mall",
        venue: venues.galleria
    },
    {
        name: "llême onzieme: Muri's Debut EP Launch",
        artist: [
                    "The Ransom Collective",
                    "Leanne & Naara",
                    "Kai Honasan",
                    "Jerms",
                    "Muri",
                    "Billz",
                ],
        date: new Date("2024-09-22T19:00:00"),
        type: "gig",
        venue: venues.sarisari
    },
    {
        name: "Lost & Found Album Concert",
        artist: [
                    "Josh Cullen",
                ],
        date: new Date("2024-09-28"),
        type: "concert",
        venue: venues.frontier
    },
    {
        name: "Dream Rhythm Promotion Sessions Vol. 8",
        artist: [
                    "Maryzark",
                    "Fiona",
                    "Eleyn",
                    "Creditcard Reason",
                    "Hairgum",
                    "Brisom",
                ],
        date: new Date("2024-09-14"),
        type: "gig",
        venue: venues.saguijo
    },
    {
        name: "Kai del Rio Double Single Launch",
        artist: [
                    "Kai Del Rio",
                    "Sponge Cola",
                    "Barbie Almalbis",
                    "bird.",
                    "I Belong To The Zoo",
                    "Ysanygo",
                ],
        date: new Date("2024-09-13T20:00:00"),
        type: "gig",
        venue: venues.sarisari
    },
    {
        name: "Now & Then: Orange & Lemons 25th Anniversary Concert",
        artist: [
                    "Orange & Lemons",
                ],
        date: new Date("2024-10-18T20:00:00"),
        type: "concert",
        venue: venues.metrotent
    },
    {
        artist: [
                    "Franco",
                ],
        date: new Date("2024-09-27"),
        type: "gig",
        venue: venues.twelvemonkeys
    },
    {
        name: "2NE1 Welcome Back 2024-25 Asia Tour",
        artist: [
                    "2NE1",
                ],
        date: new Date("2024-11-16"),
        type: "concert",
        venue: venues.tba
    },
    {
        artist: [
                    "Shamrock",
                    "Stonefree",
                    "Let Gravity",
                    "Pragma",
                ],
        date: new Date("2024-09-12"),
        type: "gig",
        venue: venues.twelvemonkeys
    },
    {
        artist: [
                    "Mass of the Fermenting Dregs",
                    "Death of Heather",
                ],
        date: new Date("2024-11-10"),
        type: "concert",
        venue: venues.eastside
    },
    {
        name: "Honne Ouch Album Signing in Manila",
        artist: [
                    "HONNE",
                ],
        date: new Date("2024-09-23"),
        type: "gig",
        venue: venues.tedellis
    },
    {
        artist: [
                    "VMX Girlfriends",
                ],
        date: new Date("2024-09-13T20:00:00"),
        type: "gig",
        venue: venues.vivacafe
    },
    {
        artist: [
                    "Imago",
                    "Autotelic",
                    "Hey June!",
                    "Dilly Dally",
                ],
        date: new Date("2024-09-19"),
        type: "gig",
        venue: venues.twelvemonkeys
    },
    {
        artist: [
                    "MYMP",
                ],
        date: new Date("2024-09-21"),
        type: "gig",
        venue: venues.padrino
    },
    {
        name: "A Bad Roll",
        artist: [
                    "Fatigued",
                    "Goon Lagoon",
                    "cherryfocus",
                    "Rose Lovingco",
                    "sci fye",
                    "Cat Sales",
                    "O.I. Research Partners",
                    "emma bot",
                ],
        date: new Date("2024-09-13T19:00:00"),
        type: "gig",
        venue: venues.mows
    },
    {
        artist: [
                    "Eliza Maturan",
                    "CHNDTR",
                ],
        date: new Date("2024-09-13"),
        type: "gig",
        venue: venues.kalmabar
    },
    {
        name: "The Chongkeys \"Simula\" Album Launch",
        artist: [
                    "The Chongkeys",
                    "Brownman Revival",
                    "Rudebwoy MNL",
                    "Sunken Roots",
                ],
        date: new Date("2024-09-14T20:30:00"),
        type: "gig",
        venue: venues.bistro
    },
    {
        name: "UNIS in CURIOUSland",
        artist: [
                    "UNIS",
                ],
        date: new Date("2024-10-25T19:00:00"),
        type: "concert",
        venue: venues.frontier
    },
    {
        name: "PABLO UNA Tour",
        artist: [
                    "PABLO",
                    "J2X",
                    "W3",
                ],
        date: new Date("2024-09-15T16:00:00"),
        type: "mall",
        venue: venues.rmgalleria
    },
    {
        name: "PABLO UNA Tour",
        artist: [
                    "PABLO",
                    "J2X",
                    "W3",
                ],
        date: new Date("2024-09-22"),
        type: "mall",
        venue: venues.rmilocos
    },
    {
        name: "PABLO UNA Tour",
        artist: [
                    "PABLO",
                    "J2X",
                    "W3",
                ],
        date: new Date("2024-09-29"),
        type: "mall",
        venue: venues.rmgalleriasouth
    },
    {
        artist: [
                    "6cyclemind",
                    "Stonefree",
                    "7 Foot Jr",
                ],
        date: new Date("2024-09-14T20:00:00"),
        type: "gig",
        venue: venues.nineteeneast
    },
    {
        name: "Si Idol Pala 2?",
        artist: [
                    "Lola Amour",
                    "Alisson Shore",
                    "Chicosci",
                    "The Ridleys",
                    "bird.",
                    "25hearts",
                ],
        date: new Date("2024-09-21"),
        type: "gig",
        venue: venues.onetwothree
    },
    {
        name: "Kamusta Ka Na? HDYF??",
        artist: [
                    "Lola Amour",
                    "PLAYERTWO",
                    "dwta",
                    "Young Cocoa",
                ],
        date: new Date("2024-09-13T19:00:00"),
        type: "gig",
        venue: venues.onetwothree
    },
    {
        name: "Guitar Harbour Custom Shop 10th Anniversary Celebration",
        artist: [
                    "Tanya Markova",
                    "Dionela",
                    "Earl Agustin",
                    "Sapantaha",
                    "Gracenote",
                    "Better Days",
                ],
        date: new Date("2024-09-12T19:30:00"),
        type: "gig",
        venue: venues.bistro
    },
    {
        name: "2024 Hori7on Concert in Manila Daytour: Anchor High",
        artist: [
                    "HORI7ON",
                ],
        date: new Date("2024-11-03T18:00:00"),
        type: "concert",
        venue: venues.moaarena
    },
    {
        artist: [
                    "The Ridleys",
                ],
        date: new Date("2024-11-16"),
        type: "concert",
        venue: venues.musicmuseum
    },
    {
        name: "Jetcoaster Karaoke Single Launch",
        artist: [
                    "Jetcoaster",
                    "Sunflower Station",
                    "Shoulder State",
                    "The Revisors",
                ],
        date: new Date("2024-09-13T20:00:00"),
        type: "gig",
        venue: venues.rabbithole
    },
    {
        artist: [
                    "Agaw Agimat",
                    "Anibughaw",
                    "Signum",
                    "Eskalera",
                    "Dally",
                ],
        date: new Date("2024-09-28T21:00:00"),
        type: "gig",
        venue: venues.bistro
    },
    {
        artist: [
                    "Adjeng",
                    "Barbie Almalbis",
                ],
        date: new Date("2024-09-17"),
        type: "gig",
        venue: venues.redrhino
    },
    {
        name: "SetYEAHmbre!: Isang Improv Show by SPIT",
        artist: [
                    "SPIT",
                ],
        date: new Date("2024-09-10T21:00:00"),
        type: "gig",
        venue: venues.twelvemonkeys
    },
    {
        artist: [
                    "Nina",
                    "Peter Caimbon",
                ],
        date: new Date("2024-09-11T21:30:00"),
        type: "gig",
        venue: venues.twelvemonkeys
    },
    {
        name: "Red Letter Day: Maverick Productions' 2nd Anniversary Day 1",
        artist: [
                    "One Click Straight",
                    "Oh, Flamingo!",
                    "Yun",
                    "Jurassic Pards",
                    "F'in Quarrel",
                    "Charleston Music",
                    "Jyve",
                    "That Band Astra",
                    "Band Ni Cat",
                ],
        date: new Date("2024-11-15"),
        type: "gig",
        venue: venues.milenya
    },
    {
        name: "Red Letter Day: Maverick Productions' 2nd Anniversary Day 2",
        artist: [
                    "Snakefight",
                    "Simpatiko PH",
                    "Plus Two",
                    "Blind Side",
                    "Chains4no1",
                    "Comic's Trip",
                    "Sidra",
                    "Achilles Vee",
                ],
        date: new Date("2024-11-16"),
        type: "gig",
        venue: venues.bossbar
    },
    {
        artist: [
                    "Armi Millare",
                    "The Plug",
                ],
        date: new Date("2024-09-11T21:30:00"),
        type: "gig",
        venue: venues.hardrockmnl
    },
    {
        name: "Maskipaps: The Crossover",
        artist: [
                    "Maki",
                    "Demi",
                    "Over October",
                    "Orange & Lemons",
                    "Cup of Joe",
                ],
        date: new Date("2024-12-20"),
        type: "concert",
        venue: venues.upsunken
    },
    {
        name: "Melodies & Memories",
        artist: [
                    "The Company",
                    "Dylan Menor",
                ],
        date: new Date("2024-09-14"),
        type: "mall",
        venue: venues.rmgalleria
    },
    {
        name: "The Best of David Archuleta",
        artist: [
                    "David Archuleta",
                ],
        date: new Date("2024-09-14"),
        type: "concert",
        venue: venues.frontier
    },
    {
        artist: [
                    "Arthur Nery",
                ],
        date: new Date("2024-10-25T20:00:00"),
        type: "concert",
        venue: venues.araneta
    },
    {
        name: "45th Manila International Book Fair",
        artist: [
                    "Cloud 7",
                ],
        date: new Date("2024-09-14T13:45:00"),
        type: "mall",
        venue: venues.smxmanila
    },
    {
        name: "45th Manila International Book Fair",
        artist: [
                    "ASTER",
                    "AJAA",
                ],
        date: new Date("2024-09-15T13:45:00"),
        type: "mall",
        venue: venues.smxmanila
    },
    {
        name: "Soundtrip Sessions Vol. 3",
        artist: [
                    "Southborder",
                    "Ella May Saison",
                ],
        date: new Date("2024-11-09T20:00:00"),
        type: "concert",
        venue: venues.theatresolaire
    },
    {
        name: "SIGA Two Leg Tour",
        artist: [
                    "One Click Straight",
                    "Matoki",
                    "Chain Messages",
                    "Silent Disco",
                    "Medyo Maybe",
                ],
        date: new Date("2024-09-14T19:30:00"),
        type: "gig",
        venue: venues.hangoutresto
    },
    {
        name: "Wish 107.5",
        artist: [
                    "Eliza Maturan",
                    "Yah Bles",
                ],
        date: new Date("2024-09-10T16:00:00"),
        type: "gig",
        venue: venues.etoncentris
    },
    {
        name: "Bonded by Sound",
        artist: [
                    "Side A",
                    "Janine Teñoso",
                ],
        date: new Date("2024-09-21T20:00:00"),
        type: "concert",
        venue: venues.theatresolaire
    },
    {
        name: "Fiji Blue Asia Glide Tour",
        artist: [
                    "Fiji Blue",
                ],
        date: new Date("2024-11-29"),
        announced: new Date("2024-09-10T12:00:00"),
        type: "concert",
        venue: venues.samsunghall
    },
    {
        name: "Olivia Rodrigo Manila Silver Star Show",
        artist: [
                    "Olivia Rodrigo",
                ],
        date: new Date("2024-10-05"),
        announced: new Date("2024-09-10T12:06:00"),
        type: "concert",
        venue: venues.pharena
    },
    {
        artist: [
                    "Nina",
                    "Sound Ministry",
                ],
        date: new Date("2024-09-14"),
        type: "gig",
        venue: venues.districtone
    },
    {
        name: "Gary V Back @ MC",
        artist: [
                    "Gary Valenciano",
                    "Rhythm N Babes",
                    "Sayawatha",
                ],
        date: new Date("2024-10-11T18:30:00"),
        type: "concert",
        venue: venues.marianauditorium
    },
    {
        name: "The Bootleg Beatles Manila 2024",
        artist: [
                    "The Bootleg Beatles",
                ],
        date: new Date("2024-10-26T20:00:00"),
        type: "concert",
        venue: venues.theatresolaire
    },
    {
        artist: [
                    "gilcharmm",
                    "Kino1998",
                    "The Nomads",
                    "Jerry Something",
                    "Vacant Signs",
                    "Six To Cast",
                    "Galaxy Lodge",
                    "Parasouls",
                    "Afuera",
                    "Achilles Vee",
                ],
        date: new Date("2024-09-12"),
        type: "gig",
        venue: venues.eightyeight
    },
    {
        name: "Asia Tour 2024",
        artist: [
                    "Big Time Rush",
                ],
        date: new Date("2024-10-17"),
        type: "concert",
        venue: venues.frontier
    },
    {
        name: "Queers Night Vol. 2: Young, Pristine, in a Fever Dream",
        artist: [
                    "Walktrip",
                    "Doghause",
                    "Lu",
                    "Joan Velasquez",
                    "PK Shellboy",
                    "Wishy Washy",
                ],
        date: new Date("2024-09-29"),
        type: "gig",
        venue: venues.eightyeight
    },
    {
        name: "Press Hit Play Lampara Mall Tour",
        artist: [
                    "Press Hit Play",
                ],
        date: new Date("2024-09-14T16:00:00"),
        type: "mall",
        venue: venues.malaboncitisquare
    },
    {
        name: "WHEN WE WERE YOUNG Cover Night Vol. 2",
        artist: [
                    "Anthem for Maria",
                    "Hello Mellow",
                    "DON'T WAVE",
                    "Ilayà",
                    "Do Not Delay",
                    "Armed Like Giants",
                    "Sidra",
                    "Colovrwave",
                    "Breakfast & Breakdowns",
                    "Rue Monday",
                ],
        date: new Date("2024-09-28T18:00:00"),
        type: "gig",
        venue: venues.cityboymain
    },
    {
        name: "Chapter 15: In A Hole In The Ground",
        artist: [
                    "Pinkmen",
                    "Lockout Season",
                    "Lemlunay",
                    "Trailing Noises",
                    "ACT!",
                    "Breē",
                    "Tema",
                    "Forest Rituals",
                ],
        date: new Date("2024-09-14T20:00:00"),
        type: "gig",
        venue: venues.unknownpub
    },
    {
        name: "PPOPCON PPOP Stage MIBF",
        artist: [
                    "1ST ONE",
                    "KAIA",
                    "New:ID",
                    "Chin",
                ],
        date: new Date("2024-09-14T14:30:00"),
        announced: new Date("2024-09-09T21:00:00"),
        type: "mall",
        venue: venues.smxmanila
    },
    {
        artist: [
                    "Join the Club",
                    "Jana Garcia",
                    "Alon",
                ],
        date: new Date("2024-09-20"),
        type: "gig",
        venue: venues.takeover
    },
    {
        name: "G Fest 2024",
        artist: [
                    "BINI",
                    "Denise Julia",
                    "Jason Dhakal",
                    "SunKissed Lola",
                    "ASTER",
                ],
        date: new Date("2024-09-22"),
        type: "concert",
        venue: venues.smxmanila
    },
    {
        name: "Air Supply The Lost in Love Experience",
        artist: [
                    "Air Supply",
                ],
        date: new Date("2024-12-05T19:00:00"),
        type: "concert",
        venue: venues.smxbacolod
    },
    {
        name: "Air Supply The Lost in Love Experience",
        artist: [
                    "Air Supply",
                ],
        date: new Date("2024-12-09T19:00:00"),
        type: "concert",
        venue: venues.waterfronthotel
    },
    {
        name: "Air Supply The Lost in Love Experience",
        artist: [
                    "Air Supply",
                ],
        date: new Date("2024-12-11T19:00:00"),
        type: "concert",
        venue: venues.smxdavao
    },
    {
        name: "SiKAT v.3",
        artist: [
                    "Katrina Velarde",
                ],
        date: new Date("2024-10-11T20:00:00"),
        type: "concert",
        venue: venues.frontier
    },
    {
        name: "ASIYA Asian Music Festival & Conference",
        artist: [
                    "Hyukoh",
                    "Sunset Rollercoaster",
                    "Babychair",
                    "Colde",
                    "Flu",
                    "Gabba",
                    "Imase",
                    "Numcha",
                    "Reese Lansangan",
                    "UDD",
                    "Urbandub",
                ],
        date: new Date("2024-10-12"),
        type: "concert",
        venue: venues.worldtrade
    },
    {
        name: "ASIYA Asian Music Festival & Conference",
        artist: [
                    "BINI",
                    "Balming Tiger",
                    "Jose Miguel",
                    "Juan Karlos",
                    "Salasa",
                    "Shye",
                    "Ysanygo",
                    "Zild",
                    "9M88",
                ],
        date: new Date("2024-10-13"),
        type: "concert",
        venue: venues.worldtrade
    },
    {
        name: "Requiem Tour",
        artist: [
                    "keshi",
                ],
        date: new Date("2025-03-04"),
        type: "concert",
        venue: venues.moaarena
    },
    {
        name: "K-Swag Legend",
        artist: [
                    "Psy",
                    "BBGirls",
                    "The Art Connection",
                    "PLUUS",
                    "YGIG",
                ],
        date: new Date("2024-09-14T20:00:00"),
        type: "concert",
        venue: venues.theatresolaire
    },
    {
        name: "The Best of David Archuleta Live Press Conference and Pre-Concert Sneak Peek",
        artist: [
                    "David Archuleta",
                ],
        date: new Date("2024-09-13T18:00:00"),
        announced: new Date("2024-09-10T13:17:00"),
        type: "mall",
        venue: venues.marketmarket
    },
    {
        artist: [
                    "Bruno Major",
                ],
        date: new Date("2024-09-11T20:00:00"),
        type: "concert",
        venue: venues.piccplenary
    },
    {
        name: "Circus Music Festival 5",
        artist: [
                    "Ely Buendia",
                    "Parokya Ni Edgar",
                    "Kamikazee",
                    "TJ Monterde",
                    "December Avenue",
                    "Gloc-8",
                    "Elmo & Arkin with Hardware Syndrome",
                    "Silent Sanctuary",
                    "Spongecola",
                    "Cup of Joe",
                    "Hale",
                    "Orange & Lemons",
                    "Rocksteddy",
                    "Brownman Revival",
                    "Nobita",
                    "Dionela",
                    "Rob Deniel",
                    "Jireh Lim",
                    "Cueshe",
                    "This Band",
                    "Join the Club",
                    "Soapdish",
                    "Over October",
                    "Releast Cram",
                    "Munimuni",
                    "Sugarcane",
                    "The Ridleys",
                    "Tricia",
                    "Similar Sky",
                ],
        date: new Date("2024-09-28"),
        type: "concert",
        venue: venues.bridgetowne
    },
    {
        name: "Wish Bus",
        artist: [
                    "Destiny Palisoc",
                    "Noel Cabangon & Joey Generoso",
                    "BGYO",
                ],
        date: new Date("2024-09-11T16:00:00"),
        announced: new Date("2024-09-11T10:00:00"),
        type: "gig",
        venue: venues.vmtaguig
    },
    {
        artist: [
                    "Orange & Lemons",
                    "Blind Stereo Moon",
                    "Shumi",
                ],
        date: new Date("2024-09-20T20:00:00"),
        announced: new Date("2024-09-03T05:20:00"),
        type: "gig",
        venue: venues.junction
    },
    {
        name: "Drag to Store",
        artist: [
                    "Brigiding",
                    "Zymba Ding",
                    "Tita Baby",
                    "Khianna",
                ],
        date: new Date("2024-09-14T14:00:00"),
        type: "mall",
        venue: venues.festivalmall
    },
    {
        name: "Fusion X Cebu",
        artist: [
                    "Nadine Lustre",
                    "December Avenue",
                    "Zack Tabudlo",
                    "Maki",
                    "KAIA",
                    "Jan Francis Alinsonorin",
                    "Jovie Loon",
                    "Nica Jañola",
                    "Sugbo Brawta",
                    "DJ Victor Jao",
                    "DJ Matt",
                    "DJ Via Chan",
                ],
        date: new Date("2024-10-05"),
        type: "concert",
        venue: venues.citydimare
    },
    {
        artist: [
                    "Cloud 7",
                ],
        date: new Date("2024-09-15T16:00:00"),
        type: "mall",
        venue: venues.smstamesa
    },
    {
        artist: [
                    "Silk",
                ],
        date: new Date("2024-09-28"),
        type: "gig",
        venue: venues.takeover
    },
    {
        name: "Gaboom!",
        artist: [
                    "Teeth",
                    "Sandwich",
                    "Cambio",
                    "Party Pace",
                    "Blaster",
                    "One Click Straight",
                    "Pedicab",
                ],
        date: new Date("2024-10-26T18:00:00"),
        type: "gig",
        venue: venues.onetwothree
    },
    {
        name: "Ang Guwapo at Ang Masuwerte",
        artist: [
                    "Rey Valera",
                    "Marco Sison",
                ],
        date: new Date("2024-11-22T19:30:00"),
        type: "concert",
        venue: venues.musicmuseum
    },
    {
        artist: [
                    "Eastside",
                ],
        date: new Date("2024-09-21T23:00:00"),
        type: "gig",
        venue: venues.bar360
    },
    {
        name: "The Arellano Law 2024 Post-Bar Celebration",
        artist: [
                    "The Juans",
                    "Nino Alejandro",
                    "6cyclemind",
                ],
        date: new Date("2024-09-15T18:00:00"),
        type: "gig",
        venue: venues.auslquadrangle
    },
    {
        name: "Andrew E. 1 Time For Your Mind",
        artist: [
                    "Andrew E.",
                ],
        date: new Date("2024-12-11T20:00:00"),
        type: "concert",
        venue: venues.frontier
    },
    {
        artist: [
                    "SNTA",
                ],
        date: new Date("2024-09-11T20:00:00"),
        type: "gig",
        venue: venues.vivacafe
    },
    {
        name: "Starpop Campus Tour",
        artist: [
                    "BGYO",
                    "Gello Marquez",
                    "1621BC",
                ],
        date: new Date("2024-09-13T17:00:00"),
        type: "gig",
        venue: venues.natlteachers
    },
    {
        artist: [
                    "Tanya Markova",
                ],
        date: new Date("2024-09-21"),
        type: "gig",
        venue: venues.bistro
    },
    {
        name: "Grand BINIverse",
        artist: [
                    "BINI",
                ],
        date: new Date("2024-11-18"),
        type: "concert",
        venue: venues.araneta
    },
    {
        name: "Grand BINIverse",
        artist: [
                    "BINI",
                ],
        date: new Date("2024-11-17"),
        type: "concert",
        venue: venues.araneta
    },
    {
        name: "Grand BINIverse",
        artist: [
                    "BINI",
                ],
        date: new Date("2024-11-16"),
        type: "concert",
        venue: venues.araneta
    },
    {
        name: "SIGA Two Leg Tour",
        artist: [
                    "One Click Straight",
                    "Chain Messages",
                    "Matoki",
                    "BLASTER",
                ],
        date: new Date("2024-09-13T19:30:00"),
        type: "gig",
        venue: venues.dininghall
    },
    {
        artist: [
                    "Mark Michael Garcia",
                    "RAV4",
                ],
        date: new Date("2024-09-13"),
        type: "gig",
        venue: venues.landos
    },
    {
        name: "Anorak Live in Manila",
        artist: [
                    "Anorak",
                    "As Silent As The Forest",
                    "Musical O",
                    "Ploverstream",
                    "Thirds",
                ],
        date: new Date("2024-09-11T18:00:00"),
        type: "gig",
        venue: venues.mows
    },
    {
        artist: [
                    "Matt Maltese",
                    "Janine Teñoso",
                ],
        date: new Date("2024-11-09"),
        type: "concert",
        venue: venues.skydome
    },
    {
        name: "The King 4 Ever",
        artist: [
                    "Martin Nievera",
                ],
        date: new Date("2024-09-27T20:00:00"),
        type: "concert",
        venue: venues.araneta
    },
    {
        artist: [
                    "Red Velvet",
                ],
        date: new Date("2024-09-14T18:00:00"),
        type: "concert",
        venue: venues.moaarena
    },
    {
        name: "Alamat Live at Viva Cafe",
        artist: [
                    "ALAMAT",
                ],
        date: new Date("2024-09-28T18:00:00"),
        announced: new Date("2024-09-09T19:01:00"),
        type: "gig",
        venue: venues.vivacafe
    },
    {
        name: "Now Playing: PPOP Showcase",
        artist: [
                    "GenZix",
                    "SY•NC",
                    "A+Blaze",
                    "A+Dazzle",
                    "AGON",
                    "ARSÈNE",
                    "GEM&I",
                    "Y07",
                    "YM24",
                    "MIRAI",
                    "ONX",
                ],
        date: new Date("2024-11-14T18:00:00"),
        announced: new Date("2024-09-05T18:00:00"),
        type: "concert",
        venue: venues.skydome
    },
    {
        artist: [
                    "The Red Jumpsuit Apparatus",
                ],
        date: new Date("2024-09-11T20:00:00"),
        type: "concert",
        venue: venues.smxdavao
    },
    {
        artist: [
                    "The Red Jumpsuit Apparatus",
                ],
        date: new Date("2024-09-12T20:00:00"),
        type: "concert",
        venue: venues.skydome
    },
    {
        name: "A Night with TJ MONTERDE",
        artist: [
                    "TJ Monterde",
                ],
        date: new Date("2024-09-26T19:00:00"),
        type: "mall",
        venue: venues.rmiligan
    },
    {
        name: "Touchdown in Manila",
        artist: [
                    "KATSEYE",
                ],
        date: new Date("2024-09-18T18:00:00"),
        announced: new Date("2024-09-11T20:15:00"),
        type: "mall",
        venue: venues.marketmarket
    },
    {
        name: "Snakefight The Bar Tour",
        artist: [
                    "Snakefight",
                    "Kenaniah",
                    "Arcadia",
                    "Henz Inanobe",
                ],
        date: new Date("2024-09-12"),
        type: "gig",
        venue: venues.mows
    },
    {
        name: "Snakefight The Bar Tour & New Single Launch",
        artist: [
                    "Snakefight",
                    "One Click Straight",
                    "Henz Inanobe",
                    "Blitz",
                    "Spaced Out Kids",
                    "Eleyn",
                ],
        date: new Date("2024-09-26"),
        type: "gig",
        venue: venues.bistro
    },
    {
        artist: [
                    "SUD",
                ],
        date: new Date("2024-09-14T20:00:00"),
        announced: new Date("2024-09-11T19:58:00"),
        type: "gig",
        venue: venues.vivacafe
    },
    {
        name: "Ikot Day 2 Sa Music Museum",
        artist: [
                    "Over October",
                ],
        date: new Date("2024-10-12T20:00:00"),
        announced: new Date("2024-09-11T18:02:00"),
        type: "concert",
        venue: venues.musicmuseum
    },
    {
        name: "Ikot Day 1 Sa Music Museum",
        artist: [
                    "Over October",
                ],
        date: new Date("2024-10-04T20:00:00"),
        type: "concert",
        venue: venues.musicmuseum
    },
    {
        name: "Day6 3rd World Tour Forever Young",
        artist: [
                    "Day6",
                ],
        date: new Date("2025-02-22"),
        type: "concert",
        venue: venues.araneta
    },
    {
        artist: [
                    "Eliza Maturan",
                    "Sean Ilada",
                    "Jiyu",
                    "Maegan Lim",
                ],
        date: new Date("2024-09-21T19:00:00"),
        type: "gig",
        venue: venues.ambergis
    },
    {
        artist: [
                    "dwta",
                    "Paulo",
                    "Ame",
                    "Better Days",
                    "Kiss N Tell",
                    "Helena",
                ],
        date: new Date("2024-09-26"),
        type: "gig",
        venue: venues.twelvemonkeys
    },
    {
        name: "Subculture",
        artist: [
                    "Chicosci",
                    "Chelsea Alley",
                    "Sera",
                    "Limitbreak Crew",
                    "Katatonik",
                    "Sonia",
                    "Forge",
                    "13th Verse",
                    "Skampers",
                    "South Nova St.",
                    "Abiso",
                    "Hellokitten",
                    "Blindsided",
                    "Incendio",
                    "Forbidden Juan",
                    "Fluidde",
                ],
        date: new Date("2024-09-14T17:00:00"),
        type: "concert",
        venue: venues.diwangtarlac
    },
    {
        name: "A Night At The Pops",
        artist: [
                    "Manila Symphony Orchestra",
                    "Barbie Almalbis",
                    "Jason Dhakal",
                    "Arthur Miguel",
                    "Lola Amour",
                ],
        date: new Date("2024-11-15T20:00:00"),
        type: "concert",
        venue: venues.frontier
    },
    {
        name: "Foot Locker Day",
        artist: [
                    "Dionela",
                    "Clara Benin",
                    "Curtismith",
                    "Deny",
                    "Waiian",
                    "A-Kidz",
                ],
        date: new Date("2024-09-14"),
        announced: new Date("2024-09-10T19:18:00"),
        type: "mall",
        venue: venues.ammanilabay
    },
    {
        name: "TRS Tempus Rehearsal Space by EelectricStudio 1st Anniversary",
        artist: [
                    "Ligaya Escueta",
                    "Badwave",
                    "Irrevocable",
                    "Eggboy",
                    "Ang Bandang Shirley",
                ],
        date: new Date("2024-09-14"),
        type: "gig",
        venue: venues.onetwothree
    },
    {
        name: "Queen of the Night Remembering Whitney",
        artist: [
                    "Trina Johnson Finn",
                ],
        date: new Date("2024-10-11T20:00:00"),
        announced: new Date("2024-09-11T20:18:00"),
        type: "concert",
        venue: venues.newport
    },
    {
        name: "Queen of the Night Remembering Whitney",
        artist: [
                    "Trina Johnson Finn",
                ],
        date: new Date("2024-10-12T20:00:00"),
        announced: new Date("2024-09-11T20:18:00"),
        type: "concert",
        venue: venues.newport
    },
    {
        name: "Live at the Cozy Cove",
        artist: [
                    "Nobita",
                    "Jayda",
                    "Arthur Miguel",
                    "Jose Miguel",
                ],
        date: new Date("2024-09-13T18:00:00"),
        type: "gig",
        venue: venues.cozycove
    },
    {
        name: "Janine Apat Na Buwan EP Tour",
        artist: [
                    "Janine Teñoso",
                    "Jikamarie",
                    "Pappel",
                ],
        date: new Date("2024-09-13T18:00:00"),
        type: "gig",
        venue: venues.dinalan
    },
    {
        artist: [
                    "Brownman Revival",
                    "Chechebureche",
                ],
        date: new Date("2024-09-28"),
        type: "gig",
        venue: venues.twelvemonkeys
    },
    {
        artist: [
                    "SUD",
                    "Sugarcane",
                ],
        date: new Date("2024-09-20T18:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
        type: "gig",
        venue: venues.jessnpats
    },
    {
        artist: [
                    "Cigarettes After Sex",
                ],
        date: new Date("2025-01-14T20:00:00"),
        type: "concert",
        venue: venues.moaarena
    },
    {
        name: "Satellites World Tour",
        artist: [
                    "The Script",
                ],
        date: new Date("2025-02-11T20:00:00"),
        type: "concert",
        venue: venues.araneta
    },
    {
        name: "Satellites World Tour",
        artist: [
                    "The Script",
                ],
        date: new Date("2025-02-12T20:00:00"),
        type: "concert",
        venue: venues.araneta
    },
    {
        name: "Best of Fujii Kaze 2020-2024 Asia Tour",
        artist: [
                    "Fujii Kaze",
                ],
        date: new Date("2024-12-10"),
        type: "concert",
        venue: venues.moaarena
    },
    {
        name: "Davao Aurora Music Festival",
        artist: [
                    "Ely Buendia",
                    "Moira dela Torre",
                    "Orange & Lemons",
                    "Arthur Nery",
                    "Cup of Joe",
                    "Jed Ignacio",
                    "DJ Torch Gacuma",
                    "DJ Ivan Ramos",
                    "DJ Supreme",
                ],
        date: new Date("2024-11-30:15:00:00"),
        type: "concert",
        venue: venues.crocodilepark
    },
    {
        name: "Maki-Concert",
        artist: [
                    "Maki",
                ],
        date: new Date("2024-11-29T19:00:00"),
        type: "concert",
        venue: venues.frontier
    },
    {
        name: "Maki-Concert",
        artist: [
                    "Maki",
                ],
        date: new Date("2024-11-30T19:00:00"),
        type: "concert",
        venue: venues.frontier
    },
    {
        artist: [
                    "juan karlos",
                ],
        date: new Date("2024-11-29T20:00:00"),
        type: "concert",
        venue: venues.moaarena
    },
    {
        artist: [
                    "Dionela",
                ],
        date: new Date("2024-10-18"),
        type: "mall",
        venue: venues.uptechnohub
    },
    {
        artist: [
                    "Dionela",
                ],
        date: new Date("2024-10-27"),
        type: "mall",
        venue: venues.amfeliz
    },
    {
        artist: [
                    "Dionela",
                ],
        date: new Date("2024-11-09"),
        type: "mall",
        venue: venues.amharborpoint
    },
    {
        artist: [
                    "Dionela",
                ],
        date: new Date("2024-11-15"),
        type: "mall",
        venue: venues.marqueemall
    },
    {
        artist: [
                    "Dionela",
                ],
        date: new Date("2024-11-16"),
        type: "mall",
        venue: venues.amcentralbloc
    },
    {
        artist: [
                    "Dionela",
                ],
        date: new Date("2024-11-30"),
        type: "mall",
        venue: venues.amthe30th
    },
    {
        name: "2024 CHANYEOL LIVE TOUR: (City-scape) in MANILA",
        artist: [
                    "CHANYEOL",
                ],
        date: new Date("2024-10-19T18:00:00"),
        type: "concert",
        venue: venues.araneta
    },
    {
        name: "NE-YO: Champagne and Roses Tour Live in Manila",
        artist: [
                    "NE-YO",
                ],
        date: new Date("2024-10-08T20:00:00"),
        type: "concert",
        venue: venues.araneta
    },
    {
        name: "NE-YO: Champagne and Roses Tour Live in Manila",
        artist: [
                    "NE-YO",
                ],
        date: new Date("2024-10-09T20:00:00"),
        type: "concert",
        venue: venues.araneta
    },
    {
        name: "The Kid LAROI // The First Time Tour Live in Manila",
        artist: [
                    "The Kid LAROI",
                ],
        date: new Date("2024-11-05T20:00:00"),
        type: "concert",
        venue: venues.frontier
    },
    {
        name: "Lanterns and Legends: Mid-Autumn Festival Concert 2024",
        artist: [
                    "Sarah Geronimo",
                    "Baek Ji Young",
                ],
        date: new Date("2024-09-28T19:00:00"),
        type: "concert",
        venue: venues.covemanila
    },
    {
        name: "Beyond Measure: CBN Asia's 30th Anniversary Worship Celebration",
        artist: [
                    "Gary Valenciano",
                    "Sam Concepcion",
                    "Morissette",
                    "Dulce",
                    "Darren Espanto",
                    "Angel Guardian",
                    "Dave Lamar",
                    "Keiko Necesario",
                    "Rj de La Fuente",
                    "Benj Pangilinan",
                    "Felichi Buizon",
                    "Kai Buizon",
                    "Tricia Amper-Jimenez and Papuri Group",
                    "Khimo",
                    "Acel Van Ommen",
                    "Hazel Faith",
                    "Coach Mycs and LSDC Street",
                    "Maneouvres",
                    "Via Antonio",
                    "Kayla Rivera",
                    "Aicelle Santos",
                    "Caleb Santos",
                    "Reverb Worship PH Artists",
                ],
        date: new Date("2024-09-24T18:00:00"),
        type: "concert",
        venue: venues.araneta
    },
    {
        name: "2024 JANG KI YONG ASIA FAN MEETING BEAUTIFUL DAY IN MANILA",
        artist: [
                    "Jang Ki Yong",
                ],
        date: new Date("2024-09-28T19:00:00"),
        type: "concert",
        venue: venues.samsunghall
    },
    {
        name: "2024 ZEROBASEONE THE FIRST TOUR TIMELESS WORLD IN MANILA",
        artist: [
                    "ZEROBASEONE",
                ],
        date: new Date("2024-10-12T18:00:00"),
        type: "concert",
        venue: venues.moaarena
    },
    {
        name: "ANNE-MARIE 2024 LIVE IN ASIA",
        artist: [
                    "Anne-Marie",
                ],
        date: new Date("2024-09-28T19:00:00"),
        type: "concert",
        venue: venues.podiumhall
    },
    {
        name: "APO HIKING SOCIETY SINGS FOR HOPE",
        artist: [
                    "Apo Hiking Society",
                    "Leah Navarro",
                ],
        date: new Date("2024-09-24T20:00:00"),
        type: "concert",
        venue: venues.samsunghall
    },
    {
        name: "BORN FOR YOU WITH DAVID POMERANZ",
        artist: [
                    "David Pomeranz",
                ],
        date: new Date("2024-10-27T20:00:00"),
        type: "concert",
        venue: venues.baguioconvention
    },
    {
        name: "CARPENTERS REBORN TRIBUTE SHOW - BAGUIO",
        artist: [
                    "Chloe Foston",
                ],
        date: new Date("2024-09-22T18:00:00"),
        type: "concert",
        venue: venues.unibaguiogym
    },
    {
        name: "CARPENTERS REBORN TRIBUTE SHOW - BATANGAS",
        artist: [
                    "Chloe Foston",
                    "Marco Sison",
                ],
        date: new Date("2024-09-27T20:00:00"),
        type: "concert",
        venue: venues.fpjarena
    },
    {
        name: "DUA LIPA RADICAL OPTIMISM TOUR",
        artist: [
                    "Dua Lipa",
                ],
        date: new Date("2024-11-13"),
        type: "concert",
        venue: venues.pharena
    },
    {
        name: "HILLSONG LONDON WORSHIP LIVE IN CEBU",
        artist: [
                    "Hillsong London",
                ],
        date: new Date("2024-11-08T20:00:00"),
        type: "concert",
        venue: venues.seasidecebugrounds
    },
    {
        name: "HILLSONG LONDON WORSHIP LIVE IN MANILA",
        artist: [
                    "Hillsong London",
                ],
        date: new Date("2024-11-09T20:00:00"),
        type: "concert",
        venue: venues.moaarena
    },
    {
        name: "HILLSONG LONDON WORSHIP LIVE IN MANILA",
        artist: [
                    "Hillsong London",
                ],
        date: new Date("2024-11-10T18:00:00"),
        type: "concert",
        venue: venues.moaarena
    },
    {
        name: "JED MADELA WELCOME TO MY WORLD",
        artist: [
                    "Jed Madela",
                    "Esay Kirstin",
                    "Mary Anjolie Chua",
                ],
        date: new Date("2024-09-21T19:00:00"),
        type: "concert",
        venue: venues.iloiloconvention
    },
    {
        name: "NAUGHTY AND NICE JON SANTOS IS COMING TO TOWN",
        artist: [
                    "Jon Santos",
                    "Apo Hiking Society",
                    "Ice Seguerra",
                    "Viñas Deluxe",
                ],
        date: new Date("2024-12-07T20:00:00"),
        type: "concert",
        venue: venues.samsunghall
    },
    {
        artist: [
                    "Michael Learns to Rock",
                ],
        date: new Date("2024-11-05T20:00:00"),
        type: "concert",
        venue: venues.moaarena
    },
    {
        name: "SMILE! :D WORLD TOUR PORTER ROBINSON",
        artist: [
                    "Porter Robinson",
                ],
        date: new Date("2024-12-08"),
        type: "concert",
        venue: venues.podiumhall
    },
    {
        name: "STRAY KIDS DOMINATE WORLD TOUR",
        artist: [
                    "Stray Kids",
                ],
        date: new Date("2024-11-23T19:00:00"),
        type: "concert",
        venue: venues.pharena
    },
    {
        name: "THE CHAMELEONS LIVE IN MANILA",
        artist: [
                    "The Chameleons",
                    "The Dawn",
                    "Orange & Lemons",
                    "DJ Jon Tupaz",
                ],
        date: new Date("2024-11-21T20:00:00"),
        type: "concert",
        venue: venues.midastent
    },
    {
        name: "THE MAINE THE SWEET SIXTEEN TOUR IN MANILA",
        artist: [
                    "The Maine",
                ],
        date: new Date("2024-09-27T20:00:00"),
        type: "concert",
        venue: venues.skydome
    },
    {
        name: "THE MAINE THE SWEET SIXTEEN TOUR IN MANILA",
        artist: [
                    "The Maine",
                ],
        date: new Date("2024-09-28T19:30:00"),
        type: "concert",
        venue: venues.skydome
    },
    {
        name: "Tina Turner Tribute Show: ROLLING on the River ft. Sandy Redd",
        artist: [
                    "Sandy Redd",
                ],
        date: new Date("2024-09-20T20:00:00"),
        type: "concert",
        venue: venues.newport
    },
    {
        name: "Tina Turner Tribute Show: ROLLING on the River ft. Sandy Redd",
        artist: [
                    "Sandy Redd",
                ],
        date: new Date("2024-09-21T20:00:00"),
        type: "concert",
        venue: venues.newport
    },
    {
        name: "LANY A BEAUTIFUL BLUR : THE WORLD TOUR ASIA",
        artist: [
                    "LANY",
                ],
        date: new Date("2024-10-12"),
        type: "concert",
        venue: venues.pharena
    },
    {
        name: "LANY A BEAUTIFUL BLUR : THE WORLD TOUR ASIA",
        artist: [
                    "LANY",
                ],
        date: new Date("2024-10-13"),
        type: "concert",
        venue: venues.waterfronthotel
    },
    {
        name: "LANY A BEAUTIFUL BLUR : THE WORLD TOUR ASIA",
        artist: [
                    "LANY",
                ],
        date: new Date("2024-10-14"),
        type: "concert",
        venue: venues.waterfronthotel
    },
    {
        name: "LANY A BEAUTIFUL BLUR : THE WORLD TOUR ASIA",
        artist: [
                    "LANY",
                ],
        date: new Date("2024-10-15"),
        type: "concert",
        venue: venues.waterfronthotel
    },
    {
        name: "ITALO DISCO WITH GAZEBO",
        artist: [
                    "Gazebo",
                ],
        date: new Date("2024-10-19T20:00:00"),
        type: "concert",
        venue: venues.midastent
    },
    {
        artist: [
                    "Tate McRae",
                ],
        date: new Date("2024-11-04T20:00:00"),
        type: "concert",
        venue: venues.frontier
    },
    {
        artist: [
                    "Harlem Globetrotters",
                ],
        date: new Date("2024-11-12T19:30:00"),
        type: "concert",
        venue: venues.araneta
    },
    {
        artist: [
                    "Akon",
                    "Ez Mil",
                    "Lucas",
                    "Gloc 9",
                    "Flow G",
                    "Dappest X Adl",
                    "Legit Misfitz",
                    "Chocolate Factory",
                    "DJ Kate Jagdon",
                ],
        date: new Date("2024-12-03"),
        announced: new Date("2024-09-14T10:00:00"),
        type: "concert",
        venue: venues.moaarena
    },
    {
        artist: [
                    "Hands Like Houses",
                    "Greyhoundz",
                    "Urbandub",
                    "Typecast",
                ],
        date: new Date("2024-10-06T17:00:00"),
        announced: new Date("2024-09-13T15:04:00"),
        type: "concert",
        venue: venues.eastside
    },
    {
        artist: [
                    "Parokya Ni Edgar",
                    "Soundcheckers",
                ],
        date: new Date("2024-09-24"),
        type: "gig",
        venue: venues.twelvemonkeys
    },
    {
        name: "Kuatro Kantos Dito Sa Elpi Album Launch",
        artist: [
                    "Kuatro Kantos",
                    "Mayonnaise",
                    "Hilera",
                    "Maropok",
                ],
        date: new Date("2024-09-21T21:00:00"),
        type: "gig",
        venue: venues.twelvemonkeys
    },
    {
        artist: [
                    "Stonefree",
                ],
        date: new Date("2024-09-20"),
        type: "gig",
        venue: venues.kalmabar
    },
    {
        artist: [
                    "Gino Padilla",
                ],
        date: new Date("2024-09-26T22:45:00"),
        type: "gig",
        venue: venues.bar360
    },
    {
        artist: [
                    "NIKI",
                ],
        date: new Date("2025-02-11"),
        type: "concert",
        venue: venues.tba
    },
    {
        artist: [
                    "NIKI",
                ],
        date: new Date("2025-02-12"),
        type: "concert",
        venue: venues.tba
    },
    {
        artist: [
                    "Jung Hae In",
                ],
        date: new Date("2024-12-21"),
        type: "concert",
        venue: venues.tba
    },
    {
        name: "Being & Becoming: Acel's Farewell Concert and Album Launch",
        artist: [
                    "Acel",
                ],
        date: new Date("2024-10-11T20:00:00"),
        announced: new Date("2024-09-13T18:10:00"),
        type: "concert",
        venue: venues.teatrino
    },
    {
        name: "DOS Part III: JOEkay JOEkay",
        artist: [
                    "Cup of Joe",
                    "Sid Lily",
                    "Keanna Mag",
                    "Sugarcane",
                    "Gello Marquez",
                    "Matt Wilson",
                    "Earl Agustin",
                ],
        date: new Date("2024-09-21"),
        announced: new Date("2024-09-14T19:59:00"),
        type: "gig",
        venue: venues.vivacafe
    },
    {
        name: "Be My Belle",
        artist: [
                    "Belle Mariano",
                ],
        date: new Date("2024-11-22T20:00:00"),
        announced: new Date("2024-09-14T20:43:00"),
        type: "concert",
        venue: venues.newport
    },
    {
        name: "St. Wolf Launch Party",
        artist: [
                    "St. Wolf",
                    "Party Pace",
                    "Gloryen",
                    "Frank Ely",
                    "Matoki",
                ],
        date: new Date("2024-09-19T19:30:00"),
        type: "gig",
        venue: venues.mows
    },
    {
        name: "For Friends, From Friends",
        artist: [
                    "Fairview Far",
                    "Austri",
                    "Ahmad (of We Are Imaginary)",
                    "Tidal",
                    "Warpten",
                    "Devices",
                ],
        date: new Date("2024-10-13T18:00:00"),
        type: "gig",
        venue: venues.mows
    },
    {
        name: "Coke Studio Concert",
        artist: [
                    "Alamat",
                    "dwta",
                    "Nik Makino",
                ],
        date: new Date("2024-09-19T18:00:00"),
        type: "concert",
        venue: venues.balatasdevcomplex
    },
    {
        name: "Game Night with Elise Huang",
        artist: [
                    "Elise Huang",
                ],
        date: new Date("2024-09-21T17:00:00"),
        type: "gig",
        venue: venues.sidequest
    },
    {
        name: "Robbears Anniversary: A night of Retro & Love",
        artist: [
                    "Rob Deniel",
                ],
        date: new Date("2024-09-29T18:00:00"),
        announced: new Date("2024-09-13T20:24:00"),
        type: "gig",
        venue: venues.vivacafe
    },
    {
        artist: [
                    "Silent Sanctuary",
                    "Soapdish",
                    "The Wamblecropt",
                    "Ssunn",
                ],
        date: new Date("2024-09-17"),
        type: "gig",
        venue: venues.bistro
    },
    {
        name: "Bree's A Dream of Sunrise Album Tour: Bulacan Leg",
        artist: [
                    "Breē",
                    "ELEYN",
                    "sinta",
                    "Coastal Dreams",
                    "Woopla",
                    "Shumi",
                    "Continents",
                ],
        date: new Date("2024-09-21T20:00:00"),
        type: "gig",
        venue: venues.junction
    },
    {
        name: "Into the Vortex!",
        artist: [
                    "Parasouls",
                    "Windjay",
                    "Gabriel Lazaro",
                    "Reggie Pearl",
                    "Masaflora",
                ],
        date: new Date("2024-09-21T19:00:00"),
        type: "gig",
        venue: venues.rabbithole
    },
    {
        name: "Giglab Live",
        artist: [
                    "Eleyn",
                    "Bloomingdale",
                    "Coastal Dreams",
                    "Rockalyt",
                    "Write Turn",
                    "Aranas LA",
                ],
        date: new Date("2024-09-18T19:00:00"),
        type: "gig",
        venue: venues.saguijo
    },
    {
        name: "Parallel Lines",
        artist: [
                    "Rahjang",
                    "Blok and Blem",
                    "Aneka",
                    "Karizma",
                    "Primusika",
                    "Sala Sessions Music",
                ],
        date: new Date("2024-09-21T20:00:00"),
        type: "gig",
        venue: venues.neutralgroundbar
    },
    {
        artist: [
                    "Nina",
                    "Ian Veneracion",
                ],
        date: new Date("2024-10-30T20:00:00"),
        type: "concert",
        venue: venues.theatresolaire
    },
    {
        name: "Queer Nights Volume II: Young, Pristine, In a Fever Dream",
        artist: [
                    "Lu",
                    "Joan Velasquez",
                    "Doghause",
                    "Wishy Washy",
                    "Walktrip",
                    "PK Shellboy",
                ],
        date: new Date("2024-09-29T18:00:00"),
        type: "gig",
        venue: venues.eightyeight
    },
    {
        artist: [
                    "Over October",
                ],
        date: new Date("2024-09-22T18:00:00"),
        type: "mall",
        venue: venues.trinoma
    },
    {
        name: "Sugar Hiccup - MANILA",
        artist: [
                    "Sugar Hiccup",
                ],
        date: new Date("2024-10-19"),
        type: "gig",
        venue: venues.tba
    },
    {
        name: "Sugar Hiccup - BAGUIO",
        artist: [
                    "Sugar Hiccup",
                ],
        date: new Date("2024-10-25"),
        type: "gig",
        venue: venues.tba
    },
    {
        name: "Sugar Hiccup - CEBU",
        artist: [
                    "Sugar Hiccup",
                ],
        date: new Date("2024-10-26"),
        type: "gig",
        venue: venues.tba
    },
    {
        name: "TL, I'm Sick",
        artist: [
                    "Cherry Society",
                    "Space Moses",
                    "Dreaming Blue",
                    "cheeky things",
                    "Cat Boy Jeepney Drivers",
                    "25hearts",
                    "Sintasan",
                    "i hope you're okay",
                ],
        date: new Date("2024-10-06T18:00:00"),
        type: "gig",
        venue: venues.mows
    },
    {
        name: "Beyond Bulls#!t",
        artist: [
                    "Ian Veneracion",
                ],
        date: new Date("2024-09-27T20:00:00"),
        type: "gig",
        venue: venues.nineteeneast
    },
    {
        name: "New Wave Tribe Festival",
        artist: [
                    "Per Sorensen",
                    "Gene Loves Jezebel",
                    "Ian McNabb",
                    "DJ Dreadknoxx",
                ],
        date: new Date("2024-12-08T20:00:00"),
        type: "concert",
        venue: venues.moaarena
    },
    {
        name: "Gemini Fourth Run the World Asia Tour",
        artist: [
                    "Gemini Norawit",
                    "Fourth Nattawat",
                ],
        date: new Date("2025-01-25"),
        type: "concert",
        venue: venues.tba
    },
    {
        name: "ena matsuri 2024",
        artist: [
                    "ena mori",
                    "kindred",
                    "UDD",
                    "t33g33",
                    "crwn",
                    "Hideki Ito",
                ],
        date: new Date("2024-09-21T18:00:00"),
        type: "gig",
        venue: venues.justinbella
    },
    {
        artist: [
                    "Loonie",
                ],
        date: new Date("2024-09-21"),
        type: "gig",
        venue: venues.takeover
    },
    {
        name: "Lights, Camera, Encore!",
        artist: [
                    "Manila Philharmonic Orchestra",
                ],
        date: new Date("2024-10-29T19:30:00"),
        type: "concert",
        venue: venues.samsungperforming
    },
    {
        artist: [
                    "Gliterrer",
                    "Thirds",
                    "Girlcharmm",
                    "The Mind is a Terrible Thing",
                    "Repetition",
                ],
        date: new Date("2024-11-14T19:00:00"),
        type: "gig",
        venue: venues.mows
    },
    {
        artist: [
                    "Nyoy Volante",
                    "Nisha & The Verse",
                    "RAV4",
                ],
        date: new Date("2024-09-27"),
        type: "gig",
        venue: venues.landos
    },
    {
        name: "Rockin' Milestones: 40 Years and Beyond",
        artist: [
                    "Bamboo",
                    "Lola Amour",
                    "The Dawn",
                    "Cup of Joe",
                ],
        date: new Date("2024-10-31"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
        type: "",
        venue: venues.tba
    },
    {
        artist: [
                    "Sandwich",
                    "Pedicab",
                    "Ciudad",
                    "The Happy Analogues (with The Freesouls)",
                    "7 Foot Jr.",
                ],
        date: new Date("2024-09-27T19:00:00"),
        type: "gig",
        venue: venues.onetwothree
    },
    {
        name: "Dear My Love Ling & Orm",
        artist: [
                    "LingLing",
                    "Orm",
                ],
        date: new Date("2024-10-06T18:00:00"),
        announced: new Date("2024-09-12T15:00:00"),
        type: "concert",
        venue: venues.araneta
    },
    {
        name: "",
        artist: [
                    "",
                ],
        date: new Date("YYYY-MM-DDThh:mm:ss"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
        type: "",
        venue: venues.tba
    },
];