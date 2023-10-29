function getComputerChoice() {
    let randomOutput = Math.floor(Math.random() * 3) + 1;
    if(randomOutput==1)
        return "rock"
    else if (randomOutput==2)
        return "paper"
    else
        return "scissors"

  }
 
  function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()

       if ( playerSelection == computerSelection)
       {
        return "It is a tie"
       }

       else if (( playerSelection == "rock" && computerSelection == "scissors") || 
       ( playerSelection == "paper" && computerSelection == "rock") ||
       ( playerSelection == "scissors" && computerSelection == "paper"))
       {
        return "You Won Boi"
       }
       else 
       {
       return "Looks like we found the loser"
       }
   
    }
    const resetBtn = document.querySelector('.reset');
    resetBtn.addEventListener('click',() => location.reload());

    let playerWins = 0;
    let computerWins = 0;
    

    function winner(playerSelection, computerSelection) {
        const result = document.querySelector(".result");
        const comment = document.querySelector(".comment");
      
        if (playerWins == 5 || computerWins == 5) {
          return;
        }
      
        task = playRound(playerSelection, computerSelection);
      
        if (task == "You Won Boi") {
          playerWins++;
          comment.textContent = "You Win This Round";
        } else if (task == "Looks like we found the loser") {
          computerWins++;
          comment.textContent = "Arg, seems like you lost this round";
        } else if (task == "It is a tie") {
          computerWins++;
          playerWins++;
          comment.textContent = "It is a Tie";
        }
      
        result.textContent = `Player Wins: ${playerWins}, Computer Wins: ${computerWins}`;
      
        if (playerWins == 5 && computerWins == 5) {
            comment.textContent = "Congratulations, you both suck.";
          } else if (playerWins == 5) {
            comment.textContent = "Game Over, You are the Winner";
          } else if (computerWins == 5) {
            comment.textContent = "Game Over, Computer is the Winner";
          }
        }          
      
    


    const rock = document.querySelector('.rock')

    rock.addEventListener('click', ()=>{
        let hello = getComputerChoice()
       winner("rock", hello)
  const choice = document.querySelector (".choice")
  if (playerWins < 5 && computerWins < 5)
  {
      choice.textContent = `Your Choice: Rock, Computer Choice: ${hello}`
  }
  else if ( playerWins == 5 && computerWins== 5)
  {
      choice.textContent = "It's a rocky road, a tie! 🪨🤝"
  }
  else if (playerWins < 5 ){
    choice.textContent = "Rock got crushed! Tough luck! 🪨😔"
  }
  else  {
    choice.textContent = "Rock crushes it! You rock! 🪨🎉"
  }
    })

    const paper = document.querySelector('.paper')

    paper.addEventListener('click', ()=>{
        let hello = getComputerChoice()
        winner("paper", hello)
        const choice = document.querySelector (".choice")
        if (playerWins < 5 && computerWins < 5)
        {
            choice.textContent = `Your Choice: Paper, Computer Choice: ${hello}`
        }
        else if ( playerWins == 5 && computerWins== 5)
        {
            choice.textContent = "Paper jam! It's a tie! 📜🤝"
        }
        else if (playerWins < 5 )  {
          choice.textContent = "Paper got shredded! Better luck next time! 📜😞"
        }
        else  {
            choice.textContent = "Paper covers all! You're on a roll! 📜🥳"
          }
    })

    const scissors = document.querySelector('.scissors')

    scissors.addEventListener('click', ()=>{
        let hello = getComputerChoice()
        winner("scissors", hello)
        const choice = document.querySelector (".choice")
     if (playerWins < 5 && computerWins < 5)
  {
      choice.textContent = `Your Choice: Scissors, Computer Choice: ${hello}`
  }
  else if ( playerWins == 5 && computerWins== 5)
  {
      choice.textContent = "Scissors snip at the same time! It's a tie! ✂️🤝"
  }
  else if (playerWins < 5 ) {
    choice.textContent = "Scissors got snipped! Keep cutting your losses! ✂️😩 "
  }
  else  {
    choice.textContent = "Scissors snip through! You're cutting it! ✂️😀"
  }


    })



