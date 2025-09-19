 //******************Dates***************************************

//  let myDate = new Date()

//  console.log(typeof myDate)
//  console.log(myDate)
//  console.log(myDate.toString())
//  console.log(myDate.toISOString())
//  console.log(myDate.toDateString())
//  console.log(myDate.toJSON())
//  console.log(myDate.toLocaleString())
//  console.log(myDate.toLocaleDateString())
//  console.log(myDate.to
//  let myDate = new Date()

//  console.log(typeof myDate)
//  console.log(myDate)
//  console.log(myDate.toString())
//  console.log(myDate.toISOString())
//  console.log(myDate.toDateString())
//  console.log(myDate.toJSON())
//  console.log(myDate.toLocaleString())
//  console.log(myDate.toLocaleDateString())
//  console.log(myDate.toLocaleTimeString())LocaleTimeString())

 // date argument format YYYY, MM, DD, HH, mm, ss, ms
 // month is 0 based index

//  let myDate1 = new Date(2023, 0, 25, 15, 6, 23, 45)
//  console.log(myDate1.toLocaleString());

//  let myCreatedDate = new Date(2020, 5, 25, 15, 6)
//  console.log(myCreatedDate.toLocaleString());
 
let myCreatedDate = new Date("01-06-2025") //MM-DD-YYYY format
// console.log(myCreatedDate.toString())

let mytimeStamp = Date.now() //no. of milli seconds from 1jan 1970
console.log(typeof mytimeStamp)
console.log(mytimeStamp)

console.log(myCreatedDate.getMilliseconds())
console.log(myCreatedDate.getTime())
console.log(Math.round(Date.now()/1000))

let newDate = new Date()

console.log(newDate.getMonth());

let newDate1 = new Date("02-24-2024")
console.log(newDate1.getTime())
