$(document).ready(function(){
	function nextBackground() {
		var currentBackground = $(".current-background");
		var nextBackground;
		if (currentBackground.is(":last-child")) {
			nextBackground = $(".background").first();
		}
		else {
			nextBackground = currentBackground.next();
		}
	
		currentBackground.fadeOut(3000);
		nextBackground.fadeIn(3000);
		
		currentBackground.removeClass("current-background");
		nextBackground.addClass("current-background");
	}
	setInterval(nextBackground, 7000);
});