$(document).ready(function(){
	$("#hide").click(function() {
		$(".full").fadeTo(1000, 0);
		$(".small").fadeTo(1000, 1);
	});
	$("#show").click(function() {
		$(".small").fadeTo(1000, 0);
		$(".full").fadeTo(1000, 1);
	});
});