$(document).ready(function(){
	function openResume() {
		$(".resume").animate({left: "0px"}, 700);
	}
	function closeResume() {
		$(".resume").animate({left: "-800px"}, 700);
	}
	$("#tab").click(function() {
		if ($(this).hasClass("closed")) {
			openResume();
			$(this).text("Click Here To Close My Resume");
			$(this).removeClass("closed");
			$(this).addClass("opened");
		}
		else if ($(this).hasClass("opened")) {
			closeResume();
			$(this).text("Click Here To View My Resume");
			$(this).removeClass("opened");
			$(this).addClass("closed");
		}
	});
});