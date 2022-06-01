const playerChoice = document.getElementById('player');
const computerChoice = document.getElementById('computer');
const gameResult = document.getElementById('result');
const gameChoices = document.querySelectorAll('button');

let pChoice;
let cChoice;
let won = 0;
let lose = 0;
let result

gameChoices.forEach(gameChoice => gameChoice.addEventListener('click', (e) => {
    pChoice = e.target.id
    playerChoice.innerHTML = pChoice
    getComputerChoice()
    compareChoices()
    gameScore()
    endGame()
}))

function getComputerChoice () {
    const randomChoice = Math.floor(Math.random() * 5)

    switch(randomChoice) {
        case 0:
            cChoice = 'rock';
            break;
        case 1:
            cChoice = 'paper';
            break;
        case 2:
            cChoice = 'scissors';
        case 3:
            cChoice = 'lizard';
        case 4:
            cChoice = 'spock';
    }
    computerChoice.innerHTML = cChoice
};

function compareChoices() {
    if (pChoice === cChoice) {
        winner = "Stalemate!"   
}
    if (pChoice === 'rock'  && cChoice === 'paper') {
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
    gameResult.innerHTML = winner
};

function gameScore() {
    document.getElementById('won').innerHTML = won;
    document.getElementById('lose').innerHTML = lose;
};
    
function endGame() {
    if (won === 10) {
            document.getElementById('result').innerHTML = 'You win the game';
            document.getElementById('won').innerHTML = (won = 0);
            document.getElementById('lose').innerHTML = (lose = 0);
    }
    if (lose === 10) {
            document.getElementById('result').innerHTML = 'You lost the game';
            document.getElementById('won').innerHTML = (won = 0);
            document.getElementById('lose').innerHTML = (lose = 0);
    }  
};