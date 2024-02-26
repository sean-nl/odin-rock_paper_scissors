function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function capitalize(text) {
    return text.slice(0,1).toUpperCase() + text.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    playerSelection = capitalize(playerSelection);

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