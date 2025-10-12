// ------------------------------
// Example 1: for...of loop with array
// ------------------------------

["", "", "", ""]       // Example of empty strings array
[ {},{},{},{} ]        // Example of empty objects array

// Declaring an array of numbers
const arry = [ 1 , 2 , 3 , 4 , 5 , 6 ]

// Using for...of loop to iterate over each element in the array
for (const num of arry) {
    console.log(num); // Prints each number from the array
}



// ------------------------------
// Example 2: for...of loop with string
// ------------------------------

// Declaring a string
const myarry = "hello world!" 

// Using for...of loop to iterate through each character in the string
for (const my of myarry) {
    console.log(`each char is ${my}`); // Prints each character one by one
}



// ------------------------------
// Example 3: Using Map with for...of loop
// ------------------------------

// Creating a new Map (key-value pairs)
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")   // Duplicate keys are ignored; last value overwrites previous

// console.log(map) // Uncomment to view the entire map

// Using for...of loop with destructuring to get both key and value
for (const [key, values] of map) {
    console.log(key , ':-' , values); // Prints each key-value pair from the map
}



// ------------------------------
// Example 4: Using for...of with normal object (❌ Not allowed)
// ------------------------------

// Declaring a normal JavaScript object
const myobject = {
    game1 : 'NFS', 
    game2 : 'Spiderman'
}

// ❌ for...of loop does not work directly with plain objects
// because objects are not iterable like arrays or maps
// The below code will throw an error if executed
for (const [key , values ] of myobject){
    console.log(key , ':-' , values);
    
}

// ✅ Correct way (if you want to loop through object):
// for (const [key, value] of Object.entries(myobject)) {
//     console.log(key, ':-', value);
// }
