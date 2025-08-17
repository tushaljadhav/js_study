// ------------------- IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE) -------------------
// IIFE is a function that is executed immediately after it is created.
// Purpose: To avoid polluting the GLOBAL SCOPE (i.e., avoid creating global variables).
// It provides a private scope for variables and code inside it.

// ------------------- PROBLEM WITHOUT IIFE -------------------
// If we normally declare a function, its variables can "leak" into the global scope.
// Example:
/*
function chai(){
    console.log(`DB CONNECTED`);
}
chai();   // ✅ Works fine, but chai() exists in GLOBAL scope
*/

// ------------------- EXAMPLE 1: NAMED IIFE -------------------
// Syntax: (function functionName() { ... })();
// - The function is wrapped in parentheses to treat it as an expression.
// - () at the end immediately executes it.
// - Called "named IIFE" because we gave the function a name "chai".

(function chai() {
    console.log(`DB CONNECTED`);
})();  // <--- This semicolon is important if another IIFE follows

// ------------------- EXAMPLE 2: UNNAMED (or SIMPLE) IIFE -------------------
// We can also use an arrow function as IIFE.
// This is "unnamed IIFE" because we did not give it a function name.
// We can also pass arguments directly inside () after defining it.

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("tushal");  // Argument "tushal" is passed directly
