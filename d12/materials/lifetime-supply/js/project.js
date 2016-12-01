//
//When the button is clicked: 
// Grab current Age
// Grab planned death age
// Subtract current age from death age
// multiple result by 365
// grab totalDays
// grab drink type 
// grab number drinks per day  
// multiple by totalDays
// show drink and totalDrinks

$("#click-me").on("click", function() {
	var currentAge = $("input#age").val();
	console.log(currentAge);
	var deathAge = $("input#max-age").val();
	console.log(deathAge);
	var drinkType = $("#item").val();
	var dailyDrinks = $("input#num-per-day").val();
	var totalDrinks = (deathAge - currentAge) * 365 * dailyDrinks;
	$("#solution").text(totalDrinks.toLocaleString());
	$("#drink").text(drinkType);
}) 