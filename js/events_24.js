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
        artist: [
                    "Bruno Major",
                ],
        date: new Date("2024-09-11T20:00:00"),
        type: "concert",
        venue: venues.piccplenary
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
                    "SNTA",
                ],
        date: new Date("2024-09-11T20:00:00"),
        type: "gig",
        venue: venues.vivacafe
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
        artist: [
                    "Armi Millare",
                    "The Plug",
                ],
        date: new Date("2024-09-11T21:30:00"),
        type: "gig",
        venue: venues.hardrockmnl
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
        artist: [
                    "VMX Girlfriends",
                ],
        date: new Date("2024-09-13T20:00:00"),
        type: "gig",
        venue: venues.vivacafe
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
        artist: [
                    "Nina",
                    "Sound Ministry",
                ],
        date: new Date("2024-09-14"),
        type: "gig",
        venue: venues.districtone
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
        artist: [
                    "Red Velvet",
                ],
        date: new Date("2024-09-14T18:00:00"),
        type: "concert",
        venue: venues.moaarena
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
        artist: [
                    "Ely Buendia",
                ],
        date: new Date("2024-09-14T20:00:00"),
        type: "concert",
        venue: venues.newport
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
        artist: [
                    "Overtone",
                ],
        date: new Date("2024-09-15"),
        type: "gig",
        venue: venues.twelvemonkeys
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
        artist: [
                    "Cloud 7",
                ],
        date: new Date("2024-09-15T16:00:00"),
        type: "mall",
        venue: venues.smstamesa
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
];