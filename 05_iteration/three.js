// ********************************for of loop********************************** 

// const heroes = ["batman", "superman", "flash"]

// for(const num of heroes){
//     console.log(num);
// }

// const nam = "Dheeraj meena"

// for(const char of nam){
//     console.log(`Each char is ${char}`);
    
// }


// ***********Map object in js*********

const countCode = new Map()
countCode.set('IN', "India")
countCode.set("USA", "United States of america")
// console.log(countCode)

// for(const element of countCode){
//     console.log(element)
// }

// for(const [key, values] of countCode){
//     console.log(`${key} :- ${values}`);

// }


const user = new Object()

user.username = "Rishabh"
user.isLoggedIn = false
user.language = ["English", "Hindi"]

// console.log(user);

for(const element of user){
    console.log(element);
    
}
