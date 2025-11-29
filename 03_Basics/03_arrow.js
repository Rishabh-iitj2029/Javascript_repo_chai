const user = {
    username : "Rishabh",
    price : 999,

    welcome : function(){
        console.log(`${this.username} welcome to this page`)
        console.log(this)
    }
}

user.welcome();

user.username = "Dheeraj beta"
user.welcome()
console.log(this); // in nodejs compiler it is a empty object while in browser it non-empty and contain windows element


// ******************Arrow Function**********************

// function chai(){
//     const username = "Rishabh"
//     console.log(this) // inside the function the "this" contains some content in it
// }

// chai()



const chai = () => {
    let username = "Rishabh"
    console.log(this.username);
    
}

// chai()


//********************Arrow Function*********************** */
//Method - 1

// const AddTwo = (num1, num2) => {
//     return num1+ num2
// }

// console.log(AddTwo(45, 55));

//Method - 2

// const AddTwo = (num1, num2) => (num1 + num2)  //parenthesis directly return the value

// console.log(AddTwo(78, 89))

const AddTwo = () => ({username : "rishabh"})

console.log(AddTwo());
