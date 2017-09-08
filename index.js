// Original code for fade() and unfade() here: https://stackoverflow.com/questions/6121203/how-to-do-fade-in-and-fade-out-with-javascript-and-css

/**
 * Fades the given element in 3 seconds.
 *
 * @element element to fade.
 */ 
function fade(element) {
    var op = 1;
    var timer = setInterval(function () {
        if (op <= 0.001){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";  // For people who use IE for some reason
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
        if (op >= .999){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";  // For people who use IE for some reason
        op += (1/300);
    }, 10);
}

window.onload = function () {
    var backgrounds = document.getElementsByClassName('background');
	var backgrounds_idx = 0;
	
    var change_background = function() {
		var curr_background = document.getElementsByClassName('current-background');
		if (backgrounds_idx === (backgrounds.length - 1)) {
			backgrounds_idx = 0;
		}
		else {
			backgrounds_idx = backgrounds_idx + 1;
		}
		fade(curr_background[0]);
		unfade(backgrounds[backgrounds_idx]);
		
		curr_background[0].classList.remove('current-background');
		backgrounds[backgrounds_idx].classList.add('current-background');
    };
	
	window.setInterval(change_background, 7000);
};
