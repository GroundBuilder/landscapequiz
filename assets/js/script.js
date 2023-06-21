
// Import scenarios from another file.
import { scenarios } from "./scenarios.js";


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


runGame();

clearScoreButton.addEventListener('click', restartButton);
