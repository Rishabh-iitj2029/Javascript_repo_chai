const marvel_heroes = ["Thor", "Hulk", "IronMan"]
const dc_heroes = ["Batman", "flash", "Superman"]

// marvel_heroes.push(dc_heroes)


// const myn1 = marvel_heroes.concat(dc_heroes) //here only one array element is added
// console.log(myn1)

const all_heroes = [...marvel_heroes, ...dc_heroes] // here we can add numerous arrays element
console.log(all_heroes);


const another_arr = [1, 2 , [3, 4, 5], [5, 8, 4, [4, 8, 96]]]

const real_another_arr = another_arr.flat(Infinity) // removes all the internal arrays
console.log(real_another_arr);


console.log(Array.isArray("rishabh"))
console.log(Array.from("rishabh"))


console.log(Array.from({name: "rishabh"})) //interesting

let score1 = 100
let score2 = 200
let score3 = 300
let score4 = 400

console.log(Array.of(score1, score2, score3, score4,"Hello"))