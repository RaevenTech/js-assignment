// Rock Paper Scissors
let choice = Math.floor(Math.random() * 3)

switch (choice) {
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

function game() {
  let data = { 1: "rock", 2: "paper", 3: "scissors" };
  let random = Math.random() * (1 - 3) + 1;
  return data.random;
}
console.log(game())