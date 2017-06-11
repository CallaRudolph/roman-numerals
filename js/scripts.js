//Business logic here:

//UI logic here:
$(document).ready(function() {
  $("form#romanNumeral").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("#input").val());
    var string = number.toString();
    var result = "";
    var thousandsPlace = ((string.length) - 4);
    var hundredsPlace = ((string.length) - 3);
    var tensPlace = ((string.length) - 2);
    var onesPlace = ((string.length) - 1);

    if (number >= 4000 || number <= 0) {
      result = "Number invalid, Roman Numerals only count from 1 to 3,999.";
    }
    // } else if (number == NaN) {
    //   result = "Please enter a number"
    // }
    if (string.charAt(thousandsPlace) == 1) {
      result = result + "M";
    } else if (string.charAt(thousandsPlace) == 2) {
      result = result + "MM";
    } else if (string.charAt(thousandsPlace) == 3) {
      result = result + "MMM"
    }

    $("#result").text(result);
  });
});
