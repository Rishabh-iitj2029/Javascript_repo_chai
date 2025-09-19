/* how does the data stored in memory and accessed by system , datatypes are
classic into two types */

// Priitive Datatypes

// 7 types:- String, number, boolean, null, undefine,
//           symbol, bigint

//Symbols

let id = Symbol('123')
let anotherId = Symbol('123')

console.log(id == anotherId);
console.log(id === anotherId);


let bigNumber = 12345678901234567890n

console.log(typeof bigNumber);

// Separate datatype for decimal in JS

// JS is dynamic type language


// Referece 

// Arrays, Objects, function

let arr1 = ["Rishabh", "Ankit", "Gaurav", "Dheeraj"]

let obj = {
    name : "Rishabh",
    age : 19,
}

console.log(obj);

const myfunc = function(){
    console.log("Hello world");
    
}

console.log(typeof obj)
console.log(typeof myfunc);


// https://262.ecma-international.org/5.1/#sec-11.4.3