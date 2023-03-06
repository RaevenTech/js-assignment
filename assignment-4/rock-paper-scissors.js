// Rock Paper Scissors
let computerPlay = Math.floor(Math.random() * 3)

switch (computerPlay) {
  case 0:
    console.log(`rock`)
    break;
  case 1:
    console.log(`paper`)
    break;
  case 2:
  console.log(`scissors`)
    break;   
  default:
      console.log(`Invalid entry`) 
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
const playerSelection = `paper`
const computerSelection = computerPlay
console.log(playRound(playerSelection,computerSelection))