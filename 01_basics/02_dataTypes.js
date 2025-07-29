"use strict"; // treat all js code as newer version

// alert(3 +3) // it give error because we are using node js , not browser 

console.log( 3 
    + 3 )  // dont use this type of code it is not readable , avoid this type of code 

console.log("hello world")



// primitive datatypes

// numer => 2 to power of 53
let age = 21

// bigint => it is a type of number but it is cointent big number like huge amount of numbers 
let bigNumber = 1234567890123456789012345678901234567890n;

// string => "" 
let Name = "tushal"

// boolean => True/False
let isLoggedIn = false

// null => standalone value , empty value
let userScore = null; // means intentionally no value

// undefined => not definded or we can say not giving value to variable 
let userName; // declared but not assigned, so it's undefined

// symbol => it give uniqueness 
let uniqueId = Symbol("id"); // creates a unique identifier

// object 



console.log(typeof "jadhav") // typeof show the datatype of values

console.log(typeof null) // in this output show null type => object , when interviewer ask you null type of then anser it object

console.log(typeof undefined) // declared but not assigned, so it's undefined

console.table([age,bigNumber,Name,isLoggedIn,userScore,userName,uniqueId])