/*
console.log("Connected to the index.html");
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

let bgImage = document.getElementById("delete_img");


// This game function to call scenarios and response options for the game as required
// was modified from youtube
// https://www.youtube.com/watch?v=R1S_NhKkvGA of "Web Dev Simplified"


function runGame() {
    displayQuiz(randQ);
    displayScores();

}

let clearScoreButton = document.getElementById('restart_quiz_btn');

function displayQuiz (scenarioIndex) {
    // To find wich scenario to display.
    let quiz = scenarios.find(quiz => quiz.id === scenarioIndex);
    
    // Uppload quiz question.
    quizText.textContent = quiz.question  // Fine 
    while (bgImage.firstChild) {
        bgImage.removeChild(bgImage.firstChild)
    }

    while (quizButton.firstChild) {
        quizButton.removeChild(quizButton.firstChild)
    }
    

    let quizButtons = document.createElement('button');

    
    bgImage.innerHTML += "<img id='delete_img' alt='quiz image' src=" + quiz.background + ">";

    quiz.response.forEach(respond => {
        
        let quizButtons = document.createElement('button');
        
        quizButtons.textContent = respond.option;
        
        quizButtons.classList.add('btn');
        
        quizButtons.addEventListener('click', () => optionResponse(respond));
        
        quizButton.appendChild(quizButtons);
    });

}
function restartButton() {
    localStorage.removeItem('scores');
    localStorage.removeItem('losses');
    
    localStorage.setItem('scores', 0);
    localStorage.setItem('losses', 0);
    
    displayScores();
}


function optionResponse(respond) {
   //  for(var i = 0; i < scenarios.length; i++)
    // -- If  there is no outcome, just change to the clicked quiz
    if (respond.outcome == null) {
        displayQuiz(respond.getTo);
    // -- If you pick a winning out
    } else if (respond.outcome == "score") {
        // -- Increase the value of the winning score
        addWin();
        // -- Store the new value for wins in local storage
        storeScores();
        // -- Move to the next quiz
        displayQuiz(respond.getTo);
    // -- If you pick a losing outcome
    } else if (respond.outcome == "lose") {
        // -- Increase the loss score by 1
        addLoss();
        // -- Store the new value for losses in a local storage
        storeScores();
        // -- Go to the next quiz
        displayQuiz(respond.getTo);
    }
}

// https://www.youtube.com/watch?v=ykszkgydoG4&list=FLruW0TYzckk7aRMpw8_TgFg&index=1 idea to make random question.
// -- Make the quiz generate a random number to wich queston to start with --
let randQ = Math.floor(Math.random()*25 + 1);

// -- Add score to storage
function addWin() {
    let oldWin = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldWin;
}

// -- Add loses to storage
function addLoss() {
    let oldLoss = parseInt(document.getElementById('lose').innerText);
    document.getElementById('lose').innerText = ++oldLoss;
}

// A function to store scores
// Idea have if from MDN lesson https://developer.mozilla.org/en-US/docs/Web/API/Storage

function storeScores() {
    localStorage.setItem('scores', document.getElementById('score').innerText);
    localStorage.setItem('losses', document.getElementById('lose').innerText);
}

function displayScores() {
    let myWins = localStorage.getItem('scores');
    let myLosses = localStorage.getItem('losses');

    if (localStorage.length === 0) {
      document.getElementById('score').innerText = 0;
      document.getElementById('lose').innerText = 0;

    } else {
    document.getElementById('score').innerText = myWins;
    document.getElementById('lose').innerText = myLosses;
}}


// Creat an array to hold the picture and qusetion and answers.

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
                option: "Gastrikland",
                outcome: 'lose',
                getTo: 13
            },
            {
                option: "Vastmanland",
                outcome: 'lose',
                getTo: 13
            },
            {
                option: "Uppland",
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
                option: "Vastmanland",
                outcome: 'score',
                getTo: 14
            },
            {
                option: "Uppland",
                outcome: 'lose',
                getTo: 14
            },
            {
                option: "Norrbotten",
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
                option: "Gastrikland",
                outcome: 'lose',
                getTo: 15
            },
            {
                option: "Vastmanland",
                outcome: 'lose',
                getTo: 15
            },
            {
                option: "Uppland",
                outcome: 'lose',
                getTo: 15
            },
            {
                option: "Norrbotten",
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
                option: "Vastmanland",
                outcome: 'lose',
                getTo: 16
            },
            {
                option: "Uppland",
                outcome: 'lose',
                getTo: 16
            },
            {
                option: "Norrbotten",
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
                option: "Uppland",
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
                option: "Gastrikland",
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
                option: "Vastmanland",
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
                option: "Vastmanland",
                outcome: 'score',
                getTo: 20
            },
            {
                option: "Uppland",
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
                option: "Uppland",
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
                option: "Norrbotten",
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
                option: "Gastrikland",
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
                option: "Ändra",
                outcome: 'lose',
                getTo: 24
            },
            {
                option: "Ändra",
                outcome: 'lose',
                getTo: 24
            },
            {
                option: "Uppland",
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
                option: "Ändra",
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
                option: "Norrbotten",
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

runGame();

clearScoreButton.addEventListener('click', restartButton);

console.log(randQ);