// -------------------- COMPARISON OPERATORS --------------------
// <   : less than
// >   : greater than
// <=  : less than or equal to
// >=  : greater than or equal to
// ==  : equal to (checks only value, not type)   [loose equality]
// !=  : not equal to (checks only value)         [loose inequality]
// === : strictly equal (checks value + type)     [strict equality]
// !== : strictly not equal (checks value + type) [strict inequality]

// -------------------- EXAMPLES --------------------

const val1 = 100
// Check if val1 is greater than 20
if (val1 > 20) {
    // console.log("val1 is greater than 20"); // ✅ condition true
} else {
    // console.log("val1 is NOT greater than 20"); // ❌ condition false
}

const val2 = 100
// Check if val2 is less than 120
if (val2 < 120) {
    // console.log("val2 is less than 120"); // ✅ condition true
} else {
    // console.log("val2 is NOT less than 120"); // ❌ condition false
}

const val3 = 100
// Check if val3 is less than OR equal to 110
if (val3 <= 110) {
    // console.log("val3 is less than or equal to 110"); // ✅ condition true
} else {
    // console.log("val3 is greater than 110"); // ❌ condition false
}

const val4 = 100
// Check if val4 is greater than OR equal to 10
if (val4 >= 10) {
    // console.log("val4 is greater than or equal to 10"); // ✅ condition true
} else {
    // console.log("val4 is less than 10"); // ❌ condition false
}

const val5 = 100 
// == only checks VALUE (not type) → "100" (string) == 100 (number)
if (val5 == "100") {
    // console.log("val5 is double equal to 100 (value only)"); // ✅ condition true
} else {
    // console.log("val5 is NOT double equal to 100"); // ❌ condition false
}

const val6 = false
// != checks only VALUE → false != true → true
if (val6 != true) {
    // console.log("val6 is not equal to true"); // ✅ condition true
} else {
    // console.log("val6 is equal to true"); // ❌ condition false
}

const val7 = 90
// === checks VALUE + TYPE → 90 (number) === 90 (number)
if (val7 === 90) {
    // console.log("val7 is triple equal to 90 (value + type)"); // ✅ condition true
} else {
    // console.log("val7 is NOT triple equal to 90"); // ❌ condition false
}

const val8 = 90
// !== checks VALUE + TYPE → 90 !== 10
if (val8 !== 10) {
    // console.log("val8 is not triple equal to 10"); // ✅ condition true
} else {
    // console.log("val8 is triple equal to 10"); // ❌ condition false
}



// const score = 200 

// if (score >100) {
//     // const power = "fly" // const and let  is not allowing to accessing out of the block scope
//     var power = "fly" // var is accessing out side of block scope 

//     // console.log(`user power: ${power}`);
    
// } 
//     // console.log(`user power is : ${power}`);




const balance = 1000

// emplicite scope 
// if (balance > 500) console.log("test1") , console.log("test2"); //this is unreadable code dont use 


// multiple else if 

// if (balance < 500) {
//     console.log("less then 500");
    
// }else if (balance < 750) {
//     console.log("less then 750");
    
// }else if (balance < 900) {
//     console.log("less then 900");
    
// }else if (balance < 1200) {
//     console.log("greater then 1000");
    
// }



const userLoggedIn = true
const debitCard = true
const loggedInFromgoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2 == 2) {
    console.log("allow to buy course  ");
    
}

if (loggedInFromEmail || loggedInFromgoogle) {
    console.log("user logged in ");
    
}


    


