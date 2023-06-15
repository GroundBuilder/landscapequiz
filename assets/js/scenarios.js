let scenarios = [
    {
        id: 1,
        question: "Which landscape does this shield belong to?", 
        background: "assets/images/upplands_vapen.png",
        response: [
            {
                option: "Sordermanland",
                outcome: 'lose',
                getTo: 1,
            },
            {
                option: "Vastmanland",
                outcome: 'lose',
                getTo: 1,
            },
            {
                option: "Uppland",
                outcome: 'score',
                getTo: 2,
            },
            {
                option: "Norrbotten",
                outcome: 'lose',
                getTo: 1,
            },
        ],
    },
    {
        id: 2,
        question: 'Which landscape does this shield belong to?',
        background: "assets/images/vastmanlands_vapen.png",
        response: [
            {
                option: "Gastrikland",
                outcome: 'lose',
                getTo: 1,
            },
            {
                option: "Vastmanland",
                outcome: 'score',
                getTo: 3,
            },
            {
                option: "Uppland",
                outcome: 'lose',
                getTo: 1,
            },
            {
                option: "Norrbotten",
                outcome: 'lose',
                getTo: 1,
            },
        ],
    },
    {
        id: 3,
        question: 'Which landscape does this shield belong to?',
        background: "assets/images/angermanlands_vapen.png",
        response: [
            {
                option: "Gastrikland",
                outcome: 'lose',
                getTo: 1,
            },
            {
                option: "Vastmanland",
                outcome: 'lose',
                getTo: 1
            },
            {
                option: "Angermanland",
                outcome: 'score',
                getTo: 4
            },
            {
                option: "Norrbotten",
                outcome: 'lose',
                getTo: 1
            },
        ],
    },
    {
        id: 4,
        question: `Which landscape does this shield belong to?`,
        background: "assets/images/blekinges_vapen.png",
        response: [
            {
                option: "Blekinge",
                outcome: 'score',
                getTo: 5
            },
            {
                option: "Vastmanland",
                outcome: 'lose',
                getTo: 1
            },
            {
                option: "Uppland",
                outcome: 'lose',
                getTo: 1
            },
            {
                option: "Norrbotten",
                outcome: 'lose',
                getTo: 1
            },
        ],
    },
    {
        id: 5,
        question: `Which landscape does this shield belong to?`,
        background: "assets/images/bohuslans_vapen.png",
        response: [
            {
                option: "Gastrikland",
                outcome: 'lose',
                getTo: 1
            },
            {
                option: "Vastmanland",
                outcome: 'lose',
                getTo: 1
            },
            {
                option: "Uppland",
                outcome: 'lose',
                getTo: 1
            },
            {
                option: "Bohuslan",
                outcome: 'score',
                getTo: 6
            },
        ],
    },
    {
        id: 6,
        question: `Which landscape does this shield belong to?`,
        background: "assets/images/vastergotlands_vapen.png",
        response: [
            {
                option: "Vastergotland",
                outcome: 'score',
                getTo: 7
            },
            {
                option: "Vastmanland",
                outcome: 'lose',
                getTo: 1
            },
            {
                option: "Uppland",
                outcome: 'lose',
                getTo: 1
            },
            {
                option: "Norrbotten",
                outcome: 'lose',
                getTo: 1
            },
        ],
    },
    {
        id: 7,
        question: `Which landscape does this shield belong to?`,
        background: "assets/images/vasterbottens_vapen.png",
        response: [
            {
                option: "Gastrikland",
                outcome: 'lose',
                getTo: 1
            },
            {
                option: "Vastmanland",
                outcome: 'lose',
                getTo: 1
            },
            {
                option: "Uppland",
                outcome: 'lose',
                getTo: 1
            },
            {
                option: "Vasterbotten",
                outcome: 'score',
                getTo: 8
            },
        ],
    },
    {
        id: 8,
        question: `Which landscape does this shield belong to?`,
        background: "assets/images/sodermanlands_vapen.png",
        response: [
            {
                option: "Sodermanland",
                outcome: 'score',
                getTo: 9
            },
            {
                option: "Gotland",
                outcome: 'lose',
                getTo: 1
            },
            {
                option: "Uppland",
                outcome: 'lose',
                getTo: 1
            },
            {
                option: "Norrbotten",
                outcome: 'lose',
                getTo: 1
            },
        ],
    },
    {
        id: 9,
        question: `Which landscape does this shield belong to?`,
        background: "assets/images/smalands_vapen.png",
        response: [
            {
                option: "Gastrikland",
                outcome: 'lose',
                getTo: 2
            },
            {
                option: "Vastmanland",
                outcome: 'lose',
                getTo: 3
            },
            {
                option: "Uppland",
                outcome: 'lose',
                getTo: 2
            },
            {
                option: "Smaland",
                outcome: 'score',
                getTo: 3
            },
        ],
    },
    {
        id: 10,
        question: `Which landscape does this shield belong to?`,
        background: "assets/images/skane_landskapsvapen.png",
        response: [
            {
                option: "Gastrikland",
                outcome: 'lose',
                getTo: 2
            },
            {
                option: "Skane",
                outcome: 'score',
                getTo: 3
            },
            {
                option: "Medlepad",
                outcome: 'lose',
                getTo: 2
            },
            {
                option: "Norrbotten",
                outcome: 'lose',
                getTo: 3
            },
        ],
    },
    {
        id: 11,
        question: `Which landscape does this shield belong to?`,
        background: "assets/images/ostergotland_vapen.png",
        response: [
            {
                option: "Gastrikland",
                getTo: 2
            },
            {
                option: "Vastmanland",
                getTo: 3
            },
            {
                option: "Uppland",
                getTo: 2
            },
            {
                option: "Norrbotten",
                getTo: 3
            },
        ],
    },
    {
        id: 12,
        question: `Which landscape does this shield belong to?`,
        background: "assets/images/olands_vapen.png",
        response: [
            {
                option: "Gastrikland",
                getTo: 2
            },
            {
                option: "Vastmanland",
                getTo: 3
            },
            {
                option: "Uppland",
                getTo: 2
            },
            {
                option: "Norrbotten",
                getTo: 3
            },
        ],
    },
    {
        id: 13,
        question: `Which landscape does this shield belong to?`,
        background: "assets/images/norrbottens_vapen.png",
        response: [
            {
                option: "Gastrikland",
                getTo: 2
            },
            {
                option: "Vastmanland",
                getTo: 3
            },
            {
                option: "Uppland",
                getTo: 2
            },
            {
                option: "Norrbotten",
                getTo: 3
            },
        ],
    },
    {
        id: 14,
        question: `Which landscape does this shield belong to?`,
        background: "assets/images/narkes_vapen.png",
        response: [
            {
                option: "Gastrikland",
                getTo: 2
            },
            {
                option: "Vastmanland",
                getTo: 3
            },
            {
                option: "Uppland",
                getTo: 2
            },
            {
                option: "Norrbotten",
                getTo: 3
            },
        ],
    },
    {
        id: 15,
        question: `Which landscape does this shield belong to?`,
        background: "assets/images/jamtlands_vapen.png",
        response: [
            {
                option: "Gastrikland",
                getTo: 2
            },
            {
                option: "Vastmanland",
                getTo: 3
            },
            {
                option: "Uppland",
                getTo: 2
            },
            {
                option: "Norrbotten",
                getTo: 3
            },
        ],
    },
    {
        id: 16,
        question: `Which landscape does this shield belong to?`,
        background: "assets/images/harjedalens_vapen.png",
        response: [
            {
                option: "Gastrikland",
                getTo: 2
            },
            {
                option: "Vastmanland",
                getTo: 3
            },
            {
                option: "Uppland",
                getTo: 2
            },
            {
                option: "Norrbotten",
                getTo: 3
            },
        ],
    },
    {
        id: 17,
        question: `Which landscape does this shield belong to?`,
        background: "assets/images/halsinglands_vapen.png",
        response: [
            {
                option: "Gastrikland",
                getTo: 2
            },
            {
                option: "Vastmanland",
                getTo: 3
            },
            {
                option: "Uppland",
                getTo: 2
            },
            {
                option: "Norrbotten",
                getTo: 3
            },
        ],
    },
    {
        id: 18,
        question: `Which landscape does this shield belong to?`,
        background: "assets/images/hallands_vapen.png",
        response: [
            {
                option: "Gastrikland",
                getTo: 2
            },
            {
                option: "Vastmanland",
                getTo: 3
            },
            {
                option: "Uppland",
                getTo: 2
            },
            {
                option: "Norrbotten",
                getTo: 3
            },
        ],
    },
    {
        id: 19,
        question: `Which landscape does this shield belong to?`,
        background: "assets/images/gotlands_vapen.png",
        response: [
            {
                option: "Gastrikland",
                getTo: 2
            },
            {
                option: "Vastmanland",
                getTo: 3
            },
            {
                option: "Uppland",
                getTo: 2
            },
            {
                option: "Norrbotten",
                getTo: 3
            },
        ],
    },
    {
        id: 20,
        question: `Which landscape does this shield belong to?`,
        background: "assets/images/gastrikland_vapen.png",
        response: [
            {
                option: "Gastrikland",
                getTo: 2
            },
            {
                option: "Vastmanland",
                getTo: 3
            },
            {
                option: "Uppland",
                getTo: 2
            },
            {
                option: "Norrbotten",
                getTo: 3
            },
        ],
    },
    {
        id: 21,
        question: `Which landscape does this shield belong to?`,
        background: "assets/images/dalslands_vapen.png",
        response: [
            {
                option: "Gastrikland",
                getTo: 2
            },
            {
                option: "Vastmanland",
                getTo: 3
            },
            {
                option: "Uppland",
                getTo: 2
            },
            {
                option: "Norrbotten",
                getTo: 3
            },
        ],
    },
    {
        id: 22,
        question: `Which landscape does this shield belong to?`,
        background: "assets/images/dalarnas_vapen.png",
        response: [
            {
                option: "Gastrikland",
                getTo: 2
            },
            {
                option: "Vastmanland",
                getTo: 3
            },
            {
                option: "Uppland",
                getTo: 2
            },
            {
                option: "Norrbotten",
                getTo: 3
            },
        ],
    },
    {
        id: 23,
        question: `Which landscape does this shield belong to?`,
        background: "assets/images/vastmanlands_vapen.png",
        response: [
            {
                option: "Ändra",
                getTo: 2
            },
            {
                option: "Ändra",
                getTo: 3
            },
            {
                option: "Uppland",
                getTo: 2
            },
            {
                option: "Norrbotten",
                getTo: 3
            },
        ],
    },
    {
        id: 24,
        question: `Which landscape does this shield belong to?`,
        background: "assets/images/lapplands_vapen.png",
        response: [
            {
                option: "Ändra",
                getTo: 2
            },
            {
                option: "Vastmanland",
                getTo: 3
            },
            {
                option: "Uppland",
                getTo: 2
            },
            {
                option: "Norrbotten",
                getTo: 3
            },
        ],
    },
    {
        id: 25,
        question: `Which landscape does this shield belong to?`,
        background: "assets/images/medelpads_vapen.png",
        response: [
            {
                option: "medelpad",
                getTo: 2
            },
            {
                option: "Ändra",
                getTo: 3
            },
            {
                option: "Ändra",
                getTo: 2
            },
            {
                option: "Norrbotten",
                getTo: 3
            },
        ],
    },
];

export { scenarios };
