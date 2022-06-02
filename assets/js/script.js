const gameResult = document.getElementById('result');
const gameChoices = document.querySelectorAll('button');

let pChoice;
let cChoice;
let winner = "";
let won = 0;
let lose = 0;

// get player choice and run game
// credit to Ania Kubów: https://www.youtube.com/watch?v=RwFeg0cEZvQ&t=449s
gameChoices.forEach(gameChoice => gameChoice.addEventListener('click', (e) => {
	pChoice = e.target.id;
	getComputerChoice();
	compareChoices();
	gameScore();
	endGame();
}));

// generate random computer choice
function getComputerChoice() {
	const randomChoice = Math.floor(Math.random() * 5);

	switch (randomChoice) {
		case 0:
			cChoice = 'rock';
			break;
		case 1:
			cChoice = 'paper';
			break;
		case 2:
			cChoice = 'scissors';
			break;
		case 3:
			cChoice = 'lizard';
			break;
		case 4:
			cChoice = 'spock';
	}
}

// compare choices and determine the winner
function compareChoices() {
	if (pChoice === cChoice) {
		winner = "Stalemate, you picked the same!";
	}
	if (pChoice === 'rock' && cChoice === 'paper') {
		winner = "Rock is covered by Paper, you lose!";
		lose++;
	}
	if (pChoice === 'rock' && cChoice === 'scissors') {
		winner = "Rock crushes Scissors, you win!";
		won++;
	}
	if (pChoice === 'rock' && cChoice === 'lizard') {
		winner = "Rock crushes the Lizard, you win!";
		won++;
	}
	if (pChoice === 'rock' && cChoice === 'spock') {
		winner = "Rock is vaporized by Spock, you lose!";
		lose++;
	}
	if (pChoice === 'paper' && cChoice === 'rock') {
		winner = "Paper covers Rock, you win!";
		won++;
	}
	if (pChoice === 'paper' && cChoice === 'scissors') {
		winner = "Paper is cut by Scissors, you lose!";
		lose++;
	}
	if (pChoice === 'paper' && cChoice === 'lizard') {
		winner = "Paper is eaten by the Lizard, you lose!";
		lose++;
	}
	if (pChoice === 'paper' && cChoice === 'spock') {
		winner = "Paper disproves Spock, you win!";
		won++;
	}
	if (pChoice === 'scissors' && cChoice === 'rock') {
		winner = "Scissors gets smashed by Rock, you lose!";
		lose++;
	}
	if (pChoice === 'scissors' && cChoice === 'paper') {
		winner = "Scissors cuts Paper, you win!";
		won++;
	}
	if (pChoice === 'scissors' && cChoice === 'lizard') {
		winner = "Scissors decapitates lizard, you win!";
		won++;
	}
	if (pChoice === 'scissors' && cChoice === 'spock') {
		winner = "Scissors are smashed by Spock, you lose!";
		lose++;
	}
	if (pChoice === 'lizard' && cChoice === 'rock') {
		winner = "Your lizard is crushed by Rock, you lose!";
		lose++;
	}
	if (pChoice === 'lizard' && cChoice === 'paper') {
		winner = "Your lizard eats the paper, you win!";
		won++;
	}
	if (pChoice === 'lizard' && cChoice === 'scissors') {
		winner = "Your lizard is decapitated by Scissors, you lose!";
		lose++;
	}
	if (pChoice === 'lizard' && cChoice === 'spock') {
		winner = "Your lizard poisons Spock, you win!";
		won++;
	}
	if (pChoice === 'spock' && cChoice === 'rock') {
		winner = "Spock vaporizes rock, you win!";
		won++;
	}
	if (pChoice === 'spock' && cChoice === 'paper') {
		winner = "Spock is disproved by Paper, you lose!";
		lose++;
	}
	if (pChoice === 'spock' && cChoice === 'scissors') {
		winner = "Spock smashed scissors, you win!";
		won++;
	}
	if (pChoice === 'spock' && cChoice === 'lizard') {
		winner = "Spock is poisoned by the Lizard, you lose!";
		lose++;
	}
	gameResult.innerHTML = winner;
}

// declare who wins the round
function gameScore() {
	document.getElementById('won').innerHTML = won;
	document.getElementById('lose').innerHTML = lose;
}

// declare who wins the game and reset
function endGame() {
	if (won === 10) {
		document.getElementById('result').innerHTML = 'You won the game, click to play again!';
		document.getElementById('won').innerHTML = (won = 0);
		document.getElementById('lose').innerHTML = (lose = 0);
	}
	if (lose === 10) {
		document.getElementById('result').innerHTML = 'You lost the game, click to play again!';
		document.getElementById('won').innerHTML = (won = 0);
		document.getElementById('lose').innerHTML = (lose = 0);
	}
}


// Taken from https://www.w3schools.com/howto/howto_css_modal_images.asp
// Opens up rules box using an image
var modal = document.getElementById("rules-modal");

// Get the image and insert it inside the modal
var img = document.getElementById("rules-game");
var modalImg = document.getElementById("image");
var captionText = document.getElementById("rules-header");
img.onclick = function() {
	modal.style.display = "block";
	modalImg.src = this.src;
	captionText.innerHTML = this.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("rules-close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
};