// ++++++++++++++++++++++++++++++++++++++++ Numbers +++++++++++++++++++++++++++++++++++
const score = 400
// console.log(score); // Just logs the score value (400)

const balance = new Number(100) // Creates a Number object with value 100
// console.log(balance);

 // Convert the number to string and get its length (number of digits)
 // For example, "100" has a length of 3
// console.log(balance.toString().length); 

// Converts number to a string with 2 decimal places, e.g., "100.00"
// console.log(balance.toFixed(2)); 

const otherNumber = 156.88721

// Returns the number formatted with a precision of 4 digits, e.g., "156.9"
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// Converts number to locale string using default (US) format, e.g., "1,000,000"
// console.log(hundreds.toLocaleString());

// Converts number to Indian locale format, e.g., "10,00,000"
// console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++

// Logs the Math object, which contains mathematical constants and functions
console.log(Math);

// Math.abs() returns the absolute (positive) value of a number
console.log(Math.abs(-4)); // Output: 4

// Math.round() rounds the number to the nearest integer
console.log(Math.round(4.6)); // Output: 5

// Math.ceil() rounds the number **up** to the nearest integer
console.log(Math.ceil(4.3)); // Output: 5

// Math.floor() rounds the number **down** to the nearest integer
console.log(Math.floor(4.9)); // Output: 4

// Math.min() returns the smallest number from the given set
console.log(Math.min(72,46,82,31)); // Output: 31

// Math.max() returns the largest number from the given set
console.log(Math.max(72,46,82,31)); // Output: 82

// Math.random() returns a random number between 0 and 1
console.log(Math.random()); 

// Generates a random number between 1 and 10 (not inclusive of 11)
console.log((Math.random() * 10) + 1); 

// Math.floor() makes it an integer between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1); 

const min = 10
const max = 20

// Generates a random integer between min and max (both inclusive)
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
