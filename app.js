const btns = document.querySelectorAll(".btn");
const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");
const titleDisplay = document.querySelector(".info-h2");
const choiceDisplay = document.querySelector(".info-h3");
const scoreBox = document.querySelector(".scoreBox");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#compScore");
const playerSign = document.querySelector("#playerSign");
const compSign = document.querySelector("#compSign");

function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const rand = Math.floor(Math.random() * choices.length);
    return choices[rand];
}

let playScore = 0;
let compScore = 0;
const playTo = 5;
let isGameOver = false;

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
        titleDisplay.textContent = "It's a tie";
        choiceDisplay.textContent = "Rock ties with rock";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        titleDisplay.textContent = "It's a tie";
        choiceDisplay.textContent = "Paper ties with paper";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        titleDisplay.textContent = "It's a tie";
        choiceDisplay.textContent = "Scissors ties with scissors";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playScore++;
        titleDisplay.textContent = "You won this round";
        choiceDisplay.textContent = "Rock crushes scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playScore++;
        titleDisplay.textContent = "You won this round";
        choiceDisplay.textContent = "Paper covers rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playScore++;
        titleDisplay.textContent = "You won this round";
        choiceDisplay.textContent = "Scissors cuts paper";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        compScore++;
        titleDisplay.textContent = "Computer wins this round";
        choiceDisplay.textContent = "Rock is covered by paper";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        compScore++;
        titleDisplay.textContent = "Computer wins this round";
        choiceDisplay.textContent = "Paper is cut by scissors";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        compScore++;
        titleDisplay.textContent = "Computer wins this round";
        choiceDisplay.textContent = "Scissors is crushed by rock";
    }
}

function updateSigns(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "rock":
            playerSign.textContent = "✊";
            break;
        case "paper":
            playerSign.textContent = "🖐️";
            break;
        case "scissors":
            playerSign.textContent = "✌️";
            break;
    }
    switch (computerSelection) {
        case "rock":
            compSign.textContent = "✊";
            break;
        case "paper":
            compSign.textContent = "🖐️";
            break;
        case "scissors":
            compSign.textContent = "✌️";
            break;
    }
}

function gameScore() {
    playerScore.textContent = playScore;
    computerScore.textContent = compScore;
    if (!isGameOver) {
        if (playScore === playTo || compScore === playTo) {
            isGameOver = true;
            rockBtn.disabled = true;
            paperBtn.disabled = true;
            scissorsBtn.disabled = true;
            if (playScore > compScore) {
                titleDisplay.textContent = "Player wins the game, refresh to replay";
            } else if (playScore < compScore) {
                titleDisplay.textContent = "Computer wins the game, refresh to replay";
            } else {
                titleDisplay.textContent = "Game is tied, refresh to replay";
            }
        }
    }
}

rockBtn.addEventListener("click", () => {
    const computerSelection = computerPlay();
    const playerSelection = "rock";
    playRound(playerSelection, computerSelection);
    gameScore();
    updateSigns(playerSelection, computerSelection);
})
paperBtn.addEventListener("click", () => {
    const computerSelection = computerPlay();
    const playerSelection = "paper";
    playRound(playerSelection, computerSelection);
    gameScore();
    updateSigns(playerSelection, computerSelection);
})
scissorsBtn.addEventListener("click", () => {
    const computerSelection = computerPlay();
    const playerSelection = "scissors"
    playRound(playerSelection, computerSelection);
    gameScore();
    updateSigns(playerSelection, computerSelection);
})