const promiseOne = new Promise(function(resolve, reject){
    //Do an async tasks
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is completed");
        resolve();
        
    },1000)
})

promiseOne.then(function(){
    console.log("Promises comsumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
        
    },1000)
}).then(function(){
    console.log("Promise 2 consumed");
    
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 3");
        resolve({username:"chai", email:"chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;

        if(!error){
            resolve({username:"rishabh", email:"rishabh@example.com"})
        }

        else{
            reject('Error:- something went wrong')
        }
    }, 1000)
})

const username = promiseFour.then(function(user){
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
}).finally(() => console.log("the promise is either resolved or rejected"))

// console.log(username);


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;

        if(!error){
            resolve({username:"Javascript", password:"123"})
        }

        else{
            reject('Error:- JS went wrong')
        }
    }, 1000)
})

async function consumePromisefive(){
    try{
        const response = await promiseFive
        console.log(response);
        

    }catch(error){
        console.log(error);
        
    }
}

consumePromisefive()


// async function getAllUsers(){

//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json() //converting of this to json also takes time
//         console.log(data)
//     }

//     catch(error){
//         console.log("E: ", error)
//     }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch(function(error){
    console.log("E: ", error);
    
})

console.log("first fetch is executed\n")


fetch('https://randomuser.me/api/')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => {
    console.log("E:- ", error);
    
})