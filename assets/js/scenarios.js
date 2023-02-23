export let scenarios

let scenarios = [
    {
        id: 1,
        question: "Which landscape does this shield belong to?", 
        background: "url('assets/images/upplands_vapen.png')",
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
        background: "url('assets/images/vastmanlands_vapen.png')",
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
        background: "url('assets/images/angermanlands_vapen.png')",
        response: [
            {
                option: "Gastrikland",
                getTo: 1
            },
            {
                option: "Vastmanland",
                getTo: 1
            },
            {
                option: "Angermanland",
                getTo: 4
            },
            {
                option: "Norrbotten",
                getTo: 1
            },
        ],
    },
    {
        id: 4,
        question: `Which landscape does this shield belong to?`,
        background: "url('assets/images/blekinges_vapen.png')",
        response: [
            {
                option: "Blekinge",
                getTo: 5
            },
            {
                option: "Vastmanland",
                getTo: 1
            },
            {
                option: "Uppland",
                getTo: 1
            },
            {
                option: "Norrbotten",
                getTo: 1
            },
        ],
    },
    {
        id: 5,
        question: `Which landscape does this shield belong to?`,
        background: "url('assets/images/bohuslans_vapen.png')",
        response: [
            {
                option: "Gastrikland",
                getTo: 1
            },
            {
                option: "Vastmanland",
                getTo: 1
            },
            {
                option: "Uppland",
                getTo: 1
            },
            {
                option: "Bohuslan",
                getTo: 6
            },
        ],
    },
    {
        id: 6,
        question: `Which landscape does this shield belong to?`,
        background: "url('assets/images/vastergotlands_vapen.png')",
        response: [
            {
                option: "Vastergotland",
                getTo: 7
            },
            {
                option: "Vastmanland",
                getTo: 1
            },
            {
                option: "Uppland",
                getTo: 1
            },
            {
                option: "Norrbotten",
                getTo: 1
            },
        ],
    },
    {
        id: 7,
        question: `Which landscape does this shield belong to?`,
        background: "url('../images/vasterbottens_vapen.png')",
        response: [
            {
                option: "Gastrikland",
                getTo: 1
            },
            {
                option: "Vastmanland",
                getTo: 1
            },
            {
                option: "Uppland",
                getTo: 1
            },
            {
                option: "Vasterbotten",
                getTo: 8
            },
        ],
    },
    {
        id: 8,
        question: `Which landscape does this shield belong to?`,
        background: "url('../images/sodermanlands_vapen.png')",
        response: [
            {
                option: "Sodermanland",
                getTo: 9
            },
            {
                option: "Vastmanland",
                getTo: 1
            },
            {
                option: "Uppland",
                getTo: 1
            },
            {
                option: "Norrbotten",
                getTo: 1
            },
        ],
    },
    {
        id: 9,
        question: `Which landscape does this shield belong to?`,
        background: "url('assets/images/vastmanlands_vapen.png')",
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
        id: 10,
        question: `Which landscape does this shield belong to?`,
        background: "url('assets/images/vastmanlands_vapen.png')",
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
        id: 11,
        question: `Which landscape does this shield belong to?`,
        background: "url('assets/images/vastmanlands_vapen.png')",
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
        background: "url('assets/images/vastmanlands_vapen.png')",
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
        background: "url('assets/images/vastmanlands_vapen.png')",
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
        background: "url('assets/images/vastmanlands_vapen.png')",
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
        background: "url('assets/images/vastmanlands_vapen.png')",
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
        background: "url('assets/images/vastmanlands_vapen.png')",
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
        background: "url('assets/images/vastmanlands_vapen.png')",
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
        background: "url('assets/images/vastmanlands_vapen.png')",
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
        background: "url('assets/images/vastmanlands_vapen.png')",
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
        background: "url('assets/images/vastmanlands_vapen.png')",
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
        background: "url('assets/images/vastmanlands_vapen.png')",
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
        background: "url('assets/images/vastmanlands_vapen.png')",
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
        background: "url('assets/images/vastmanlands_vapen.png')",
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
        id: 24,
        question: `Which landscape does this shield belong to?`,
        background: "url('assets/images/vastmanlands_vapen.png')",
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
        id: 25,
        question: `Which landscape does this shield belong to?`,
        background: "url('assets/images/vastmanlands_vapen.png')",
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
]