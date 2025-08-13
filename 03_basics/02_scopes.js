let a = 300 // let using for maintaing code it not passing in scopes same variable 
const b = 500 // const also  using for maintaing code it not passing in scopes same variable 
var c = 900 // var is passing same variable in scope , it not maintenig the code it give disadavnatege

if (true) {
  let a = 10;
  const b = 20;
  var c = 30
  console.log("inner", a);
}

console.log(a);
console.log(b);
console.log(c);


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
  console.log(globalVar); // ✅ Accessible
}
accessGlobal();
console.log(globalVar); // ✅ Accessible


// -------------------- 2. FUNCTION SCOPE --------------------
function functionScopeExample() {
  var funcVar = "🛠 Function Scoped Variable";
  console.log(funcVar); // ✅ Accessible here
}
functionScopeExample();
// console.log(funcVar); // ❌ Error: funcVar is not defined


// -------------------- 3. BLOCK SCOPE --------------------
if (true) {
  let blockLet = "📦 Block Scoped (let)";
  const blockConst = "📦 Block Scoped (const)";
  var notBlockScoped = "⚠ var ignores block scope";
  
  console.log(blockLet);   // ✅ Accessible
  console.log(blockConst); // ✅ Accessible
}
console.log(notBlockScoped); // ✅ Accessible (var leaks out)
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
