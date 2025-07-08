let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  let choice = "";
  switch (randomNum) {
    case 1:
      choice = "Rock";
      break;
    case 2:
      choice = "Paper";
      break;
    case 3:
      choice = "Scissors";
  }
  return choice;
}

function getHumanChoice() {
  return prompt("What's your choice? Rock, Paper, Scissors");
}

function playRound(humanChoice, computerChoice) {
  // const humanChoice = humanChoice.toLowerCase();
  // const computerChoice = computerChoice.toLowerCase();

  if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats Rock");
    computerScore += 1;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats Paper");
    computerScore += 1;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats Scissors");
    computerScore += 1;
  } else if (humanChoice === computerChoice) {
    console.log("Draw!");
  } else {
    console.log("You Won!");
    humanScore += 1;
  }
}

playRound(humanSelection, computerSelection);
