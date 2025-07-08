let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3) + 1;
  let choice = "";
  switch (randomNum) {
    case 1:
      choice = "rock";
      break;
    case 2:
      choice = "paper";
      break;
    case 3:
      choice = "scissors";
  }
  return choice;
}

function getHumanChoice() {
  return prompt("What's your choice? Rock, Paper, Scissors").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore += 1;
    console.log("You lose! Paper beats Rock");
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore += 1;
    console.log("You lose! Scissors beats Paper");
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore += 1;
    console.log("You lose! Rock beats Scissors");
  } else if (humanChoice === computerChoice) {
    console.log("Draw!");
  } else {
    humanScore += 1;
    console.log("You won the round");
  }
}

function playGame() {
  while (humanScore < 3 && computerScore < 3) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  if (humanScore === 3) {
    console.log("You Won The Game!");
  } else if (computerScore === 3) {
    console.log("Game Over");
  }
}

playGame();
