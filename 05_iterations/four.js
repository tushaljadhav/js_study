// ------------------------------
// Example 1: for...in loop with Object
// ------------------------------

// Declaring an object with programming language shortcuts
const myobject = {
    js : 'javascript' ,
    cpp: 'c++' ,
    rb : "ruby",
    swift: "swift by apple"
}

// Using for...in loop to iterate over object keys
for (const key in myobject) {
    // Accessing each key and its corresponding value
    console.log(`${key} shortcut is for ${myobject[key]}`);
    // Output example: js shortcut is for javascript
}



// ------------------------------
// Example 2: for...in loop with Array
// ------------------------------

// Declaring an array of programming languages
const proggramming = ["js" , "rb" , "py" , "java" , "cpp"]

// Using for...in loop to iterate over array indexes
for (const key in proggramming) {
    console.log(proggramming[key]); // Prints each element of the array
    // Note: 'key' here refers to the index (0, 1, 2, 3, 4)
}



// ------------------------------
// Example 3: for...in loop with Map (❌ Not valid)
// ------------------------------

// Creating a new Map (key-value pairs)
const map = new Map()
map.set('IN' , "india")
map.set('USA' , "United States of America")
map.set('FR', "France")
map.set('IN' , "india")  // Duplicate key 'IN' will overwrite the previous one

// Trying to use for...in loop on a Map (❌ Will not work)
// Maps are not enumerable like objects, so for...in won’t iterate over them
for (const key in map) {
    console.log(key); // Nothing will print
}

// ✅ Correct way: use for...of loop with destructuring for Maps
// for (const [key, value] of map) {
//     console.log(key, ":-", value);
// }
