var emojiNumberCharactersMain = function (input) {
  // Complete the Base: Emoji Drawing Number of Characters exercise below with emojiNumberCharactersMain as the main function.
  var outcome = "";
  for (var counter = 0; counter < input; counter += 1) {
    outcome += "😂";
  }
  return outcome;
};

var emojiSquareMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
  var outcome = "";

  for (var row = 0; row < input; row += 1) {
    for (var column = 0; column < input; column += 1) {
      outcome += "😂";
    }
    outcome += "<br>";
  }
  return outcome;
};

var emojiTriangleMain = function (input) {
  // Complete the Comfortable: Emoji Drawing Triangle exercise below with emojiTriangleMain as the main function.
  var outcome = "";

  for (var row = 0; row < input; row += 1) {
    for (var column = 0; column < row + 1; column += 1) {
      outcome += "😂";
    }
    outcome += "<br>";
  }
  return outcome;
};

var emojiOutlineSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Outline Square exercise below with emojiOutlineSquareMain as the main function.
  var outcome = "";

  for (var row = 0; row < input; row += 1) {
    for (var column = 0; column < input; column += 1) {
      if (row == 0 || row == input - 1 || column == 0 || column == input - 1) {
        outcome += "☀️";
      } else {
        outcome += "💧";
      }
    }
    outcome += "<br>";
  }
  return outcome;
};

var emojiCenterSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Center Square exercise below with emojiCenterSquareMain as the main function.
  var outcome = "";
  if (input % 2 == 0) {
    return "Please enter an odd number for side length";
  } else {
    for (var row = 0; row < input; row += 1) {
      for (var column = 0; column < input; column += 1) {
        if (
          row == 0 ||
          row == input - 1 ||
          column == 0 ||
          column == input - 1
        ) {
          outcome += "☀️";
        } else if (
          row == Math.floor(input / 2) &&
          column == Math.floor(input / 2)
        ) {
          outcome += "🌈";
        } else {
          outcome += "💧";
        }
      }
      outcome += "<br>";
    }
    return outcome;
  }
};

var multiDiceBaseMain = function (input) {
  // Complete the Base: Multi-Dice Game exercise below with multiDiceBaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiRoundMain = function (input) {
  // Complete the More Comfortable: Multi-Round Multi-Dice Game exercise below with multiDiceMultiRoundMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceTwoPlayerMain = function (input) {
  // Complete the More Comfortable: Two Player Multi-Round Multi-Dice Game exercise below with multiDiceTwoPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
