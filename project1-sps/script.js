//scissors paper stone game complete
var playerWinCount = 0;
var computerWinCount = 0;
var player;
var computer;

var computerWinRate = function () {
  let percentage = computerWinCount / (computerWinCount + playerWinCount);
  if (isNaN(percentage)) {
    percentage = 0;
  }
  return percentage * 100;
};

var playerWinRate = function () {
  let percentage = playerWinCount / (computerWinCount + playerWinCount);
  if (isNaN(percentage)) {
    percentage = 0;
  }
  return percentage * 100;
};

var message = function (outcome) {
  return `Computer plays ${computer} and human plays ${player}. It's a ${outcome}!<br><br>Computer win rate: ${computerWinRate().toFixed(
    2
  )}% <br>Player win rate: ${playerWinRate().toFixed(2)}%`;
};

var main = function (input) {
  // input validation
  if (input != "scissors" && input != "paper" && input != "stone") {
    return "Invalid input! Try again!";
  } else {
    // game starts here, get computer choice
    player = input;
    computer = Math.floor(Math.random() * 3);
    if (computer == 0) {
      computer = "scissors";
    } else if (computer == 1) {
      computer = "paper";
    } else {
      computer = "stone";
    }

    //comparison to determine who wins
    if (player == computer) {
      return message("draw");
    } else if (player == "scissors" && computer == "paper") {
      playerWinCount += 1;
      return message("win");
    } else if (player == "scissors" && computer == "stone") {
      computerWinCount += 1;
      return message("lose");
    } else if (player == "paper" && computer == "stone") {
      playerWinCount += 1;
      return message("win");
    } else if (player == "paper" && computer == "scissors") {
      computerWinCount += 1;
      return message("lose");
    } else if (player == "stone" && computer == "scissors") {
      playerWinCount += 1;
      return message("win");
    } else if (player == "stone" && computer == "paper") {
      computerWinCount += 1;
      return message("lose");
    }
  }
};
