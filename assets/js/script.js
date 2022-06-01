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
    const randomChoice = Math.floor(Math.random() * 3)

    switch(randomChoice) {
        case 0:
            cChoice = 'rock';
            break;
        case 1:
            cChoice = 'paper';
            break;
        case 2:
            cChoice = 'scissors';
    }
    computerChoice.innerHTML = cChoice
};

function compareChoices() {
    if (pChoice === cChoice) {
        winner = "It's a draw"   
}
    if (pChoice === 'rock'  && cChoice === 'paper') {
        winner = "You lose";
        lose++;
    }
    if (pChoice === 'rock' && cChoice === 'scissors') {
        winner = "You win";
        won++;
    }
    if (pChoice === 'paper' && cChoice === 'rock') {
        winner = "You win";
        won++;
    }
    if (pChoice === 'paper' && cChoice === 'scissors') {
        winner = "You lose";
        lose++;
    }
    if (pChoice === 'scissors' && cChoice === 'rock') {
        winner = "You lose";
        lose++;
    }
    if (pChoice === 'scissors' && cChoice === 'paper') {
        winner = "You win";
        won++;
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
        document.getElementById('won').innerHTML = 0;
        document.getElementById('lose').innerHTML = 0;
    }
    if (lose === 10) {
        document.getElementById('result').innerHTML = 'You lost the game';
        document.getElementById('won').innerHTML = 0;
        document.getElementById('lose').innerHTML = 0;
    }  
};