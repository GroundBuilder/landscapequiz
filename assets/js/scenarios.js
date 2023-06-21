let scenarios = [
    {
        id: 1,
        question: "Which landscape does this shield belong to?", 
        background: "assets/images/upplands_vapen.png",
        response: [
            {
                option: "Sordermanland",
                outcome: 'lose',
                getTo: 2,
            },
            {
                option: "Vastmanland",
                outcome: 'lose',
                getTo: 2,
            },
            {
                option: "Uppland",
                outcome: 'score',
                getTo: 2,
            },
            {
                option: "Norrbotten",
                outcome: 'lose',
                getTo: 2,
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
                getTo: 3,
            },
            {
                option: "Vastmanland",
                outcome: 'score',
                getTo: 3,
            },
            {
                option: "Uppland",
                outcome: 'lose',
                getTo: 3,
            },
            {
                option: "Norrbotten",
                outcome: 'lose',
                getTo: 3,
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
                getTo: 4,
            },
            {
                option: "Vastmanland",
                outcome: 'lose',
                getTo: 4
            },
            {
                option: "Angermanland",
                outcome: 'score',
                getTo: 4
            },
            {
                option: "Norrbotten",
                outcome: 'lose',
                getTo: 4
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
                getTo: 5
            },
            {
                option: "Uppland",
                outcome: 'lose',
                getTo: 5
            },
            {
                option: "Norrbotten",
                outcome: 'lose',
                getTo: 5
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
                getTo: 6
            },
            {
                option: "Vastmanland",
                outcome: 'lose',
                getTo: 6
            },
            {
                option: "Uppland",
                outcome: 'lose',
                getTo: 6
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
                getTo: 7
            },
            {
                option: "Uppland",
                outcome: 'lose',
                getTo: 7
            },
            {
                option: "Norrbotten",
                outcome: 'lose',
                getTo: 7
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
                getTo: 8
            },
            {
                option: "Vastmanland",
                outcome: 'lose',
                getTo: 8
            },
            {
                option: "Uppland",
                outcome: 'lose',
                getTo: 8
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
                option: "Gotland",
                outcome: 'lose',
                getTo: 9
            },
            {
                option: "Skane",
                outcome: 'lose',
                getTo: 9
            },
            {
                option: "Sodermanland",
                outcome: 'score',
                getTo: 9
            },
            {
                option: "Norrbotten",
                outcome: 'lose',
                getTo: 9
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
                getTo: 10
            },
            {
                option: "Vastmanland",
                outcome: 'lose',
                getTo: 10
            },
            {
                option: "Uppland",
                outcome: 'lose',
                getTo: 10
            },
            {
                option: "Smaland",
                outcome: 'score',
                getTo: 10
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
                getTo: 11
            },
            {
                option: "Skane",
                outcome: 'score',
                getTo: 11
            },
            {
                option: "Medlepad",
                outcome: 'lose',
                getTo: 11
            },
            {
                option: "Norrbotten",
                outcome: 'lose',
                getTo: 11
            },
        ],
    },
    {
        id: 11,
        question: `Which landscape does this shield belong to?`,
        background: "assets/images/ostergotland_vapen.png",
        response: [
            {
                option: "Ostergotland",
                outcome: 'score',
                getTo: 12
            },
            {
                option: "Dalsland",
                outcome: 'lose',
                getTo: 12
            },
            {
                option: "Uppland",
                outcome: 'lose',
                getTo: 12
            },
            {
                option: "Smaland",
                outcome: 'lose',
                getTo: 12
            },
        ],
    },
    {
        id: 12,
        question: `Which landscape does this shield belong to?`,
        background: "assets/images/olands_vapen.png",
        response: [
            {
                option: "Narke",
                outcome: 'lose',
                getTo: 13
            },
            {
                option: "Harjedalen",
                outcome: 'lose',
                getTo: 13
            },
            {
                option: "Oland",
                outcome: 'score',
                getTo: 13
            },
            {
                option: "Norrbotten",
                outcome: 'lose',
                getTo: 13
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
                outcome: 'lose',
                getTo: 14
            },
            {
                option: "Norrbotten",
                outcome: 'score',
                getTo: 14
            },
            {
                option: "Harjedalen",
                outcome: 'lose',
                getTo: 14
            },
            {
                option: "Medelpad",
                outcome: 'lose',
                getTo: 14
            },
        ],
    },
    {
        id: 14,
        question: `Which landscape does this shield belong to?`,
        background: "assets/images/narkes_vapen.png",
        response: [
            {
                option: "Jamtland",
                outcome: 'lose',
                getTo: 15
            },
            {
                option: "Vasterbotten",
                outcome: 'lose',
                getTo: 15
            },
            {
                option: "Vasterbotten",
                outcome: 'lose',
                getTo: 15
            },
            {
                option: "Narke",
                outcome: 'score',
                getTo: 15
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
                outcome: 'lose',
                getTo: 16
            },
            {
                option: "Angermanland",
                outcome: 'lose',
                getTo: 16
            },
            {
                option: "Vasterbotten",
                outcome: 'lose',
                getTo: 16
            },
            {
                option: "Jamtland",
                outcome: 'score',
                getTo: 16
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
                outcome: 'lose',
                getTo: 17
            },
            {
                option: "Vastmanland",
                outcome: 'lose',
                getTo: 17
            },
            {
                option: "Harjedalen",
                outcome: 'score',
                getTo: 17
            },
            {
                option: "Norrbotten",
                outcome: 'lose',
                getTo: 17
            },
        ],
    },
    {
        id: 17,
        question: `Which landscape does this shield belong to?`,
        background: "assets/images/halsinglands_vapen.png",
        response: [
            {
                option: "Halsingland",
                outcome: 'score',
                getTo: 18
            },
            {
                option: "Vastmanland",
                outcome: 'lose',
                getTo: 18
            },
            {
                option: "Uppland",
                outcome: 'lose',
                getTo: 18
            },
            {
                option: "Norrbotten",
                outcome: 'lose',
                getTo: 18
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
                outcome: 'lose',
                getTo: 19
            },
            {
                option: "Halland",
                outcome: 'score',
                getTo: 19
            },
            {
                option: "Uppland",
                outcome: 'lose',
                getTo: 19
            },
            {
                option: "Norrbotten",
                outcome: 'lose',
                getTo: 19
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
                outcome: 'lose',
                getTo: 20
            },
            {
                option: "Gotland",
                outcome: 'score',
                getTo: 20
            },
            {
                option: "Vasterbotten",
                outcome: 'lose',
                getTo: 20
            },
            {
                option: "Norrbotten",
                outcome: 'lose',
                getTo: 20
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
                outcome: 'lose',
                getTo: 21
            },
            {
                option: "Vastmanland",
                outcome: 'lose',
                getTo: 21
            },
            {
                option: "Gastrikland",
                outcome: 'score',
                getTo: 21
            },
            {
                option: "Norrbotten",
                outcome: 'lose',
                getTo: 21
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
                outcome: 'lose',
                getTo: 22
            },
            {
                option: "Vastmanland",
                outcome: 'lose',
                getTo: 22
            },
            {
                option: "Uppland",
                outcome: 'lose',
                getTo: 222
            },
            {
                option: "Dalsland",
                outcome: 'score',
                getTo: 22
            },
        ],
    },
    {
        id: 22,
        question: `Which landscape does this shield belong to?`,
        background: "assets/images/dalarnas_vapen.png",
        response: [
            {
                option: "Dalarna",
                outcome: 'score',
                getTo: 23
            },
            {
                option: "Vastmanland",
                outcome: 'lose',
                getTo: 23
            },
            {
                option: "Uppland",
                outcome: 'lose',
                getTo: 23
            },
            {
                option: "Norrbotten",
                outcome: 'lose',
                getTo: 23
            },
        ],
    },
    {
        id: 23,
        question: `Which landscape does this shield belong to?`,
        background: "assets/images/vastmanlands_vapen.png",
        response: [
            {
                option: "Vasterbotten",
                outcome: 'lose',
                getTo: 24
            },
            {
                option: "Harjedale",
                outcome: 'lose',
                getTo: 24
            },
            {
                option: "Vastmanland",
                outcome: 'score',
                getTo: 24
            },
            {
                option: "Norrbotten",
                outcome: 'lose',
                getTo: 24
            },
        ],
    },
    {
        id: 24,
        question: `Which landscape does this shield belong to?`,
        background: "assets/images/lapplands_vapen.png",
        response: [
            {
                option: "Smaland",
                outcome: 'lose',
                getTo: 25
            },
            {
                option: "Vastmanland",
                outcome: 'lose',
                getTo: 25
            },
            {
                option: "Uppland",
                outcome: 'lose',
                getTo: 25
            },
            {
                option: "Lappland",
                outcome: 'score',
                getTo: 25
            },
        ],
    },
    {
        id: 25,
        question: `Which landscape does this shield belong to?`,
        background: "assets/images/medelpads_vapen.png",
        response: [
            {
                option: "Sodermanland",
                outcome: 'lose',
                getTo: -1
            },
            {
                option: "Medelpad",
                outcome: 'score',
                getTo: -1
            },
            {
                option: "Blekinge",
                outcome: 'lose',
                getTo: -1
            },
            {
                option: "Norrbotten",
                outcome: 'lose',
                getTo: -1
            },
        ],
    },
];

module.export { scenarios };