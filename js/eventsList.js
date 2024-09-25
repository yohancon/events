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
            "",
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
        announced: new Date("2024-09-23Thh:mm:ss"),
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