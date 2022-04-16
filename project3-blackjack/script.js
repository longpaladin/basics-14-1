var deck = [];
var card = {};
const values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
const suits = ["spade ♠️", "club ♣️", "heart ♥️", "diamond ♦️"];
const ranks = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];
const names = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King"
];

var gameMode = "start";
var dealerMoney = 100;
var playerMoney = 100;
var dealerHand = [];
var playerHand = [];
var playerBetThisRound = 0;
var playerHandTotalValue = 0;
var playerCurrentHandMessage = "";
var dealerHandTotalValue = 0;
var dealerCurrentHandMessage = "";

//generate deck function
var generateDeck = function () {
  for (let i = 0; i < suits.length; i += 1) {
    for (let j = 0; j < ranks.length; j += 1) {
      card.suit = suits[i];
      card.rank = ranks[j];
      card.name = names[j];
      card.value = values[j];
      deck.push(card);
      card = {};
    }
  }
};

//shuffle deck function
var shuffleDeck = function (numberOfCards) {
  for (let i = 0; i < numberOfCards + 50; i += 1) {
    var randomIndex1 = Math.floor(Math.random() * numberOfCards);
    var randomIndex2 = Math.floor(Math.random() * numberOfCards);
    var randomFirstCard = deck[randomIndex1];
    var randomSecondCard = deck[randomIndex2];
    deck[randomIndex1] = randomSecondCard;
    deck[randomIndex2] = randomFirstCard;
  }
};

var main = function (input) {
  console.log(gameMode);
  // start round, generate deck and shuffle it
  if (gameMode === "start") {
    generateDeck();
    shuffleDeck(deck.length);
    dealerHand = [];
    playerHand = [];
    gameMode = "placebet";
  }

  // players place bet
  if (gameMode === "placebet") {
    gameMode = "betplaced";
    return `Deck has been created.<br><br>Dealer: $${dealerMoney}<br>Player: $${playerMoney}<br><br>Enter an amount to bet! It must be rounded off to the nearest dollar with no cents!`;
  }

  if (gameMode === "betplaced") {
    if (
      Number.isNaN(input) ||
      Number(input) !== Math.trunc(Number(input)) ||
      input === "" ||
      Number(input) > playerMoney
    ) {
      return "Number is Not a number or it has cents! Please input ONLY numbers and nearest dollar value!";
    } else {
      playerBetThisRound = Number(input);
      playerMoney -= playerBetThisRound;
      gameMode = "dealcards";
      return `Dealer: $${dealerMoney}<br>Player: $${playerMoney}<br><br>You have placed $${playerBetThisRound} as bet this round!`;
    }
  }

  // dealer gives 1st & 2nd card to each person, facing up except dealer's 2nd card
  if (gameMode === "dealcards") {
    dealerHand.push(deck.pop());
    playerHand.push(deck.pop());
    dealerHand.push(deck.pop());
    playerHand.push(deck.pop());

    // if player total 21, automatically win 1.5 times of bet amount and end round
    if (playerHand[0].value + playerHand[1].value === 21) {
      playerMoney += playerBetThisRound * 2.5;
      dealerMoney -= playerBetThisRound * 1.5;
      gameMode = "start";
      return `Player's hand:<br><br>1st card: ${playerHand[0].name} of ${
        playerHand[0].suit
      }<br>2nd card: ${playerHand[1].name} of ${
        playerHand[1].suit
      }<br><br>Blackjack! You have won $${(playerBetThisRound * 1.5).toFixed(
        2
      )}`;
    } else {
      gameMode = "hitorstand";
      return `Dealer's hand:<br><br>1st card: ${dealerHand[0].name} of ${dealerHand[0].suit}<br>2nd card: <b>SECRET!!!</b> <br><br>Player's hand:<br><br>1st card: ${playerHand[0].name} of ${playerHand[0].suit}<br>2nd card: ${playerHand[1].name} of ${playerHand[1].suit}<br><br>Choose 'hit' or 'stand'`;
    }
  }

  if (gameMode === "hitorstand") {
    // check for invalid input
    console.log(input.toLowerCase());
    if (input.toLowerCase() === "hit") {
      gameMode = "hit";
    } else if (input.toLowerCase() === "stand") {
      gameMode = "stand";
    } else {
      return "Invalid input! Make sure you type in 'hit' or 'stand' ONLY!";
    }
  }

  //if player enters 'hit', add card
  if (gameMode === "hit") {
    if (input.toLowerCase() === "stand") {
      gameMode = "stand";
      return "Player has chosen 'stand'!";
    }
    playerHand.push(deck.pop());
    console.log(playerHand);
    playerHandTotalValue = 0;
    for (let i = 0; i < playerHand.length; i += 1) {
      playerHandTotalValue += playerHand[i].value;
      console.log("Player Hand ", playerHandTotalValue);
    }

    //no limit to additional cards until higher than 21, you BUST and dealer gets your bet
    //possibility of bust
    if (playerHandTotalValue > 21) {
      dealerMoney += playerBetThisRound;
      gameMode = "start";
      return `Player BUST! Dealer gets $${playerBetThisRound}`;
    }

    //if no bust
    if (playerHandTotalValue <= 21) {
      playerCurrentHandMessage = "Player's hand:<br><br>";
      for (let i = 0; i < playerHand.length; i += 1) {
        playerCurrentHandMessage += `${playerHand[i].name} of ${playerHand[i].suit}<br>`;
      }
      playerCurrentHandMessage += "<br>";
      return `${playerCurrentHandMessage}Continue to 'hit' or 'stand'?`;
    }
  }

  //if player enters 'stand'
  if (gameMode === "stand") {
    gameMode = "dealer";
  }

  if (gameMode === "dealer") {
    dealerHandTotalValue = 0;
    for (let i = 0; i < dealerHand.length; i += 1) {
      dealerHandTotalValue += dealerHand[i].value;
    }
    // if <=16, dealer have to take another card
    if (dealerHandTotalValue < 17) {
      dealerHand.push(deck.pop());
      dealerHandTotalValue = 0;
      for (let i = 0; i < dealerHand.length; i += 1) {
        dealerHandTotalValue += dealerHand[i].value;
      }

      //if dealer takes card and bust...every player still alive win twice their bet
      if (dealerHandTotalValue > 21) {
        dealerMoney -= playerBetThisRound * 2;
        playerMoney += playerBetThisRound * 2;
        gameMode = "start";
        return `Dealer takes an extra card and...BUST! Player gets $${playerBetThisRound}`;
      }

      //calculate player hand value
      playerHandTotalValue = 0;
      for (let i = 0; i < playerHand.length; i += 1) {
        playerHandTotalValue += playerHand[i].value;
      }

      //compare to see dealer win or player win
      // after dealer takes card, if dealer >= player...dealer wins!
      if (dealerHandTotalValue >= playerHandTotalValue) {
        dealerCurrentHandMessage = "Dealer's hand:<br><br>";
        for (let i = 0; i < dealerHand.length; i += 1) {
          dealerCurrentHandMessage += `${dealerHand[i].name} of ${dealerHand[i].suit}<br>`;
        }
        dealerCurrentHandMessage += "<br><br>";
        dealerMoney += playerBetThisRound;
        gameMode = "start";
        return `${dealerCurrentHandMessage}Dealer wins! Player loses $${playerBetThisRound}`;
      }
      // after dealer takes card, if dealer < player
      else {
        dealerCurrentHandMessage = "Dealer's hand:<br><br>";
        for (let i = 0; i < dealerHand.length; i += 1) {
          dealerCurrentHandMessage += `${dealerHand[i].name} of ${dealerHand[i].suit}<br>`;
        }
        dealerCurrentHandMessage += "<br><br>";
        dealerMoney -= playerBetThisRound * 2;
        playerMoney += playerBetThisRound * 2;
        gameMode = "start";
        return `${dealerCurrentHandMessage}Player wins! Player wins $${playerBetThisRound}`;
      }
    }
    // if >= 17, dealer stand
    else {
      //calculate player hand value
      playerHandTotalValue = 0;
      for (let i = 0; i < playerHand.length; i += 1) {
        playerHandTotalValue += playerHand[i].value;
      }

      //compare to see dealer win or player win
      // dealer don't take card, if player > dealer...player wins twice their bet!
      if (dealerHandTotalValue < playerHandTotalValue) {
        dealerCurrentHandMessage = "Dealer's hand:<br><br>";
        for (let i = 0; i < dealerHand.length; i += 1) {
          dealerCurrentHandMessage += `${dealerHand[i].name} of ${dealerHand[i].suit}<br>`;
        }
        dealerCurrentHandMessage += "<br><br>";
        dealerMoney -= playerBetThisRound * 2;
        playerMoney += playerBetThisRound * 2;
        gameMode = "start";
        return `${dealerCurrentHandMessage}Player wins! Player wins $${playerBetThisRound}`;
      } else {
        dealerCurrentHandMessage = "Dealer's hand:<br><br>";
        for (let i = 0; i < dealerHand.length; i += 1) {
          dealerCurrentHandMessage += `${dealerHand[i].name} of ${dealerHand[i].suit}<br>`;
        }
        dealerCurrentHandMessage += "<br><br>";
        dealerMoney += playerBetThisRound;
        gameMode = "start";
        return `${dealerCurrentHandMessage}Dealer wins! Player loses $${playerBetThisRound}`;
      }
    }
  }

  // A is 1 or 11. IF you have 2 aces, only one of it is 11
  // restart round with new bet
};
