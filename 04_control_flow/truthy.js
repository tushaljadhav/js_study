// -------------------- FALSY VALUES --------------------
// In JavaScript, these values are considered false when used in a boolean context
// (like inside an if condition)
 
// false          // Boolean false
// 0              // Number zero
// -0             // Negative zero
// 0n             // BigInt zero
// ""             // Empty string
// null           // Null value
// undefined      // Undefined value
// NaN            // Not a Number


// -------------------- TRUTHY VALUES --------------------
// All other values are considered true in a boolean context

// true            // Boolean true
// 42              // Any number except 0, -0, NaN
// -42             // Negative numbers (except -0)
// "hello"         // Non-empty string
// " "             // String with space
// []              // Empty array (YES, arrays are truthy even if empty)
// {}              // Empty object
// function() {}   // Any function
// Infinity        // Infinity and -Infinity are truthy
// new Date()      // Date objects
// "0"             // String "0" is not empty → truthy
// "false"         // String "false" is still non-empty → truthy



// -------------------- EXAMPLE: Checking TRUTHY/FALSY --------------------

const userEmail = []   // An empty array ([]) is TRUTHY in JS

// Here, condition checks if userEmail is truthy
if (userEmail) {
    console.log("got user email"); // This will run because [] is truthy
    
} else {
    console.log("dont have user email");
}


// ✅ But if you want to check whether array is actually empty, 
// you must check its length:

// if (userEmail.length === 0) {
//     console.log("array is empty ");
// }



// -------------------- EXAMPLE: Checking EMPTY OBJECT --------------------

const emptyobject = {}

// Object.keys(obj) → returns array of property names
// If length is 0, means object has no keys
if (Object.keys(emptyobject).length === 0) {
    console.log("object is empty");
}



// -------------------- NULLISH COALESCING OPERATOR (??) --------------------
// Used to provide a fallback value ONLY if left side is null or undefined
// (Unlike || which also treats 0, "", NaN as falsy)


// let val1;

// val1 = 4 ?? 10          // ✅ returns 4 (since 4 is not null/undefined)
// val1 = "hii" ?? 20      // ✅ returns "hii"
// val1 = null ?? 10       // ✅ returns 10 (because left is null)
// val1 = undefined ?? true ?? 90  // ✅ returns true (first non-null/undefined)

// console.log(val1);



// -------------------- TERNARY OPERATOR --------------------
// Short-hand if else statement
// Syntax: condition ? runIfTrue : runIfFalse

const icepackprice = 100 

icepackprice <= 80 ? console.log("less then 80")   // Runs if condition is true
  : console.log("more then 80");  // Runs if condition is false
