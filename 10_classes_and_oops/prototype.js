// let myName = "tushal     "
// let myLastName = "jadhav     "

// console.log(myName.trim().length);      // trim() removes extra spaces and gives correct length
// console.log(myLastName.trueLength);      // custom method example (defined later)


let myHeros = ["thor", "spiderman"]        // array of heroes

let heroPower = {
    thor: "hammer",                           // key-value: hero and their power
    spiderman: "sling",

    getSpiderPower: function(){                // method to print spider power
        console.log(`spider power is ${this.spiderman}`);
    }
}

// Adding property/function to ALL objects using prototype
Object.prototype.tushal = function (){
    console.log(`tushal is present in all objects`);
}
// heroPower.tushal()                         // accessible by all objects

// Adding property/function only to arrays
Array.prototype.jadhav = function(){
    console.log(`jadhav says hii`);
}
// myHeros.jadhav()                           // array-specific function

// myHeros.tushal()                           // arrays also get Object prototype
// heroPower.jadhav()                         // error (only arrays have jadhav)


// Inheritance examples

const user = {
    name: "chai",
    email: "chai@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'js assignment',
    fulltime: true,
    __proto__:TeachingSupport               // older way of inheritance
}

Teacher.__proto__ = user                    // Teacher inherits from user


// Modern syntax for setting prototype
Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUserName = "ChaiAurCode       "   // string with spaces

// Custom method for strings to get true length
String.prototype.trueLenght = function(){    // trueLenght -> prints trimmed length
    console.log(`${this}`);
    console.log(`True Lenght is : ${this.trim().length}`);
}

anotherUserName.trueLenght()                 // calling custom method

"sdjhds       ".trueLenght()                // works on string literal

const nameY ="ggggg     "
nameY.trueLenght()                           // works on variable string
