const gameStats = { 
    playerScore: 0,
    computerScore: 0,
    round: 0
};

//Get button and result region nodes
const results = document.querySelector('#results');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

//Named functions so that button event listeners can be added and removed
function playRoundRock() { playRound('Rock', getComputerChoice()) };
function playRoundPaper() { playRound('Paper', getComputerChoice()) };
function playRoundScissors() { playRound('Scissors', getComputerChoice()) };

resetGame();

function resetGame() {
    //Clear all displayed data for previous game
    while (results.firstChild) {
        results.removeChild(results.lastChild);
    }

    //Add listeners to buttons and style buttons to appear active
    rockBtn.addEventListener('click', playRoundRock);
    paperBtn.addEventListener('click', playRoundPaper);
    scissorsBtn.addEventListener('click', playRoundScissors);

    rockBtn.style.backgroundColor = 'white';
    paperBtn.style.backgroundColor = 'white';
    scissorsBtn.style.backgroundColor = 'white';

    //Reset game stats
    gameStats.playerScore = 0; 
    gameStats.computerScore = 0;
    gameStats.round = 0;
}

//Assumes playerSelection is 'Rock', 'Paper', or 'Scissors'.
function playRound(playerSelection, computerSelection) {
    const roundInfo = document.createElement('p');
    gameStats.round++;
    roundInfo.textContent = 'ROUND ' + gameStats.round;
    results.appendChild(roundInfo);

    const roundResult = document.createElement('p');

    if ( 
        playerSelection === 'Rock' && computerSelection === 'Scissors'
        || playerSelection === 'Scissors' && computerSelection === 'Paper'
        || playerSelection === 'Paper' && computerSelection === 'Rock'
    ) {
        gameStats.playerScore++;
        roundResult.textContent = `You win! Your ${playerSelection} beats Computer's ${computerSelection}`;
    }
    else if (playerSelection === computerSelection) {
        roundResult.textContent = `Tie! A deadlock between your ${playerSelection} and Computer's ${computerSelection}`;
    }
    else {
        gameStats.computerScore++;
        roundResult.textContent = `You lose! Your ${playerSelection} loses to Computer's ${computerSelection}`;
    }
    results.appendChild(roundResult);
    checkWinCondition();
}

function checkWinCondition() {
    const gameResult = document.createElement('p');

    if (gameStats.playerScore === 3 || gameStats.computerScore === 3 || gameStats.round === 5) {
        if (gameStats.playerScore === 3) {
            gameResult.textContent = 'GAME COMPLETE! YOU WIN!';
        } else if (gameStats.computerScore === 3) {
            gameResult.textContent = 'GAME COMPLETE! YOU LOSE!';
        } else {
            gameResult.textContent = 'GAME COMPLETE! A THRILLING TIE!';
        }

        results.appendChild(gameResult);
        endGame();
    }
}

function endGame() {
    //Create reset button
    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Start a new game';
    resetBtn.addEventListener('click', () => resetGame());
    results.appendChild(resetBtn);

    //Disable action buttons and style accordingly
    rockBtn.removeEventListener('click', playRoundRock);
    paperBtn.removeEventListener('click', playRoundPaper);
    scissorsBtn.removeEventListener('click', playRoundScissors);

    rockBtn.style.backgroundColor = 'grey';
    paperBtn.style.backgroundColor = 'grey';
    scissorsBtn.style.backgroundColor = 'grey';
}

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function capitalize(text) {
    return text.slice(0,1).toUpperCase() + text.slice(1).toLowerCase();
}