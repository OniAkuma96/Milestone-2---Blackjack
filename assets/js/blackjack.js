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

// clears the start game screen and deals hands

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

// takes the keys and values of card objects in hand arrays, builds string that corresponds to image name
// then displays hands

function displayHands(playerHand, dealerHand) {
    
    var cardJPGName1 = playerHand[0].cardValue + playerHand[0].suit + ".jpg";
    var cardJPGName2 = playerHand[1].cardValue + playerHand[1].suit + ".jpg";
    var dealerCardJPGName1 = dealerHand[0].cardValue + dealerHand[0].suit + ".jpg";

    $("#player-hand").html(`<img src="assets/images/deck_of_cards/${cardJPGName1}" height="200"><img src="assets/images/deck_of_cards/${cardJPGName2}" height="200">`);
    $("#dealer-hand").html(`<img src="assets/images/deck_of_cards/${dealerCardJPGName1}" height="200"><img src="assets/images/Red_back.jpg" class="" alt="" height="200">`)

    calculateSumOfHand(playerHand, dealerHand);
}

function calculateSumOfHand(playerHand, dealerHand) {

    for (var i = 0; i < 2; i++) {
        if (playerHand[i].cardValue > 10) {
            playerHand[i].cardValue = 10;
        } else if (playerHand[i].cardValue == 1) {
            playerHand[i].cardValue = 11;
        } else {
            playerHand[i].cardValue = playerHand[i].cardValue;
        }
    }

    var sumOfPlayerHand = playerHand[0].cardValue + playerHand[1].cardValue;

    if (sumOfPlayerHand > 21 && playerHand[0].cardValue == 11) {
        playerHand[0].cardValue = 1;
    }

    sumOfPlayerHand = playerHand[0].cardValue + playerHand[1].cardValue;

    console.log(sumOfPlayerHand);
} 

function checkForBlackjack(playerHand, dealerHand) {}

function incrementScore() {}

function hitHand() {}