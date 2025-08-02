// Datatypes - 1)Primitive Datatypes , 2)Reference (Non-Primitive) Datatypes .

// primitive datatypes

//  7 types :- String , Number , Boolean , Null , Undefined , Symbol , BigInt

// String
const Name = "tushal"

// Number 
const Score = 100
const ScroeValue = 8.5

// Boolean 
let LoginId = true

// Null
let  temperature = null

// Undefined
let  value = undefined
let value1; // you can choose one method , both are same but method are or syntax are diffirent 

// Symbol
let id = Symbol('12345')
let anotherId = Symbol('12345') // it both look same but it is not same 

console.log(id === anotherId); // here output is false it mean id and anotherId is not same

// BigInt
let bigNumber = 14565187197787286861n // bigint is use for store big or huge numbers , give in the last of the number n it convert number into bigInt 




// Reference (Non-Primitive)

// Array , Objects , Functions


// Array
const heros = ["Superman" , "Hulk" , "Iron Man" , "Thor" , "Black Panther"]
console.log(heros);

// Objects
const myObject = {
    name:"tushal",
    age:21,
}
console.log(myObject);



// Functions
const myfunction = function(){
    console.log("Hello World");
    
}

myfunction();


console.log(typeof heros); //typeof show datatype 



/* here table for datatypes typeof result 
------------------------------------------------------------------
| Data Type       | Code Example               | typeof Result   |
|-----------------|----------------------------|-----------------|
| Number          | typeof 42                  | "number"        |
| Floating number | typeof 3.14                | "number"        |
| String          | typeof "Hello"             | "string"        |
| Boolean         | typeof true                | "boolean"       |
| Undefined       | typeof undefined           | "undefined"     |
| Null            | typeof null                | "object" ❗ (bug)|
| Object          | typeof {}                  | "object"        |
| Array           | typeof []                  | "object"        |
| Function        | typeof function() {}       | "function"      |
| BigInt          | typeof 10n                 | "bigint"        |
| Symbol          | typeof Symbol("id")        | "symbol"        |
*/
