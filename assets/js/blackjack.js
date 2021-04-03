// Blackjack

// Once page has loaded add click event listener to start game button

$(document).ready(() => {
    $("#btn-start-game").click(runGame);
})

// buildDeck function taken from https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript
// builds deck of 52 cards with keys of suit and values of number

function buildDeck() {

    var suits = ["C", "D", "H", "S"];
    var cardNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

    var deck = new Array();

    for (var i = 0; i < suits.length; i++) {
        for (var x = 0; x < cardNumbers.length; x++) {
            var card = { cardValue: cardNumbers[x], suit: suits[i] };
            deck.push(card);
        }
    }
    return deck;
}

// clears the start game screen, deals hands, and displays

function runGame() {

    $(".start-game-container").addClass("d-none");
    $("#dealer-hand").removeClass("d-none");
    $(".score-choice-deck-container").removeClass("d-none");
    $("#player-hand").removeClass("d-none");
    dealInitialHands();
}

function dealHand(deck) {

    var hand = [];

    for (var i = 0; i < 2; i++) {
        var card = deck.pop();
        hand.push(card);
    }
    return hand;
}

// shuffles the deck and removes 4 cards, 2 for each hand

function dealInitialHands() {

    var deck = buildDeck();
    deck.sort(() => Math.random() - 0.5)

    var playerHand = dealHand(deck);
    var dealerHand = dealHand(deck);

    displayHands(playerHand, dealerHand, deck);
}

// builds string that corresponds to card image

function getCardJPGName(hand, cardNum) {

    var cardJPGName = hand[cardNum].cardValue + hand[cardNum].suit + ".jpg";
    return cardJPGName;
}

// displays initial hands and check both for blackjack

function displayHands(playerHand, dealerHand, deck) {

    var playerCardOneJPG = getCardJPGName(playerHand, 0);
    var playerCardTwoJPG = getCardJPGName(playerHand, 1);
    var dealerCardOneJPG = getCardJPGName(dealerHand, 0);

    $("#player-hand").html(`<img src="assets/images/deck_of_cards/${playerCardOneJPG}" height="200"><img src="assets/images/deck_of_cards/${playerCardTwoJPG}" height="200">`);
    $("#dealer-hand").html(`<img src="assets/images/deck_of_cards/${dealerCardOneJPG}" height="200"><img src="assets/images/Red_back.jpg" class="" alt="" height="200">`);

    var playerBlackjack = checkForBlackjackTest(playerHand);
    var dealerBlackjack = checkForBlackjackTest(dealerHand);

    if (playerBlackjack == true && dealerBlackjack == true) {
        console.log("Both player and dealer have blackjack. It's a push");
    } else if (playerBlackjack == true && dealerBlackjack == false) {
        console.log("Player wins with blackjack!");
        incrementPlayerScore();
    } else if (playerBlackjack == false && dealerBlackjack == true) {
        console.log("dealer wins with blackjack");
        incrementDealerScore();
    } else {
        hitOrStand(playerHand, dealerHand, deck);
    }
}

// checks a hand for blackjack (ace + card with value 10)

function checkForBlackjackTest(hand) {

    for (var i = 0; i < 2; i++) {
        if (hand[i].cardValue > 10) {
            hand[i].cardValue = 10;
        } else if (hand[i].cardValue == 1) {
            hand[i].cardValue = 11;
        }
    }

    var sumOfHand = hand[0].cardValue + hand[1].cardValue;

    if (sumOfHand > 21) {
        hand[0].cardValue = 1;
    }

    sumOfHand = hand[0].cardValue + hand[1].cardValue;

    if (sumOfHand == 21) {
        return true;
    } else {
        return false;
    }
}

// calculates the sum of all cards in player and dealer hands

function calculateSumOfHand(playerHand, dealerHand) {

    var playerHandTotal = 0;
    var dealerHandTotal = 0;

    for (var i = 0; i < playerHand.length; i++) {
        playerHandTotal += playerHand[i].cardValue;
    }

    for (var i = 0; i < dealerHand.length; i++) {
        dealerHandTotal += dealerHand[i].cardValue;
    }

    console.log("Player hand total is: " + playerHandTotal);
    console.log("Dealer hand total is: " + dealerHandTotal);
}

// both increment player/dealer score functions taken from - 
// this function accumulates hands won by player

function incrementPlayerScore() {

    var oldScore = $("#player-h-won").html();
    $("#player-h-won").html(++oldScore);
}

// accumulates hands won by dealer

function incrementDealerScore() {

    var oldScore = $("#dealer-h-won").html();
    $("#dealer-h-won").html(++oldScore);
}

// player choice hit or stand

function hitOrStand(playerHand, dealerHand, deck) {

    $(".choice-area").html(`<button type="button" class="btn btn-lg btn-primary" id="btn-player-hit">Hit</button><button type="button" class="btn btn-lg btn-primary" id="btn-player-stand">Stand</button>`);
    $("#btn-player-hit").click(() => {
        hitHand(playerHand, dealerHand, deck);
    });
}

// adds another card to hand

function hitHand(playerHand, dealerHand, deck) {
    
    var card = deck.pop();
    playerHand.push(card);
    
}

function displayHitCard(playerHand) {

    $("#player-hand").html();
}