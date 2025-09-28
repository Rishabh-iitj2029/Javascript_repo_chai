//Method => 1 
function function_name(){
    /*Syntax*/
}
// Method => 2

const function_name = function(){
    /*Synatx*/
}



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


// Using arrray and objects in functions

function calcSum(val1, val2,...num){ //...num can multiple parameter
    return num;
}
console.log(calcSum(45, 12, 78, 65))

const user = {
    username : "Rishabh",
    price: "155"
}

function handleObject(anyObject){
    console.log(`The username is ${anyObject.username} and the course price is ${anyObject.price}`)

}

handleObject(user)
handleObject(
    {
        user:"Akshat",
        price: "254"
    }
)
const myNewArr = [400, 500, 800, 700 ]

function handleArray(newarr){
    return (newarr[1], newarr[3])
}
const data = handleArray(myNewArr)
console.log(data);
