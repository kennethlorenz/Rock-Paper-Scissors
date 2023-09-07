// Function for getting a computer choice for either rock paper scissors
function getComputerChoice(playerSelection) {
  var computerChoices = ["rock", "paper", "scissors"];

  selections = computerChoices.filter((choice) => choice !== playerSelection);
  console.log(selections);
  //   randomly select an choice from computer selection
  var computerChoice =
    selections[Math.floor(Math.random() * selections.length)];
  console.log(computerChoice);
  return computerChoice;
}

// function to play a round that accepts a player selection and a computer selection
function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();

  //   function to call if player selects rock
  function playerSelectedRock() {
    if (computerSelection == "paper") {
      return "You Lost! Paper beats Rock!";
    } else if (computerSelection == "scissors") {
      return "You win! Rock beats Scissors!";
    }
  }

  //   function to call if player selects paper
  function playerSelectedPaper() {
    if (computerSelection == "scissors") {
      return "You Lost! Scissors beats Paper!";
    } else if (computerSelection == "rock") {
      return "You win! Paper beats Rock!";
    }
  }

  //   function to call if player selects scissors
  function playerSelectedScissors() {
    if (computerSelection == "rock") {
      return "You Lost! Rock beats Scissors!";
    } else if (computerSelection == "paper") {
      return "You win! Scissors beats Paper";
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

const playerSelection = "scissors";
const computerSelection = getComputerChoice(playerSelection);
console.log(playRound(playerSelection, computerSelection));
