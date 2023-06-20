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


const { scenarios } = require('./scenarios.js');

let quizText = document.getElementById("game_box");

let quizButton = document.getElementById("btn_holder");

let bgImage = document.getElementById("quiz_img");


// This game function to call scenarios and response options for the game as required
// was modified from youtube
// https://www.youtube.com/watch?v=R1S_NhKkvGA of "Web Dev Simplified"


function runGame() {
    displayQuiz(randQ);
    displayScores();

}

let clearScoreButton = document.getElementById('restart_quiz_btn');

function displayQuiz (scenarioIndex) {
    let quiz = scenarios.find(quiz => quiz.id === scenarioIndex);
    

    quizText.textContent = quiz.question;

    bgImage.innerHTML += "<img id='delete_img' alt='quiz image' src=" + quiz.background + ">";


    while (quizButton.firstChild) {
        quizButton.removeChild(quizButton.firstChild);
        //-- document.getElementById('delete_img').remove(); //to take one picture off, not use yet
        //-- parent.removeChild(child); //to take one picture off, not use yet
    }

    quiz.response.forEach(respond => {
        
        let quizButtons = document.createElement('button');

        // -- let child = document.getElementById('delete_img'); // To take one picture off, not use yet
        
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



runGame();

clearScoreButton.addEventListener('click', restartButton);

console.log(randQ);