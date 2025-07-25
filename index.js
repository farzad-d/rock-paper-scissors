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

// function getHumanChoice() {
//   return prompt("What's your choice? Rock, Paper, Scissors").toLowerCase();
// }

function playRound(usr, com) {
  const result = document.querySelector("#result");

  if (usr === "rock" && com === "paper") {
    computerScore += 1;
    // console.log("You lose! Paper beats Rock");
    result.textContent = "You lose! Paper beats Rock";
    result.style.color = "red";
    result.style.fontWeight = "bold";
  } else if (usr === "paper" && com === "scissors") {
    computerScore += 1;
    // console.log("You lose! Scissors beats Paper");
    result.textContent = "You lose! Scissors beats Paper";
    result.style.color = "red";
    result.style.fontWeight = "bold";
  } else if (usr === "scissors" && com === "rock") {
    computerScore += 1;
    // console.log("You lose! Rock beats Scissors");
    result.textContent = "You lose! Rock beats Scissors";
    result.style.color = "red";
    result.style.fontWeight = "bold";
  } else if (usr === com) {
    // console.log("Draw!");
    result.textContent = "Draw";
    result.style.color = "cyan";
    result.style.fontWeight = "bold";
  } else {
    humanScore += 1;
    // console.log("You won the round");
    result.textContent = "You won the round";
    result.style.color = "lime";
    result.style.fontWeight = "bold";
  }
}

function playGame() {
  if (humanScore < 3 && computerScore < 3) {
    playRound(userChoice, getComputerChoice());

    let score = document.querySelector("#score");
    score.textContent = `You: ${humanScore} vs PC: ${computerScore}`;
    score.style.fontWeight = "bold";
  }
  if (humanScore === 3) {
    // console.log("You Won The Game!");
    result.textContent = "You Won The Game!";
    result.style.color = "lime";
    result.style.fontWeight = "bold";
    result.style.fontSize = "22px";
  } else if (computerScore === 3) {
    // console.log("Game Over");
    result.textContent = "Game Over";
    result.style.color = "red";
    result.style.fontWeight = "bold";
    result.style.fontSize = "22px";
  }
}

let userChoice = "";

const buttons = document.querySelector("#buttons");

buttons.addEventListener("click", (e) => {
  userChoice = e.target.textContent.toLowerCase();
  playGame();
});
