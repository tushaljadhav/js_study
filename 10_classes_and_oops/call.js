// A simple function to set username on the current object
function SetUsername(username) {
    this.username = username
    console.log("called");
}

// Constructor function to create a new user
function createUser(username, email, password) {

    // Using call() so SetUsername runs in the context of createUser
    // and 'this' refers to the new user object
    SetUsername.call(this, username)

    // Adding more properties to the user object
    this.email = email
    this.password = password
}

// Creating a new user object using 'new'
const chai = new createUser("chai", "chai@gmail.com", "chai123")

// Printing the user object
console.log(chai);
