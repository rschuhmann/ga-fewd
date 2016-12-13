$(".one button").on("click", function() {
  $(".one ul").toggle();
});

$(".two button").on("click", function() {
  $(".two ul").toggle();
});

$("button").on("focusout", function() {
  $("ul").hide();
})