const randomNumber = Math.floor(Math.random()*100 +1)
console.log(randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas')

const p = document.querySelector('p')

let preGuess = []
let numGuess = 1

let playGame = true
if(playGame){
    submit.addEventListener('click', (e) =>{
        e.preventDefault();

        const guess = parseInt(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(guess = '' || guess<0 || guess >100 || isNaN(guess)){
        alert("please enter a valid number")
        return false
    }
    else{
        preGuess.push(guess)

        if(numGuess == 11){
            displayMessage(`Game over, the random number was ${randomNumber}`)
            endGame()
        }

        else{
            displayGuess(guess)
            checkGuess(guess)
        }
        return true
    }
}

function checkGuess(guess){
    if(guess == randomNumber){
        displayMessage(`you guessed it correctly `)
        endGame()
    }

    else if(guess > randomNumber){
        displayGuess(`Guess is high `)
    }

    else if(guess < randomNumber){
        displayMessage(`Guess is low`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML = `${guess}`
    numGuess++;
    remaining = `${11-numGuess}`
}
function displayMessage(msg){
    lowOrHi.innerHTML = `<h2>${msg}</h2>`
}

function newGame(){
    
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame"> Start new Game</h2> `
    startOver.appendChild(p)
    playGame = false
    newGame()
}