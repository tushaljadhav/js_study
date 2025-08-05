// ==================================== Array ====================================

// Array using square brackets
const myArr = [ 0 , 1 , 2 , 3 , 4 , 5]

// Array of strings (names of heroes)
const myHeros = ["ironman" , "superman" , "spiderman"]

// Another way to create an array using Array constructor
const myArr1 = new Array(1, 2, 3, 4, 5)

// Accessing value using index
// console.log(myArr[3]); // Outputs: 3


// =============================== Array Methods ===============================

// Add element at the end of the array
// myArr.push(6)
// myArr.push(7)

// Remove element from the end of the array
// myArr.pop()

// Add element at the beginning of the array
// myArr.unshift(9)

// Remove element from the beginning of the array
// myArr.shift()

// Check if value exists in the array (returns true/false)
// console.log(myArr.includes(9)); // false
// console.log(myArr.includes(4)); // true

// Get the index of a value (returns -1 if not found)
// console.log(myArr.indexOf(9)); // -1
// console.log(myArr.indexOf(3)); // 3

// Convert array to string (comma separated)
// const newArr = myArr.join()

// console.log(myArr); // original array
// console.log(newArr); // string version of array


// ============================= Slice and Splice ==============================

console.log("A ", myArr); // Original array

// slice(start, end) -> extracts a portion of the array from index 1 to 3 (end not included)
const myn1 =  myArr.slice(1, 4)

console.log(myn1);        // Outputs: [1, 2, 3]
console.log("B ", myArr); // Original array remains unchanged

// splice(start, deleteCount) -> removes 4 elements starting from index 1 and modifies the original array
const myn2 =  myArr.splice(1, 4)

console.log("C ", myArr); // Modified array after splice
console.log(myn2);        // Outputs: [1, 2, 3, 4]


// ===================== ✅ Most Common & Important Array Methods =====================

/*
+------------------+----------------------------------------+-------------------------------+
|     Method       |               Purpose                  |           Example             |
+------------------+----------------------------------------+-------------------------------+
| push()           | Add element at end                     | [1, 2].push(3) ➝ [1, 2, 3]     |
| pop()            | Remove last element                    | [1, 2, 3].pop() ➝ [1, 2]       |
| unshift()        | Add element at beginning               | [2, 3].unshift(1) ➝ [1, 2, 3]  |
| shift()          | Remove first element                   | [1, 2, 3].shift() ➝ [2, 3]     |
| includes()       | Check if value exists                  | [1, 2, 3].includes(2) ➝ true   |
| indexOf()        | Find index of a value                  | [1, 2, 3].indexOf(3) ➝ 2       |
| join()           | Convert array to string                | [1, 2].join('-') ➝ "1-2"       |
| slice()          | Get portion (no change to original)    | [1, 2, 3].slice(1, 3) ➝ [2, 3] |
| splice()         | Remove/replace (modifies original)     | [1,2,3].splice(1,2) ➝ [2,3]    |
| map()            | Transform each element                 | [1,2].map(x=>x*2) ➝ [2,4]      |
| filter()         | Filter by condition                    | [1,2,3].filter(x=>x>1) ➝ [2,3] |
| reduce()         | Reduce to a single value               | [1,2,3].reduce((a,b)=>a+b) ➝ 6 |
| forEach()        | Run function for each item             | [1,2].forEach(x=>console.log)  |
| concat()         | Merge two arrays                       | [1,2].concat([3,4]) ➝ [1,2,3,4]|
| flat()           | Flatten nested arrays                  | [1,[2,3]].flat() ➝ [1,2,3]     |
| sort()           | Sort array (as strings by default)     | [3,1,2].sort() ➝ [1,2,3]       |
| reverse()        | Reverse the array                      | [1,2,3].reverse() ➝ [3,2,1]    |
+------------------+----------------------------------------+-------------------------------+
*/
