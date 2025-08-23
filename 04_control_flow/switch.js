// -------------------- Basic Structure of Switch Case --------------------
// switch (key) {                // 'key' is the value we want to compare
//     case value:               // each case checks if key matches value
//         // code to execute
//         break;                // break stops the switch after executing case
//
//     default:                  // runs if no case matches
//         // code to execute
//         break;
// }


// -------------------- Example 1 : Using Number --------------------

const month = 4   // month is number type

switch (month) {
    case 1: // if month === 1
        console.log("jan");
        break;
    case 2: // if month === 2
        console.log("feb");
        break;
    case 3: // if month === 3
        console.log("march");
        break;
    case 4: // if month === 4
        console.log("april");  // ✅ this will run (because month = 4)
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;
    case 7:
        console.log("july");
        break;
    
    default: // if none of the cases match
        console.log("default case match");
        break;
}


// -------------------- Example 2 : Using String --------------------

const monthInstring = "june"   // month is string type

switch (monthInstring) {
    case "jan":
        console.log("jan");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;
    case "may":
        console.log("may");
        break;
    case "june":
        console.log("june");   // ✅ this will run (because monthInstring = "june")
        break;
    case "july":
        console.log("july");
        break;
    
    default: // runs if no case matches
        console.log("default case match");
        break;
}
