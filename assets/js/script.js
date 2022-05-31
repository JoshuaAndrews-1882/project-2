const playerChoice = document.getElementById('player');
const computerChoice = document.getElementById('computer');
const result = document.getElementById('result');
const playerWin = document.getElementById('won');
const computerWin = document.getElementById('lost');
const gameChoices = document.querySelectorAll('button');

let pChoice;
let cChoice;
let won = 0;
let lost = 0;

gameChoices.forEach(gameChoice => gameChoice.addEventListener('click', (e) => {
    pChoice = e.target.id
    playerChoice.innerHTML = pChoice
}))