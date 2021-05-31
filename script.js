//Variables to keep computer & player score
let computerScore = 0;
let playerScore = 0;
let rounds;

// Loop until either computer or player reaches score 5
for (rounds = 0; rounds < 5; rounds++) {

    // Player inputs his choice, lowercase to make it case-insensitive
    let playerSelection = prompt("rock, paper or scissors?").toLowerCase();
    // Computer choses randomly a word from the array
    function computerPlay() {
        const choices = ['rock', 'paper', 'scissors']
        return choices[Math.floor(Math.random() * choices.length)]
    }
    // Save the random word into a variable
    let computerSelection = computerPlay();
    // Calls function
    playRound(playerSelection, computerSelection);
}

// Alerts after 5 rounds
if (rounds === 5 && playerScore == computerScore) {
    alert("DRAW!");
} else if (rounds === 5 && playerScore > computerScore) {
    alert("WIN!");
} else if (rounds === 5 && playerScore < computerScore)
    alert("GAME OVER!");

// Plays one round
function playRound(computerSelection, playerSelection) {
    if (playerSelection == computerSelection) {
        alert("It's a draw!");
        alert("Player's score " + playerScore + " Computer's score " + computerScore);
    } else if ((playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "rock" && computerSelection == "scissors")) {
        playerScore++;
        alert("You win! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection + ".");
        alert("Player's score " + playerScore + " Computer's score " + computerScore);
    } else if ((playerSelection == "scissors" && computerSelection == "rock") ||
        (playerSelection == "rock" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "scissors")) {
        computerScore++;
        alert("You lose! " + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + " beats " + computerSelection + ".");
        alert("Player's score " + playerScore + " Computer's score " + computerScore);

    }

}

