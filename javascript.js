
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

function getHumanChoice(element) {
  return element.textContent;
}

function notifyRoundWin(humanChoice, computerChoice, elementDisplay) {
  elementDisplay.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
  console.log(`You win! ${humanChoice} beats ${computerChoice}`);
}

function notifyRoundLoss(humanChoice, computerChoice, elementDisplay) {
  elementDisplay.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
  console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
}

function restartRoundCounter() {
  numCurrentRound = 0;
}

function restartScores() {
  numHumanScore = 0;
  numComputerScore = 0;
}

function createDivScores() {
  const humanScoreDiv = document.createElement("div");
  const computerScoreDiv = document.createElement("div");
  humanScoreDiv.textContent = `your score: ${numHumanScore}`;
  computerScoreDiv.textContent = `computer score: ${numComputerScore}`;
  document.querySelector(".content").prepend(computerScoreDiv);
  document.querySelector(".content").prepend(humanScoreDiv);
  return [humanScoreDiv, computerScoreDiv]
}

function refreshDivScores(arrayDivReferences) {
  arrayDivReferences.at(0).textContent = `your score: ${numHumanScore}`;
  arrayDivReferences.at(1).textContent = `computer score: ${numComputerScore}`;
}

function deleteDivScores(arrayDivReferences) {
  arrayDivReferences.forEach((div) => {
    div.remove()
  })
}

let gameRunning = false;
let arrayDivReferences = [];
let numCurrentRound = 0;
let numHumanScore = 0;
let numComputerScore = 0;

function processRound(e) {
  const elementDisplay = document.querySelector(".content__display");
  if (!gameRunning) {
    gameRunning = true;
    arrayDivReferences = createDivScores();
  }
  playRound(getHumanChoice(e.target).toLowerCase(), getComputerChoice(), elementDisplay);
  if (numComputerScore === 5 || numHumanScore === 5) {
    gameRunning = false;
    announceWinner(numHumanScore, numComputerScore, elementDisplay);
    deleteDivScores(arrayDivReferences);
    restartScores();
    restartRoundCounter();
  }
}

function playRound(humanChoice, computerChoice, elementDisplay) {
  if (humanChoice === computerChoice){
    elementDisplay.textContent = "Tie!"
    console.log("Tie!");
  }
  else if ((humanChoice == "rock") && (computerChoice == "scissors") ||
  (humanChoice == "paper") && (computerChoice == "rock") ||
  (humanChoice == "scissors") && (computerChoice == "paper")) {
    notifyRoundWin(humanChoice, computerChoice, elementDisplay);
    numHumanScore++;
  }
  else {
    notifyRoundLoss(humanChoice, computerChoice, elementDisplay);
    numComputerScore++;
  }
  refreshDivScores(arrayDivReferences);
}

function announceWinner(numHumanScore, numComputerScore, elementDisplay) {
  console.log(`Your score: ${numHumanScore}. \nComputer score: ${numComputerScore} \n`);
  if (numHumanScore === numComputerScore) {
    console.log("Tie. No one won the game!!");
    elementDisplay.textContent = `Tie. ${numHumanScore} against ${numComputerScore}, No one won the game!!`;
  }
  else if (numHumanScore > numComputerScore) {
    console.log(`${numHumanScore} against ${numComputerScore}, you win the game!!`);
    elementDisplay.textContent = `${numHumanScore} against ${numComputerScore} you win the game!!` ;
  }
  else if (numHumanScore < numComputerScore) {
    console.log(`${numHumanScore} against ${numComputerScore}, you lose the game :(`);
    elementDisplay.textContent = `${numHumanScore} against ${numComputerScore} you lose the game :(`;
  }
}

const buttons = document.querySelectorAll("button")
buttons.forEach((button) => {
  button.addEventListener("click", processRound)
})