var wordList = [
 "journey",
 "aerosmith",
 "metallica",
 "foreigner",
 "wham",
 "queen",
];

var isGameRunning = false;

var selectedWord;

var guesses = [];


$(document).on("keypress", function (x) {
    

    	if (isGameRunning) {
    		continueGame(x);
    	} else {
    		setupGame();
    	}

	}
);


var setupGame = function() {

	isGameRunning = true;

	selectedWord = wordList[Math.floor(Math.random() * wordList.length)];
	setupUnderscores(selectedWord);
}

var setupUnderscores = function(word) {

	var div = document.getElementById("underscores");

	var underscores = "";

	for(var i = 0; i < word.length; i++) {
		underscores = underscores + "_ ";
	}

	div.insertAdjacentHTML('beforeend', underscores);
}

var continueGame = function(x) {

	var c = String.fromCharCode(x.which);
	
	if(isValidLetter(x.which) && isValidGuess(c)) {
		append(c);
	}
}


var append = function(letter) {

	guesses.push(letter);

	var indexes = getAllIndexes(selectedWord, letter);

	if (indexes.length > 0) {
		correctGuess(letter, indexes);
	} else {
		incorrectGuess(letter);
	}
}


var correctGuess = function(letter, indexes) { //allows to replace multiple occurences of the same letter

	var div = document.getElementById("underscores");

	var currentSolution = div.innerText;

	for (var i = 0; i < indexes.length; i++) {

		currentSolution = replaceAt(currentSolution, indexes[i]*2, letter);
	}

	div.innerText = currentSolution;

}

function getAllIndexes(arr, val) {
    var indexes = [], i;
    for(i = 0; i < arr.length; i++)
        if (arr[i] === val)
            indexes.push(i);
    return indexes;
}

function replaceAt(s, n, t) {
    return s.substring(0, n) + t + s.substring(n + 1);
}

var incorrectGuess = function(letter) {

	var div = document.getElementById("guess");
	div.insertAdjacentHTML('beforeend', letter);
}


var isValidGuess = function(letter) {

	return guesses.indexOf(letter) === -1;
}

var isValidLetter = function(keycode) {

	if(keycode >= 65 && keycode <= 90) {
		return true;
	}

	if (keycode >= 97 && keycode <= 122) {
		return true;
	}

	return false;
}
	

	function PlayMusic(queen) {
		// body...
	
	self.location=("spotify:track:7tFiyTwD0nx5a1eklYtX2J")

}

