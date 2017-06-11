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
      result = result + "MMM";
    }

    if (string.charAt(hundredsPlace) == 9) {
      result = result + "CM";
    } else if (string.charAt(hundredsPlace) == 8) {
      result = result + "DCCC";
    } else if (string.charAt(hundredsPlace) == 7) {
      result = result + "DCC";
    } else if (string.charAt(hundredsPlace) == 6) {
      result = result + "DC";
    } else if (string.charAt(hundredsPlace) == 5) {
      result = result + "D";
    } else if (string.charAt(hundredsPlace) == 4) {
      result = result + "CD";
    } else if (string.charAt(hundredsPlace) == 3) {
      result = result + "CCC";
    } else if (string.charAt(hundredsPlace) == 2) {
      result = result + "CC";
    } else if (string.charAt(hundredsPlace) == 1) {
      result = result + "C";
    }
    
    $("#result").text(result);
  });
});
