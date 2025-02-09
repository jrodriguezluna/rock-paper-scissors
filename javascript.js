
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getComputerChoice() {;
  switch(getRandomInt(3)){
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  let input = prompt("Give your choice (rock, paper, scissors)");
  let humanChoice = input.toLowerCase();
  return humanChoice;
}

function notifyWin(humanChoice, computerChoice) {
  console.log(`You win! ${humanChoice} beats ${computerChoice}`);
}

function notifyLoss(humanChoice, computerChoice) {
  console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice){
      console.log("Tie!" );
    }
    else if ((humanChoice == "rock") && (computerChoice == "scissors") ||
    (humanChoice == "paper") && (computerChoice == "rock") ||
    (humanChoice == "scissors") && (computerChoice == "paper")) {
      notifyWin(humanChoice, computerChoice);
      humanScore++;
    }
    else {
      notifyLoss(humanChoice, computerChoice);
      computerScore++;
    }
  }

  for (let step = 0; step < 5; step++) {
    playRound(getComputerChoice(), getHumanChoice());
  }

  console.log(`Your score: ${humanScore}. \nComputer score: ${computerScore} \n`);

  if (humanScore === computerScore) {
    console.log("Tie. No one won the game!!");
  }
  else if (humanScore > computerScore) {
    console.log("You win the game!!");
  }
  else if (humanScore < computerScore) {
    console.log("You lose the game :(");
  }
}

playGame()



