// ------------------------------
// Example 1: forEach does NOT return values
// ------------------------------

const coding = ["js", "ruby", "java", "python" , "cpp"]

// const values = coding.forEach((item) => {
//     console.log(item);   // Prints each language name
//     return item;         // This return is ignored by forEach
// })

// console.log(values); // ❌ Output: undefined
// Reason: forEach does not return a new array, it always returns 'undefined'



// ------------------------------
// Example 2: Using filter() method
// ------------------------------

// filter() creates a new array containing elements 
// that satisfy the given condition (returns true)

// Declaring an array of numbers
const myNums = [1,2,3,4,5,6,7,8,9,10]

// ✅ Using filter() to get numbers less than 4
// const newNums = myNums.filter((num) => {
//     return num < 4
// })
// console.log(newNums); // Output: [1, 2, 3]


// ✅ Doing the same with forEach (manual way)
// const newNums = []
// myNums.forEach((num) => {
//     if (num > 4) {          // Condition: numbers greater than 4
//         newNums.push(num)   // Manually pushing into new array
//     }
// });
// console.log(newNums); // Output: [5,6,7,8,9,10]



// ------------------------------
// Example 3: filter() with Array of Objects
// ------------------------------

// Declaring an array of book objects
const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Biography', publish: 2003, edition: 2011 },
  { title: 'Book Nine', genre: 'Technology', publish: 2015, edition: 2020 },
  { title: 'Book Ten', genre: 'Philosophy', publish: 1995, edition: 2001 },
];

// ✅ Example: Filter books with genre "History"
let userBooks = books.filter((bk) => bk.genre === 'History')
// Output: Books with genre = 'History'

// ✅ Example: Filter books published after 2000 and genre "Science"
userBooks = books.filter((bks) => {
  return bks.publish >= 2000 && bks.genre === "Science"
})
console.log(userBooks); 
// Output: [ { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 } ]



// ------------------------------
// Summary Notes 🧠
// ------------------------------
// → forEach() is used for looping but does NOT return anything.
// → filter() is used for filtering elements and returns a NEW array.
// → forEach is best for side effects (like console.log).
// → filter is best for conditions and extracting specific data.
