const playerChoice = document.getElementById('player');
const computerChoice = document.getElementById('computer');
const gameResult = document.getElementById('result');
const playerWin = document.getElementById('won');
const computerWin = document.getElementById('lost');
const gameChoices = document.querySelectorAll('button');

let pChoice;
let cChoice;
let won = 0;
let lost = 0;
let result

gameChoices.forEach(gameChoice => gameChoice.addEventListener('click', (e) => {
    pChoice = e.target.id
    playerChoice.innerHTML = pChoice
    getComputerChoice()
    compareChoices()
    
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
        winner = "You lose"
    }
    if (pChoice === 'rock' && cChoice === 'scissors') {
        winner = "You win"
    }
    if (pChoice === 'paper' && cChoice === 'rock') {
        winner = "You win"
    }
    if (pChoice === 'paper' && cChoice === 'scissors') {
        winner = "You lose"
    }
    if (pChoice === 'scissors' && cChoice === 'rock') {
        winner = "You lose"
    }
    if (pChoice === 'scissors' && cChoice === 'paper') {
        winner = "You win"
    }
    gameResult.innerHTML = winner
};