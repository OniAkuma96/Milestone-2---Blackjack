// Blackjack
// Once page has loaded add event listener to start game button

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn-start-game").addEventListener("click", runGame);
})

function runGame() {
    $(".start-game-container").addClass("d-none");
    $("#dealer-hand").removeClass("d-none");
    $(".score-choice-deck-container").removeClass("d-none");
    $("#player-hand").removeClass("d-none");
}

function dealHands() {}

function incrementScore() {}

function displayHands() {}

function hitHand() {}