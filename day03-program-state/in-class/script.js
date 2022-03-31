var secretWordBaseMain = function (input) {
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordTwiceRowMain = function (input) {
  // Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordXRowMain = function (input) {
  // Complete the Comfortable: Secret Word X in a Row exercise below with secretWordXRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var rollDice = function () {
  // produces a decimal between 0 and 6
  var randomDecimal = Math.random() * 6;

  // take off the decimal
  var randomInteger = Math.floor(randomDecimal);

  // it's a number from 0 - 5 ... add 1
  var diceNumber = randomInteger + 1;

  return diceNumber;
};

var withinNumber = Math.floor(Math.random() * 3 + 1);

var diceWithinMain = function (input) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.
  var randomDiceNumber = rollDice();
  var prevWithinNumber = withinNumber;

  if (
    input <= randomDiceNumber + withinNumber &&
    input >= randomDiceNumber - withinNumber
  ) {
    withinNumber = Math.floor(Math.random() * 3 + 1);
    return `Dice: ${randomDiceNumber}   Within: ${prevWithinNumber}   Player: ${input}    You win!`;
  } else {
    return `Dice: ${randomDiceNumber}   Within: ${prevWithinNumber}   Player: ${input}    You lose!`;
  }
};

var diceWithin2DiceMain = function (input) {
  // Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.
  var randomDiceNumber1 = rollDice();
  var randomDiceNumber2 = rollDice();
  var prevWithinNumber = withinNumber;

  if (
    (input <= randomDiceNumber1 + withinNumber &&
      input >= randomDiceNumber1 - withinNumber) ||
    (input <= randomDiceNumber2 + withinNumber &&
      input >= randomDiceNumber2 - withinNumber)
  ) {
    withinNumber = Math.floor(Math.random() * 3 + 1);
    return `Dice1: ${randomDiceNumber1}  Dice2: ${randomDiceNumber2}  Within: ${prevWithinNumber}   Player: ${input}    You win!`;
  } else {
    return `Dice1: ${randomDiceNumber1} Dice2: ${randomDiceNumber2} Within: ${prevWithinNumber}   Player: ${input}    You lose!`;
  }
};

var dice4DMain = function (input) {
  // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordTwice2Main = function (input) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
