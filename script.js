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
const result = document.querySelector("#result");
const resetButton = document.querySelector(".resetButton");
const playerSelected = document.querySelector("#playerSelection");
const computerSelected = document.querySelector("#computerSelection");

computerRock = document.querySelector("#computerRock");
computerPaper = document.querySelector("#computerPaper");
computerScissors = document.querySelector("#computerScissors");
computerSelections = document.querySelectorAll(".selection.computer");

// Function for getting a computer choice for either rock paper scissors
function getComputerChoice() {
  var computerChoices = ["Rock", "Paper", "Scissors"];

  var computerChoice =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  console.log(`Computer chooses: ${computerChoice}`);
  return computerChoice;
}

function animateRock() {
  computerRock.classList.add("zoomAnimate");
}
function animatePaper() {
  computerPaper.classList.add("zoomAnimate");
}
function animateScissors() {
  computerScissors.classList.add("zoomAnimate");
}

function animateResult() {
  result.classList.add("zoomAnimateResult");
}

// function to play a round that accepts a player selection and a computer selection
function playRound(playerSelection, computerSelection) {
  //const player = playerSelection.toLowerCase();
  playerSelected.textContent = playerSelection;
  computerSelected.textContent = computerSelection;
  //   function to call if player selects rock
  function playerSelectedRock() {
    if (computerSelection == "Paper") {
      animatePaper();
      animateResult();
      computerScore += 1;
      computerScoreCounter.textContent = computerScore;
      result.textContent = "You Lost! Paper beats Rock!";
    } else if (computerSelection == "Scissors") {
      animateScissors();
      animateResult();
      playerScore += 1;
      playerScoreCounter.textContent = playerScore;
      result.textContent = "You win! Rock beats Scissors!";
    } else {
      animateRock();
      animateResult();
      result.textContent = "It's a tie!";
    }
  }

  //   function to call if player selects paper
  function playerSelectedPaper() {
    if (computerSelection == "Scissors") {
      animateScissors();
      animateResult();
      computerScore += 1;
      computerScoreCounter.textContent = computerScore;
      result.textContent = "You Lost! Scissors beats Paper!";
    } else if (computerSelection == "Rock") {
      animateRock();
      animateResult();
      playerScore += 1;
      playerScoreCounter.textContent = playerScore;
      result.textContent = "You win! Paper beats Rock!";
    } else {
      animatePaper();
      animateResult();
      result.textContent = "It's a tie!";
    }
  }

  //   function to call if player selects scissors
  function playerSelectedScissors() {
    if (computerSelection == "Rock") {
      animateRock();
      animateResult();
      computerScore += 1;
      computerScoreCounter.textContent = computerScore;
      result.textContent = "You Lost! Rock beats Scissors!";
    } else if (computerSelection == "Paper") {
      animatePaper();
      animateResult();
      playerScore += 1;
      playerScoreCounter.textContent = playerScore;
      result.textContent = "You win! Scissors beats Paper";
    } else {
      animateScissors();
      animateResult();
      result.textContent = "It's a tie!";
    }
  }

  // condition to check if a player has selected either rock paper or scissors.
  if (playerSelection == "Rock") {
    return playerSelectedRock();
  } else if (playerSelection == "Paper") {
    return playerSelectedPaper();
  } else if (playerSelection == "Scissors") {
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
  playRound("Rock", computerSelection);
}

function playPaper() {
  const computerSelection = getComputerChoice();
  playRound("Paper", computerSelection);
}

function playScissors() {
  const computerSelection = getComputerChoice();
  playRound("Scissors", computerSelection);
}

function reloadPage() {
  window.location.reload();
}
//console.log(game());
rock.addEventListener("click", playRock);
paper.addEventListener("click", playPaper);
scissors.addEventListener("click", playScissors);
resetButton.addEventListener("click", reloadPage);

computerRock.addEventListener("animationend", () => {
  computerRock.classList.remove("zoomAnimate");
});
computerPaper.addEventListener("animationend", () => {
  computerPaper.classList.remove("zoomAnimate");
});
computerScissors.addEventListener("animationend", () => {
  computerScissors.classList.remove("zoomAnimate");
});

result.addEventListener("animationend", () => {
  result.classList.remove("zoomAnimateResult");
});
