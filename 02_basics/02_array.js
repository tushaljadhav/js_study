// Arrays
const marvels = [ "thor", "hulk", "ironman", "spiderman" ]
const dc = ["superman", "flash", "batman"]

// marvels.push(dc) 
// ❌ This is NOT the correct method to merge 2 arrays 
// It will push the entire `dc` array as a single element inside `marvels`

// console.log(marvels); // Output: ["thor", "hulk", "ironman", "spiderman", ["superman", "flash", "batman"]]
// console.log(marvels[4][1]); // Accessing "flash" from nested array

// const allheros = marvels.concat(dc) 
// ✅ This is a GOOD method to merge two arrays
// console.log(allheros); // Output: ["thor", "hulk", "ironman", "spiderman", "superman", "flash", "batman"]

const all_new_heros = [...marvels, ...dc] 
// ✅ This is an EXCELLENT and MODERN method using spread operator to merge multiple arrays
// console.log(all_new_heros); // Output: ["thor", "hulk", "ironman", "spiderman", "superman", "flash", "batman"]

// Flattening Nested Arrays
const Another_array = [1, [2, 3], 4, [5, 6, 7], [[8, 9], 10]]
console.log(Another_array); 
// Output: [1, [2, 3], 4, [5, 6, 7], [[8, 9], 10]]  → Original nested array

console.log(Another_array.flat(Infinity)); 
// ✅ flat() method is used to flatten nested arrays
// `Infinity` is used to completely flatten all levels of nesting
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Array utility methods
console.log(Array.isArray("tushal")); 
// ✅ Checks if the value is an array → false (because it's a string)

console.log(Array.from("tushal")); 
// ✅ Converts string to array → ['t', 'u', 's', 'h', 'a', 'l']

console.log(Array.from({ name: "tushal" })); 
// ⚠️ Interesting Interview Question
// Cannot directly convert an object like this unless it's array-like or has a `length` property
// Output: [] → because object is not iterable or not array-like

// Array.of() → Creates a new array from the arguments passed
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); 
// ✅ Output: [100, 200, 300]
