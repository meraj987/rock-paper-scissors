function getComputerChoice() {
    let randomOutput = Math.floor(Math.random() * 3) + 1;
    if(randomOutput==1)
        return "Rock"
    else if (randomOutput==2)
        return "Paper"
    else
        return "Scissors"

  }
 
  function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()

       if ( playerSelection == "rock" && computerSelection == "Paper")
       {
        return " Lost to a Computer, you noob"
       }
       else if ( playerSelection == "rock" && computerSelection == "Scissors")
       {
       return " You won boi"
       }
    else 
    {
        return " Is is a draw"
    }
    }

console.log(playRound("Rock", getComputerChoice()));

function game (){
    let playerCount= 0;
    let computerCount = 0;
   function playRoundCalculate() {
    let playerChoice = prompt("What do you choose?")
    playerChoice = playerChoice.toLowerCase()
    let computerChoice = getComputerChoice()
    let result = playRound(playerChoice, computerChoice)
    console.log(result);
    if(result.includes("You won boi"))
    playerCount++
  else if (result.includes("Lost to a Computer, you noob"))
    computerCount++
    console.log(`Player: ${playerCount} | Computer: ${computerCount}`);
   }
    playRoundCalculate();
    playRoundCalculate();
    playRoundCalculate();
    playRoundCalculate();
    playRoundCalculate();

    if (playerCount > computerCount) 
        console.log("The winner is the player!");
    else if (computerCount > playerCount)
        console.log("The winner is the computer!");
    else 
      console.log ("Congratulations you both suck equally")
}
game()
