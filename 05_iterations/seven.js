const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// using map(), filter() methods together (method chaining)

// const newNums = myNumers.map((nums) => { return nums + 10})
// ↑ this adds 10 to each number in the array

// method chaining example:
const newNums = myNumers
                .map((num) => num * 10)   // Step 1: multiply each number by 10
                .map((num) => num + 1)    // Step 2: add 1 to each result
                .filter((num) => num >= 40) // Step 3: keep only numbers greater than or equal to 40
                
console.log(newNums); // output: [41, 51, 61, 71, 81, 91, 101]
