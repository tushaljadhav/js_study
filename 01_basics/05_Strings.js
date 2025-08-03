const name = "tushal"
const repoCount = 10

// console.log(name);


// console.log("hello my name is " + name + " and my repo count is " + repoCount  );// this is not good programming 

// console.log(`hello my name is ${name} and my repo count is ${repoCount} `);// this is good programming because we used `` and ${}


const gameName = new String('free fire')

console.log(gameName[2]);

console.log(gameName.__proto__); // 🔍 Shows the prototype object of the string, containing all built-in string methods


/*
| Method              | Description                                                                 |
|---------------------|------------------------------------------------------------------------------|
| length              | Returns the number of characters in the string.                             |
| toUpperCase()       | Converts all characters to uppercase.                                       |
| toLowerCase()       | Converts all characters to lowercase.                                       |
| charAt(index)       | Returns the character at the specified index.                               |
| indexOf(substring)  | Returns the index of the first occurrence of the substring.                 |
| lastIndexOf()       | Returns the last index of the substring in the string.                      |
| includes(substring) | Checks if the substring exists in the string (returns true/false).          |
| startsWith(str)     | Checks if string starts with the given string.                              |
| endsWith(str)       | Checks if string ends with the given string.                                |
| slice(start, end)   | Extracts a section of a string and returns it.                              |
| substring(start, end)| Similar to slice(), but doesn't support negative indexes.                  |
| substr(start, length)| Returns a substring starting at 'start' of given length (deprecated).      |
| replace(old, new)   | Replaces the first occurrence of substring with a new value.                |
| replaceAll(old, new)| Replaces all occurrences of a substring with a new value.                   |
| split(separator)    | Splits a string into an array based on the separator.                       |
| trim()              | Removes whitespace from both ends of a string.                              |
| concat(str)         | Concatenates (joins) two or more strings.                                   |
| repeat(n)           | Repeats the string n times.                                                 |
| valueOf()           | Returns the primitive value of the string.                                  |
| anchor(name)        | Creates an anchor HTML element with the string as text (rarely used).       |
*/

// Length 
const userName = "tushal jadhav"
console.log(userName.length); // Returns the total number of characters in the string

// toUpperCase()
const greeting = "hello world"
console.log(greeting.toUpperCase()); // Converts the entire string to uppercase

// toLowerCase()
const language = "JAVASCRIPT"
console.log(language.toLowerCase()); // Converts the entire string to lowercase

// charAt(index)
const userId = "tushal2025"
console.log(userId.charAt(1)); // Returns the character at index 1

// indexOf(substring)
const email = "admin@site.com"
console.log(email.indexOf('@')); // Returns the first index of '@'

// lastIndexOf()
const gameTag = "game-zone"
console.log(gameTag.lastIndexOf('e')); // Returns the last index of 'e'

// includes(substring)
const sentence = "The quick brown fox"
console.log(sentence.includes('brown')); // Checks if 'brown' is included

// startsWith()
const modeStatus = "Dark Mode Enabled"
console.log(modeStatus.startsWith('Dark')); // Returns true if it starts with 'Dark'

// endsWith()
const bookingMessage = "BOOK NOW"
console.log(bookingMessage.endsWith('NOW')); // Returns true if it ends with 'NOW'

// slice(start, end)
const offerMessage = "Available offers"
console.log(offerMessage.slice(4,10)); // Extracts characters from index 4 to 9

// substring(start, end)
const contactSupport = "contact-support"
console.log(contactSupport.substring(0,7)); // Extracts characters from index 0 to 6

// substr(start, length)
const welcomeMsg = "Welcome, User!"
console.log(welcomeMsg.substr(0, 7)); // Extracts 7 characters starting from index 0

// replace(old, new) 
const url = "https://example.com.example"
console.log(url.replace('example','google')); // Replaces the first occurrence of 'example' with 'google'

// replaceAll(old, new)
const jungleQuote = "Welcome to the jungle"
console.log(jungleQuote.replaceAll(' ','-')); // Replaces all spaces with '-'

// split(separator) 
const fruitSentence = "I like apples. Apples are sweet."
console.log(fruitSentence.split(" ")); // Splits the string into an array using space

// trim()    
const resetPassword = "                       Reset your password "
console.log(resetPassword.trim()); // Removes whitespace from both ends of the string

// concat(str)  
const discountText = "Discount Applied"
const successText = " Successfully !"
console.log(discountText.concat(successText)); // Concatenates the second string to the first

// repeat(n) 
const portfolio = "My Portfolio Site "
console.log(portfolio.repeat(2)); // Repeats the string 2 times

// valueOf()   
const errorMessage = new String("404 Page Not Found")
console.log(errorMessage); // Displays the string object
console.log(errorMessage.valueOf()); // Returns the primitive value of the object

// anchor(name)
const text = "coding is fun"
console.log(text.anchor('code')); // Wraps the string in an anchor <a name="code">coding is fun</a>
