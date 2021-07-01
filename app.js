// import functions and grab DOM elements
import { didUserWin } from './utils.js';

const playButton = document.getElementById('play');
const winsSpan = document.getElementById('total-wins');
const lossesSpan = document.getElementById('total-losses');

// initialize state
let wins = 0;
let losses = 0;
let randomNum = Math.ceil(Math.random() * 3);

console.log(didUserWin, winsSpan, lossesSpan, wins, losses, randomNum);

// set event listeners 
playButton.addEventListener('click', ()=>{

    // const selected = document.querySelector('input[type=radio]:checked');
    // const userChoice = selected.value;

    // let computerChoice = 'rock';
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state