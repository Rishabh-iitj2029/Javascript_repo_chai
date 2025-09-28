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


// ***********************************************************************

// function chai(){
//     const username = "Rishabh"
//     console.log(this) // inside the function the "this" contains some content in it
// }

// chai()