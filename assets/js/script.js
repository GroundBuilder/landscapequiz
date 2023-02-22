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



const info_box = document.getElementsById("quiz_info_box");
let quizText = document.getElementById("game_box");
let quizButton = document.getElementById("btn_holder");
let bgImage = document.getElementById("quiz_img");

let startQuiz = document.getElementById('open_quiz_btn');
startQuiz.onclick = function runGame() {
    
}


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
        question: "Witch landscape does this shield belong to?", 
        background: "url('assets/images/upplands_vapen.svg.png')",
        response: [
            {
                option: "Uppland",
                getTo: 1
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
        id: 2,
        question: `Witch landscape does this shield belong to?`,
        background: "url('assets/images/vastmanlands_vapen.svg.png')",
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