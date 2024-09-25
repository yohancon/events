const events = [
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
        date: new Date("2024-09-17T00:00:00"),
        type: "gig",
        venue: venues.twelvemonkeys
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
        date: new Date("2024-10-04T00:00:00"),
        type: "gig",
        venue: venues.rabbithole
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
        date: new Date("2025-01-29T00:00:00"),
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
                    "Kai Del Rio",
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
        date: new Date("2024-09-28T19:00:00"),
        type: "concert",
        venue: venues.frontier
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
        date: new Date("2024-09-27T00:00:00"),
        type: "gig",
        venue: venues.twelvemonkeys
    },
    {
        name: "2NE1 Welcome Back 2024-25 Asia Tour",
        artist: [
                    "2NE1",
                ],
        date: new Date("2024-11-16T00:00:00"),
        type: "concert",
        venue: venues.tba
    },
    {
        artist: [
                    "Mass of the Fermenting Dregs",
                    "Death of Heather",
                ],
        date: new Date("2024-11-10T00:00:00"),
        type: "concert",
        venue: venues.eastside
    },
    {
        name: "Honne Ouch Album Signing in Manila",
        artist: [
                    "HONNE (Meet and Greet)",
                ],
        date: new Date("2024-09-23T20:00:00"),
        type: "other",
        venue: venues.tedellis
    },
    {
        artist: [
                    "Imago",
                    "Autotelic",
                    "Hey June!",
                    "Dilly Dally",
                ],
        date: new Date("2024-09-19T20:00:00"),
        type: "gig",
        venue: venues.twelvemonkeys
    },
    {
        artist: [
                    "MYMP",
                ],
        date: new Date("2024-09-21T00:00:00"),
        type: "gig",
        venue: venues.padrino
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
        date: new Date("2024-09-22T16:00:00"),
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
        date: new Date("2024-09-29T00:00:00"),
        type: "mall",
        venue: venues.rmgalleriasouth
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
        date: new Date("2024-09-21T00:00:00"),
        type: "gig",
        venue: venues.onetwothree
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
        date: new Date("2024-11-16T00:00:00"),
        type: "concert",
        venue: venues.musicmuseum
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
        date: new Date("2024-09-17T00:00:00"),
        type: "gig",
        venue: venues.redrhino
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
        date: new Date("2024-11-15T00:00:00"),
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
        date: new Date("2024-11-16T00:00:00"),
        type: "gig",
        venue: venues.bossbar
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
        date: new Date("2024-12-20T00:00:00"),
        type: "concert",
        venue: venues.upsunken
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
        name: "Bonded by Sound",
        artist: [
                    "Side A",
                    "Janine Teñoso",
                ],
        date: new Date("2024-11-30T20:00:00"),
        announced: new Date("2024-09-16T13:48:00"),
        type: "concert",
        venue: venues.theatresolaire
    },
    {
        name: "Fiji Blue Asia Glide Tour",
        artist: [
                    "Fiji Blue",
                ],
        date: new Date("2024-11-29T00:00:00"),
        announced: new Date("2024-09-10T12:00:00"),
        type: "concert",
        venue: venues.samsunghall
    },
    {
        name: "Olivia Rodrigo Manila Silver Star Show",
        artist: [
                    "Olivia Rodrigo",
                ],
        date: new Date("2024-10-05T00:00:00"),
        announced: new Date("2024-09-10T12:06:00"),
        type: "concert",
        venue: venues.pharena
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
        name: "Asia Tour 2024",
        artist: [
                    "Big Time Rush",
                ],
        date: new Date("2024-10-17T20:00:00"),
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
        date: new Date("2024-09-29T00:00:00"),
        type: "gig",
        venue: venues.eightyeight
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
        artist: [
                    "Join the Club",
                    "Jana Garcia",
                    "Alon",
                ],
        date: new Date("2024-09-20T00:00:00"),
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
        date: new Date("2024-09-22T00:00:00"),
        type: "concert",
        venue: venues.smxmanila
    },
    {
        name: "G Fest 2024 - Work in Progress Stage",
        artist: [
                    "Y07",
                    "Ayumi",
                    "Athalia Badere",
                    "Camille Rose",
                ],
        date: new Date("2024-09-22T15:00:00"),
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
        date: new Date("2024-10-12T00:00:00"),
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
        date: new Date("2024-10-13T00:00:00"),
        type: "concert",
        venue: venues.worldtrade
    },
    {
        name: "Requiem Tour",
        artist: [
                    "keshi",
                ],
        date: new Date("2025-03-04T00:00:00"),
        type: "concert",
        venue: venues.moaarena
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
        date: new Date("2024-09-28T08:00:00"),
        type: "concert",
        venue: venues.bridgetowne
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
        date: new Date("2024-10-05T16:00:00"),
        type: "concert",
        venue: venues.citydimare
    },
    {
        artist: [
                    "Silk",
                ],
        date: new Date("2024-09-28T00:00:00"),
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
                    "Tanya Markova",
                ],
        date: new Date("2024-09-21T21:00:00"),
        type: "gig",
        venue: venues.bistro
    },
    {
        name: "Grand BINIverse",
        artist: [
                    "BINI",
                ],
        date: new Date("2024-11-18T00:00:00"),
        type: "concert",
        venue: venues.araneta
    },
    {
        name: "Grand BINIverse",
        artist: [
                    "BINI",
                ],
        date: new Date("2024-11-17T00:00:00"),
        type: "concert",
        venue: venues.araneta
    },
    {
        name: "Grand BINIverse",
        artist: [
                    "BINI",
                ],
        date: new Date("2024-11-16T00:00:00"),
        type: "concert",
        venue: venues.araneta
    },
    {
        artist: [
                    "Matt Maltese",
                    "Janine Teñoso",
                ],
        date: new Date("2024-11-09T20:00:00"),
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
        name: "Alamat Live at Viva Cafe Day 2",
        artist: [
                    "ALAMAT",
                ],
        date: new Date("2024-10-06T18:00:00"),
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
        name: "Snakefight The Bar Tour & New Single Launch",
        artist: [
                    "Snakefight",
                    "One Click Straight",
                    "Henz Inanobe",
                    "Blitz",
                    "Spaced Out Kids",
                    "Eleyn",
                ],
        date: new Date("2024-09-26T00:00:00"),
        type: "gig",
        venue: venues.bistro
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
        date: new Date("2025-02-22T00:00:00"),
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
                    "Paulo Agudelo",
                    "Ame",
                    "Better Days",
                    "Kiss N Tell",
                    "Helena",
                ],
        date: new Date("2024-09-26T20:00:00"),
        type: "gig",
        venue: venues.twelvemonkeys
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
        artist: [
                    "Brownman Revival",
                    "Chechebureche",
                ],
        date: new Date("2024-09-28T00:00:00"),
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
        date: new Date("2024-12-10T20:00:00"),
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
        date: new Date("2024-10-18T00:00:00"),
        type: "mall",
        venue: venues.uptechnohub
    },
    {
        artist: [
                    "Dionela",
                ],
        date: new Date("2024-10-27T00:00:00"),
        type: "mall",
        venue: venues.amfeliz
    },
    {
        artist: [
                    "Dionela",
                ],
        date: new Date("2024-11-09T00:00:00"),
        type: "mall",
        venue: venues.amharborpoint
    },
    {
        artist: [
                    "Dionela",
                ],
        date: new Date("2024-11-15T00:00:00"),
        type: "mall",
        venue: venues.marqueemall
    },
    {
        artist: [
                    "Dionela",
                ],
        date: new Date("2024-11-16T00:00:00"),
        type: "mall",
        venue: venues.amcentralbloc
    },
    {
        artist: [
                    "Dionela",
                ],
        date: new Date("2024-11-30T00:00:00"),
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
        date: new Date("2024-11-13T00:00:00"),
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
        date: new Date("2024-12-08T00:00:00"),
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
        date: new Date("2024-10-12T00:00:00"),
        type: "concert",
        venue: venues.pharena
    },
    {
        name: "LANY A BEAUTIFUL BLUR : THE WORLD TOUR ASIA",
        artist: [
                    "LANY",
                ],
        date: new Date("2024-10-13T00:00:00"),
        type: "concert",
        venue: venues.waterfronthotel
    },
    {
        name: "LANY A BEAUTIFUL BLUR : THE WORLD TOUR ASIA",
        artist: [
                    "LANY",
                ],
        date: new Date("2024-10-14T00:00:00"),
        type: "concert",
        venue: venues.waterfronthotel
    },
    {
        name: "LANY A BEAUTIFUL BLUR : THE WORLD TOUR ASIA",
        artist: [
                    "LANY",
                ],
        date: new Date("2024-10-15T00:00:00"),
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
        date: new Date("2024-12-03T00:00:00"),
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
        date: new Date("2024-09-24T00:00:00"),
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
        date: new Date("2024-09-20T00:00:00"),
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
        date: new Date("2025-02-11T00:00:00"),
        type: "concert",
        venue: venues.tba
    },
    {
        artist: [
                    "NIKI",
                ],
        date: new Date("2025-02-12T00:00:00"),
        type: "concert",
        venue: venues.tba
    },
    {
        artist: [
                    "Jung Hae In",
                ],
        date: new Date("2024-12-21T00:00:00"),
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
        date: new Date("2024-09-21T20:50:00"),
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
        date: new Date("2024-09-17T00:00:00"),
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
                    "Barbie Almalbis",
                    "Taken By Cars",
                    "Aunt Robert",
                    "The Purest Blue",
                ],
        date: new Date("2024-10-19T00:00:00"),
        announced: new Date("2024-09-15T18:00:00"),
        type: "gig",
        venue: venues.onetwothree
    },
    {
        name: "Sugar Hiccup - BAGUIO",
        artist: [
                    "Sugar Hiccup",
                    "Kahel",
                    "Medyo Maybe",
                    "Turncoats",
                    "Monochrome",
                    "Transmission Division",
                ],
        date: new Date("2024-10-25T00:00:00"),
        announced: new Date("2024-09-15T18:00:00"),
        type: "gig",
        venue: venues.cantobogchi
    },
    {
        name: "Sugar Hiccup - CEBU",
        artist: [
                    "Sugar Hiccup",
                    "Sheila and the Insects",
                    "KRNA",
                    "Folding Bed",
                    "Bedtime Television",
                    "Coney Reyes on Camera",
                ],
        date: new Date("2024-10-26T00:00:00"),
        announced: new Date("2024-09-15T18:00:00"),
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
        date: new Date("2025-01-25T00:00:00"),
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
        date: new Date("2024-09-21T00:00:00"),
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
        date: new Date("2024-09-27T00:00:00"),
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
        date: new Date("2024-10-31T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
        type: "concert",
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
        artist: [
                    "Philippine Philharmonic Orchestra",
                ],
        date: new Date("2024-09-27T19:30:00"),
        type: "concert",
        venue: venues.samsungperforming
    },
    {
        artist: [
                    "Philippine Madrigal Singers",
                ],
        date: new Date("2024-10-05T20:00:00"),
        type: "concert",
        venue: venues.piccplenary
    },
    {
        artist: [
                    "Ice Seguerra",
                ],
        date: new Date("2024-11-08T20:00:00"),
        type: "concert",
        venue: venues.musicmuseum
    },
    {
        artist: [
                    "Lea Salonga",
                ],
        date: new Date("2024-11-04T20:00:00"),
        type: "concert",
        venue: venues.theatresolaire
    },
    {
        artist: [
                    "Lea Salonga",
                ],
        date: new Date("2024-11-05T20:00:00"),
        type: "concert",
        venue: venues.theatresolaire
    },
    {
        artist: [
                    "Philippine Philharmonic Orchestra",
                    "Arman Ferrer",
                    "Lara Maigue",
                    "Camille Lopez-Molina",
                    "Cris Villonco",
                    "Diomedes Saraza, Jr.",
                    "Jonathan Velasco", 
                    "Alice Reyes Dance Philippines",
                    "Philippine Madrigal Singers",
                ],
        date: new Date("2024-11-22T19:30:00"),
        type: "concert",
        venue: venues.samsungperforming
    },
    {
        artist: [
                    "Frozen in Concert",
                ],
        date: new Date("2024-11-16T17:00:00"),
        type: "concert",
        venue: venues.samsungperforming
    },
    {
        artist: [
                    "Frozen in Concert",
                ],
        date: new Date("2024-11-17T14:00:00"),
        type: "concert",
        venue: venues.samsungperforming
    },
    {
        name: "2007 Reunion Concert The Repeat",
        artist: [
                    "The Philippine Madrigal Singers",
                ],
        date: new Date("2024-12-29T17:00:00"),
        type: "concert",
        venue: venues.theatresolaire
    },
    {
        artist: [
                    "The Manila'Bang Show",
                ],
        date: new Date("2024-11-14T10:00:00"),
        type: "other",
        venue: venues.spaceoneayala
    },
    {
        artist: [
                    "The Manila'Bang Show",
                ],
        date: new Date("2024-11-15T10:00:00"),
        type: "other",
        venue: venues.spaceoneayala
    },
    {
        artist: [
                    "The Manila'Bang Show",
                ],
        date: new Date("2024-11-16T10:00:00"),
        type: "other",
        venue: venues.spaceoneayala
    },
    {
        artist: [
                    "The Manila'Bang Show",
                ],
        date: new Date("2024-11-17T10:00:00"),
        type: "other",
        venue: venues.spaceoneayala
    },
    {
        artist: [
                    "Manila International Book Fair",
                ],
        date: new Date("2025-09-10T00:00:00"),
        announced: new Date("2024-09-15T20:00:00"),
        type: "other",
        venue: venues.tba
    },
    {
        artist: [
                    "Manila International Book Fair",
                ],
        date: new Date("2025-09-11T00:00:00"),
        announced: new Date("2024-09-15T20:00:00"),
        type: "other",
        venue: venues.tba
    },
    {
        artist: [
                    "Manila International Book Fair",
                ],
        date: new Date("2025-09-12T00:00:00"),
        announced: new Date("2024-09-15T20:00:00"),
        type: "other",
        venue: venues.tba
    },
    {
        artist: [
                    "Manila International Book Fair",
                ],
        date: new Date("2025-09-13T00:00:00"),
        announced: new Date("2024-09-15T20:00:00"),
        type: "other",
        venue: venues.tba
    },
    {
        artist: [
                    "Manila International Book Fair",
                ],
        date: new Date("2025-09-14T00:00:00"),
        announced: new Date("2024-09-15T20:00:00"),
        type: "other",
        venue: venues.tba
    },
    {
        artist: [
                    "Raymond Lauchengco",
                ],
        date: new Date("2024-11-23T20:00:00"),
        type: "concert",
        venue: venues.theatresolaire
    },
    {
        artist: [
                    "Neil Pedrosa",
                ],
        date: new Date("2024-09-28T19:30:00"),
        type: "concert",
        venue: venues.musicmuseum
    },
    {
        artist: [
                    "APO Hiking Society",
                    "The CompanY",
                ],
        date: new Date("2024-10-05T20:00:00"),
        type: "concert",
        venue: venues.musicmuseum
    },
    {
        artist: [
                    "3rd Avenue",
                ],
        date: new Date("2024-09-26T20:00:00"),
        type: "concert",
        venue: venues.musicmuseum
    },
    {
        name: "Kuwagoez to Mow's",
        artist: [
                    "Daspan En Walis",
                    "Salem and the Stellar Cats",
                    "Tilapayaso",
                    "medyo maybe",
                    "Silent Disco",
                    "Yaelokre",
                    "MNR MJRTY",
                ],
        date: new Date("2024-09-22T18:00:00"),
        type: "gig",
        venue: venues.mows
    },
    {
        name: "Takeover Thursday",
        artist: [
                    "Eliza Maturan",
                    "Shanaia Gomez",
                    "Khimo",
                    "Waltz",
                ],
        date: new Date("2024-09-19T00:00:00"),
        type: "gig",
        venue: venues.takeover
    },
    {
        name: "Toyo Single Launch",
        artist: [
                    "KZ Tandingan",
                    "Brian Chong",
                    "Fana",
                    "Angela Ken",
                    "MC Einstein",
                    "Jem Macatuno",
                    "Jel Rey",
                ],
        date: new Date("2024-09-26T20:00:00"),
        announced: new Date("2024-09-15T20:00:00"),
        type: "gig",
        venue: venues.takeover
    },
    {
        name: "SunKissed Lola Listening Party",
        artist: [
                    "SunKissed Lola",
                ],
        date: new Date("2024-09-26T18:00:00"),
        type: "gig",
        venue: venues.acuppellacafe
    },
    {
        artist: [
                    "Waterbomb 2025",
                ],
        date: new Date("2025-02-08T00:00:00"),
        type: "concert",
        venue: venues.tba
    },
    {
        artist: [
                    "Waterbomb 2025",
                ],
        date: new Date("2025-02-09T00:00:00"),
        type: "concert",
        venue: venues.tba
    },
    {
        artist: [
                    "Plastique Tiara",
                ],
        date: new Date("2024-10-10T21:00:00"),
        type: "concert",
        venue: venues.musicmuseum
    },
    {
        artist: [
                    "Pulp Spaces+ Pop-Up Market",
                ],
        date: new Date("2024-09-20T11:00:00"),
        type: "other",
        venue: venues.smmoa
    },
    {
        artist: [
                    "Pulp Spaces+ Pop-Up Market",
                ],
        date: new Date("2024-09-21T11:00:00"),
        type: "other",
        venue: venues.smmoa
    },
    {
        artist: [
                    "Pulp Spaces+ Pop-Up Market",
                ],
        date: new Date("2024-09-22T11:00:00"),
        type: "other",
        venue: venues.smmoa
    },
    {
        artist: [
                    "Pulp Spaces+ Pop-Up Market",
                ],
        date: new Date("2024-09-23T11:00:00"),
        type: "other",
        venue: venues.smmoa
    },
    {
        artist: [
                    "Pulp Spaces+ Pop-Up Market",
                ],
        date: new Date("2024-09-24T11:00:00"),
        type: "other",
        venue: venues.smmoa
    },
    {
        artist: [
                    "Pulp Spaces+ Pop-Up Market",
                ],
        date: new Date("2024-09-25T11:00:00"),
        type: "other",
        venue: venues.smmoa
    },
    {
        artist: [
                    "Pulp Spaces+ Pop-Up Market",
                ],
        date: new Date("2024-09-26T11:00:00"),
        type: "other",
        venue: venues.smmoa
    },
    {
        artist: [
                    "Pulp Spaces+ Pop-Up Market",
                ],
        date: new Date("2024-09-27T11:00:00"),
        type: "other",
        venue: venues.smmoa
    },
    {
        artist: [
                    "Pulp Spaces+ Pop-Up Market",
                ],
        date: new Date("2024-09-28T11:00:00"),
        type: "other",
        venue: venues.smmoa
    },
    {
        artist: [
                    "Pulp Spaces+ Pop-Up Market",
                ],
        date: new Date("2024-09-29T11:00:00"),
        type: "other",
        venue: venues.smmoa
    },
    {
        artist: [
                    "Ozine Idol Fest",
                ],
        date: new Date("2024-09-28T00:00:00"),
        type: "other",
        venue: venues.amfairviewterraces,
        price: "free",
    },
    {
        artist: [
                    "Ozine Idol Fest",
                ],
        date: new Date("2024-09-29T00:00:00"),
        type: "other",
        venue: venues.amfairviewterraces,
        price: "free",
    },
    {
        artist: [
                    "Alden Richards",
                    "Kathryn Bernardo",
                ],
        date: new Date("2024-10-05T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
        type: "mall",
        venue: venues.amsolenad
    },
    {
        artist: [
                    "Mayonnaise",
                    "Autotelic",
                    "Rangel",
                    "Happy Three Friends",
                    "Night Over Alaska",
                    "Ultraviolet",
                ],
        date: new Date("2024-09-19T00:00:00"),
        type: "gig",
        price: "free",
        venue: venues.turningtides
    },
    {
        artist: [
                    "Manila Symphony Orchestra",
                ],
        date: new Date("2024-09-29T18:00:00"),
        announced: new Date("2024-09-16T21:50:00"),
        type: "mall",
        price: "free",
        venue: venues.amcircuit
    },
    {
        artist: [
                    "Streetboys",
                ],
        date: new Date("2024-11-08T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
        type: "concert",
        price: "concert",
        venue: venues.frontier
    },
    {
        artist: [
                    "Ice Seguerra",
                    "Lockdown",
                ],
        date: new Date("2024-09-19T21:30:00"),
        type: "gig",
        price: 2000,
        venue: venues.hardrockmnl
    },
    {
        artist: [
                    "6cyclemind",
                ],
        date: new Date("2024-09-25T21:30:00"),
        type: "gig",
        price: 2000,
        venue: venues.hardrockmnl
    },
    {
        name: "Concerto Ottimo 2",
        artist: [
                    "Manila Symphony Orchestra",
                    "Jenny Sugal",
                    "Rap Canedo",
                    "Dane Mercado",
                    "Darius Miguel",
                ],
        date: new Date("2024-10-24T18:00:00"),
        type: "concert",
        venue: venues.cprauditorium
    },
    {
        artist: [
                    "Eevee",
                    "Brisom",
                    "The Happy Pill",
                    "Fitz Shioda",
                    "Dear Juliet,",
                    "Pinkmen",
                    "Fox",
                ],
        date: new Date("2024-09-21T20:00:00"),
        type: "gig",
        price: 200,
        venue: venues.unknownpub
    },
    {
        artist: [
                    "E.J",
                    "Kyleaux",
                    "Babydraco",
                    "C0k3baby Torii",
                    "Vince Cee",
                    "Kishan",
                    "Yameru",
                    "OhPolo",
                    "Pray",
                    "Ich1ka",
                    "That Room",
                    "Vons",
                    "Great North Crib",
                ],
        date: new Date("2024-10-12T19:00:00"),
        announced: new Date("2024-09-16T21:42:00"),
        type: "gig",
        venue: venues.fblevents
    },
    {
        artist: [
                    "A1",
                ],
        date: new Date("2025-02-15T20:00:00"),
        announced: new Date("2024-09-16T12:00:00"),
        type: "concert",
        venue: venues.frontier
    },
    {
        name: "Bagong Pilipinas Pagkakaisa Concert",
        artist: [
                    "Sandwich",
                    "Imago",
                    "Banda Ni Kleggy",
                    "Al James",
                ],
        date: new Date("2024-09-27T17:00:00"),
        announced: new Date("2024-09-16T17:00:00"),
        type: "mall",
        price: "free",
        venue: venues.vmnomo
    },
    {
        artist: [
                    "GB Labrador",
                    "Muman Reyes",
                    "Anissa Villaverse",
                    "Roger Naldo",
                ],
        date: new Date("2024-09-28T18:00:00"),
        type: "gig",
        venue: venues.kalmabar
    },
    {
        artist: [
                    "Guy Laroche Pop-Up",
                ],
        date: new Date("2024-09-18T00:00:00"),
        type: "other",
        venue: venues.oneayala
    },
    {
        artist: [
                    "Guy Laroche Pop-Up",
                ],
        date: new Date("2024-09-19T00:00:00"),
        type: "other",
        venue: venues.oneayala
    },
    {
        artist: [
                    "Guy Laroche Pop-Up",
                ],
        date: new Date("2024-09-20T00:00:00"),
        type: "other",
        venue: venues.oneayala
    },
    {
        artist: [
                    "Guy Laroche Pop-Up",
                ],
        date: new Date("2024-09-21T00:00:00"),
        type: "other",
        venue: venues.oneayala
    },
    {
        artist: [
                    "Guy Laroche Pop-Up",
                ],
        date: new Date("2024-09-22T00:00:00"),
        type: "other",
        venue: venues.oneayala
    },
    {
        artist: [
                    "Imago",
                ],
        date: new Date("2024-10-19T19:00:00"),
        type: "gig",
        price: 200,
        venue: venues.olpubtavern
    },
    {
        artist: [
                    "Big Bad Wolf Books Bacolod",
                ],
        date: new Date("2024-09-20T10:00:00"),
        type: "other",
        venue: venues.smbacolod
    },
    {
        artist: [
                    "Big Bad Wolf Books Bacolod",
                ],
        date: new Date("2024-09-21T10:00:00"),
        type: "other",
        venue: venues.smbacolod
    },
    {
        artist: [
                    "Big Bad Wolf Books Bacolod",
                ],
        date: new Date("2024-09-22T10:00:00"),
        type: "other",
        venue: venues.smbacolod
    },
    {
        artist: [
                    "Big Bad Wolf Books Bacolod",
                ],
        date: new Date("2024-09-23T10:00:00"),
        type: "other",
        venue: venues.smbacolod
    },
    {
        artist: [
                    "Big Bad Wolf Books Bacolod",
                ],
        date: new Date("2024-09-24T10:00:00"),
        type: "other",
        venue: venues.smbacolod
    },
    {
        artist: [
                    "Big Bad Wolf Books Bacolod",
                ],
        date: new Date("2024-09-25T10:00:00"),
        type: "other",
        venue: venues.smbacolod
    },
    {
        artist: [
                    "Big Bad Wolf Books Bacolod",
                ],
        date: new Date("2024-09-26T10:00:00"),
        type: "other",
        venue: venues.smbacolod
    },
    {
        artist: [
                    "Big Bad Wolf Books Bacolod",
                ],
        date: new Date("2024-09-27T10:00:00"),
        type: "other",
        venue: venues.smbacolod
    },
    {
        artist: [
                    "Big Bad Wolf Books Bacolod",
                ],
        date: new Date("2024-09-28T10:00:00"),
        type: "other",
        venue: venues.smbacolod
    },
    {
        artist: [
                    "Big Bad Wolf Books Bacolod",
                ],
        date: new Date("2024-09-29T10:00:00"),
        type: "other",
        venue: venues.smbacolod
    },
    {
        artist: [
                    "Urbandub",
                    "Faintlight",
                ],
        date: new Date("2024-10-04T21:00:00"),
        type: "gig",
        venue: venues.bistro
    },
    {
        artist: [
                    "Hallyuniverse",
                ],
        date: new Date("2024-09-20T00:00:00"),
        type: "other",
        venue: venues.shangrilaplaza
    },
    {
        artist: [
                    "Hallyuniverse",
                ],
        date: new Date("2024-09-21T00:00:00"),
        type: "other",
        venue: venues.shangrilaplaza
    },
    {
        artist: [
                    "Hallyuniverse",
                ],
        date: new Date("2024-09-22T00:00:00"),
        type: "other",
        venue: venues.shangrilaplaza
    },
    {
        name: "Peace Day Concert",
        artist: [
                    "Sponge Cola",
                ],
        date: new Date("2024-09-21T20:30:00"),
        type: "concert",
        price: "free",
        venue: venues.moagrounds
    },
    {
        artist: [
                    "Thyro Alfaro",
                    "JP Bacallan",
                ],
        date: new Date("2024-09-18T17:00:00"),
        type: "gig",
        price: "free",
        venue: venues.venicepiazza
    },
    {
        artist: [
                    "Kai Honasan",
                ],
        date: new Date("2024-09-18T18:00:00"),
        type: "gig",
        price: "free",
        venue: venues.venicepiazza
    },
    {
        artist: [
                    "KATSEYE",
                ],
        date: new Date("2024-09-18T15:00:00"),
        type: "gig",
        price: "free",
        venue: venues.marketmarket
    },
    {
        artist: [
                    "Anna Akana",
                ],
        date: new Date("2025-02-16T20:00:00"),
        type: "concert",
        venue: venues.samsunghall
    },
    {
        name: "PPOP Fest",
        artist: [
                    "Bituin",
                    "DIV9",
                    "GEM&I",
                    "IR1ZZ",
                    "GenZix",
                ],
        date: new Date("2024-09-27T17:00:00"),
        type: "mall",
        price: "free",
        venue: venues.smmakati
    },
    {
        artist: [
                    "Big Bad Wolf Books Manila",
                ],
        date: new Date("2024-09-18T10:00:00"),
        type: "other",
        price: "free",
        venue: venues.rmmanila
    },
    {
        artist: [
                    "Big Bad Wolf Books Manila",
                ],
        date: new Date("2024-09-19T10:00:00"),
        type: "other",
        price: "free",
        venue: venues.rmmanila
    },
    {
        artist: [
                    "Big Bad Wolf Books Manila",
                ],
        date: new Date("2024-09-20T10:00:00"),
        type: "other",
        price: "free",
        venue: venues.rmmanila
    },
    {
        artist: [
                    "Big Bad Wolf Books Manila",
                ],
        date: new Date("2024-09-21T10:00:00"),
        type: "other",
        price: "free",
        venue: venues.rmmanila
    },
    {
        artist: [
                    "Big Bad Wolf Books Manila",
                ],
        date: new Date("2024-09-22T10:00:00"),
        type: "other",
        price: "free",
        venue: venues.rmmanila
    },
    {
        artist: [
                    "Big Bad Wolf Books Manila",
                ],
        date: new Date("2024-09-23T10:00:00"),
        type: "other",
        price: "free",
        venue: venues.rmmanila
    },
    {
        artist: [
                    "SNTA",
                ],
        date: new Date("2024-09-18T20:00:00"),
        type: "gig",
        price: "free",
        venue: venues.vivacafe
    },
    {
        artist: [
                    "Southborder",
                    "Lipstick",
                    "Nextone",
                ],
        date: new Date("2024-09-21T20:00:00"),
        type: "gig",
        price: 1000,
        venue: venues.grimaldirestobar
    },
    {
        artist: [
                    "G22",
                ],
        date: new Date("2024-09-22T19:00:00"),
        type: "gig",
        venue: venues.cornerstonestudio
    },
    {
        artist: [
                    "Milan",
                ],
        date: new Date("2024-09-21T00:00:00"),
        type: "gig",
        venue: venues.redrhino
    },
    {
        artist: [
                    "Ria and D' Soulmates",
                ],
        date: new Date("2024-09-22T00:00:00"),
        type: "gig",
        venue: venues.redrhino
    },
    {
        name: "Starpop Campus Tour",
        artist: [
                    "Lyka Estrella",
                    "Khimo Gumatay",
                    "Reiven Umali",
                    "Gello Marquez",
                    "Jem Macatuno",
                ],
        date: new Date("2024-09-20T16:00:00"),
        type: "gig",
        venue: venues.lyceumdavao
    },
    {
        name: "Octo Booze Fest 2024",
        artist: [
                    "Mayonnaise",
                    "Nobita",
                ],
        date: new Date("2024-10-19T19:00:00"),
        type: "mall",
        venue: venues.fmmalabon
    },
    {
        name: "Kyusiklaban Music Festival 2024",
        artist: [
                    "KZ Tandingan",
                    "Bamboo",
                    "Piolo Pascual",
                    "Al James",
                    "Dilaw",
                    "Silent Sanctuary",
                    "Carla Cray",
                ],
        date: new Date("2024-10-12T13:00:00"),
        type: "concert",
        venue: venues.qmc
    },
    {
        name: "2024 CHEN Fan-Con Beyond The Door Asia Tour",
        artist: [
                    "CHEN",
                ],
        date: new Date("2024-11-23T00:00:00"),
        type: "concert",
        venue: venues.frontier
    },
    {
        name: "",
        artist: [
                    "",
                ],
        date: new Date("YYYY-MM-DDT00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
        type: "",
        price: "",
        venue: venues.tba
    },
];

const eventList = [
    {
        type: "",
        paid: false,
        title: "",
        mainAct: [
            "",
        ],
        guests: [
            ""
        ],
        venue: venues.tba,
        date: new Date("YYYY-MM-DDT00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
];