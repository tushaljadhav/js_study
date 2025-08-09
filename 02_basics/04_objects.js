// +++++++++++++++++++++++ Object Creation +++++++++++++++++++++++

// const tinderUser = new Object()   // Old way to create an object using constructor
const tinderUser = {}               // Modern way to create an empty object

// Adding properties to the object
tinderUser.id = "123"
tinderUser.name = "tushal"
tinderUser.isLoggedIn = false

// console.log(tinderUser); // Prints the tinderUser object


// +++++++++++++++++++++++ Nested Object Example +++++++++++++++++++++++

const regularUser = {
    email : "tushal@gmail.com",
    fullName : {                      // Nested object
        UserFullName : {               // Another level of nesting
            firstName : "tushal" ,
            lastName : "jadhav"
        }
    }
}

// Accessing nested object values
// console.log(regularUser.fullName.UserFullName.firstName);


// +++++++++++++++++++++++ Merging Multiple Objects +++++++++++++++++++++++

// Three sample objects
const obj1 = { 1 : "a" , 2 : "b"}
const obj2 = { 3 : "a" , 4 : "b"}
const obj3 = { 5 : "a" , 6 : "b"}

// const obj4  = {obj1 , obj2 , obj3} 
// ↑ Basic method — creates object with obj1,obj2,obj3 as properties (not merged)

// const obj4 = Object.assign({}, obj1, obj2, obj3) 
// ↑ Intermediate method — merges objects into a new empty object {}

// Advanced method — spread operator to merge all objects into one
const obj4 = {...obj1, ...obj2, ...obj3}

// console.log(obj4); // Prints merged object


// +++++++++++++++++++++++ Object Methods +++++++++++++++++++++++

console.log(tinderUser);                 // Prints the tinderUser object

console.log(Object.keys(tinderUser));    // Returns array of keys → ["id", "name", "isLoggedIn"]
console.log(Object.values(tinderUser));  // Returns array of values → ["123", "tushal", false]
console.log(Object.entries(tinderUser)); // Returns array of [key, value] pairs → [["id","123"], ["name","tushal"], ["isLoggedIn", false]]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); 
// Checks if 'isLoggedIn' exists directly on the object (returns true)
