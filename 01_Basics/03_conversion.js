let score = 33
let score1= "33abc"

console.log(typeof score);
console.log(typeof score1)

ValueInNumber = Number(score1)
console.log(ValueInNumber);

console.log(typeof ValueInNumber);


// "33" => 33
// "33abc" => NaN
// true => 1

let IsLoggedIn = "Rishabh"

Inboolean = Boolean(IsLoggedIn)
console.log(Inboolean);

//boolean conversion
// 1 => true  0 => false
// "" => false
// " " => true

let someNumber = 33

let inString = String(someNumber)
let inBool = Boolean(someNumber)

console.table([inString, inBool, ])