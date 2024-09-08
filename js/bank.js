const venues = {
    araneta: "Smart Araneta Coliseum",
    bistro: "The 70's Bistro",
    frontier: "New Frontier Theater",
    metrotent: "Metrotent Convention Center",
    newport: "Newport Performing Arts Theater",
    nineteeneast: "19 East",
    onetwothree: "123 Block",
    rabbithole: "Rabbit Hole",
    smlaspinas: "SM Center Las Piñas",
    twelvemonkeys: "12 Monkeys",
}

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
                    "",
                ],
        date: new Date("YYYY-MM-DDThh:mm:00"),
        venue: venues.name
    },
];

console.log(new Intl.DateTimeFormat('en-US').format(events[0].date));
console.log(new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
}).format(events[0].date));

const board = document.querySelector('main');
events.sort((a, b) => a.date - b.date);






function unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
}

const dateList = events.map(item => {
    return new Intl.DateTimeFormat('en-US', {
        dateStyle: 'full',
    }).format(item.date);
});

const finalList = unique(dateList);








for (const item of events) {
    const headerList = Array.from(document.querySelectorAll('h2'));
    const itemDate = (new Intl.DateTimeFormat('en-US', {
        dateStyle: 'full',
    }).format(item.date));
    let isAlreadyAppended = false;

    for(let item of headerList) {
        if(itemDate === item.textContent) {
            isAlreadyAppended = true;
        }
    }
    
    const dateHeader = document.createElement('h2');
    dateHeader.textContent = `${itemDate}`;

    if(!isAlreadyAppended) {    
        board.appendChild(dateHeader);
    }

    
    const row = document.createElement('article');
    
    const row_head = document.createElement('div');
    row_head.className = "title";
    row_head.textContent = `${item.artist.join(", ")}`;

    const row_venue = document.createElement('div');
    row_venue.className = "venue";
    row_venue.textContent = `${item.venue}`;

    row.appendChild(row_head);
    row.appendChild(row_venue);
    board.appendChild(row);
}