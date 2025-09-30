// for
let arr = [];
let i;
for(i = 0; i<= 10; i++){
    arr[i] = (i+1) * 10

}

console.log(arr);


for(let i = 1; i<=10; i++){
    console.log(`Table of ${i} \n`)
    for(let j = 1; j<=10; j++){
        console.log(`${i} X ${j} = ${i*j}`)
    }
    console.log("\n");
    
}

let myArray = ["falsh", "batman", "superman"]

for(let i = 0; i<myArray.length; i++){
    console.log(myArray[i])
}


//break and  continue statement are similar to what we studied in C language 