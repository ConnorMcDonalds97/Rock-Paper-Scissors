// Rock-Paper-Scissors game by Kevin Cao

function getRandomNum(max){
    return Math.floor(Math.random() * max)
}

function getComputerChoice(){
    choice = getRandomNum(3) 
    if (choice == 0){
        return 'rock'
    }   
    else if (choice == 1){
        return 'paper'
    }
    else{
        return 'scissors'
    }
}

function getHumanChoice(){
    choice = prompt('Rock, Paper, or Scissors?')
    choice = choice.toLowerCase()
    return choice
}



function playGame(){
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice,computerChoice){
        // Doing all case where human wins first
        if (humanChoice == 'rock' && computerChoice == 'scissors'){
            humanScore = ++humanScore
            console.log('You win! Rock beats scissors!')        
        }
        else if (humanChoice == 'paper' && computerChoice == 'rock'){
            humanScore = ++humanScore
            console.log('You win! Paper beats scissors!')
        }
        else if (humanChoice == 'scissors' && computerChoice == 'paper'){
            humanScore = ++humanScore
            console.log('You win! Scissors beats paper!')
        }
        // Now doing computer wins
        else if (computerChoice == 'rock' && humanChoice == 'scissors'){
            computerScore = ++computerScore
            console.log('You lose! Rock beats scissors!')
        }
        else if (computerChoice == 'paper' && humanChoice == 'rock'){
            computerScore = ++computerScore
            console.log('You lose! Paper beats rock!')
        }
        else if (computerChoice == 'scissors' && humanChoice == 'paper'){
            computerScore = ++computerScore
            console.log('You lose! Scissors beats paper!')
        }
        // Tie
        else if (humanChoice==computerChoice){
            humanScore = ++humanScore
            computerScore = ++computerScore
            console.log('Tie!')
        }
    }

    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()

    playRound(humanChoice,computerChoice)

    humanChoice = getHumanChoice()
    computerChoice = getComputerChoice()

    playRound(humanChoice,computerChoice)

    humanChoice = getHumanChoice()
    computerChoice = getComputerChoice()

    playRound(humanChoice,computerChoice)

    humanChoice = getHumanChoice()
    computerChoice = getComputerChoice()

    playRound(humanChoice,computerChoice)

    humanChoice = getHumanChoice()
    computerChoice = getComputerChoice()

    playRound(humanChoice,computerChoice)

    console.log('Your score: ' + humanScore)
    console.log('CPU score: ' + computerScore)

    if (humanScore > computerScore){
        console.log('You win!')
    }
    else{
        console.log('You lose!')
    }
}

playGame()

