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
    console.log("val1 is greater than 20"); // ✅ true
}

const val2 = 100
// Check if val2 is less than 120
if (val2 < 120) {
    console.log("val2 is less than 120"); // ✅ true
}

const val3 = 100
// Check if val3 is less than OR equal to 110
if (val3 <= 110) {
    console.log("val3 is less than and equal to 110"); // ✅ true
}

const val4 = 100
// Check if val4 is greater than OR equal to 10
if (val4 >= 10) {
    console.log("val4 is greater than and equal to 10"); // ✅ true
}

const val5 = 100 
// == only checks VALUE (not type) → "100" (string) == 100 (number)
if (val5 == "100") {
    console.log("val5 is double equal to 100 (value only)"); // ✅ true
}

const val6 = false
// != checks only VALUE → false != true → true
if (val6 != true) {
    console.log("val6 is not equal to true"); // ✅ true
}

const val7 = 90
// === checks VALUE + TYPE → 90 (number) === 90 (number) → true
if (val7 === 90) {
    console.log("val7 is triple equal to 90 (value + type)"); // ✅ true
}

const val8 = 90
// !== checks VALUE + TYPE → 90 !== 10 → true
if (val8 !== 10) {
    console.log("val8 is not triple equal to 10"); // ✅ true
}
