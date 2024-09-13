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

    const body = document.querySelector('body')

    const buttonDiv = document.createElement('div')

    const rock = document.createElement('button')
    rock.textContent = "Rock"
    rock.addEventListener("click", function (){
        playRound('rock',getComputerChoice())
})


    const paper = document.createElement('button')
    paper.textContent = "Paper"
    paper.addEventListener("click", function (){
        playRound('paper',getComputerChoice())
    })

    const scissors = document.createElement('button')
    scissors.textContent = "Scissors"
    scissors.addEventListener("click", function(){
        playRound('scissors',getComputerChoice())
    })


    buttonDiv.appendChild(rock)
    buttonDiv.appendChild(paper)
    buttonDiv.appendChild(scissors)

    body.appendChild(buttonDiv)

    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice,computerChoice){

        if (humanScore == 5 || computerScore == 5){
            const finalResult = document.createElement('div')
            finalResult.textContent = humanScore == 5 ? 'You won the game!' : 'You lost the game!'
            body.appendChild(finalResult)
            body.empty()

        }

        const compChoice = document.createElement('div')
        const result = document.createElement('div')

        // Doing all case where human wins first
        if (humanChoice == 'rock' && computerChoice == 'scissors'){
            humanScore = ++humanScore
            compChoice.textContent = 'scissors'
            result.textContent = 'You win! Rock beats scissors!'
            body.appendChild(compChoice)
            body.appendChild(result)
        }
        else if (humanChoice == 'paper' && computerChoice == 'rock'){
            humanScore = ++humanScore
            compChoice.textContent = 'rock'
            result.textContent = 'You win! Paper beats rock!'
            body.appendChild(compChoice)
            body.appendChild(result)
        }
        else if (humanChoice == 'scissors' && computerChoice == 'paper'){
            humanScore = ++humanScore
            compChoice.textContent = 'paper'
            result.textContent = 'You win! Scissors beats paper!'
            body.appendChild(compChoice)
            body.appendChild(result)
        }
        // Now doing computer wins
        else if (computerChoice == 'rock' && humanChoice == 'scissors'){
            computerScore = ++computerScore
            compChoice.textContent = 'rock'
            result.textContent = 'You lose! Rock beats scissors!'
            body.appendChild(compChoice)
            body.appendChild(result)
        }
        else if (computerChoice == 'paper' && humanChoice == 'rock'){
            computerScore = ++computerScore
            compChoice.textContent = 'paper'
            result.textContent = 'You lose! Paper beats rock!'
            body.appendChild(compChoice)
            body.appendChild(result)
        }
        else if (computerChoice == 'scissors' && humanChoice == 'paper'){
            computerScore = ++computerScore
            compChoice.textContent = 'scissors'
            result.textContent = 'You lose! Scissors beats paper!'
            body.appendChild(compChoice)
            body.appendChild(result)
        }
        // Tie
        else if (humanChoice==computerChoice){
            result.textContent = 'Tie!'

        }
    }
}



playGame()



