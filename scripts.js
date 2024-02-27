function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function capitalize(text) {
    return text.slice(0,1).toUpperCase() + text.slice(1).toLowerCase();
}

//Assumes playerSelection is 'Rock', 'Paper', or 'Scissors'.
function playRound(playerSelection, computerSelection) {
    if ( 
        playerSelection === 'Rock' && computerSelection === 'Scissors'
        || playerSelection === 'Scissors' && computerSelection === 'Paper'
        || playerSelection === 'Paper' && computerSelection === 'Rock'
    ) {
        return 'Win';
    }
    else if (playerSelection === computerSelection) {
        return 'Tie';
    }
    else {
        return 'Lose';
    }
}

function playGame() {
    //Play a five-round game and report a winner or loser at the end.
    let computerScore = 0;
    let playerScore = 0;

    console.log("Let's play a five-round game of Rock Paper Scissors!");
    
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("What shape do you want to pick? (Rock, Paper, or Scissors)");
        
        playerSelection = capitalize(playerSelection); // Case-insensitive string handling
        computerSelection = getComputerChoice();
        
        let result = playRound(playerSelection, computerSelection);

        if (result === 'Win') {
            playerScore++;
            console.log(`You ${result}! Your ${playerSelection} beats Computer's ${computerSelection}`);
        }
        else if (result === 'Lose') {
            computerScore++;
            console.log(`You ${result}! Your ${playerSelection} loses to Computer's ${computerSelection}`);
        }
        else {
            console.log(`${result}! A deadlock between your ${playerSelection} and Computer's ${computerSelection}`);
        }

        console.log(`The score is now: You - ${playerScore} Computer - ${computerScore}`);
        
        //If the player or the computer gets three points, they have won.
        if (playerScore >= 3 || computerScore >= 3) {
            break;
        }

    }

    if (playerScore > computerScore) {
        console.log(`You win! Final score: You - ${playerScore} Computer - ${computerScore}`);
    }
    else if (playerScore < computerScore) {
        console.log(`You lose! Final score: You - ${playerScore} Computer - ${computerScore}`);
    }
    else {
        console.log(`The game had ended in a thrilling tie! Final score: You - ${playerScore} Computer - ${computerScore}`);
    }

    
}