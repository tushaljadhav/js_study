// ------------------ ES6 CLASS VERSION (Commented Out) ------------------
// class User {
//     constructor(username , email , password){
//         // set properties
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     // method to encrypt password
//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     // method to change username to uppercase
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("chai","chai@gmail.com","123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());


// ------------------ BEHIND THE SCENES (Using Prototype) ------------------

// Constructor function (old way before classes)
function User(username, email, password) {
    this.username = username
    this.email = email
    this.password = password
}

// adding method to prototype → shared by all objects
User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}

// another method added to prototype
User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

// creating object using constructor function
const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());  // "123abc"
console.log(tea.changeUsername());   // "TEA"
