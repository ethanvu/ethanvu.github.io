/** 
 * Original code for fade() and unfade() here: 
 * https://stackoverflow.com/questions/6121203/how-to-do-fade-in-and-fade-out-with-javascript-and-css
 */

/**
 * Fades the given element in 3 seconds.
 *
 * @element element to fade.
 */ 
function fade(element) {
	var op = 1;
	var timer = setInterval(function () {
		if (op <= 0 || !document.hasFocus()) {
			element.style.opacity = 0;
			element.style.filter = "alpha(opacity=0)";
			clearInterval(timer);
			return;
		}
		element.style.opacity = op;
		element.style.filter = "alpha(opacity=" + op * 100 + ")";  // For people who use IE for some reason
		op -= (1/300);
	}, 10);
}

/**
 * Unfades the given element in 3 seconds.
 *
 * @element element to unfade.
 */ 
function unfade(element) {
	var op = 0;
	var timer = setInterval(function () {
		if (op >= 1|| !document.hasFocus()) {
			element.style.opacity = 1;
			element.style.filter = "alpha(opacity=100)";
			clearInterval(timer);
			return;
		}
		element.style.opacity = op;
		element.style.filter = "alpha(opacity=" + op * 100 + ")";  // For people who use IE for some reason
		op += (1/300);
	}, 10);
}

window.onload = function () {
	var backgrounds = document.getElementsByClassName("background");
	var backgrounds_idx = 0;
	var curr_background ;
	var next_background;
	
	function change_background() {
		curr_background = document.getElementsByClassName("current-background")
		if (backgrounds_idx === (backgrounds.length - 1)) {
			backgrounds_idx = 0;
		}
		else {
			backgrounds_idx = backgrounds_idx + 1;
		}
		next_background = backgrounds[backgrounds_idx];
		fade(curr_background[0]);
		unfade(next_background);
		
		curr_background[0].classList.remove("current-background");
		next_background.classList.add("current-background");
	};
	
	window.setInterval(change_background, 7000);
};
