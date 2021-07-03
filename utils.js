export function didUserWin(userChoice, computerChoice) {
    
    if (userChoice === computerChoice) {
        return 'draw';
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
        return 'loss';
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        return 'loss';
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
        return 'loss';
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        return 'win';
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return 'win';
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return 'win';
    }   
}