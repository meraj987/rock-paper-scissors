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

