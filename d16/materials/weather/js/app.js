

// user enters city
// grab city
// add city to url query in get.JSON
//return temperature as text in input

$("button").on("click", function() {
	var city = $("input").val();
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&apikey=2bc28f5215f31ed2862b4715102b9388", function(data) {
  		console.log(data);
  		var icon = data["weather"][0]["icon"];
  		console.log(icon);
  		$("span.temperature").text(data["main"]["temp"]);
  		$("img.icon").attr("src" , "http://openweathermap.org/img/w/"+ icon +".png");

	});
	//$("span.icon").text()
})