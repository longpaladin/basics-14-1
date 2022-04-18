var deck = [];
var card = {};
const values = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
const suits = ["Spade ♠️", "Club ♣️", "Heart ♥️", "Diamond ♦️"];
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
var playerChoice = "";

//generate deck function
var generateDeck = function () {
  for (let i = 0; i < suits.length; i += 1) {
    for (let j = 0; j < values.length; j += 1) {
      card.suit = suits[i];
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

//display dealer or player hand function
var displayHand = function (person, hand) {
  var message = `${person}'s hand:<br><br>`;
  for (let i = 0; i < hand.length; i += 1) {
    message += `${hand[i].name} of ${hand[i].suit}<br>`;
  }
  message += "<br><br>";
  return message;
};

//calculate dealer or player hand value. A is 1 or 11. IF you have 2 aces, only one of it is 11. IF ace is 1 makes value < 21, then do it!
var calculateHandValue = function (hand) {
  let totalValue = 0;
  let numberOfAce = 0;
  for (let i = 0; i < hand.length; i += 1) {
    totalValue += hand[i].value;
    if (hand[i].value === 11) {
      numberOfAce += 1;
    }
  }
  if (numberOfAce > 1) {
    let numberOfAceAdjustment = (numberOfAce - 1) * 10;
    totalValue -= numberOfAceAdjustment;
    if (totalValue - 10 <= 21) {
      totalValue -= 10;
    }
  }
  return totalValue;
};

var probability = function (remainingDeck) {
  var cardsCounter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < remainingDeck.length; i += 1) {
    switch (remainingDeck[i].name) {
      case "Ace":
        cardsCounter[0] += 1;
        break;
      case "2":
        cardsCounter[1] += 1;
        break;
      case "3":
        cardsCounter[2] += 1;
        break;
      case "4":
        cardsCounter[3] += 1;
        break;
      case "5":
        cardsCounter[4] += 1;
        break;
      case "6":
        cardsCounter[5] += 1;
        break;
      case "7":
        cardsCounter[6] += 1;
        break;
      case "8":
        cardsCounter[7] += 1;
        break;
      case "9":
        cardsCounter[8] += 1;
        break;
      case "10":
        cardsCounter[9] += 1;
        break;
      case "Jack":
        cardsCounter[10] += 1;
        break;
      case "Queen":
        cardsCounter[11] += 1;
        break;
      case "King":
        cardsCounter[12] += 1;
        break;
      default:
        break;
    }
  }
  var probMessage =
    "Probability of getting each of the cards remaining in deck:<br><br>";

  for (let j = 0; j < cardsCounter.length; j += 1) {
    var cardProbability = (cardsCounter[j] / remainingDeck.length) * 100;
    probMessage += `${names[j]}: ${cardProbability.toFixed(2)}%<br>`;
  }

  return probMessage;
};

//code below this line is for DOM manipulation
var buttonsContainer = document.getElementById("buttons-container");
var mainButton = document.getElementById("submit-button");
mainButton.style.display = "block";
var hitButton = document.createElement("button");
hitButton.innerHTML = "Hit!";
var standButton = document.createElement("button");
standButton.innerHTML = "Stand!";

var hitButtonClick = function () {
  playerChoice = "h";
  var input = document.querySelector("#input-field");
  // Store the output of main() in a new variable
  var result = main();

  // Display result in output element
  var output = document.querySelector("#output-div");
  output.innerHTML = result;
};

var standButtonClick = function () {
  playerChoice = "s";
  var input = document.querySelector("#input-field");
  // Store the output of main() in a new variable
  var result = main();

  // Display result in output element
  var output = document.querySelector("#output-div");
  output.innerHTML = result;
};

hitButton.addEventListener("mouseover", () => {
  hitButton.innerHTML = "You sure won't BUST???";
});
hitButton.addEventListener("mouseout", () => {
  hitButton.innerHTML = "Hit!";
});
hitButton.addEventListener("click", hitButtonClick);
standButton.addEventListener("mouseover", () => {
  standButton.innerHTML = "Low risk! Wise choice! Or is it???";
});
standButton.addEventListener("mouseout", () => {
  standButton.innerHTML = "Stand!";
});
standButton.addEventListener("click", standButtonClick);

if (gameMode === "start") {
  mainButton.innerHTML = "Start Game!";
}

//this is the main blackjackgame
var main = function (input) {
  console.log(gameMode);
  // start round, generate deck and shuffle it
  if (gameMode === "start") {
    playerChoice = "";
    deck = [];
    generateDeck();
    shuffleDeck(deck.length);
    dealerHand = [];
    playerHand = [];
    gameMode = "placebet";
    mainButton.innerHTML = "Bet!";
    return `Deck has been created.<br><br>Dealer: $${dealerMoney}<br>Player: $${playerMoney}<br><br>Enter an amount to bet! Cannot be empty! It must be rounded off to the nearest dollar with no cents!`;
  }

  // players place bet
  if (gameMode === "placebet") {
    if (
      Number.isNaN(input) ||
      Number(input) !== Math.trunc(Number(input)) ||
      input === "" ||
      Number(input) > playerMoney
    ) {
      return "There is no input, or input is not a number or it has cents! Please input ONLY whole numbers!";
    } else {
      gameMode = "betplaced";
    }
  }

  if (gameMode === "betplaced") {
    playerBetThisRound = Number(input);
    playerMoney -= playerBetThisRound;
    gameMode = "dealcards";
    mainButton.innerHTML = "Deal Cards!";
    return `Dealer: $${dealerMoney}<br>Player: $${playerMoney}<br><br>You have placed $${playerBetThisRound} as bet this round!`;
  }

  // dealer gives 1st & 2nd card to each person, facing up except dealer's 2nd card
  if (gameMode === "dealcards") {
    dealerHand.push(deck.pop());
    playerHand.push(deck.pop());
    dealerHand.push(deck.pop());
    playerHand.push(deck.pop());

    // if player total 21, automatically win 1.5 times of bet amount and end round
    if (playerHand[0].value + playerHand[1].value === 21) {
      dealerCurrentHandMessage = displayHand("Dealer", dealerHand);
      playerCurrentHandMessage = displayHand("Player", playerHand);
      playerMoney += playerBetThisRound * 2.5;
      dealerMoney -= playerBetThisRound * 1.5;
      gameMode = "start";
      return `Player's hand:<br><br>${playerHand[0].name} of ${
        playerHand[0].suit
      }<br>${playerHand[1].name} of ${
        playerHand[1].suit
      }<br><br>Blackjack! You have won $${(playerBetThisRound * 1.5).toFixed(
        2
      )}`;
    } else {
      gameMode = "hitorstand";
      mainButton.style.display = "none";
      buttonsContainer.appendChild(hitButton);
      buttonsContainer.appendChild(standButton);
      return `Dealer's hand:<br><br> ${dealerHand[0].name} of ${
        dealerHand[0].suit
      }<br><b>SECRET!!!</b>(but you can find out using hint below)<br><br>Player's hand:<br><br>${
        playerHand[0].name
      } of ${playerHand[0].suit}<br>${playerHand[1].name} of ${
        playerHand[1].suit
      }<br><br>${probability(deck)}<br>Choose 'h' for 'hit' or 's' for 'stand'`;
    }
  }

  if (gameMode === "hitorstand") {
    if (playerChoice === "h") {
      gameMode = "hit";
    } else if (playerChoice === "s") {
      gameMode = "stand";
      buttonsContainer.removeChild(hitButton);
      buttonsContainer.removeChild(standButton);
      mainButton.style.display = "block";
      mainButton.innerHTML = "Revealed! Start again!";
    } else {
      return "Invalid input! Make sure you type in 'h' or 's' ONLY!";
    }
  }

  //if player enters 'hit', add card
  if (gameMode === "hit") {
    if (playerChoice === "s") {
      gameMode = "stand";
      buttonsContainer.removeChild(hitButton);
      buttonsContainer.removeChild(standButton);
      mainButton.style.display = "block";
      mainButton.innerHTML = "Reveal cards!";
      return "Player has chosen 'stand'!";
    }
    playerHand.push(deck.pop());
    playerHandTotalValue = calculateHandValue(playerHand);

    //no limit to additional cards until higher than 21, you BUST and dealer gets your bet
    //possibility of bust
    if (playerHandTotalValue > 21) {
      dealerCurrentHandMessage = displayHand("Dealer", dealerHand);
      playerCurrentHandMessage = displayHand("Player", playerHand);
      dealerMoney += playerBetThisRound;
      gameMode = "start";
      buttonsContainer.removeChild(hitButton);
      buttonsContainer.removeChild(standButton);
      mainButton.style.display = "block";
      mainButton.innerHTML = "BUST! Start again!";
      return `${dealerCurrentHandMessage}${playerCurrentHandMessage}Player BUST! Dealer gets $${playerBetThisRound}`;
    }

    //if no bust
    if (playerHandTotalValue <= 21) {
      dealerCurrentHandMessage = displayHand("Dealer", dealerHand);
      playerCurrentHandMessage = displayHand("Player", playerHand);
      return `${dealerCurrentHandMessage}${playerCurrentHandMessage}Continue to 'h' for 'hit' or 's' for 'stand'?`;
    }
  }

  //if player enters 'stand'
  if (gameMode === "stand") {
    dealerHandTotalValue = calculateHandValue(dealerHand);
    // if <17, dealer have to take another card until at least 17
    while (dealerHandTotalValue < 17) {
      dealerHand.push(deck.pop());
      dealerHandTotalValue = calculateHandValue(dealerHand);
    }

    //if dealer takes card and bust...every player still alive win twice their bet
    if (dealerHandTotalValue > 21) {
      dealerCurrentHandMessage = displayHand("Dealer", dealerHand);
      playerCurrentHandMessage = displayHand("Player", playerHand);
      dealerMoney -= playerBetThisRound * 2;
      playerMoney += playerBetThisRound * 2;
      gameMode = "start";
      mainButton.innerHTML = "Start again!";
      return `Dealer takes extra card(s) and...<br><br>${dealerCurrentHandMessage}BUST! Player gets $${playerBetThisRound}`;
    }

    //calculate player hand value
    playerHandTotalValue = calculateHandValue(playerHand);

    // compare to see dealer win or player win
    // after dealer takes card/stand, if dealer > player...dealer wins! Else player wins! Else draw!
    if (dealerHandTotalValue > playerHandTotalValue) {
      dealerCurrentHandMessage = displayHand("Dealer", dealerHand);
      playerCurrentHandMessage = displayHand("Player", playerHand);
      dealerMoney += playerBetThisRound;
      gameMode = "start";
      mainButton.innerHTML = "Start again!";
      return `${dealerCurrentHandMessage}${playerCurrentHandMessage}Dealer wins! Player loses $${playerBetThisRound}`;
    } else if (dealerHandTotalValue < playerHandTotalValue) {
      dealerCurrentHandMessage = displayHand("Dealer", dealerHand);
      playerCurrentHandMessage = displayHand("Player", playerHand);
      dealerMoney -= playerBetThisRound * 2;
      playerMoney += playerBetThisRound * 2;
      gameMode = "start";
      mainButton.innerHTML = "Start again!";
      return `${dealerCurrentHandMessage}${playerCurrentHandMessage}Player wins! Player wins $${playerBetThisRound}`;
    } else {
      dealerCurrentHandMessage = displayHand("Dealer", dealerHand);
      playerCurrentHandMessage = displayHand("Player", playerHand);
      playerMoney += playerBetThisRound;
      gameMode = "start";
      mainButton.innerHTML = "Start again!";
      return `${dealerCurrentHandMessage}${playerCurrentHandMessage}It's a draw!`;
    }
  }

  // restart round with new bet
};

// things to add in

// if got time, generate probability of getting the next card of remaining deck
// if got time, add in DOM buttons: hit & stand, renaming of single button name based on gameMode
// add in sound effect
// add in colours
