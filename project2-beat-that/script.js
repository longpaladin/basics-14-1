var playerTurn = "Start";
var player1HighScore = 0;
var player2HighScore = 0;
var player1TotalDiceValue;
var player2TotalDiceValue;
var dice1Value;
var dice2Value;
var arrayOutput = [];

var calculateTotalDiceValue = function () {
  var dice1 = Math.floor(Math.random() * 6 + 1);
  var dice2 = Math.floor(Math.random() * 6 + 1);
  var totalDiceValue;
  if (dice1 > dice2) {
    totalDiceValue = Number(String(dice1) + String(dice2));
  } else {
    totalDiceValue = Number(String(dice2) + String(dice1));
  }
  return [totalDiceValue, dice1, dice2];
};

var generateDice = function (numberOfDice) {
  var emoji = "";
  for (let i = 0; i < numberOfDice; i += 1) {
    emoji += "🎲";
  }
  return emoji;
};

var main = function (input) {
  if (playerTurn === "Start") {
    playerTurn = "Player1";
  } else if (playerTurn === "Player1") {
    playerTurn = "Player2";
  } else if (playerTurn === "Player2") {
    playerTurn = "Summary";
  } else if (playerTurn === "Summary") {
    playerTurn = "Player1";
  }

  if (playerTurn === "Player1") {
    arrayOutput = calculateTotalDiceValue();
    player1TotalDiceValue = arrayOutput[0];
    dice1Value = arrayOutput[1];
    dice2Value = arrayOutput[2];
    return `Welcome ${playerTurn}!<br><br>You rolled ${dice1Value} ${generateDice(
      dice1Value
    )} and ${dice2Value} ${generateDice(
      dice2Value
    )}!<br>Hence, your biggest number is ${player1TotalDiceValue}`;
  }

  if (playerTurn === "Player2") {
    arrayOutput = calculateTotalDiceValue();
    player2TotalDiceValue = arrayOutput[0];
    dice1Value = arrayOutput[1];
    dice2Value = arrayOutput[2];
    return `Welcome ${playerTurn}!<br><br>You rolled ${dice1Value} ${generateDice(
      dice1Value
    )} and ${dice2Value} ${generateDice(
      dice2Value
    )}!<br>Hence, your biggest number is ${player2TotalDiceValue}`;
  }

  if (playerTurn === "Summary") {
    player1HighScore += player1TotalDiceValue;
    player2HighScore += player2TotalDiceValue;
    if (player1HighScore > player2HighScore) {
      return `💯 Scoreboard 💯<br><br>Player 1 is leading!<br><br>Player 1: ${player1HighScore}<br>Player 2: ${player2HighScore}`;
    } else if (player1HighScore < player2HighScore) {
      return `💯 Scoreboard 💯<br><br>Player 2 is leading!<br><br>Player 1: ${player1HighScore}<br>Player 2: ${player2HighScore}`;
    } else {
      return `It is a tie! SOOOOOO exciting!<br>Player 1: ${player1HighScore}<br>Player 2: ${player2HighScore}`;
    }
  }
};

const btn = document.getElementsByClassName("container")[0];
const submitbtn = document.getElementById("submit-button");
var rollDiceSound = new Audio("wuerfelbecher.wav");
var cheerSound = new Audio("crowdcheer.wav");

let index = 0;

const colors = ["red", "orange", "yellow", "green", "blue", "violet", "purple"];

btn.addEventListener("click", function onClick() {
  btn.style.backgroundColor = colors[index];
  index = Math.floor(Math.random() * colors.length);

  if (playerTurn === "Player2") {
    rollDiceSound.currentTime = 0;
    rollDiceSound.play();
    submitbtn.innerHTML = "Show scoreboard!";
  } else if (playerTurn === "Summary") {
    cheerSound.currentTime = 0;
    cheerSound.play();
    submitbtn.innerHTML = "Roll Dice for Player 1!";
  } else if (playerTurn === "Player1") {
    rollDiceSound.currentTime = 0;
    rollDiceSound.play();
    submitbtn.innerHTML = "Roll Dice for Player 2!";
  }
});
