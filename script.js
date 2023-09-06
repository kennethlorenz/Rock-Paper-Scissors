// Function for computer choice
function getComputerChoice() {
  const computerChoices = ["Rock", "Paper", "Scissors"];
  //   randomly select an choice from computer selection

  var computerChoice =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];

  return computerChoice;
}

console.log(getComputerChoice());
