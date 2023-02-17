console.log("Connected to the index.html")
// Wait for the DOM to finish loading before running the game.
//Get the answer button elements nad add event listeners to them.

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
});


function runGame() {

}

function checkAnswers() {

}

function incrementScore(){

}

function incrementWorngAnswer() {

}

function incrementProgressBar(){

}

function displayQuizQuestion() {

}

function restarButton() {

}


// Creat an array to hold the picture and qusetion and answers.