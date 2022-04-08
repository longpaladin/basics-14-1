var getRandomIndex = function (arrayLength) {
  // create a random number from zero to array length minus one.
  // this number is in the range from the first
  // index (zero) to the last index (array length minus one)
  var randomIndex = Math.floor(Math.random() * arrayLength);
  return randomIndex;
};

var array1 = [];
var gameMode = "input";

var madLibsAdjectivesMain = function (input) {
  // Complete the Base: Mad Libs Adjectives exercise below with madLibsAdjectivesMain as the main function.
  if (input == "input") {
    gameMode = "input";
    return "Input mode chosen";
  } else if (input == "create") {
    gameMode = "create";
    return "Create mode chosen";
  }

  if (gameMode == "input") {
    if (input == "") {
      return "Invalid input! Cannot be empty!";
    } else {
      array1.push(input);
      return `You have just added ${input} into the library of adjectives!`;
    }
  } else if (gameMode == "create") {
    var randomAdj = array1[getRandomIndex(array1.length)];

    var madLib =
      '"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ' +
      randomAdj +
      " wife.";

    return madLib;
  }
};

var madLibsInputCreateMain = function (input) {
  // Complete the Comfortable: Input and Create Mode exercise below with madLibsInputCreateMain as the main function.
};

var madLibsMultipleWordsMain = function (input) {
  // Complete the Comfortable: Input Multiple Words exercise below with madLibsMultipleWordsMain as the main function.
  if (input == "input") {
    gameMode = "input";
    return "Input mode chosen";
  } else if (input == "create") {
    gameMode = "create";
    return "Create mode chosen";
  }

  if (gameMode == "input") {
    if (input === "") {
      return "Invalid input! Cannot be empty!";
    } else {
      let spacebarPresent = false;
      for (let i = 0; i < input.length; i += 1) {
        if (input[i] === " ") {
          spacebarPresent = true;
          break;
        }
      }
      if (spacebarPresent) {
        let array2 = input.split(" ");
        for (let k = 0; k < array2.length; k += 1) {
          array1.push(array2[k]);
        }
        return `You have just added ${array2} into the library of adjectives!`;
      } else {
        array1.push(input);
        return `You have just added ${input} into the library of adjectives!`;
      }
    }
  } else if (gameMode === "create") {
    var randomAdj = array1[getRandomIndex(array1.length)];

    var madLib =
      '"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ' +
      randomAdj +
      " wife.";

    return madLib;
  }
};

var madLibsMultipleTypesMain = function (input) {
  // Complete the More Comfortable: Mad Libs Multiple Word Types exercise below with madLibsMultipleTypesMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsPopularMain = function (input) {
  // Complete the More Comfortable: Popular Mad Libs exercise below with madLibsPopularMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsSetsMain = function (input) {
  // Complete the More Comfortable: Sets of Mad Libs exercise below with madLibsSetsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
