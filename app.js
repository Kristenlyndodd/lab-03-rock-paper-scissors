// import functions and grab DOM elements
import { didUserWin } from './utils.js';

const playButton = document.getElementById('play-button');
const winsSpan = document.getElementById('total-wins');
const lossesSpan = document.getElementById('total-losses');
const drawsSpan = document.getElementById('total-draws');
const showResults = document.getElementById('show-results');

// initialize state
let wins = 0;
let losses = 0;
let draws = 0;


// set event listeners 
playButton.addEventListener('click', () => {
  
    const selected = document.querySelector('input[type=radio]:checked');
    const userChoice = selected.value;
  
    let computerChoice = 'scissors';
    let randomNum = Math.ceil(Math.random() * 3);
    if (randomNum === 1) {
        computerChoice = 'rock';
    } else if (randomNum === 2) {
        computerChoice = 'paper';
    } else if (randomNum === 3) {
        computerChoice = 'scissors';
    }
    const result = didUserWin(userChoice, computerChoice);

    if (result === 'draw') {
        showResults.textContent = `The Computer picked ${computerChoice}, it is a Draw`;
        draws++;
    } else if (result === 'loss') {
        showResults.textContent = `The Computer picked ${computerChoice}, you Lost, try again!`;
        losses++;
    } else if (result === 'win') {
        showResults.textContent = `The Computer picked ${computerChoice}, you Won!`;
        wins++;
    }
    winsSpan.textContent = wins;
    lossesSpan.textContent = losses;
    drawsSpan.textContent = draws;






    

    
});