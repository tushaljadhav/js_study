// ------------------------------
// Example 1: forEach loop with Array
// ------------------------------

// Declaring an array of programming languages
const coding = ["js" , "ruby" , "java" , "python" , "cpp"]


// ✅ Example 1a: Using anonymous function with forEach
// coding.forEach(function (value) {
//     console.log(value); // Prints each item from the array
// })


// ✅ Example 1b: Using arrow function (shorter syntax)
// coding.forEach((item) => {
//     console.log(item); // Prints each item from the array
// })


// ✅ Example 1c: Using a named function
// function printme(item) {
//     console.log(item);
// }
// coding.forEach(printme) // Pass function reference (not call it)


// ✅ Example 1d: Accessing item, index, and array together
// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr); 
//     // Prints each item, its index, and the entire array
// })



// ------------------------------
// Example 2: forEach loop with Array of Objects
// ------------------------------

// Declaring an array of objects containing programming languages
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

// Using forEach to loop through each object in the array
mycoding.forEach((item) => {
    console.log(item.languagefileName); 
    // Accessing and printing the "languagefileName" from each object
    // Output: js, java, py
})
