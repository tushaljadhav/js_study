// Parent class
class User {
    constructor(username){
        // set username for the object
        this.username = username
    }

    // method to print username
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

// Child class inherits from User
class teacher extends User{

    constructor(username, email, password){
        // call parent constructor to set username
        super(username)

        // set extra properties for teacher
        this.email = email
        this.password = password
    }

    // method only for teacher class
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

// creating object from teacher class
const chai = new teacher("tushal", "tushal@gmail.com", "123")

// calling parent class method
chai.logMe()

// creating object from User class
const masalaChai = new User("masalaChai")

// calling User method
masalaChai.logMe()

// checking if chai is an instance of teacher class
console.log(chai instanceof teacher);
