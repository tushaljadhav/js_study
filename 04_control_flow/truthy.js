
// These are FALSY
// false          // Boolean false
// 0              // Number zero
// -0             // Negative zero
// 0n             // BigInt zero
// ""             // Empty string
// null           // Null value
// undefined      // Undefined value
// NaN            // Not a Number


// // These are TRUTHY
// true            // Boolean true
// 42              // Any number except 0, -0, NaN
// -42             // Negative numbers (except -0)
// "hello"         // Non-empty string
// " "             // String with space
// []              // Empty array
// {}              // Empty object
// function() {}   // Any function
// Infinity        // Infinity and -Infinity
// new Date()      // Date objects
// "0"             // Non-empty string "0" is truthy
// "false"         // String "false" is also truthy



const userEmail = []
if (userEmail) {
    console.log("got user email");
    
}else{
    console.log("dont have user email");
}



// if (userEmail.length === 0) {
//     console.log("array is empty ");
    
// }

const emptyobject = {}

if (Object.keys(emptyobject).length === 0) {
    console.log("object is empty");
    
}



// Nullish Coalescing  Operator (??) : null , undefined


// let val1;

// val1 = 4 ?? 10
// val1 = "hii" ?? 20
// val1 = null ?? 10
// val1 = undefined ?? true ?? 90


// console.log(val1);


// terniary operator

// condition ? true : false

const icepackprice = 100 

icepackprice <= 80 ? console.log("less then 80") : console.log("more then 80");


