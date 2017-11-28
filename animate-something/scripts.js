(function() {

	var wordArray = ["chocolate", "CSS", "SVG", "a bigass steak", "SMIL", "kittens", "vanilla javascript", "animation ..."],
			textContainer = document.getElementById('typetext');
	

	//a function that will go through each char, because we use a recursive function
	function typeOutWords(textIndex, n) {
		var text = wordArray[textIndex] || '';
		if ( n < text.length ) {
			textContainer.innerHTML = text.substring(0, n + 1);
			setTimeout(function() {
				typeOutWords(textIndex, n + 1)
			}, 200);
		} else {
		  backspaceText(textIndex, n);
		}
	}

	function backspaceText(textIndex, n) {
    var text = wordArray[textIndex] || '';
    if (n > 0) {
 		textContainer.innerHTML = text.substring(0, n - 1);
		setTimeout(function() {
			backspaceText(textIndex, n - 1)
		}, 100);     
    } else {
      typeOutWords(textIndex + 1, 0);
    }

	}

	function init() {
			typeOutWords(0, 0);
	}

	document.addEventListener('DOMContentLoaded', init);
})();