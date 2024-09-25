const eventList = [
    {
        type: eventType.none,
        paid: true,
        title: "",
        mainAct: [
            "",
        ],
        guests: [
            "",
        ],
        venue: venues.none,
        date: new Date("YYYY-MM-DDT00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Raymond Lauchengco",
        ],
        guests: [
            "",
        ],
        venue: venues.theatresolaire,
        date: new Date("2024-11-23T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.mall,
        paid: true,
        title: "Hello, Love, Again Mall Tour",
        mainAct: [
            "Alden Richards",
            "Kathryn Bernardo",
        ],
        guests: [
            "",
        ],
        venue: venues.amsolenad,
        date: new Date("2024-10-05T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.mall,
        paid: false,
        title: "",
        mainAct: [
            "Manila Symphony Orchestra",
        ],
        guests: [
            "",
        ],
        venue: venues.amcircuit,
        date: new Date("2024-09-29T18:00:00"),
        announced: new Date("2024-09-16T21:50:00"),
    },
    {
        type: eventType.mall,
        paid: false,
        title: "Bagong Pilipinas Pagkakaisa Concert",
        mainAct: [
            "Sandwich",
            "Imago",
            "Banda Ni Kleggy",
            "Al James",
        ],
        guests: [
            "",
        ],
        venue: venues.vmnomo,
        date: new Date("2024-09-27T17:00:00"),
        announced: new Date("2024-09-16T17:00:00"),
    },
    {
        type: eventType.gig,
        paid: true,
        title: "",
        mainAct: [
            "Urbandub",
            "Faintlight",
        ],
        guests: [
            "",
        ],
        venue: venues.bistro,
        date: new Date("2024-10-04T21:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.mall,
        paid: false,
        title: "PPOP Fest",
        mainAct: [
            "Bituin",
            "DIV9",
            "GEM&I",
            "IR1ZZ",
            "GenZix",
        ],
        guests: [
            "",
        ],
        venue: venues.smmakati,
        date: new Date("2024-09-27T17:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: false,
        title: "Kyusiklaban Music Festival 2024",
        mainAct: [
            "",
        ],
        guests: [
            "",
        ],
        venue: venues.qmc,
        date: new Date("2024-10-12T13:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "Davao Aurora Music Festival",
        mainAct: [
            "",
        ],
        guests: [
            "",
        ],
        venue: venues.crocodilepark,
        date: new Date("2024-11-30T15:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Cigarettes After Sex",
        ],
        guests: [
            "",
        ],
        venue: venues.moaarena,
        date: new Date("2025-01-14T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "Billboard Philippines Mainstage",
        mainAct: [
            "",
        ],
        guests: [
            "",
        ],
        venue: venues.moaarena,
        date: new Date("2024-10-15T19:00:00"),
        announced: new Date("2024-09-07T10:00:00"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Maroon 5",
        ],
        guests: [
            "",
        ],
        venue: venues.moaarena,
        date: new Date("2025-01-29T00:00:00"),
        announced: new Date("2024-09-09T11:41:00"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "NIKI",
        ],
        guests: [
            "",
        ],
        venue: venues.none,
        date: new Date("2025-02-11T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "NIKI",
        ],
        guests: [
            "",
        ],
        venue: venues.none,
        date: new Date("2025-02-12T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "The Script",
        ],
        guests: [
            "",
        ],
        venue: venues.araneta,
        date: new Date("2025-02-11T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "The Script",
        ],
        guests: [
            "",
        ],
        venue: venues.araneta,
        date: new Date("2025-02-12T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.fanmeet,
        paid: true,
        title: "",
        mainAct: [
            "Jang Ki Yong",
        ],
        guests: [
            "",
        ],
        venue: venues.samsunghall,
        date: new Date("2024-09-28T19:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.fanmeet,
        paid: true,
        title: "",
        mainAct: [
            "Sailub Pon",
            "Benz Garfield",
        ],
        guests: [
            "",
        ],
        venue: venues.teatrino,
        date: new Date("2024-11-23T14:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.fanmeet,
        paid: true,
        title: "Last Twilight",
        mainAct: [
            "",
        ],
        guests: [
            "Willian Lykn",
        ],
        venue: venues.uptheatre,
        date: new Date("2024-10-12T15:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "Fusion x Cebu 2024",
        mainAct: [
            "",
        ],
        guests: [
            "",
        ],
        venue: venues.citydimare,
        date: new Date("2024-10-05T16:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "A1",
        ],
        guests: [
            "",
        ],
        venue: venues.frontier,
        date: new Date("2025-02-15T20:00:00"),
        announced: new Date("2024-09-16T12:00:00"),
    },
    {
        type: eventType.gig,
        paid: true,
        title: "",
        mainAct: [
            "Gino Padilla",
        ],
        guests: [
            "Euphoric",
        ],
        venue: venues.bar360,
        date: new Date("2024-09-28T22:45:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "SEVENTEEN",
        ],
        guests: [
            "",
        ],
        venue: venues.none,
        date: new Date("2025-01-18T00:00:00"),
        announced: new Date("2024-09-25T12:00:00"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "SEVENTEEN",
        ],
        guests: [
            "",
        ],
        venue: venues.none,
        date: new Date("2025-01-19T00:00:00"),
        announced: new Date("2024-09-25T12:00:00"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "St. Vincent",
        ],
        guests: [
            "",
        ],
        venue: venues.filinvesttent,
        date: new Date("2025-01-08T20:00:00"),
        announced: new Date("2024-09-25T12:00:00"),
    },
    {
        type: eventType.gig,
        paid: false,
        title: "Wish Bus",
        mainAct: [
            "Letters From June",
        ],
        guests: [
            "",
        ],
        venue: venues.smpampanga,
        date: new Date("2024-09-25T16:00:00"),
        announced: new Date("2024-09-25T10:00:00"),
    },
    {
        type: eventType.gig,
        paid: true,
        title: "",
        mainAct: [
            "Party Jannetty",
        ],
        guests: [
            "Babaylan",
            "Nanay Mo",
            "Criminal Cinema",
            "The Indolent Movement",
        ],
        venue: venues.saguijo,
        date: new Date("2024-10-05T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Gemini",
            "Fourth",
        ],
        guests: [
            "",
        ],
        venue: venues.skydome,
        date: new Date("2025-01-25T16:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "2NE1",
        ],
        guests: [
            "",
        ],
        venue: venues.none,
        date: new Date("2024-11-16T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Fujii Kaze",
        ],
        guests: [
            "",
        ],
        venue: venues.moaarena,
        date: new Date("2024-12-10T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Martin Nievera",
        ],
        guests: [
            "",
        ],
        venue: venues.araneta,
        date: new Date("2024-09-27T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Hindley Street Country Club",
        ],
        guests: [
            "",
        ],
        venue: venues.frontier,
        date: new Date("2024-09-29T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.fanmeet,
        paid: true,
        title: "",
        mainAct: [
            "Ling",
            "Orm",
        ],
        guests: [
            "",
        ],
        venue: venues.araneta,
        date: new Date("2024-10-06T18:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Ne-Yo",
        ],
        guests: [
            "",
        ],
        venue: venues.araneta,
        date: new Date("2024-10-08T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Ne-Yo",
        ],
        guests: [
            "",
        ],
        venue: venues.araneta,
        date: new Date("2024-10-09T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Katrina Velarde",
        ],
        guests: [
            "",
        ],
        venue: venues.frontier,
        date: new Date("2024-10-11T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Big Time Rush",
        ],
        guests: [
            "",
        ],
        venue: venues.frontier,
        date: new Date("2024-10-17T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.mall,
        paid: true,
        title: "Octobooze Fest 2024",
        mainAct: [
            "Mayonnaise",
            "Nobita",
        ],
        guests: [
            "",
        ],
        venue: venues.fmmalabon,
        date: new Date("2024-10-19T19:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Chanyeol",
        ],
        guests: [
            "",
        ],
        venue: venues.araneta,
        date: new Date("2024-10-19T18:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Arthur Nery",
        ],
        guests: [
            "",
        ],
        venue: venues.araneta,
        date: new Date("2024-10-25T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Tate McRae",
        ],
        guests: [
            "",
        ],
        venue: venues.frontier,
        date: new Date("2024-11-04T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Streetboys",
        ],
        guests: [
            "",
        ],
        venue: venues.frontier,
        date: new Date("2024-11-08T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Harlem Globetrotters",
        ],
        guests: [
            "",
        ],
        venue: venues.araneta,
        date: new Date("2024-11-12T19:30:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "A Night At The Pops",
        mainAct: [
            "Manila Symphony Orchestra",
        ],
        guests: [
            "Barbie Almalbis",
            "Jason Dhakal",
            "Arthur Miguel",
            "Lola Amour",
        ],
        venue: venues.frontier,
        date: new Date("2024-11-15T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Maki",
        ],
        guests: [
            "",
        ],
        venue: venues.frontier,
        date: new Date("2024-11-29T19:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Maki",
        ],
        guests: [
            "",
        ],
        venue: venues.frontier,
        date: new Date("2024-11-30T19:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Andrew E.",
        ],
        guests: [
            "",
        ],
        venue: venues.frontier,
        date: new Date("2024-12-11T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "BINI",
        ],
        guests: [
            "",
        ],
        venue: venues.araneta,
        date: new Date("2024-11-16T19:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "BINI",
        ],
        guests: [
            "",
        ],
        venue: venues.araneta,
        date: new Date("2024-11-17T19:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "BINI",
        ],
        guests: [
            "",
        ],
        venue: venues.araneta,
        date: new Date("2024-11-18T19:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "The Kid LAROI",
        ],
        guests: [
            "",
        ],
        venue: venues.frontier,
        date: new Date("2024-11-05T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.comedy,
        paid: true,
        title: "",
        mainAct: [
            "Anna Akana",
        ],
        guests: [
            "",
        ],
        venue: venues.samsunghall,
        date: new Date("2025-02-16T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "Wanderland 2025",
        mainAct: [
            "",
        ],
        guests: [
            "",
        ],
        venue: venues.filinvestgrounds,
        date: new Date("2025-03-22T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "Wanderland 2025",
        mainAct: [
            "",
        ],
        guests: [
            "",
        ],
        venue: venues.filinvestgrounds,
        date: new Date("2025-03-23T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "Waterbomb 2025",
        mainAct: [
            "",
        ],
        guests: [
            "",
        ],
        venue: venues.metrowalk,
        date: new Date("2025-02-08T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "Waterbomb 2025",
        mainAct: [
            "",
        ],
        guests: [
            "",
        ],
        venue: venues.metrowalk,
        date: new Date("2025-02-09T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Day6",
        ],
        guests: [
            "",
        ],
        venue: venues.araneta,
        date: new Date("2025-02-22T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Keshi",
        ],
        guests: [
            "",
        ],
        venue: venues.moaarena,
        date: new Date("2025-03-04T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "Maskipaps: The Crossover",
        mainAct: [
            "The Ridleys",
            "Maki",
            "Demi",
            "Over October",
            "Orange & Lemons",
            "Cup of Joe",
        ],
        guests: [
            "",
        ],
        venue: venues.upsunken,
        date: new Date("2024-12-20T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "Circus Music Festival 5",
        mainAct: [
            "Similar Sky",
        ],
        guests: [
            "",
        ],
        venue: venues.bridgetowne,
        date: new Date("2024-09-28T07:30:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.fanmeet,
        paid: true,
        title: "",
        mainAct: [
            "Jung Hae In",
        ],
        guests: [
            "",
        ],
        venue: venues.frontier,
        date: new Date("2024-12-21T18:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.gig,
        paid: true,
        title: "",
        mainAct: [
            "Mark Michael Garcia",
        ],
        guests: [
            "Rhythm & Harmony",
            "Maria's Project",
        ],
        venue: venues.redrhino,
        date: new Date("2024-10-05T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.mall,
        paid: false,
        title: "",
        mainAct: [
            "AJAA",
        ],
        guests: [
            ""
        ],
        venue: venues.galleria,
        date: new Date("2024-09-28T16:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Kolohe Kai",
        ],
        guests: [
            ""
        ],
        venue: venues.samsunghall,
        date: new Date("2025-02-01T00:00:00"),
        announced: new Date("2024-09-23T00:00:00"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "CHEN",
        ],
        guests: [
            ""
        ],
        venue: venues.frontier,
        date: new Date("2024-11-23T00:00:00"),
        announced: new Date("2024-09-23T17:30:00"),
    },
];