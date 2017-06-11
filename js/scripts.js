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

    if (string.charAt(tensPlace) == 9) {
      result = result + "XC";
    } else if (string.charAt(tensPlace) == 8) {
      result = result + "LXXX";
    } else if (string.charAt(tensPlace) == 7) {
      result = result + "LXX";
    } else if (string.charAt(tensPlace) == 6) {
      result = result + "LX";
    } else if (string.charAt(tensPlace) == 5) {
      result = result + "L";
    } else if (string.charAt(tensPlace) == 4) {
      result = result + "XL";
    } else if (string.charAt(tensPlace) == 3) {
       result = result + "XXX";
    } else if (string.charAt(tensPlace) == 2) {
        result = result + "XX";
    } else if (string.charAt(tensPlace) == 1) {
      result = result + "X";
    }

    if (string.charAt(onesPlace) == 9) {
      result = result + "IX";
    } else if (string.charAt(onesPlace) == 8) {
      result = result + "VIII";
    } else if (string.charAt(onesPlace) == 7) {
      result = result + "VII";
    } else if (string.charAt(onesPlace) == 6) {
      result = result + "VI";
    } else if (string.charAt(onesPlace) == 5) {
       result = result + "V";
    } else if (string.charAt(onesPlace) == 4) {
      result = result + "IV";
    } else if (string.charAt(onesPlace) == 3) {
      result = result + "III";
    } else if (string.charAt(onesPlace) == 2) {
      result = result + "II";
    } else if (string.charAt(onesPlace) == 1) {
      result = result + "I";
    } else {
      result = "Please enter a number."
    }

    $("#result").text(result);
  });
});
