const coding = ["js" , "ruby" , "java" , "python" , "cpp"]

// coding.forEach( function (value) {
//     console.log(value);
    
    
// })

// coding.forEach((item) => {
//     console.log(item);
    
// })

// function printme(item) {
//     console.log(item);
    
    
// }

// coding.forEach(printme)

// coding.forEach((item, index, arr) => {
//     console.log(item ,index , arr);
    
// })


const mycoding = [
    {
        languageName : "javascript",
        languagefileName: "js"
    },
    {
        languageName : "java",
        languagefileName: "java"
    },
    {
        languageName : "python",
        languagefileName: "py"
    },
]

mycoding.forEach((item) => {
    console.log(item.languagefileName);
    
})