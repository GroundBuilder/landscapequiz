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

// --  w3school modal
// Get the modal
let beginning = document.getElementById("quiz_info_box");

// Get the button that opens the modal
let btnOpenRules = document.getElementById("open_rules_btn");

// Get the <span> element that closes the modal
/*let viewRules = document.getElementsByClassName("quiz_rules_info")[0];*/
let closeWindow = document.getElementById("start_btn_quiz");

// When the user clicks the button, open the modal 
btnOpenRules.onclick = function() {
    beginning.style.display = "block";
}

// When the user clicks on Begin Quiz button(x), close the modal
closeWindow.onclick = function() {
    beginning.style.display = "none";
} 

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == game_background) {
        quiz_info_box.style.display = "none";
    }
  } 






const showrules = document.getElementsByClassName(".start_quiz_btn button");
const info_box = document.getElementsByClassName(".quiz_info_box")

showrules.oncklick = () => {
    info_box.classList.add("activeInfo");

}

function runGame() {
    displayScenario('starthere');
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

function displayScenario (scenarioIndex) {
        let scenario = scenarios.find(scenario => scenario.id === scenarioIndex);
}
function restarButton() {

}


// Creat an array to hold the picture and qusetion and answers.

let scenarios = [
    {
        id: 'starthere',
        background: "url('../images/upplands_vapen.svg.png')",
        message: "Picture this. It's a beautiful sunny day. You have no plans or responsibilities. Life is good. You decide to go to the zoo. What could go wrong?", 
        response: [
            {
                option: "Uppland",
                getTo: 1
            },
        ],
    },
    {
        id: 1,
        message: `Witch landscape does this shield belong to?`,
        background: "url('../images/vastmanlands_vapen.svg.png')",
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