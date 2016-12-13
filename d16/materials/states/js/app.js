var ny = {
  name: "New York",
  capital: "Albany",
  governor: "Andrew Cuomo",
  usSenators: ["Chuck Schumer", "Kirsten Gillibrand"]
}

var ct = {
  name: "Connecticut",
  capital: "Hartford",
  governor: "Dannel Malloy",
  usSenators: ["Richard Blumenthal", "Christopher S. Murphy"]
}
console.log(ny["name"]);

$("#ct").on("click", function() {
	$("h1").text(ct["name"])
	$("span.capital").text(ct["capital"])
	$(".governor").text(ct["governor"])
	$("#first-senator").text(ct["usSenators"][0])
	$("#second-senator").text(ct["usSenators"][1])
})

$("#ny").on("click", function() {
	$("h1").text(ny["name"])
	$("span.capital").text(ny["capital"])
	$(".governor").text(ny["governor"])
	$("#first-senator").text(ny["usSenators"][0])
	$("#second-senator").text(ny["usSenators"][1])
})