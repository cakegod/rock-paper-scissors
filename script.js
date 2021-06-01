let computerScore = 0;
let playerScore = 0;

const score = document.querySelector(".score");
const winLose = document.querySelector(".win-lose");
const buttonWrapper = document.querySelector(".button-wrapper");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => { playerSelection = "Rock"; playRound(computerPlay(), playerSelection); });
paper.addEventListener("click", () => { playerSelection = "Paper"; playRound(computerPlay(), playerSelection); });
scissors.addEventListener("click", () => { playerSelection = "Scissors"; playRound(computerPlay(), playerSelection); });

function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(computerSelection, playerSelection) {
    if (playerSelection == computerSelection) {
        score.textContent = `YOU: ${playerScore} CPU: ${computerScore}`;
        winLose.textContent = "Draw!";
    } else if ((playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper") ||
        (playerSelection == "Rock" && computerSelection == "Scissors")) {
        playerScore++;
        score.textContent = `YOU: ${playerScore} CPU: ${computerScore}`;
        winLose.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
        scoreChecker();
    } else if ((playerSelection == "Scissors" && computerSelection == "Rock") ||
        (playerSelection == "Rock" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Scissors")) {
        computerScore++;
        score.textContent = `YOU: ${playerScore} CPU: ${computerScore}`;
        winLose.textContent = `You lose! ${playerSelection} beats ${computerSelection}.`;
        scoreChecker();
    }
}

function scoreChecker() {
    if (playerScore == 5) {
        winLose.textContent = "YOU WIN!";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        reset();
    } else if (computerScore == 5) {
        winLose.textContent = "YOU LOSE!";
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        reset();
    } else {
        // nothing
    }
}

function reset() {
    let resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    resetButton.type = "button";
    resetButton.className = "reset";
    buttonWrapper.appendChild(resetButton);
    resetButton.addEventListener("click", () => {
        computerScore = 0;
        playerScore = 0;
        winLose.textContent = "";
        score.textContent = "";
        resetButton.remove();
        rock.disabled = false;
        paper.disabled = false;
        scissors.disabled = false;
    });

}

