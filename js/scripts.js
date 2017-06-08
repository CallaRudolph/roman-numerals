$(document).ready(function() {
  $("form#romanNumeral").submit(function(event) {
    event.preventDefault();
    var number = $("#input").val();
    var result = roman(number);
    $("#result").text(result);
  });
});
