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

// Get the button that opens the modal rules
let btnOpenRules = document.getElementById("open_rules_btn");

let openQuiz = document.getElementById("game_area_box")

// Get the <span> element that closes the modal rules/
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
    if (event.target == beginning) {
        quiz_info_box.style.display = "none";
    }
} 