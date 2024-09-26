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
            "UNIS",
        ],
        guests: [
            "",
        ],
        venue: venues.frontier,
        date: new Date("2024-10-25T19:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.mall,
        paid: true,
        title: "",
        mainAct: [
            "PABLO",
        ],
        guests: [
            "J2X",
            "W3",
        ],
        venue: venues.rmgalleriasouth,
        date: new Date("2024-09-29T16:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "HORI7ON",
        ],
        guests: [
            "",
        ],
        venue: venues.moaarena,
        date: new Date("2024-11-03T18:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "The Ridleys",
        ],
        guests: [
            "",
        ],
        venue: venues.musicmuseum,
        date: new Date("2024-11-16T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Fiji Blue",
        ],
        guests: [
            "",
        ],
        venue: venues.samsunghall,
        date: new Date("2024-11-29T00:00:00"),
        announced: new Date("2024-09-10T12:00:00"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Olivia Rodrigo",
        ],
        guests: [
            "",
        ],
        venue: venues.pharena,
        date: new Date("2024-10-05T00:00:00"),
        announced: new Date("2024-09-10T12:06:00"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "ASIYA Asian Music Festival & Conference",
        mainAct: [
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
        guests: [
            "",
        ],
        venue: venues.worldtrade,
        date: new Date("2024-10-12T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "ASIYA Asian Music Festival & Conference",
        mainAct: [
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
        guests: [
            "",
        ],
        venue: venues.worldtrade,
        date: new Date("2024-10-13T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Matt Maltese",
        ],
        guests: [
            "Janine Teñoso",
        ],
        venue: venues.skydome,
        date: new Date("2024-11-09T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.gig,
        paid: true,
        title: "",
        mainAct: [
            "ALAMAT",
        ],
        guests: [
            "",
        ],
        venue: venues.vivacafe,
        date: new Date("2024-09-28T18:00:00"),
        announced: new Date("2024-09-09T19:01:00"),
    },
    {
        type: eventType.gig,
        paid: true,
        title: "",
        mainAct: [
            "ALAMAT",
        ],
        guests: [
            "",
        ],
        venue: venues.vivacafe,
        date: new Date("2024-10-06T18:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "Now Playing: PPOP Showcase",
        mainAct: [
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
        guests: [
            "",
        ],
        venue: venues.skydome,
        date: new Date("2024-11-14T18:00:00"),
        announced: new Date("2024-09-05T18:00:00"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Over October",
        ],
        guests: [
            "",
        ],
        venue: venues.musicmuseum,
        date: new Date("2024-10-12T20:00:00"),
        announced: new Date("2024-09-11T18:02:00"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Over October",
        ],
        guests: [
            "",
        ],
        venue: venues.musicmuseum,
        date: new Date("2024-10-04T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "juan karlos",
        ],
        guests: [
            "",
        ],
        venue: venues.moaarena,
        date: new Date("2024-11-29T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "ZEROBASEONE",
        ],
        guests: [
            "",
        ],
        venue: venues.moaarena,
        date: new Date("2024-10-12T18:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Anne-Marie",
        ],
        guests: [
            "",
        ],
        venue: venues.podiumhall,
        date: new Date("2024-09-28T19:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "David Pomeranz",
        ],
        guests: [
            "",
        ],
        venue: venues.baguioconvention,
        date: new Date("2024-10-27T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Dua Lipa",
        ],
        guests: [
            "",
        ],
        venue: venues.pharena,
        date: new Date("2024-11-13T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Hillsong London",
        ],
        guests: [
            "",
        ],
        venue: venues.seasidecebugrounds,
        date: new Date("2024-11-08T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Hillsong London",
        ],
        guests: [
            "",
        ],
        venue: venues.moaarena,
        date: new Date("2024-11-09T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Hillsong London",
        ],
        guests: [
            "",
        ],
        venue: venues.moaarena,
        date: new Date("2024-11-10T18:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Stray Kids",
        ],
        guests: [
            "",
        ],
        venue: venues.pharena,
        date: new Date("2024-11-23T19:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Michael Learns to Rock",
        ],
        guests: [
            "",
        ],
        venue: venues.moaarena,
        date: new Date("2024-11-05T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Porter Robinson",
        ],
        guests: [
            "",
        ],
        venue: venues.podiumhall,
        date: new Date("2024-12-08T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "The Chameleons",
        ],
        guests: [
            "The Dawn",
            "Orange & Lemons",
            "DJ Jon Tupaz",
        ],
        venue: venues.midastent,
        date: new Date("2024-11-21T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "LANY",
        ],
        guests: [
            "",
        ],
        venue: venues.pharena,
        date: new Date("2024-10-12T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "LANY",
        ],
        guests: [
            "",
        ],
        venue: venues.waterfronthotel,
        date: new Date("2024-10-13T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "LANY",
        ],
        guests: [
            "",
        ],
        venue: venues.waterfronthotel,
        date: new Date("2024-10-14T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "LANY",
        ],
        guests: [
            "",
        ],
        venue: venues.waterfronthotel,
        date: new Date("2024-10-15T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Gazebo",
        ],
        guests: [
            "",
        ],
        venue: venues.midastent,
        date: new Date("2024-10-19T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Akon",
        ],
        guests: [
            "Ez Mil",
            "Lucas",
            "Gloc 9",
            "Flow G",
            "Dappest X Adl",
            "Legit Misfitz",
            "Chocolate Factory",
            "DJ Kate Jagdon",
        ],
        venue: venues.moaarena,
        date: new Date("2024-12-03T00:00:00"),
        announced: new Date("2024-09-14T10:00:00"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Hands Like Houses",
        ],
        guests: [
            "Greyhoundz",
            "Urbandub",
            "Typecast",
        ],
        venue: venues.eastside,
        date: new Date("2024-10-06T17:00:00"),
        announced: new Date("2024-09-13T15:04:00"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Acel",
        ],
        guests: [
            "",
        ],
        venue: venues.teatrino,
        date: new Date("2024-10-11T20:00:00"),
        announced: new Date("2024-09-13T18:10:00"),
    },
    {
        type: eventType.fanmeet,
        paid: true,
        title: "",
        mainAct: [
            "Belle Mariano",
        ],
        guests: [
            "",
        ],
        venue: venues.newport,
        date: new Date("2024-11-22T20:00:00"),
        announced: new Date("2024-09-14T20:43:00"),
    },
    {
        type: eventType.gig,
        paid: true,
        title: "",
        mainAct: [
            "Rob Deniel",
        ],
        guests: [
            "",
        ],
        venue: venues.vivacafe,
        date: new Date("2024-09-29T18:00:00"),
        announced: new Date("2024-09-13T20:24:00"),
    },
    {
        type: eventType.gig,
        paid: false,
        title: "Live at 123 Block",
        mainAct: [
            "Ciudad",
            "The Itchyworms",
            "7 Foot Jr.",
            "The Happy Analogues (with The Freesouls)",
            "Sandwich",
        ],
        guests: [
            "",
        ],
        venue: venues.onetwothree,
        date: new Date("2024-09-27T19:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "Himala Arts and Music Festival",
        mainAct: [
            "Shanti Dope",
            "Zack Tabudlo",
        ],
        guests: [
            "",
        ],
        venue: venues.paoaydunes,
        date: new Date("2024-11-16T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.gig,
        paid: false,
        title: "",
        mainAct: [
            "SunKissed Lola",
        ],
        guests: [
            "",
        ],
        venue: venues.puregoldqi,
        date: new Date("2024-09-29T16:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.mall,
        paid: true,
        title: "",
        mainAct: [
            "Dionela",
        ],
        guests: [
            "",
        ],
        venue: venues.amthe30th,
        date: new Date("2024-11-30T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.mall,
        paid: true,
        title: "",
        mainAct: [
            "Dionela",
        ],
        guests: [
            "",
        ],
        venue: venues.amcentralbloc,
        date: new Date("2024-11-16T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.mall,
        paid: true,
        title: "",
        mainAct: [
            "Dionela",
        ],
        guests: [
            "",
        ],
        venue: venues.marqueemall,
        date: new Date("2024-11-15T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.mall,
        paid: true,
        title: "",
        mainAct: [
            "Dionela",
        ],
        guests: [
            "",
        ],
        venue: venues.amharborpoint,
        date: new Date("2024-11-09T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.mall,
        paid: true,
        title: "",
        mainAct: [
            "Dionela",
        ],
        guests: [
            "",
        ],
        venue: venues.amfeliz,
        date: new Date("2024-10-27T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.mall,
        paid: true,
        title: "",
        mainAct: [
            "Dionela",
        ],
        guests: [
            "",
        ],
        venue: venues.uptechnohub,
        date: new Date("2024-10-18T00:00:00"),
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
        title: "Wish Bus: Hilera",
        mainAct: [
            "Hilera",
        ],
        guests: [
            "",
        ],
        venue: venues.araneta,
        date: new Date("2024-09-26T18:00:00"),
        announced: new Date("2024-09-26T10:00:00"),
    },
    {
        type: eventType.gig,
        paid: false,
        title: "Wish Bus: Maropok",
        mainAct: [
            "Maropok",
        ],
        guests: [
            "",
        ],
        venue: venues.araneta,
        date: new Date("2024-09-26T16:00:00"),
        announced: new Date("2024-09-26T10:00:00"),
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
        venue: venues.moaarena,
        date: new Date("2024-11-16T19:00:00"),
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
        announced: new Date("2024-09-12T15:00:00"),
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