// https://www.typescriptgamified.com/play/01-01-03-introduction-ch
import './styles.css';

const rockBtn = document.getElementById('rock');

if (rockBtn) {
    rockBtn.onclick = (ev: MouseEvent) => {
        const computerChoice = getComputerChoice();
        showResult('rock', computerChoice);
    }
}

const paperBtn = document.getElementById('paper');

if (paperBtn) {
    paperBtn.onclick = (ev: MouseEvent) => {
        const computerChoice = getComputerChoice();
        showResult('paper', computerChoice);
    }
}

const scissorsBtn = document.getElementById('scissors');

if (scissorsBtn) {
    scissorsBtn.onclick = (ev: MouseEvent) => {
        const computerChoice = getComputerChoice();
        showResult('scissors', computerChoice);
    }
}

// ----------------------------------------------
// First Quest:
// Implement the handler for the other buttons (paper and scissors)
// ----------------------------------------------

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function showResult(userChoice: string, computerChoice: string) {
    const choices = `Computer: ${computerChoice} - User: ${userChoice}`;
    
    if (userChoice === computerChoice) {
        alert(`It's a tie! \n${choices}`);
    }
    else if (userChoice == 'scissors') {
        if (computerChoice == 'rock') {
            alert(`Computer wins: ${choices}`)
        }
        alert(`User wins: ${choices}`)
    }
    else if (userChoice == 'paper') {
        if (computerChoice == 'scissors') {
            alert(`Computer wins: ${choices}`)
        }
        alert(`User wins: ${choices}`)
    }
    else if (userChoice == 'rock') {
        if (computerChoice == 'paper') {
            alert(`Computer wins: ${choices}`)
        }
        alert(`User wins: ${choices}`)
    }
    
    // ----------------------------------------------
    // Second Quest:
    // Finish implementing the showResult function
    // ----------------------------------------------
}

