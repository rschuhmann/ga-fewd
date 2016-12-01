
$("#color-button").on("click", function() {
  var redValue = $("input#red").val();
  console.log(redValue);
  var greenValue = $("input#green").val();
  console.log(greenValue);
  var blueValue = $("input#blue").val();
  console.log(blueValue);
  var combined = redValue + "," + greenValue + "," + blueValue;
  $("#colorful-text").text(combined)
  var combinedForCSS = "rgb(" + combined + ")";
  $("#wrapper").css("background-color", combinedForCSS);
});