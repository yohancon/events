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
        type: eventType.mall,
        paid: true,
        title: "",
        mainAct: [
            "VXON",
            "AJAA",
        ],
        guests: [
            "",
        ],
        venue: venues.smvalenzuela,
        date: new Date("2024-10-13T16:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.gig,
        paid: true,
        title: "Back to the 90s!",
        mainAct: [
            "Kahel",
            "Zirkit PH",
            "Everlasting 27",
            "Body Body Dancers",
        ],
        guests: [
            "",
        ],
        venue: venues.motorista,
        date: new Date("2024-10-04T19:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.gig,
        paid: true,
        title: "One Last Time w/ Mikey",
        mainAct: [
            "The Itchyworms",
            "Ciudad",
            "The Revisors",
        ],
        guests: [
            "",
        ],
        venue: venues.bistro,
        date: new Date("2024-10-08T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.gig,
        paid: true,
        title: "",
        mainAct: [
            "Fairview Far",
        ],
        guests: [
            "Austri",
            "Devices",
            "tidal",
            "Warpten",
            "Ahmad (of We Are Imaginary)",
        ],
        venue: venues.mows,
        date: new Date("2024-10-13T18:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Philippine Philharmonic Orchestra",
        ],
        guests: [
            "Arman Ferrer",
            "Lara Maigue",
            "Camille Lopez-Molina",
            "Cris Villonco",
            "Diomedes Saraza, Jr.",
            "Jonathan Velasco", 
            "Alice Reyes Dance Philippines",
            "Philippine Madrigal Singers",
        ],
        venue: venues.samsungperforming,
        date: new Date("2024-11-22T19:30:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Jose Mari Chan",
        ],
        guests: [
            "Morissette",
            "Jona",
        ],
        venue: venues.newport,
        date: new Date("2024-12-07T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Kuh Ledesma",
        ],
        guests: [
            "Nathan Randal",
            "David Young",
            "Isabella",
        ],
        venue: venues.musicmuseum,
        date: new Date("2024-10-18T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "APO Hiking Society", 
            "The CompanY",
        ],
        guests: [
            "",
        ],
        venue: venues.musicmuseum,
        date: new Date("2024-10-05T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.gig,
        paid: true,
        title: "Come N Slide",
        mainAct: [
            "E.J",
            "C0k3baby Torii",
            "Babydraco",
            "Kyleaux",
        ],
        guests: [
            "G.Lonzo",
            "P!NX",
            "Low Bottoms",
            "Vince Cee",
            "Low T",
            "Yameru",
            "OhPolo",
            "Pray",
            "Great North Crib",
            "Ich1ka",
            "Vons",
            "Young Sora",
        ],
        venue: venues.fblevents,
        date: new Date("2024-10-12T19:00:00"),
        announced: new Date("2024-09-16T21:42:00"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "Concerto Ottimo 2",
        mainAct: [
            "Manila Symphony Orchestra",
        ],
        guests: [
            "Jenny Sugal",
            "Rap Canedo",
            "Dane Mercado",
            "Darius Miguel",
        ],
        venue: venues.cprauditorium,
        date: new Date("2024-10-24T18:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Plastique Tiara",
        ],
        guests: [
            "",
        ],
        venue: venues.musicmuseum,
        date: new Date("2024-10-10T21:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Ice Seguerra",
        ],
        guests: [
            "",
        ],
        venue: venues.musicmuseum,
        date: new Date("2024-11-08T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Manila Philharmonic Orchestra",
        ],
        guests: [
            "",
        ],
        venue: venues.samsungperforming,
        date: new Date("2024-10-29T19:30:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "New Wave Tribe Festival",
        mainAct: [
            "Per Sorensen",
            "Gene Loves Jezebel",
            "Ian McNabb",
            "DJ Dreadknoxx",
        ],
        guests: [
            "",
        ],
        venue: venues.moaarena,
        date: new Date("2024-12-08T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Southborder",
            "Ella May Saison",
        ],
        guests: [
            "",
        ],
        venue: venues.theatresolaire,
        date: new Date("2024-11-09T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Side A",
            "Janine Teñoso",
        ],
        guests: [
            "",
        ],
        venue: venues.theatresolaire,
        date: new Date("2024-11-30T20:00:00"),
        announced: new Date("2024-09-16T13:48:00"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "The Bootleg Beatles",
        ],
        guests: [
            "",
        ],
        venue: venues.theatresolaire,
        date: new Date("2024-10-26T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "Horizon Halloween Music Festival",
        mainAct: [
            "",
        ],
        guests: [
            "",
        ],
        venue: venues.bridgetowne,
        date: new Date("2024-10-26T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.gig,
        paid: true,
        title: "",
        mainAct: [
            "Steve Aoki",
        ],
        guests: [
            "",
        ],
        venue: venues.xylo,
        date: new Date("2024-10-17T22:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "Howlers Manila 3.0 Cosplay & Music Festival",
        mainAct: [
            "",
        ],
        guests: [
            "",
        ],
        venue: venues.ccpgrounds,
        date: new Date("2024-12-07T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.gig,
        paid: true,
        title: "",
        mainAct: [
            "Munimuni",
            "Autotelic",
        ],
        guests: [
            "",
        ],
        venue: venues.jessnpats,
        date: new Date("2024-10-05T11:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "YUGYEOM",
        ],
        guests: [
            "",
        ],
        venue: venues.skydome,
        date: new Date("2024-11-03T18:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "M.A.D.Z. Festival",
        mainAct: [
            "",
        ],
        guests: [
            "",
        ],
        venue: venues.ninoystadium,
        date: new Date("2024-10-12T18:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.gig,
        paid: false,
        title: "",
        mainAct: [
            "Jikamarie",
            "Barbie Almalbis",
        ],
        guests: [
            "",
        ],
        venue: venues.elcalle,
        date: new Date("2024-10-11T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.comedy,
        paid: true,
        title: "",
        mainAct: [
            "SPIT",
        ],
        guests: [
            "",
        ],
        venue: venues.upfilm,
        date: new Date("2024-10-19T14:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.comedy,
        paid: true,
        title: "",
        mainAct: [
            "SPIT",
        ],
        guests: [
            "",
        ],
        venue: venues.upfilm,
        date: new Date("2024-10-19T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.gig,
        paid: true,
        title: "",
        mainAct: [
            "Shamrock",
        ],
        guests: [
            "Pragma",
            "Let Gravity",
        ],
        venue: venues.aromata,
        date: new Date("2024-10-10T21:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "Circus Music Festival 5 (Soundcheck)",
        mainAct: [
            "",
        ],
        guests: [
            "",
        ],
        venue: venues.bridgetowne,
        date: new Date("2024-09-27T08:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Incognito",
        ],
        guests: [
            "",
        ],
        venue: venues.frontier,
        date: new Date("2024-11-10T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.gig,
        paid: true,
        title: "",
        mainAct: [
            "Razorback",
        ],
        guests: [
            "",
        ],
        venue: venues.kalmabar,
        date: new Date("2024-10-04T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.gig,
        paid: false,
        title: "",
        mainAct: [
            "Skylight",
        ],
        guests: [
            "",
        ],
        venue: venues.twelvemonkeys,
        date: new Date("2024-10-03T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.gig,
        paid: true,
        title: "",
        mainAct: [
            "Johnoy Danao",
        ],
        guests: [
            "",
        ],
        venue: venues.oddcafe,
        date: new Date("2024-10-05T19:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "TAEMIN",
        ],
        guests: [
            "",
        ],
        venue: venues.araneta,
        date: new Date("2024-11-24T18:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Rey Valera",
            "Marco Sison",
        ],
        guests: [
            "",
        ],
        venue: venues.musicmuseum,
        date: new Date("2024-11-22T19:30:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "Queen of the Night",
        mainAct: [
            "Trina Johnson Finn",
        ],
        guests: [
            "",
        ],
        venue: venues.newport,
        date: new Date("2024-10-11T20:00:00"),
        announced: new Date("2024-09-11T20:18:00"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "Queen of the Night",
        mainAct: [
            "Trina Johnson Finn",
        ],
        guests: [
            "",
        ],
        venue: venues.newport,
        date: new Date("2024-10-12T20:00:00"),
        announced: new Date("2024-09-11T20:18:00"),
    },
    {
        type: eventType.gig,
        paid: true,
        title: "TL…I’M SICK",
        mainAct: [
            "Cherry Society",
            "Space Moses",
            "Dreaming Blue",
            "cheeky things",
            "Cat Boy Jeepney Drivers",
            "25hearts",
            "Sintasan",
            "i hope you're okay",
        ],
        guests: [
            "",
        ],
        venue: venues.mows,
        date: new Date("2024-10-06T18:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "The Philippine Madrigal Singers",
        ],
        guests: [
            "",
        ],
        venue: venues.piccplenary,
        date: new Date("2024-10-05T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "The Philippine Madrigal Singers",
        ],
        guests: [
            "",
        ],
        venue: venues.theatresolaire,
        date: new Date("2024-12-29T17:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "The Maine",
        ],
        guests: [
            "",
        ],
        venue: venues.skydome,
        date: new Date("2024-09-27T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "The Maine",
        ],
        guests: [
            "",
        ],
        venue: venues.skydome,
        date: new Date("2024-09-28T19:30:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Sugar Hiccup",
        ],
        guests: [
            "Sheila and the Insects",
            "KRNA",
            "Folding Bed",
            "Bedtime Television",
            "Coney Reyes on Camera",
        ],
        venue: venues.none,
        date: new Date("2024-10-26T00:00:00"),
        announced: new Date("2024-09-15T18:00:00"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Sugar Hiccup",
        ],
        guests: [
            "Kahel",
            "Medyo Maybe",
            "Turncoats",
            "Monochrome",
            "Transmission Division",
        ],
        venue: venues.cantobogchi,
        date: new Date("2024-10-25T18:00:00"),
        announced: new Date("2024-09-15T18:00:00"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Sugar Hiccup",
        ],
        guests: [
            "Barbie Almalbis",
            "Taken By Cars",
            "Aunt Robert",
            "The Purest Blue",
        ],
        venue: venues.onetwothree,
        date: new Date("2024-10-19T19:00:00"),
        announced: new Date("2024-09-15T18:00:00"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Lea Salonga",
        ],
        guests: [
            "",
        ],
        venue: venues.theatresolaire,
        date: new Date("2024-11-05T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Lea Salonga",
        ],
        guests: [
            "",
        ],
        venue: venues.theatresolaire,
        date: new Date("2024-11-04T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Last Dinosaurs",
        ],
        guests: [
            "",
        ],
        venue: venues.skydome,
        date: new Date("2024-12-08T20:00:00"),
        announced: new Date("2024-09-18T11:59:00"),
    },
    {
        type: eventType.gig,
        paid: true,
        title: "",
        mainAct: [
            "SunKissed Lola",
        ],
        guests: [
            "",
        ],
        venue: venues.vivacafe,
        date: new Date("2024-10-02T19:00:00"),
        announced: new Date("2024-09-26T12:26:00"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "Wish Date: Solace",
        mainAct: [
            "Dilaw",
            "Dionela",
            "Letters From June",
            "Arabelle Dela Cruz",
            "Josh Cullen",
            "The Itchyworms",
            "Angeline Quinto",
        ],
        guests: [
            "",
        ],
        venue: venues.moaarena,
        date: new Date("2024-10-13T19:00:00"),
        announced: new Date("2024-09-26T09:00:00"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "BOYNEXTDOOR",
        ],
        guests: [
            "",
        ],
        venue: venues.araneta,
        date: new Date("2025-03-22T00:00:00"),
        announced: new Date("2024-09-23T13:00:00"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "almost monday",
        ],
        guests: [
            "",
        ],
        venue: venues.skydome,
        date: new Date("2024-11-18T20:00:00"),
        announced: new Date("2024-09-25T17:59:00"),
    },
    {
        type: eventType.fanmeet,
        paid: true,
        title: "",
        mainAct: [
            "Fort",
            "Peat",
        ],
        guests: [
            "",
        ],
        venue: venues.musicmuseum,
        date: new Date("2024-11-09T16:00:00"),
        announced: new Date("2024-09-25T18:00:00"),
    },
    {
        type: eventType.gig,
        paid: true,
        title: "",
        mainAct: [
            "Imago",
        ],
        guests: [
            "",
        ],
        venue: venues.olpubtavern,
        date: new Date("2024-10-19T19:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "Frozen In Concert",
        mainAct: [
            "",
        ],
        guests: [
            "",
        ],
        venue: venues.samsungperforming,
        date: new Date("2024-11-17T14:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "Frozen In Concert",
        mainAct: [
            "",
        ],
        guests: [
            "",
        ],
        venue: venues.samsungperforming,
        date: new Date("2024-11-16T17:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.gig,
        paid: true,
        title: "",
        mainAct: [
            "Gliterrer",
        ],
        guests: [
            "Thirds",
            "Girlcharmm",
            "The Mind is a Terrible Thing",
            "Repetition",
        ],
        venue: venues.mows,
        date: new Date("2024-11-14T19:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Nina",
        ],
        guests: [
            "Ian Veneracion",
        ],
        venue: venues.theatresolaire,
        date: new Date("2024-10-30T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.comedy,
        paid: true,
        title: "",
        mainAct: [
            "Jon Santos",
        ],
        guests: [
            "Apo Hiking Society",
            "Ice Seguerra",
            "Viñas Deluxe",
        ],
        venue: venues.samsunghall,
        date: new Date("2024-12-07T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.gig,
        paid: true,
        title: "Red Letter Day",
        mainAct: [
            "Snakefight",
            "Simpatiko PH",
            "Plus Two",
            "Blind Side",
            "Chains4no1",
            "Comic's Trip",
            "Sidra",
            "Achilles Vee",
        ],
        guests: [
            "",
        ],
        venue: venues.bossbar,
        date: new Date("2024-11-16T18:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.gig,
        paid: true,
        title: "Red Letter Day",
        mainAct: [
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
        guests: [
            "",
        ],
        venue: venues.milenya,
        date: new Date("2024-11-15T18:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.gig,
        paid: true,
        title: "",
        mainAct: [
            "Tanya Markova",
        ],
        guests: [
            "Barq",
            "Growing Pains",
            "People Watching People",
            "Feverdream",
            "Arvo",
            "Ugh!",
            "Hey, Leona",
        ],
        venue: venues.centralcraftbalanga,
        date: new Date("2024-10-26T17:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.gig,
        paid: true,
        title: "Gaboom!",
        mainAct: [
            "Teeth",
            "Sandwich",
            "Cambio",
            "Party Pace",
            "Blaster",
            "One Click Straight",
            "Pedicab",
        ],
        guests: [
            "",
        ],
        venue: venues.onetwothree,
        date: new Date("2024-10-26T18:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Air Supply",
        ],
        guests: [
            "",
        ],
        venue: venues.smxdavao,
        date: new Date("2024-12-11T19:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Air Supply",
        ],
        guests: [
            "",
        ],
        venue: venues.waterfronthotel,
        date: new Date("2024-12-09T19:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Air Supply",
        ],
        guests: [
            "",
        ],
        venue: venues.smxbacolod,
        date: new Date("2024-12-05T19:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Gary Valenciano",
        ],
        guests: [
            "Rhythm N Babes",
            "Sayawatha",
        ],
        venue: venues.marianauditorium,
        date: new Date("2024-10-11T18:30:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Mass of the Fermenting Dregs",
            "Death of Heather",
        ],
        guests: [
            "",
        ],
        venue: venues.eastside,
        date: new Date("2024-11-10T00:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.gig,
        paid: true,
        title: "10nta? sa Pusangka2l!",
        mainAct: [
            "bird.",
            "Party Pace",
            "Cinéma Lumière",
            "Turning Tendencies",
            "LANO",
            "OnlyKwans",
            "Chain Messages",
        ],
        guests: [
            "",
        ],
        venue: venues.rabbithole,
        date: new Date("2024-10-04T19:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.gig,
        paid: true,
        title: "",
        mainAct: [
            "Zild",
        ],
        guests: [
            "One Click Straight",
            "SHANNi",
        ],
        venue: venues.onetwothree,
        date: new Date("2024-09-28T19:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "SB19",
        ],
        guests: [
            "",
        ],
        venue: venues.araneta,
        date: new Date("2024-10-27T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "SB19",
        ],
        guests: [
            "",
        ],
        venue: venues.araneta,
        date: new Date("2024-10-26T20:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Josh Cullen",
        ],
        guests: [
            "",
        ],
        venue: venues.frontier,
        date: new Date("2024-09-28T19:00:00"),
        announced: new Date("YYYY-MM-DDThh:mm:ss"),
    },
    {
        type: eventType.concert,
        paid: true,
        title: "",
        mainAct: [
            "Orange & Lemons",
        ],
        guests: [
            "",
        ],
        venue: venues.metrotent,
        date: new Date("2024-10-18T20:00:00"),
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
        date: new Date("2024-11-16T19:00:00"),
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
        date: new Date("2024-11-29T20:00:00"),
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
        date: new Date("2024-10-05T19:00:00"),
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
            "Matt Wilson",
            "Angelo Garcia",
            "Andi & Andria Sanchez",
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
        title: "Himala sa Buhangin! Arts and Music Festival",
        mainAct: [
            "Shanti Dope",
            "Zack Tabudlo",
        ],
        guests: [
            "",
        ],
        venue: venues.paoaydunes,
        date: new Date("2024-11-16T18:00:00"),
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
        date: new Date("2024-10-05T17:00:00"),
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
        title: "Wish Bus: Hindley Street Country Club",
        mainAct: [
            "Hindley Street Country Club",
        ],
        guests: [
            "",
        ],
        venue: venues.etoncentris,
        date: new Date("2024-09-27T14:00:00"),
        announced: new Date("2024-09-26T08:30:00"),
    },
    {
        type: eventType.gig,
        paid: false,
        title: "Wish Bus: Aquila Packing",
        mainAct: [
            "Aquila Packing",
        ],
        guests: [
            "",
        ],
        venue: venues.etoncentris,
        date: new Date("2024-09-27T16:00:00"),
        announced: new Date("2024-09-26T08:30:00"),
    },
    {
        type: eventType.gig,
        paid: false,
        title: "Wish Bus: Realest Cram, Enzo MF",
        mainAct: [
            "Realest Cram", 
            "Enzo MF",
        ],
        guests: [
            "",
        ],
        venue: venues.etoncentris,
        date: new Date("2024-09-27T18:00:00"),
        announced: new Date("2024-09-26T08:30:00"),
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