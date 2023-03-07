
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

//const playerSelection = `paper`
//const computerSelection = computerPlay(Math.floor(Math.random() * 3))
//console.log(playRound(playerSelection,computerSelection))

