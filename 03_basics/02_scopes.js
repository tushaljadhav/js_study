let a = 300 // let using for maintaing code it not passing in scopes same variable 
const b = 500 // const also  using for maintaing code it not passing in scopes same variable 
var c = 900 // var is passing same variable in scope , it not maintenig the code it give disadavnatege

if (true) {
  let a = 10;
  const b = 20;
  var c = 30
  // console.log("inner", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


/*
✅ Summary Table

| Scope Type    | Declared With                    | Accessible Where?          | Notes                          |
|---------------|----------------------------------|-----------------------------|---------------------------------|
| Global Scope  | var, let, const (outside)        | Anywhere in code            | Can cause conflicts            |
| Function Scope| var, let, const (inside function)| Only inside that function   | var is function-scoped         |
| Block Scope   | let, const                       | Only inside { } block       | Safer for loops/if statements  |
| Module Scope  | Any (inside ES module)           | Only inside module file     | Export/import to share         |
*/

// -------------------- 1. GLOBAL SCOPE --------------------
let globalVar = "🌍 Global Variable"; // Accessible anywhere

function accessGlobal() {
  // console.log(globalVar); // ✅ Accessible
}
accessGlobal();
// console.log(globalVar); // ✅ Accessible


// -------------------- 2. FUNCTION SCOPE --------------------
function functionScopeExample() {
  var funcVar = "🛠 Function Scoped Variable";
  // console.log(funcVar); // ✅ Accessible here
}
functionScopeExample();
// console.log(funcVar); // ❌ Error: funcVar is not defined


// -------------------- 3. BLOCK SCOPE --------------------
if (true) {
  let blockLet = "📦 Block Scoped (let)";
  const blockConst = "📦 Block Scoped (const)";
  var notBlockScoped = "⚠ var ignores block scope";
  
  // console.log(blockLet);   // ✅ Accessible
  // console.log(blockConst); // ✅ Accessible
}
// console.log(notBlockScoped); // ✅ Accessible (var leaks out)
// console.log(blockLet);    // ❌ Error
// console.log(blockConst);  // ❌ Error


// -------------------- 4. MODULE SCOPE --------------------
// This works only in ES modules (.mjs files or <script type="module"> in HTML)
// file1.mjs:
// export const moduleVar = "📄 Module Scoped Variable";
// 
// file2.mjs:
// import { moduleVar } from './file1.mjs';
// console.log(moduleVar); // ✅ Accessible after import



// ============================================================================
// 📌 IMPORTANT SCOPE RULE:
// In JavaScript:
// 1️⃣ Parent function or parent block ❌ CANNOT access variables declared inside its child function or child block.
// 2️⃣ Child function or child block ✅ CAN access variables declared in its parent (this is called Lexical Scope).
// 🔹 Lexical Scope means: Inner (child) code can use variables from outer (parent) code.
// 🔹 But outer (parent) code cannot use variables from inner (child) code.
// ✅ Rule applies to: FUNCTION SCOPE and BLOCK SCOPE.
// ============================================================================


// ---------------------------- FUNCTION SCOPE EXAMPLE ----------------------------

function one() {
  const username = "tushal" // 'username' is declared inside 'one()', so it is accessible only inside this function

  function two() {
    const website = " youtube" // 'website' is declared inside 'two()', so it is accessible only inside 'two()'
    // console.log(username); // ✅ This works because 'two()' can access variables from its outer function 'one()' (Lexical Scope)
  }

  // console.log(website); ❌ Error: Cannot access 'website' here because it's inside 'two()', and we are outside that function's scope

  two() // Calling inner function
}
one()


// ---------------------------- BLOCK SCOPE EXAMPLE ----------------------------

if (true) {
  const username = "tushal" // Declared inside this 'if' block → only accessible inside this block

  if (username === "tushal") {
    const website = " youtube" // Declared inside nested 'if' block → only accessible inside this block
    // console.log(username + website); // ✅ Works because both are inside this inner block
  }

  // console.log(website); ❌ Error: Cannot access 'website' here because it is inside the nested 'if' block
}

// console.log(username); ❌ Error: Cannot access 'username' here because it was declared inside the 'if' block



// ---------------------------- FUNCTION HOISTING EXAMPLE ----------------------------

// Hoisting: In JavaScript, function declarations are moved to the top of their scope before execution

// This is why we can call 'addone()' before it is written

console.log(addone(5)) // ✅ Works because 'addone' is a FUNCTION DECLARATION

function addone(num) { // Function Declaration → gets hoisted completely (both name & definition)
  return num + 1
}


// ---------------------------- FUNCTION EXPRESSION EXAMPLE ----------------------------

// console.log(addtwo(5)) ❌ Error: Cannot call before initialization because 'addtwo' is stored in a const variable

// Function Expressions are NOT hoisted like function declarations

// Only the variable name is hoisted (without its definition), so calling it before initialization throws an error

const addtwo = function(num) { // Function Expression → stored in a variable
  return num + 2
}

console.log(addtwo(5)) // ✅ Works because we are calling after the function is assigned
