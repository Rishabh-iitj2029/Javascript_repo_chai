let a = 400


if(true){
    let a = 20
    const b = 90
    var c = 40
    console.log("Inner: ",a);
    
}

console.log("Outer: ",a)
// console.log(b)
console.log( c)


// Nested scope

function one(){
    const username = "Ankit"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }

    // console.log(website);
    two()
}
 
one()

if (true){
    const username = "rishabh"
    if(username === "rishabh"){
        const website = "youtube"
        console.log(website + username);
        
    }

    // console.log(website)

}
// console.log(username);


// ********************Interesting************************

console.log(addOne(5))
function addOne(num){
    return num+1
}



// console.log(addTwo(15));
const addTwo = function(num){
    return num + 2
}


