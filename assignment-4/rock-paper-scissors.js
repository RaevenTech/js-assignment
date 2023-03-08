
function computerPlay (value){
  let choice =``
switch (value) {
  case 0:
    choice = `rock`
    console.log(`Computer plays: rock`)
    break;
  case 1:
    choice = `paper`
    console.log(`Computer plays: paper`)
    break;
  case 2:
    choice = `scissors`
  console.log(`Computer plays: scissors`)
    break;   
  }
  return choice
}

function checkWinner(playerSelection, computerSelction) {
  if(playerSelection === computerSelction) {
    return `Draw`
  } else if (
    (playerSelection === `rock` && computerSelction === `scissors`) ||
    (playerSelection === `scissors` && computerSelction === `paper`) ||
    (playerSelection === `paper` && computerSelction === `rock`) 
  ){
    return `Player win`
  } else {
    return `Computer win`
  } 
}

function playRound(playerSelection, computerSelection){
  const result = checkWinner(playerSelection, computerSelection)
  if(result === `Draw`){
    return `It's a Tie`
  } else if (result === `Player win`){
    return `Player WINS! ${playerSelection} beats ${computerSelection}`
  }else {
    return `You LOSE! ${computerSelection} beats ${playerSelection}`
  }
}

function playerChoice (){
  let playerInput = false
  while (playerInput == false) {
    let myChoice = prompt(`Play Rock, Paper or Scissors`)
    if (myChoice == null){
      continue
    }
    const playerChoiceInLowerCase = myChoice.toLowerCase()
    if (myChoice.includes(playerChoiceInLowerCase)){
      playerInput = true
      return playerChoiceInLowerCase
    }
  }
}

let playerScore = 1
let computerScore = 1
let round = 1

function game() {
  console.log(`Let's play Rock, Paper, Scissors,`)
  console.log(`-------------------------------`)
  for ( let i = 0; i < 5; i++) {
      const playerSelection = playerChoice()
      const computerSelection = computerPlay(Math.floor(Math.random() * 3))
      console.log(playRound(playerSelection,computerSelection))
      if(checkWinner(playerSelection, computerSelection) == `Player win`){
        console.log(`Player: ${playerScore++}`)
      }else if(checkWinner(playerSelection, computerSelection) == `Computer win`){
          console.log(`Computer: ${computerScore++}`)
      }
      console.log(`----- ROUND: ${round++} OVER -----`)
  }
  console.log(`------ FINAL SCORE ------`)
  if(playerScore > computerScore) {
    console.log(`Player you won. Player: ${playerScore} beat Computer: ${computerScore}`)
  }else if(playerScore < computerScore) {
    console.log(`Computer wins. Player: ${playerScore} beat Computer: ${computerScore}`)
  }else {
    console.log(`We have a tie. Player: ${playerScore} and Computer: ${computerScore}`)
  }
  console.log(`------ GAME OVER ------`)
}
game()

