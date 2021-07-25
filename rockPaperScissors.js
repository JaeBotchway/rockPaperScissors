const getUserChoice = (userInput) =>{
    userInput = userInput.toLowerCase()
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput
    }else{
      console.log('Error')
    }
    }
    
    
    let getComputerChoice = () =>{
     let randomNumber = Math.floor(Math.random() * 3)
     if(randomNumber === 0){
       return 'rock';
     }
     else if ( randomNumber === 1){
       return 'paper'
     }
     else {
       return 'scissors'
     }
    
    }
    
    
    let determineWinner = (userChoice, computerChoice) =>{
    if (userChoice === 'bomb'){
      return'user won!'
    }
    
    if (userChoice === computerChoice){
      return 'tie';
    }
    
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'computer won!'
      }else {return 'user won!'}
    }
    
    if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'computer won!'
    }else{return 'user won!'}
    }
    
    if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return 'computer won!'
    }else{return 'user won!'}
    }
    }
    
    
    const playGame = () =>{
      const userChoice = getUserChoice('bomb')
      const computerChoice = getComputerChoice()
    
    console.log(userChoice)
    console.log(computerChoice)
    console.log(determineWinner(userChoice, computerChoice))
    }
    
    playGame()