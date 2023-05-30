/*  0 = rock
    1 = scissors
    2 = paper
*/

// const button_1 = document.getElementById("btn-1");

function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

function addScoreTo(winner) {
    let newComputerScore;
    let newPlayerScore;

    if (winner === 'player') {
        const playerCurrentScore = document.getElementById('player-score').innerHTML; //get the current score
        newPlayerScore = +playerCurrentScore + 1;
        document.getElementById('player-score').innerHTML = newPlayerScore;// update the element score
    } else if (winner === 'computer') {
        const computerCurrentScore = document.getElementById('computer-score').innerHTML; //get the current score
        newComputerScore = +computerCurrentScore + 1;
        document.getElementById('computer-score').innerHTML = newComputerScore;// update the element score
    }

    if (newComputerScore === 5) {
        alert("Too bad! Computer has won the game");
    } else if (newPlayerScore === 5) {
        alert("Congrats! You won the game!");
    }

}


function playRound(playerSelection) {
    
    let computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        alert("Tie!");
    }

    switch (playerSelection) { 
        case 0: 
            if (computerSelection === 1) {
                alert("You Win! Rock beats Scissors");
                addScoreTo('player');
            } else if (computerSelection === 2) {
                alert("You Lose! Scissors beat Rock");
                addScoreTo('computer');
            }
            break;
        case 1:
            if (computerSelection === 0) {
                alert("You Lose! Rock beats Scissors");
                addScoreTo('computer');
            } else if (computerSelection === 2) {
                alert("You Win! Scissors beat Paper");
                addScoreTo('player');
            }
            break;
        case 2: 
            if (computerSelection === 0) {
                alert("You Win! Paper beats Rock");
                addScoreTo('player');
            } else if (computerSelection === 1) {
                alert("You Lose! Scissors beat Paper");
                addScoreTo('computer');                
            }
            break;
    }
}

const buttonRock = document.querySelector('#btn-rock');
const buttonScissors = document.querySelector('#btn-scissors');
const buttonPaper = document.querySelector('#btn-paper');
buttonRock.addEventListener('click', () => {playRound(0); });
buttonScissors.addEventListener('click', () => {playRound(1); });
buttonPaper.addEventListener('click', () => {playRound(2); });