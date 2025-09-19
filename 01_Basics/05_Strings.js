const name = "Rishabh"
const RepoCount = 40

console.log(name[2]);

// Older method
console.log(name + RepoCount + " Value");

// Modern method
console.log(`My name is ${name} and my repocount is ${RepoCount}`);

const name1 = new String('Ri2shabh')

console.log(name1[4]);
console.log(name1.toUpperCase());
console.log(name1.bold());

console.log(name1.charAt(3))
console.log(name1.indexOf('t'))

console.log(name1.substring(1, 4)); //similar to python
console.log(name1.substring(-5, 4)); // equivalent to (0,4)

const newString = name1.slice(-5, 5)// (-5, 5) equivalent to (3, 5)
console.log(newString);


const newString1 = "    Hitesh         Chowdhary    "
console.log(newString1);

console.log(newString1.trim()); //Trim the extra space 
console.log(newString1.trimEnd())

const url = "Https://google/hitesh%20chowdury/%20com"

console.log(url.replaceAll("%20", "_"))
console.log(url.replace("%20", "_"));
console.log(newString1.includes('/'))
console.log(url.search());
console.log(url.startsWith('H'))

console.log(url.split('/'))
