// ++++++++++++++++++++++++++++++++++++++++ Numbers +++++++++++++++++++++++++++++++++++
const score = 400
// console.log(score);


const balance = new Number(100) //balance value is number here or 100 is Number
// console.log(balance);

// console.log(balance.toString().length); //here using toString() covert balance value number into string
// console.log(balance.toFixed(2)); //toFixed(2) use for print decimal

const otherNumber = 156.88721

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString('en-IN'));


// ++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // abs(-4), abs covert value negetive value into positive value , positive into positive 
console.log(Math.round(4.6));
console.log(Math.ceil(4.3));
console.log(Math.floor(4.9));
console.log(Math.min(72,46,82,31));
console.log(Math.max(72,46,82,31));

console.log(Math.random());
console.log((Math.random()*10 )+ 1);
console.log(Math.floor(Math.random()*10 )+ 1);

const min =  10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) 