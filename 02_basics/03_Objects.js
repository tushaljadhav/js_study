// ============================ singleton ============================
// Singleton object is created using constructor or Object.create()
// It's not applicable here as we're using object literal

// ============================ Object.create ============================
// Used for creating objects with a specific prototype (not used here)

// ============================ object literals ============================
// Defining an object using object literal syntax

const mySum = Symbol("key1")  // creating a unique Symbol key

const jsUser = {
    name: "Tushal",                      // string key-value pair
    "last name": "jadhav",              // key with space must be in quotes
    age: 21,                             // number value
    [mySum]: "mykey1",                   // symbol key - unique and hidden
    location: "Mumbai",                 // string value
    email: "tushal@gmail.com",          // string value
    isLoggedIn: false,                  // boolean value
    lastLoginDays: ["sunday", "monday"] // array of strings
}

// ============================ Accessing object values ============================

// console.log(jsUser.email);          // dot notation
// console.log(jsUser["email"]);       // bracket notation
// console.log(jsUser["last name"]);   // bracket notation needed for space in key
// console.log(jsUser[mySum]);         // accessing symbol key

// ============================ Updating object properties ============================

jsUser.email = "jadhav@gmail.com"      // updating email address

// Object.freeze(jsUser)              // freeze the object to make it immutable

jsUser.email = "123@gmail.com"         // this change won't reflect if object is frozen
// console.log(jsUser);               // check updated or not

// ============================ Adding functions (methods) to object ============================

jsUser.greeting = function() {
    console.log("hello js user");      // simple method to print greeting
}

jsUser.greetingtwo = function() {
    console.log(`hello js user, ${this.name}`);  // using 'this' to access object's name
}

// ============================ Calling methods ============================

console.log(jsUser.greeting());       // calls first greeting method and logs message
console.log(jsUser.greetingtwo());    // calls second greeting method with name
