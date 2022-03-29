var lucky11Main = function (input) {
  // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.
  var guess = Number(input);
  var dice1 = Math.floor(Math.random() * 6 + 1);
  var dice2 = Math.floor(Math.random() * 6 + 1);
  var total = dice1 + dice2;

  if (guess === dice1 || guess === dice2 || total === 11) {
    return `Dice 1 is ${dice1} and Dice 2 is ${dice2} Total is ${total}. User wins!`;
  } else {
    return `Dice 1 is ${dice1} and Dice 2 is ${dice2} Total is ${total}. User loses!`;
  }
};

var hawkerFoodCategorisationMain = function (input) {
  // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.
  if (input == "chicken rice" || input == "nasi lemak") {
    return "Dish has RICE base";
  } else if (input == "hokkien mee" || input == "laksa") {
    return "Dish has NOODLE base";
  } else {
    return "Dish has OTHER base";
  }
};

var fourDSingleDigitMain = function (input) {
  // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.
  var digit1 = Math.floor(Math.random() * 10);
  var digit2 = Math.floor(Math.random() * 10);
  var digit3 = Math.floor(Math.random() * 10);
  var digit4 = Math.floor(Math.random() * 10);

  if (
    input == digit1 ||
    input == digit2 ||
    input == digit3 ||
    input == digit4
  ) {
    return `The 4 random digits are: ${digit1} ${digit2} ${digit3} ${digit4}. Player wins!`;
  } else {
    return `The 4 random digits are: ${digit1} ${digit2} ${digit3} ${digit4}. Player loses!`;
  }
};

var hawkerFoodRandomnessMain = function (input) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
  var randomDish = Math.floor(Math.random() * 6);

  if (input == "chicken rice" && randomDish == 0) {
    return "You got a free meal!";
  } else if (input == "roti prata" && randomDish == 1) {
    return "You got a free meal!";
  } else if (input == "nasi lemak" && randomDish == 2) {
    return "You got a free meal!";
  } else if (input == "hokkien mee" && randomDish == 3) {
    return "You got a free meal!";
  } else if (input == "bak kut teh" && randomDish == 4) {
    return "You got a free meal!";
  } else if (input == "laksa" && randomDish == 5) {
    return "You got a free meal!";
  } else {
    return "Sorry wrong guess! You still have to pay!";
  }
};

var fourDWinningRangeMain = function (input) {
  // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.
  var playerNumber = Number(input);
  var randomNumber = Math.floor(Math.random() * 10000);

  if (
    playerNumber < randomNumber + 1000 &&
    playerNumber > randomNumber - 1000
  ) {
    playerNumber = "0000".substr(String(playerNumber).length) + playerNumber;
    randomNumber = "0000".substr(String(randomNumber).length) + randomNumber;
    return `Player: ${playerNumber} Computer: ${randomNumber} Player wins!`;
  } else {
    playerNumber = "0000".substr(String(playerNumber).length) + playerNumber;
    randomNumber = "0000".substr(String(randomNumber).length) + randomNumber;
    return `Player: ${playerNumber} Computer: ${randomNumber} Player loses!`;
  }
};

var hawkerFoodOmakaseMain = function (input) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  var customerSelect = input;
  var completeOutput = "Uncle has prepared a selection of dishes for you!<br>";
  var riceList = ["chicken rice", "nasi lemak", "bak kut teh", "roti prata"];
  var noodleList = ["hokkien mee", "laksa", "beef hor fun", "roti prata"];
  var randomlyGeneratedList = [];

  if (customerSelect === "rice") {
    var randomDish1 = Math.floor(Math.random() * riceList.length);
    var randomDish2 = Math.floor(Math.random() * riceList.length);
    while (randomDish1 == randomDish2) {
      randomDish2 = Math.floor(Math.random() * riceList.length);
    }
    randomlyGeneratedList.push(riceList[randomDish1]);
    randomlyGeneratedList.push(riceList[randomDish2]);
    completeOutput += `The first dish is ${randomlyGeneratedList[0]}<br>And the second dish is ${randomlyGeneratedList[1]}<br>`;
  } else if (customerSelect == "noodle") {
    var randomDish1 = Math.floor(Math.random() * noodleList.length);
    var randomDish2 = Math.floor(Math.random() * noodleList.length);
    while (randomDish1 == randomDish2) {
      randomDish2 = Math.floor(Math.random() * noodleList.length);
    }
    randomlyGeneratedList.push(noodleList[randomDish1]);
    randomlyGeneratedList.push(noodleList[randomDish2]);
    completeOutput += `The first dish is ${randomlyGeneratedList[0]}<br>And the second dish is ${randomlyGeneratedList[1]}<br>`;
  } else {
    return "This BASE does not exist sorry!";
  }

  var checkDish = function (dish) {
    if (dish != "roti prata" && dish != "bak kut teh") {
      return dish;
    }
  };

  var filteredList = randomlyGeneratedList.filter(checkDish);

  if (filteredList.length > 0) {
    completeOutput += "Chilli sambal will be included";
  }

  return completeOutput;
};
