function SayName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("T");

    
}

// SayName()

function addTwonumber(n1, n2){ // n1 and n2 are parameter 
    console.log(n1 + n2); 
    return n1+n2
    
}

addTwonumber(45,"a"); // 45 and a are arguments

const sum = addTwonumber(23, 89)
console.log(sum)

function loggedInUser(username = "Sam"){
    if(username == undefined){
        console.log("Please enter a valid name");
        
    }
    return (`${username} is now logged in`)
}

const msg = loggedInUser()
