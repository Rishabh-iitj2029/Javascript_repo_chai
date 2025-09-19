//*****************Numbers************************************** */
let score = 400

let num1 = new Number(200.257894)

console.log(score);
console.log(num1);

console.log(num1.toString().length)
str1 = num1.toString()
console.log(typeof str1);

console.log(num1.toFixed(2)) //number of decimal places you want to show

const num2 = 456.789456

console.log(num2.toPrecision(2)); //return a string
console.log(num2.toPrecision(4));
console.log(num2.toPrecision(3).slice(1));

let str2 = num2.toPrecision(2)
console.log(typeof str2);


// 4.6e+2 = 4.6*10^2

let num3 = 1000000000
console.log(num3.toLocaleString());
console.log(num3.toLocaleString('en-IN'));


// **********************Maths**********************************

// console.log(Math.abs(-56))
// console.log(Math.round(3.5))

// console.log(Math.ceil(4.1))
// console.log(Math.floor(4.98))
// console.log(Math.min(4.98, 5, 89, 0.1))
// console.log(Math.max(4.98, 98.2356, 78, 54))

console.log(Math.random()) //gives number between [0, 1)

//using to math.random for printing value in given range
//Method1
console.log(Math.floor((Number((Math.random()*10))%6)+1))

//Method2
let min = 45
let max = 78
console.log(Math.floor((Math.random()*(max-min +1))+ min))