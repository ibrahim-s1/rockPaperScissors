function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const rand = Math.floor(Math.random() * choices.length)
    return choices[rand]
}

let playerScore = 0;
let compScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "It's a tie, you both chose rock"
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "It's a tie, you both chose paper"
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "Its's a tie, you both chose scissors"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "player wins round, rock beats scissors"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "player wins round, paper beats rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "player wins round, scissors beats paper"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        compScore++;
        return "computer wins round, paper beats rock"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        compScore++;
        return "computer wins round, scissors beats paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        compScore++;
        return "computer wins round, rock beats scissors"
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("choose rock, paper or scissors").toLowerCase().trim()
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > compScore) {
        console.log("player wins the game!!!")
    } else if (playerScore < compScore) {
        console.log("computer wins the game!!!")
    } else(
        console.log("It's a draw")
    )
}
game()