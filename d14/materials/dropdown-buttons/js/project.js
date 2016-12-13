$(".combobox").on("click" , function() {
	console.log("drop");
	$(this).siblings(".dropdown").toggle();
})

$(".dropdown-menu").on("mouseleave",function(){
	console.log("Hello");
	$(".dropdown").hide();
})