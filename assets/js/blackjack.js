// Blackjack
// Once page has loaded add event listener to start game button

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btn-start-game").addEventListener("click", runGame);
})

// buildDeck function taken from https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript
// builds deck of 52 cards with keys of suit and values of number

function buildDeck() {
    var suits = ["C", "D", "H", "S"];
    var cardNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    var deck = new Array();

    for (var i = 0; i < suits.length; i++) {
        for (var x = 0; x < cardNumbers.length; x++) {
            var card = {cardValue: cardNumbers[x], suit: suits[i]};
            deck.push(card);
        }
    }
    return deck;
}

// clears the start game screen

function runGame() {
    $(".start-game-container").addClass("d-none");
    $("#dealer-hand").removeClass("d-none");
    $(".score-choice-deck-container").removeClass("d-none");
    $("#player-hand").removeClass("d-none");
    dealHands();
}

// shuffles the deck and removes 4 cards, 2 for each hand

function dealHands() {
    var playerHand = [];
    var dealerHand = [];

    var deck = buildDeck();
    deck.sort(() => Math.random() - 0.5)
    
    for (var i = 0; i < 2; i++) {
        var card = deck.pop();
        playerHand.push(card);
    }

    for (var i = 0; i < 2; i++) {
        var card = deck.pop();
        dealerHand.push(card);
    }
    displayHands(playerHand, dealerHand);
}

// takes the keys and values of card objects in hand arrays and builds string that corresponds to image name

function displayHands(playerHand, dealerHand) {
    for (i = 0; i < 2; i++) {
        var cardJPGName = playerHand[i].cardValue + playerHand[i].suit + ".jpg";
        var dealerCardJPGName = dealerHand[i].cardValue + dealerHand[i].suit + ".jpg";

        $("#player-hand").html(`<img src="assets/images/deck_of_cards/${cardJPGName}" height="200">`);
    }
}

function incrementScore() {}

function hitHand() {}