const name = "tushal"
const repoCount = 10

// console.log(name);


// console.log("hello my name is " + name + " and my repo count is " + repoCount  );// this is not good programming 

// console.log(`hello my name is ${name} and my repo count is ${repoCount} `);// this is good programming because we used `` and ${}


const gameName = new String('free fire')

// Strings Methods

console.log(gameName[2]);

console.log(gameName.__proto__); // 🔍 Shows the prototype object of the string, containing all built-in string methods

console.log(gameName.length);

const link = gameName.anchor("game-name");

console.log(link);



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
