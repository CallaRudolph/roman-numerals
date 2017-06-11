//Business logic here:
// var thousandsPlace = ((string.length) - 4);
// var hundredsPlace = ((string.length) - 3);
// var tensPlace = ((string.length) - 2);
// var onesPlace = ((string.length) - 1);





//UI logic here:
$(document).ready(function() {
  $("form#romanNumeral").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#input").val());
    var string = number.toString();
    var result = "";

    if (number >= 4000 || number <= 0) {
      result = "Number invalid, Roman Numerals only count from 1 to 3,999."
    }
    // var result = roman(number);
    $("#result").text(result);
  });
});
