// ----------------------- OBJECT WITH METHOD -----------------------
const user = {
    username : "tushal",
    price : 700,

    // "this" here refers to the current object (user)
    welcomeMessage : function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // will print the whole object
    }
}

// user.welcomeMessage(); // prints "tushal , welcome to website" + object
// user.username = "sam"; // change username
// user.welcomeMessage(); // prints "sam , welcome to website" + updated object

// console.log(this); 
// In Node.js => {} (empty object)
// In Browser => window object (global object)


// ----------------------- FUNCTION vs "this" -----------------------

// Normal function
function chai() {
    let username = "tushal";
    console.log(this.username); // ❌ undefined (because "this" inside a function 
                                // does not refer to its local variable)
}
// chai();


// Function expression
const chaiFunc = function() {
    let username = "tushal";
    console.log(this.username); // ❌ still undefined (same reason as above)
}
// chaiFunc();


// Arrow function
const chaiArrow = () => {
    let username = "tushal";
    console.log(this.username); // ❌ undefined
    // because arrow functions don’t have their own "this"
    // they inherit "this" from the surrounding context (lexical scope).
}
// chaiArrow();


// ----------------------- ARROW FUNCTION RETURNS -----------------------

// ✅ Basic arrow function with explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(1,4)); // 5


// ✅ Arrow function with implicit return (no "return" keyword needed)
const addTwo1 = (num1, num2) => num1 + num2;
console.log(addTwo1(1,4)); // 5


// ✅ Arrow function with implicit return using parentheses
const addTwo2 = (num1, num2) => (num1 + num2);
console.log(addTwo2(1,4)); // 5


// ✅ Returning an object from arrow function
// IMPORTANT: Use ( ) around {} to tell JS it's an object, not a block
const addTwo3 = (num1, num2) => ({ username: "tushal" });

console.log(addTwo3(1,4)); 
// Output: { username: "tushal" }
