var main = function (input) {
  var distanceInKm = input;
  var distanceInM;
  var power = -9;
  var value = parseFloat(distanceInKm, 10) * 1000000000000;
  if (value > 0) {
    while (value >= 10) {
      value /= 10;
      console.log(value);
      power += 1;
    }
  }
  distanceInM =
    input +
    " kilometers is equal to " +
    value +
    " x 10<sup>" +
    power +
    "</sup> meters";
  var myOutputValue = distanceInM;
  return myOutputValue;
};
