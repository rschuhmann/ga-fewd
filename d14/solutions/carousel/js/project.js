$("#left").on("click", function() {
  var current = $("img.selected")
  var number = parseInt(current.attr("id"));
  current.removeClass("selected");
  if (number === 1) {
    var prev = 4;
  } else {
    var prev = number - 1;
  }
  $("#" + prev).addClass("selected");
  $("span#number").text(prev);
});

$("#right").on("click", function() {
  var current = $("img.selected")
  var number = parseInt(current.attr("id"));
  current.removeClass("selected");
  if (number === 4) {
    var next = 1;
  } else {
    var next = number + 1;
  }
  $("#" + next).addClass("selected");
  $("span#number").text(next);
});