const events = [
    {
        artist: [
                    "Imago",
                    "bird.", 
                    "The Vowels They Orbit", 
                    "Gloryen",
                ], 
        date: new Date("2024-09-11T20:00:00"), 
        venue: venues.bistro
    },
    {
        artist: [
                    "Hindley Street Country Club",
                ],
        date: new Date("2024-09-29T20:00:00"),
        venue: venues.frontier
    },
    {
        artist: [
                    "SB19",
                ],
        date: new Date("2024-10-27T20:00:00"),
        venue: venues.araneta
    },
    {
        artist: [
                    "Zild",
                    "One Click Straight",
                    "Shanni",
                ],
        date: new Date("2024-09-28T19:00:00"),
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
        venue: venues.nineteeneast
    },
    {
        artist: [
                    "Paolo Santos Trio",
                ],
        date: new Date("2024-09-17"),
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
        venue: venues.rabbithole
    },
    {
        artist: [
                    "Ely Buendia",
                ],
        date: new Date("2024-09-14T20:00:00"),
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
        venue: venues.centralcraftbalanga
    },
    {
        artist: [
                    "Maroon 5",
                ],
        date: new Date("2025-01-29"),
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
        venue: venues.moaarena
    },
    {
        artist: [
                    "Overtone",
                ],
        date: new Date("2024-09-15"),
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
        venue: venues.saguijo
    },
    {
        artist: [
                    "AJAA",
                ],
        date: new Date("2024-09-28T16:00:00"),
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
        venue: venues.sarisari
    },
    {
        name: "Lost & Found Album Concert",
        artist: [
                    "Josh Cullen",
                ],
        date: new Date("2024-09-28"),
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
        venue: venues.saguijo
    },
    {
        name: "Kai del Rio Double Single Launch",
        artist: [
                    "Kai Del Rio",
                    "Barbie Almalbis",
                ],
        date: new Date("2024-09-13T20:00:00"),
        venue: venues.sarisari
    },
    {
        name: "Now & Then: Orange & Lemons 25th Anniversary Concert",
        artist: [
                    "Orange & Lemons",
                ],
        date: new Date("2024-10-18T20:00:00"),
        venue: venues.metrotent
    },
    {
        artist: [
                    "Franco",
                ],
        date: new Date("2024-09-27"),
        venue: venues.twelvemonkeys
    },
    {
        name: "2NE1 Welcome Back 2024-25 Asia Tour",
        artist: [
                    "2NE1",
                ],
        date: new Date("2024-11-16"),
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
        venue: venues.twelvemonkeys
    },
    {
        artist: [
                    "Mass of the Fermenting Dregs",
                    "Death of Heather",
                ],
        date: new Date("2024-11-10"),
        venue: venues.eastside
    },
    {
        name: "Honne Ouch Album Signing in Manila",
        artist: [
                    "HONNE",
                ],
        date: new Date("2024-09-23"),
        venue: venues.tedellis
    },
    {
        artist: [
                    "VMX Girlfriends",
                ],
        date: new Date("2024-09-13T20:00:00"),
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
        venue: venues.twelvemonkeys
    },
    {
        artist: [
                    "MYMP",
                ],
        date: new Date("2024-09-21"),
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
        venue: venues.mows
    },
    {
        artist: [
                    "Eliza Maturan",
                    "CHNDTR",
                ],
        date: new Date("2024-09-13"),
        venue: venues.kalmabar
    },
    {
        name: "The Chongkeys \"Simula\" Album Launch",
        artist: [
                    "The Chongkeys",
                    "Brownman Revival",
                    "Rudeboy MNL",
                    "Sunken Roots",
                ],
        date: new Date("2024-09-14T20:30:00"),
        venue: venues.bistro
    },
    {
        name: "UNIS in CURIOUSland",
        artist: [
                    "UNIS",
                ],
        date: new Date("2024-10-25T19:00:00"),
        venue: venues.frontier
    },
    {
        name: "PABLO UNA Tour",
        artist: [
                    "PABLO",
                ],
        date: new Date("2024-09-15"),
        venue: venues.rmgalleria
    },
    {
        name: "PABLO UNA Tour",
        artist: [
                    "PABLO",
                ],
        date: new Date("2024-09-22"),
        venue: venues.rmilocos
    },
    {
        name: "PABLO UNA Tour",
        artist: [
                    "PABLO",
                ],
        date: new Date("2024-09-29"),
        venue: venues.rmgalleriasouth
    },
    {
        artist: [
                    "6cyclemind",
                    "Stonefree",
                    "7 Foot Jr",
                ],
        date: new Date("2024-09-14T20:00:00"),
        venue: venues.nineteeneast
    },
    {
        name: "Si Idol Pala 2?",
        artist: [
                    "Lola Amour",
                    "Alisson Shore",
                    "The Ridleys",
                    "Chicosci",
                    "bird.",
                    "25hearts",
                ],
        date: new Date("2024-09-21"),
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
        venue: venues.bistro
    },
    {
        name: "2024 Hori7on Concert in Manila Daytour: Anchor High",
        artist: [
                    "HORI7ON",
                ],
        date: new Date("2024-11-03T18:00:00"),
        venue: venues.moaarena
    },
    {
        artist: [
                    "The Ridleys",
                ],
        date: new Date("2024-11-16"),
        venue: venues.musicmuseum
    },
    {
        name: "",
        artist: [
                    "",
                ],
        date: new Date("YYYY-MM-DDThh:mm:00"),
        venue: venues.tba
    },
];