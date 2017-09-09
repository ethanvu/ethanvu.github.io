/**
 * Animates the resume to be visible.
 */
function openResume() {
	var elem = document.getElementsByClassName("resume");
    var pos = -800;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 0) {
            clearInterval(id);
        }
		else {
            pos++;
            elem.style.left = pos + 'px';
        }
    }
}

/**
 * Animates the resume to be hidden.
 */
function closeResume() {
	var elem = document.getElementsByClassName("resume");
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == -800) {
            clearInterval(id);
        }
		else {
            pos--;
            elem.style.left = pos + 'px';
        }
    }
}

window.onload = function() {
	var tab = document.getElementById("tab").
	tab.addEventListener("click", function() {
		if (tab.classList.contains("closed")) {
			openResume();
			tab.innerHTML = "Click Here To Close My Resume";
			tab.classList.remove("closed");
			tab.classList.add("opened");
		}
		else if (tab.classList.contains("opened")) {
			closeResume();
			tab.innerHTML = "Click Here To View My Resume";
			tab.classList.remove("opened");
			tab.classList.add("closed");
		}
	});
};