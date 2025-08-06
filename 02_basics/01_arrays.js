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

// console.log("A ", myArr); // Original array

// // slice(start, end) -> extracts a portion of the array from index 1 to 3 (end not included)
// const myn1 =  myArr.slice(1, 4)

// console.log(myn1);        // Outputs: [1, 2, 3]
// console.log("B ", myArr); // Original array remains unchanged

// // splice(start, deleteCount) -> removes 4 elements starting from index 1 and modifies the original array
// const myn2 =  myArr.splice(1, 4)

// console.log("C ", myArr); // Modified array after splice
// console.log(myn2);        // Outputs: [1, 2, 3, 4]


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


// push() – Adds one or more elements to the end of the array
const fruits = ["apple", "banana", "orange", "grapes"];

fruits.push("mango") // adds "mango" at the end
fruits.push("Strawberry") // adds "Strawberry" at the end
console.log(fruits);

// pop() – Removes the last element from the array
fruits.pop() // removes "Strawberry"
console.log(fruits);

// unshift() – Adds one or more elements to the beginning of the array
fruits.unshift("Jamun") // adds "Jamun" at the beginning
console.log(fruits);

// shift() – Removes the first element from the array
fruits.shift() // removes "Jamun"
console.log(fruits);

// includes() – Checks if the array contains a certain element
console.log(fruits.includes('mango')); // returns true if "mango" exists in the array

// indexOf() – Returns the index of the first occurrence of a value
console.log(fruits.indexOf('mango')); // returns index of "mango"

// join() – Joins all elements of an array into a single string
console.log(fruits.join()); // returns string like "apple,banana,orange,grapes,mango"

// slice() – Returns a shallow copy of a portion of the array (doesn't modify original)
console.log(fruits.slice(1 ,4)); // returns elements from index 1 to 3

// splice() – Adds/removes/replaces elements (modifies original array)
console.log(fruits.splice(1,3)); // removes 3 elements from index 1
console.log(fruits); // now the original array is modified

// map() – Creates a new array by applying a function to each element
const newfruits = fruits.map(fruits => fruits.toUpperCase()) // converts all to uppercase
console.log(newfruits);

// filter() – Creates a new array with elements that pass a condition
const tasks = ["Wake up", "Exercise", "Study JavaScript", "Sleep"];

const filter_tasks = tasks.filter(tasks => tasks.includes("a")) // returns tasks that include "a"
console.log(filter_tasks);

// reduce() – Reduces array to a single value (accumulator)
const allTasks = tasks.reduce((acc, curr) => acc + ", " + curr); // joins all tasks with comma
console.log(allTasks);

// forEach() – Executes a function once for each array element
tasks.forEach((task, index) => {
  console.log(`${index + 1}. ${task}`); // prints tasks with numbering
});

// concat() – Combines two or more arrays (does not modify original)
console.log(fruits.concat(tasks)); // combines fruits and tasks arrays

// flat() – Flattens nested arrays into a single array
const nestedArray  = [10, [[20, 30, [40, 50]]], 60, 70, [80, 90]];
const flatArray = nestedArray.flat(Infinity) // flattens all levels of nesting
console.log(flatArray);

// sort() – Sorts elements in alphabetical order (modifies original)
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(daysOfWeek.sort()); // sorts the days alphabetically

// reverse – Reverses the order of elements (modifies original)
console.log(daysOfWeek.reverse()); // reverses the sorted days array
