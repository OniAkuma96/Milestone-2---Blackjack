// Blackjack

// Once page has loaded add click event listener to start game button

$(document).ready(() => {
    $("#btn-start-game").click(runGame);
    $("#how-to-play-btn").click(() => {
        window.location.href="howtoplay.html";
    });
})

// buildDeck function taken from https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript
// builds deck of 52 cards with keys of suit and values of number

function buildDeck() {

    var suits = ["C", "D", "H", "S"];
    var cardNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    //var cardNumbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    var deck = new Array();

    for (var i = 0; i < suits.length; i++) {
        for (var x = 0; x < cardNumbers.length; x++) {
            var card = { cardValue: cardNumbers[x], suit: suits[i] };
            deck.push(card);
        }
    }
    return deck;
}

// clears the start game screen, deals hands

function runGame() {

    $(".start-game-container").addClass("d-none");
    $(".start-game-items-wrap").addClass("d-none");
    $("#dealer-hand").removeClass("d-none");
    $(".score-choice-deck-container").removeClass("d-none");
    $("#player-hand").removeClass("d-none");
    dealInitialHands();
}

// deals a hand of two cards from deck

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

    // shuffle the deck
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
    var dealerCardTwoJPG = getCardJPGName(dealerHand, 1);

    $("#player-hand").html(`<img src="assets/images/deck_of_cards/${playerCardOneJPG}" height="200"><img src="assets/images/deck_of_cards/${playerCardTwoJPG}" height="200">`);
    $("#dealer-hand").html(`<img src="assets/images/deck_of_cards/${dealerCardOneJPG}" height="200"><img src="assets/images/Red_back.jpg" class="" alt="" height="200">`);

    var playerBlackjack = checkForBlackjack(playerHand);
    var dealerBlackjack = checkForBlackjack(dealerHand);

    if (playerBlackjack == true && dealerBlackjack == true) {
        $("#dealer-hand").html(`<img src="assets/images/deck_of_cards/${dealerCardOneJPG}" height="200"><img src="assets/images/deck_of_cards/${dealerCardTwoJPG}" height="200">`);
        $(".choice-area").removeClass("d-flex");
        $(".choice-area").html(`<p>Both player and dealer have Blackjack. The hand is tied.</p><button type="button" class="btn btn-lg btn-primary d-block" id="btn-play-again">Play again</button>`);
    } else if (playerBlackjack == true && dealerBlackjack == false) {
        $("#dealer-hand").html(`<img src="assets/images/deck_of_cards/${dealerCardOneJPG}" height="200"><img src="assets/images/deck_of_cards/${dealerCardTwoJPG}" height="200">`);
        $(".choice-area").removeClass("d-flex");
        $(".choice-area").html(`<p>Player wins the hand with Blackjack!</p><button type="button" class="btn btn-lg btn-primary d-block" id="btn-play-again">Play again</button>`);
        incrementPlayerScore();
    } else if (playerBlackjack == false && dealerBlackjack == true) {
        $("#dealer-hand").html(`<img src="assets/images/deck_of_cards/${dealerCardOneJPG}" height="200"><img src="assets/images/deck_of_cards/${dealerCardTwoJPG}" height="200">`);
        $(".choice-area").removeClass("d-flex");
        $(".choice-area").html(`<p>Dealer wins the hand with Blackjack!</p><button type="button" class="btn btn-lg btn-primary d-block" id="btn-play-again">Play again</button>`);
        incrementDealerScore();
    } else {
        hitOrStand(playerHand, dealerHand, deck);
    }

    $("#btn-play-again").click(() => {
        
        $("#player-hand").html("");
        $("#dealer-hand").html("");
        $(".choice-area").html("");
        dealInitialHands();
    });
}

// checks a hand for blackjack (ace + card with value 10)

function checkForBlackjack(hand) {

    var sumOfHandBj = 0;

    for (var i = 0; i < 2; i++) {
        if (hand[i].cardValue >= 10) {
            sumOfHandBj += 10;
        } else if (hand[i].cardValue > 1 && hand[i].cardValue < 10) {
            sumOfHandBj += hand[i].cardValue;
        } else {
            if (sumOfHandBj == 11) {
                sumOfHandBj += 1;
            } else {
                sumOfHandBj += 11;
            }
        }
    }

    if (sumOfHandBj == 21) {
        return true;
    } else {
        return false;
    }
}

// returns the sum of a hand, auto ace will be 11 or 1 depending on the sum of the hand

function calculateSumOfHand(hand) {

    var sumOfHand = 0;
    var hasAnAce = hand.some(eachHand => eachHand.cardValue === 1);

    for (var i = 0; i < hand.length; i++) {
        if (hand[i].cardValue > 9) {
            sumOfHand += 10;
        } else if (hand[i].cardValue < 10 && hand[i].cardValue != 1) {
            sumOfHand += hand[i].cardValue;
        } else if (hand[i].cardValue == 1) {
            if (sumOfHand < 11) {
                sumOfHand += 11;
            } else if (sumOfHand > 10) {
                sumOfHand += 1;
            }
        }

        if (sumOfHand > 21 && hasAnAce) {
            sumOfHand -= 10;
        }
    }

    return sumOfHand;
}

// both increment player/dealer score functions taken from - https://github.com/Code-Institute-Solutions/JS-Essentials-Project/blob/master/13-Tidying%20Up/script.js
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

    $(".choice-area").addClass("d-flex");
    $(".choice-area").html(`<button type="button" class="btn btn-lg btn-primary btn-responsive" id="btn-player-hit">Hit</button><button type="button" class="btn btn-lg btn-primary btn-responsive" id="btn-player-stand">Stand</button>`);
    $("#btn-player-hit").click(() => {
        playerHand = hitHand(playerHand, deck);
        var hitCardJPGName = getCardJPGName(playerHand, playerHand.length - 1);
        $("#player-hand").append(`<img src="assets/images/deck_of_cards/${hitCardJPGName}" height="200">`);
        var playerTotal = calculateSumOfHand(playerHand);
        if (playerTotal >= 21) {
            dealerHand = hitDealerUpToSixteen(dealerHand, deck);
            calculateWinner(playerHand, dealerHand);
        }
    });
    $("#btn-player-stand").click(() => {
        dealerHand = hitDealerUpToSixteen(dealerHand, deck);
        calculateWinner(playerHand, dealerHand);
    });
}

// adds another card to hand from deck

function hitHand(hand, deck) {
    
    var card = deck.pop();
    hand.push(card);
    return hand;
}

// hits the dealer hand until sum is equal to or greater than 17

function hitDealerUpToSixteen(dealerHand, deck) {

    var dealerCardOneJPG = getCardJPGName(dealerHand, 0);
    var dealerCardTwoJPG = getCardJPGName(dealerHand, 1);
    $("#dealer-hand").html(`<img src="assets/images/deck_of_cards/${dealerCardOneJPG}" height="200"><img src="assets/images/deck_of_cards/${dealerCardTwoJPG}" height="200">`);

    var dealerTotal = calculateSumOfHand(dealerHand);
    while (dealerTotal <= 16) {
        dealerHand = hitHand(dealerHand, deck);
        var dealerHitCard = getCardJPGName(dealerHand, dealerHand.length - 1);
        $("#dealer-hand").append(`<img src="assets/images/deck_of_cards/${dealerHitCard}" height="200">`);
        dealerTotal = calculateSumOfHand(dealerHand);
    }
    return dealerHand;
}

// calculates the winner of the hand and increments correct score

function calculateWinner(playerHand, dealerHand) {

    var playerTotal = calculateSumOfHand(playerHand);
    var dealerTotal = calculateSumOfHand(dealerHand);

    if (playerTotal > 21 && dealerTotal > 21) {
        $(".choice-area").removeClass("d-flex");
        $(".choice-area").html(`<p>Player score is ${playerTotal}, dealer score is ${dealerTotal}. Both player and dealer are bust, the hand is a tie.</p>`);
    } else if (playerTotal <= 21 && dealerTotal > 21) {
        $(".choice-area").removeClass("d-flex");
        $(".choice-area").html(`<p>Player score is ${playerTotal}, dealer score is ${dealerTotal}. Dealer is bust, player wins!</p>`);
        incrementPlayerScore();
    } else if (playerTotal > 21 && dealerTotal <= 21) {
        $(".choice-area").removeClass("d-flex");
        $(".choice-area").html(`<p>Player score is ${playerTotal}, dealer score is ${dealerTotal}. Player is bust, dealer wins!</p>`);
        incrementDealerScore();
    } else if (playerTotal <= 21 && dealerTotal <= 21) {
        if (playerTotal == dealerTotal) {
            $(".choice-area").removeClass("d-flex");
            $(".choice-area").html(`<p>Player score is ${playerTotal}, dealer score is ${dealerTotal}. The hand is tied.</p>`);
        } else if (playerTotal > dealerTotal) {
            $(".choice-area").removeClass("d-flex");
            $(".choice-area").html(`<p>Player score is ${playerTotal}, dealer score is ${dealerTotal}. Player wins the hand!</p>`);
            incrementPlayerScore();
        } else if (dealerTotal > playerTotal) {
            $(".choice-area").removeClass("d-flex");
            $(".choice-area").html(`<p>Player score is ${playerTotal}, dealer score is ${dealerTotal}. Dealer wins the hand!</p>`);
            incrementDealerScore();
        }
    }

    $(".choice-area").append(`<button type="button" class="btn btn-lg btn-primary d-block btn-responsive" id="btn-play-again">Play again</button>`);
    $("#btn-play-again").click(() => {
        
        $("#player-hand").html("");
        $("#dealer-hand").html("");
        $(".choice-area").html("");
        dealInitialHands();
    });
}