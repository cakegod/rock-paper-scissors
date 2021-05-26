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
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        alert("You win! Paper beats rock");
        alert("Player's score " + playerScore + " Computer's score " + computerScore);
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        alert("You lose! Rock beats Scissors");
        alert("Player's score " + playerScore + " Computer's score " + computerScore);
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        alert("You win! Scissors beats paper");
        alert("Player's score " + playerScore + " Computer's score " + computerScore);
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        alert("You lose! Paper beats rock");
        alert("Player's score " + playerScore + " Computer's score " + computerScore);
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        alert("You win! Rock beats Scissors");
        alert("Player's score " + playerScore + " Computer's score " + computerScore);
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        alert("You lose! Scissors beats paper");
        alert("Player's score " + playerScore + " Computer's score " + computerScore);

    }

}

