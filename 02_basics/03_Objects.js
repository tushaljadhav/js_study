// singleton 

// Object.create

// object literals

const mySum = Symbol("key1")
const jsUser ={
    name: "Tushal",
    "last name": "jadhav",
    age: 21,
    [mySum]:"mykey1",
    location: "Mumbai",
    email: "tushal@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["sunday" , "monday"]


}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["last name"]);
// console.log(jsUser[mySum]);

jsUser.email ="jadhav@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "123@gmail.com"
// console.log(jsUser);


jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greetingtwo = function(){
    console.log(`hello js user,${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingtwo());
