/**
 * Fades the given element in 1 second.
 *
 * @element element to fade.
 */ 
function fade(element) {
	var op = 1;
	var timer = setInterval(function () {
		if (op <= 0) {
			element.style.opacity = 0;
			element.style.filter = "alpha(opacity=0)";
			clearInterval(timer);
			return;
		}
		element.style.opacity = op;
		element.style.filter = "alpha(opacity=" + op * 100 + ")";  // For people who use IE for some reason
		op -= .01;
	}, 10);
}

/**
 * Unfades the given element in 1 second.
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
		op += .01;
	}, 10);
}

window.onload = function(){
	document.getElementById("hide").addEventListener("click", function() {
		fade(document.getElementsByClass("full")[0]);
		unfade(document.getElementsByClass("small")[0]);
	});
	document.getElementById("show").addEventListener("click", function() {
		fade(document.getElementsByClass("small")[0]);
		unfade(document.getElementsByClass("full")[0]);
	});
};