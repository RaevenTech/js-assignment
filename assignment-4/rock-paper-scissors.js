
function computerPlay (val){
  let choice =``
switch (val) {
  case 0:
    choice = `rock`
    console.log(`rock`)
    break;
  case 1:
    choice = `paper`
    console.log(`paper`)
    break;
  case 2:
    choice = `scissors`
  console.log(`scissors`)
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
    return `Computer win!`
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
    let myChoice = prompt(`Enter Rock, Paper or Scissors`)
    if (myChoice == null){
      continue
    }
    const playerChoiceInLoweCase = myChoice.toLowerCase()
    if (myChoice.includes(playerChoiceInLoweCase)){
      playerInput = true
      return playerChoiceInLoweCase
    }
  }
}
prompt(playerChoice())
function game() {
  console.log(`Let's play Rock, Paper, Scissors,`)
  for ( let i = 0; i < 5; i++) {
      const playerSelection = `paper`
      const computerSelection = computerPlay(Math.floor(Math.random() * 3))
      console.log(playRound(playerSelection,computerSelection))
  }
}
game()

