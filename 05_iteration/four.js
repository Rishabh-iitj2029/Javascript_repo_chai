const ext = {
    js : "javascript",
    py: "python",
    cpp: "C++",

}

// for (const key in ext) {
//     console.log(key)
    
    
// }

for (const key in ext) {
    console.log(`${key} is the extension of ${ext[key]}`);
    
    
}

const myArr =[1, 2, 3, 5];

for (const key in myArr) {
    console.log(key,":-",myArr[key]);
    
}