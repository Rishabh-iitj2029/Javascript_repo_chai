// const userInput = document.querySelector('.guessField')
// const form = document.querySelector('.form')

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const guess = parseInt(userInput.value);
//     console.log(guess)
// })

// // console.log(4567);
// const lastElement = document.querySelector('.lastElement')
// const numGuess = document.createElement('p')
// numGuess.innerHTML = "5"
// lastElement.replaceWith(numGuess)
// console.log(lastElement)

const form = document.querySelector(".form")
const userInput = document.querySelector(".guessField")
const preGuess = document.querySelector(".guesses")
const lastElement = document.querySelector('.lastElement')
const lowOrHi = document.querySelector('.lowOrHi')

const div = document.createElement('div')
div.className = "result"
div.style.color = "white"

// console.table(form, userInput, preGuess, lastElement, lowOrHi)
// console.log(lowOrHi);


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const guess = parseInt(userInput.value)
    // console.log(guess)

    const corrNum = 50
    // console.log(corrNum);
    const guessNum = 1;
    
    for(let i = 1; i<=10; i++, guessNum++){
        if(guess == corrNum){
            div.innerHTML = `you guessed it right in ${guessNum} guess`
            break;
        }
    }
})

