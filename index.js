const computerChoice = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  const oppositeChoice = computerChoice[randomNumber];
  return oppositeChoice;
}
function getPlayerChoice() {
  const playerChoice = prompt("Choice:").toLowerCase();

     return playerChoice;
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "You Draw!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You Lose! Paper Beats Rock!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "You Win! Rock Beats Scissors!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You Win! Paper Beats Rock!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "You Lose! Scissors Beats Paper!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You Win! Scissors Beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "You Lose! Rock Beats Scissors";
  }
}

function game() {
  playerScore = 0;
  computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    console.log("You Picked: " + playerSelection)
    console.log("PC Picked: " + computerSelection)
    playRound(playerSelection, computerSelection);
    console.log("Player Score: " + playerScore)
    console.log("PC Score: " + computerScore)
  }
  if (playerScore > computerScore) {
    console.log("You win! your score is: " + playerScore + " " + "opposite score is "+ computerScore);
  } else if (playerScore < computerScore) {
    console.log("You Lose! computer score is: " + computerScore + " " + "Opposite score is "+ playerScore);
  } else {
    console.log("Draw!");
  }
 
}
