const myNums = [1, 2, 3]

// using reduce() method to sum all numbers in the array
// syntax: array.reduce((accumulator, currentValue) => { ... }, initialValue)

// const newNums = myNums.reduce((acc , currval) => {
//     console.log(`acc:${acc} and currval:${currval}`); // shows how accumulator and current value change each time
//     return acc + currval  // adds current value to the accumulator
// },0) // initial value of accumulator is 0

// simplified version of the above code
const newNums = myNums.reduce((acc, currval) => acc + currval, 0)

console.log(newNums); // output: 6 (1 + 2 + 3)
