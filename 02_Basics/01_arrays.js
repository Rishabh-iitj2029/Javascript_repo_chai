//array

const arr = [1, 2, "rishabh", "ankit", "Tanuj", "Dheeraj", true]

// arr in js are mutuable(shallow copy) and resizable
console.log(arr[2]);

//Arrays methods

// arr.push(false) //adds values at the end
// arr.push(8)
// arr.push(8)

arr.unshift(89)

console.log(arr.includes("Tanuj"));
console.log(arr.indexOf("ankit"))
console.log(arr);


const arr1 = ["rishabh", " is ", "good", " boy"]
console.log(arr1)

const str1 = arr1.join()
console.log(str1);
console.log(typeof str1);


const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log("A ", arr2)

const myn1 = arr2.slice(1, 4)
console.log("B ", arr2)
console.log(myn1)

const myn2 = arr2.splice(1,4)
console.log("C ", arr2)
console.log(myn2)


// slice => copies a portion of array from the original array
// splice => remove a portion of array from the original array and stores the removed part in the given variable


