# Blackjack

My goal here is to create an interactive single-player Blackjack card game that users, myself included, can play in their browser.

[Live link to finished site](https://oniakuma96.github.io/Milestone-2---Blackjack/)

![Mockup](/assets/images/amiresponsiveblackjackms2.png)

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

- As a user I want to play Blackjack. I click start game and play

- As a user I want to play Blackjack but I can't remember the rules. I click on the how to play button and read the rules

- As a user I am playing Blackjack by pressing start game. However looking at the hands dealt I realise I don't know how to play. I can navigate to the homescreen and read how to play.

- As a user I have noticed a bug in the game that I want to report. I click on Contact Us and fill the form in with my email and bug report. I click send and get alerted that my message has been sent

- As a user I want to request a new feature. I go to the Contact Us page and fill out the form with my email and message

### Wireframes

- These are the wireframes that I made for this project. Can be found in /assets/wireframes. Please note these were early plans I made before I started the development of the site and do not match the final product.

![Homepage Web](/assets/wireframes/aaastartgamescreenweb1920.png)

![Game Web](/assets/wireframes/bbbplaygamescreenweb1920.png)

![Rules Web](/assets/wireframes/cccrulesweb1920.png)

![Contact Web](/assets/wireframes/dddcontactweb1920.png)

![Homepage iPad](/assets/wireframes/aastartgamescreenipad.png)

![Game iPad](/assets/wireframes/bbplaygamescreenipad.png)

![Rules iPad](/assets/wireframes/ccrulesipad.png)

![Contact iPad](/assets/wireframes/ddcontactipad.png)

![Homepage iPhone](/assets/wireframes/astartgamescreeniphone.png)

![Game iPhone](/assets/wireframes/bplaygamescreeniphone.png)

![Rules iPhone](/assets/wireframes/crulesiphone.png)

![Contact iPhone](/assets/wireframes/dcontactiphone.png)

## Features

### Existing Features

- The Blackjack game itself.
    - Button for users to start the game.
    - How to play button takes users to how to play page.
    - Deck of cards with pictures for each card.
    - Dealer's hand, one card visible to player the other not, to allow the player to strategize.
    - Buttons for player choices, hit and stand.
    - Score keeping function to keep track of hands won by player and dealer.
    - Play again button allowing users to go again without resetting score or refreshing page.

- How to play modal activated by button

- Contact form to contact development team by providing an email and message.

### Features Left to Implement

- Betting system where the player can decide how much to wager for each hand from their chips.

- Difficulty setting allowing user to decide dealer difficulty from a selection of choices. A more advanced dealer could look at the player's hand and strategize. However traditionally Blackjack dealers can't do this and must simply hit on 16.

## Technologies Used

- [HTML](https://en.wikipedia.org/wiki/HTML)
    - For page content

- [CSS](https://en.wikipedia.org/wiki/CSS)
    - For styling page content

- [Javascript](https://www.javascript.com/)
    - For programming the game itself

- [jQuery](https://jquery.com/)
    - For simple DOM manipulation

- [Bootstrap v4.6](https://getbootstrap.com/)
    - For a website framework

- [Google fonts](https://fonts.google.com/)
    - For a variety of fonts

- [Font Awsome](https://fontawesome.com/)
    - For icons

- [EmailJs](https://www.emailjs.com/)
    - For automated email in contact form

- [GitHub Pages](https://pages.github.com/)
    - For deployment of my site. For full details check deployment section of readme

- [Tiny PNG](https://tinypng.com/)
    - For image compression

## Testing

To validate my code I used [W3 HTML validator](https://validator.w3.org/), [Jigsaw validator](https://jigsaw.w3.org/css-validator/), and [Esprima Syntax Validator](https://esprima.org/demo/validate.html)

I used Google Chrome browser on my desktop PC throughout the process of making this site so I know everything works well on that side of things.
I have tested the game and all other features using the inspect feature offered by Chrome too to test different screen sizes.
I have also tested on an iPad, a Macbook Air, and my mobile phone (Samsung Galaxy J3 2016)

- Testing the game
    - Clicked on start game button
    - Two cards dealt to player and dealer each
    - Blackjack feature works - if either player or dealer has a Blackjack the winner is decided and is draw if bother have a Blackjack
    - Hit feature works - extra cards added to hand and round ends if player goes bust
    - Stand feature - dealer correctly hits on 16
    - For the most part outcome of round is correct however there's a bug with aces where the game does not devalue them to 1 after sum of hand goes over 21 (check bugs discovered for more info)
    - Score is incremented correctly and will not reset once user clicks play again button

- Testing the contact form
    - Tried to submit without giving email and/or message and alerted that you must fill in those fields
    - After filling in correct fields you are alerted that your message has been sent and the boxes you filled in are reset to blank to indicated everything worked
    - You are alerted if your message failed to send

    - Here are some pictures of a simple test I ran for my contact form and automated email using EmailJs.
    - ![Contact form](/assets/images/testemailone.png)
    - ![Conformation](/assets/images/testemailtwo.png)
    - ![Email recieved](/assets/images/testemailthree.png)

- Testing user stories
    - As a user I want to play Blackjack. From the homepage I can click the play game button and begin playing.
    - As a user I want to play Blackjack but I can't remember the rules. From the homepage I can click the how to play button and read the rules on the modal which is brought to the front. Once I am ready I click the cross in the top right to exit and I can play the game.
    - As a user I am playing Blackjack by pressing start game. However looking at the hands dealt I realise I don't know how to play. I can navigate to the homescreen by clicking the home icon in the top left. Then I can read the rules by clicking the how to play button and bringing the modal to the front.
    - As a user I have noticed a bug in the game that I want to report. I see the alert at the bottom of the page and click where it tells me to click. I see some fields are required so I make sure to fill those out and I click submit. I see a conformation message that my message has been sent.

### Bugs discovered

- Bug in the game - the calculate sum of hand function doesn't correctly if the first card in hand is Ace. It should automatically change the value to 1 but will bust instead
    - Altered calculate sum of hand function from blackjack.js. Bug above is fixed but now a new bug is present where the game will not correctly bust the player sometimes. The issue is still when an ace is in hand.

## Deployment

- This project was deployed at [GitHub Pages](https://oniakuma96.github.io/Milestone-2---Blackjack/)

1 Open GitHub homepage and sign in

2 Go to the settings tab in my project's repository

3 Scrolled down to the GitHub Pages section

4 Selected source branch as master and published the site with this domain - https://oniakuma96.github.io/Milestone-2---Blackjack/

## Credits

### Code

- buildDeck function in blackjack.js from - https://www.thatsoftwaredude.com/content/6196/coding-a-card-deck-in-javascript

- increment player/dealer score functions taken from - https://github.com/Code-Institute-Solutions/JS-Essentials-Project/blob/master/13-Tidying%20Up/script.js

- script for sending email with EmailJs - https://github.com/Code-Institute-Solutions/InteractiveFrontendDevelopment-Resume/blob/master/03-SendingEmailsUsingEmailJS/06-sending_emails/assets/js/sendEmail.js

### Content

### Media

- [images for cards](http://acbl.mybigcommerce.com/52-playing-cards/)

### Acknowledgements