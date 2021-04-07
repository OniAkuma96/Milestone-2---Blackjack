# Blackjack

My goal here is to create an interactive single-player Blackjack card game that users, myself included, can play in their browser.

## UX

This website is for users who want to play Blackjack in their browser. The game will be visually simple but attractive to the eye and interactive. 

This game will feature a player, user, and dealer,
computer opponent. The game will use a single deck of cards with two being dealt to the player, both visible, and two being dealt to the dealer, one visible and one hidden, per hand.
Upon dealing the hand the player will have a choice to hit, add another card to hand, or stand. However other options could be added later, such as double down, user is dealt one
additional card and their bet is doubled (user can't hit after double down), and split, user splits their pair of cards into two seperate hands.

The goal of the game is to get the combined score of their hand as close to 21 without going over. A hand consisting of an Ace and a card with a value of 10 (10, J, Q, K) is
a Blackjack and will result in the hand being won. The player's hand is judged against the dealer's hand and the best hand will win the round. The game will feature
a score keeping system, player hands won and dealer hands won, 
but implementing a betting system, where the player has a pot of chips and a choice of how much to wager, could be a good feature to implement in the future.

The computer dealer will be programmed to hit until 16 then stand. A more complex dealer could be programmed with difficulty options available to the user in the future.

The site will feature three pages, a play area where the user can play Blackjack, and a How to Play page detailing the rules to the user, and a contact page where users can
submit a form to send an automated email to the dev team. The site will be minimalistic only displaying relevant info to the user and will use green colours like the card
tables at casinos to try recreate the feel of a casino. I will use images for the deck of cards.

### User Stories

- As a user...

### Wireframes

- Wireframes for this project can be found in the [Wireframes folder](assets/images/wireframes)

## Features

### Existing Features

- Navigation bar to move between the site's pages.

- The Blackjack game itself.
    - Button for users to start the game.
    - Deck of cards with pictures for each card.
    - Dealer's hand, one card visible to player the other not, to allow the player to strategize.
    - Buttons for player choices, hit and stand.
    - Score keeping function to keep track of hands won by player and dealer.

- Contact form to contact development team by filling out the correct fields.

### Features Left to Implement

- Betting system where the player can decide how much to wager for each hand from their chips.

- Difficulty setting allowing user to decide dealer difficulty from a selection of choices.

## Technologies Used

- [HTML](https://en.wikipedia.org/wiki/HTML)

- [CSS](https://en.wikipedia.org/wiki/CSS)

- [Javascript](https://www.javascript.com/)

- [Bootstrap v4.6](https://getbootstrap.com/)

- [jQuery](https://jquery.com/)

- [Google fonts](https://fonts.google.com/)

- [EmailJs](https://www.emailjs.com/)

## Testing

### Bugs discovered

- Bug in the game - the calculate sum of hand function doesn't correctly value Aces as 1 when hand is above 21 so player/dealer will be bust when they shouldn't be.

## Deployment

## Credits

### Code

- buildDeck function in blackjack.js from - https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript

- increment player/dealer score functions taken from - https://github.com/Code-Institute-Solutions/JS-Essentials-Project/blob/master/13-Tidying%20Up/script.js

- script for sending email with EmailJs - https://github.com/Code-Institute-Solutions/InteractiveFrontendDevelopment-Resume/blob/master/03-SendingEmailsUsingEmailJS/06-sending_emails/assets/js/sendEmail.js

### Content

### Media

- [images for cards](http://acbl.mybigcommerce.com/52-playing-cards/)

### Acknowledgements