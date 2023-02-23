/*
console.log("Connected to the index.html")
// Wait for the DOM to finish loading before running the game.
//Get the answer button elements and add event listeners to them.

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "close-game") {
                alert("You clicked close game!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
}); */


let quizText = document.getElementById("game_box");
let quizButton = document.getElementById("btn_holder");
let bgImage = document.getElementById("quiz_img");

let startQuiz = document.getElementById('open_quiz_btn');

startQuiz.addEventListener("click", function() {
    runGame();
    console.log("Button klicked")
});


function runGame() {
    displayQuiz(1);

}


function checkAnswers() {

}

function incrementScore() {

}

function incrementWorngAnswer() {

}

function incrementProgressBar() {

}

function displayQuizQuestion() {

}

function displayQuiz (scenarioIndex) {
    let quiz = scenarios.find(quiz => quiz.id === scenarioIndex);
    
    quizText.quizContent = quiz.question;

    bgImage.style.backgroundImage = quiz.background;

    while (quizButton.firstChild) {
        quizButton.removeChild(quizButton.firstChild);
    }

    quiz.response.forEach(respond => {
        
        let quizButtons = document.createElement('button');
        
        quizButtons.textContent = respond.question;
        
        quizButtons.classList.add('btn');
        
        quizButtons.addEventListener('click', () => optionResponse(respond));
        
        quizButton.appendChild(quizButtons);
    })

}
function restarButton() {

}


function optionResponse (respond) {

}


// Creat an array to hold the picture and qusetion and answers.

let scenarios = [
    {
        id: 1,
        question: "Which landscape does this shield belong to?", 
        background: "url('assets/images/upplands_vapen.png')",
        response: [
            {
                option: "Uppland",
                getTo: 2
            },
            {
                option: "Vastmanland",
                getTo: 1
            },
            {
                option: "Uppland",
                getTo: 2
            },
            {
                option: "Norrbotten",
                getTo: 1
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
                getTo: 1
            },
            {
                option: "Vastmanland",
                getTo: 3
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

runGame();