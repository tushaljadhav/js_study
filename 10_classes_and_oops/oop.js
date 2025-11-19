const users = {
    username: "tushal",
    logingCount: 8,
    signedIn: true,

    getUsersDeils: function(){
        // console.log("Got user Details from database ");
        // console.log(`username: ${this.username}`);
        console.log(this);
        
    }

}

// console.log(users.username);
// console.log(users.getUsersDeils());
// console.log(this);


function User(username , logingCount , isLoggedIn){
    this.username = username
    this.logingCount = logingCount
    this.isLoggedIn = isLoggedIn

    // return this

}

const userOne = new User("tushal", 38, true)

const usertwo = new User("jadhav", 31, false)


console.log(userOne);