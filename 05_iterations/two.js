// ---------------------------- WHILE LOOP EXAMPLES ----------------------------

// Example 1: Print even numbers from 0 to 10
let index = 0
while (index <= 10) {   // Loop will run as long as index <= 10
    // console.log(`index is ${index}`);  // Print current value of index
    index = index + 2   // Increase index by 2 (0,2,4,6,8,10)
}


// Example 2: Traversing an array using while loop
let myarry = ["one", "two", "three"]
let arr = 0
while (arr < myarry.length) {   // Loop runs until arr < array length
    // console.log(`array is ${myarry[arr]}`);  // Print each array element
    arr = arr + 1   // Move to next index
}



// ---------------------------- DO-WHILE LOOP EXAMPLE ----------------------------

// Example 3: Do-while always executes at least once
let score = 11
do {
    console.log(`score is ${score}`); // Prints score (11 first time)
    score++   // Increment score
} while (score <= 10);  // Condition is false, but still executes once
