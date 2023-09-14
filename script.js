// global variable
var playerScore = 0;
var computerScore = 0;
const maxScore = 5;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playerScoreCounter = document.querySelector("#playerScore");
const computerScoreCounter = document.querySelector("#computerScore");
playerScoreCounter.textContent = 0;
computerScoreCounter.textContent = 0;
// Function for getting a computer choice for either rock paper scissors
function getComputerChoice() {
  var computerChoices = ["rock", "paper", "scissors"];

  var computerChoice =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  console.log(`Computer chooses: ${computerChoice}`);
  return computerChoice;
}

// function to play a round that accepts a player selection and a computer selection
function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();

  //   function to call if player selects rock
  function playerSelectedRock() {
    if (computerSelection == "paper") {
      computerScore += 1;
      computerScoreCounter.textContent = computerScore;
      return "You Lost! Paper beats Rock!";
    } else if (computerSelection == "scissors") {
      playerScore += 1;
      playerScoreCounter.textContent = playerScore;
      return "You win! Rock beats Scissors!";
    } else {
      return "It's a tie!";
    }
  }

  //   function to call if player selects paper
  function playerSelectedPaper() {
    if (computerSelection == "scissors") {
      computerScore += 1;
      computerScoreCounter.textContent = computerScore;
      return "You Lost! Scissors beats Paper!";
    } else if (computerSelection == "rock") {
      playerScore += 1;
      playerScoreCounter.textContent = playerScore;
      return "You win! Paper beats Rock!";
    } else {
      return "It's a tie!";
    }
  }

  //   function to call if player selects scissors
  function playerSelectedScissors() {
    if (computerSelection == "rock") {
      computerScore += 1;
      computerScoreCounter.textContent = computerScore;
      return "You Lost! Rock beats Scissors!";
    } else if (computerSelection == "paper") {
      playerScore += 1;
      playerScoreCounter.textContent = playerScore;
      return "You win! Scissors beats Paper";
    } else {
      return "It's a tie!";
    }
  }

  // condition to check if a player has selected either rock paper or scissors.
  if (player == "rock") {
    return playerSelectedRock();
  } else if (player == "paper") {
    return playerSelectedPaper();
  } else if (player == "scissors") {
    return playerSelectedScissors();
  }
}

// function that checks the overall score after 5 rounds.
function declareWinner(computerScore, playerScore) {
  if (computerScore > playerScore) {
    return "Computer WON!";
  } else {
    return "Player WON!";
  }
}

// A function that allows users to be prompted to enter rock, paper, or scissors
//up to 5 rounds.
function game() {
  //while (playerScore < maxScore && computerScore < maxScore) {
  //prompt user
  const playerSelection = window.prompt("Rock, Paper, or Scissors");

  //generate computer selection
  const computerSelection = getComputerChoice();
  //console.log(`Round ${i + 1}`);
  console.log(playRound(playerSelection, computerSelection));
  console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
  //}

  console.log(
    `Final Score: Computer ${computerScore}, Player : ${playerScore}`
  );
  console.log(declareWinner(computerScore, playerScore));
}

function playRock() {
  const computerSelection = getComputerChoice();
  console.log(playRound("rock", computerSelection));
}

function playPaper() {
  const computerSelection = getComputerChoice();
  console.log(playRound("paper", computerSelection));
}

function playScissors() {
  const computerSelection = getComputerChoice();
  console.log(playRound("scissors", computerSelection));
}
//console.log(game());
rock.addEventListener("click", playRock);
paper.addEventListener("click", playPaper);
scissors.addEventListener("click", playScissors);
