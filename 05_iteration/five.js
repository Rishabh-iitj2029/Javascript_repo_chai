const programmingLang =  ["python", "C++", "C", "java", "javascript", "Kotlin"]

// programmingLang.forEach(function (item){
//     console.log(item);
    
// })  

// programmingLang.forEach((item) => {
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
// }

// programmingLang.forEach(printMe)

// programmingLang.forEach((item, index, arr) => {
//     console.log(item, index, arr);
    
// })

const myCoding = [
    {
        language: "JavaScript",
        languageFile: ".js",
        print: "console"
    },
    {
        language: "C++",
        languageFile: ".cpp",
        print: "cout"
    },
    {
        language: "python",
        languageFile: ".py",
        print: "print"
    }
]

myCoding.forEach( (item) => {
    for(const key in item){
        console.log(key, ":", item[key]);
        console.log("\n");
        
    }

})