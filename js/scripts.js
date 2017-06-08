//Business logic here:
var roman = function(number) {

  var symbols = ["I", "V", "X", "L", "C", "D", "M"]

  if (number === 1) {
    return symbols[0];
  } else if (number === 5) {
    return symbols[1];
  } else if (number === 10) {
    return symbols[2];
  } else if (number === 50) {
    return symbols[3];
  } else if (number === 100) {
    return symbols[4];
  } else if (number === 500) {
    return symbols[5];
  } else if (number === 1000) {
    return symbols[6];
  } else {
    return "error";
  }
};










//Ui logic here:
$(document).ready(function() {
  $("form#romanNumeral").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#input").val());
    var result = roman(number);
    $("#result").text(result);
  });
});
