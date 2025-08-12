// ------------------ Functions ------------------

// Simple function to print each letter of the name "TUSHAL"
function sayMyName() {
    console.log("T");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("L");
}

// sayMyName    // This is a **reference** to the function (not executed)
// sayMyName()  // This is a **function execution** (runs the code inside)

// Function to add two numbers
function addTwoNumbers(number1, number2) {
    // Option 1: Save in a variable and return it
    // let result = number1 + number2
    // return result

    // Option 2: Directly return the sum
    return number1 + number2
}

const result = addTwoNumbers(4, 5) // Stores 4 + 5 = 9 in 'result'
// console.log("result:" , result); // Output: result: 9

// Function with default parameter value
function loginUserMessage(username = "jadhav") {
    // If username is empty (falsey value), show a message
    if (!username) {
        console.log("Please enter a username");
        return // Exit the function here
    }
    // Return a message with the username
    return `${username} just Logged in`
}

// console.log(loginUserMessage("tushal")) // Output: tushal just Logged in
// console.log(loginUserMessage())        // Output: jadhav just Logged in

// Function using REST parameter (...num1) to collect extra arguments
function calculateCartPrice(val1, val2, ...num1) {
    // val1 = first value, val2 = second value, num1 = rest of values in array
    return num1
}

// console.log(calculateCartPrice(200, 500, 900, 1000))
// Output: [900, 1000]

// ------------------ Passing Objects to Functions ------------------

const user = {
    username: "tushal",
    price: 899
}

// Function to handle object and print its properties
function handleObject(myobejct) {
    console.log(`username is ${myobejct.username} and price is ${myobejct.price}`);
}

// handleObject(user) // Passing object variable
handleObject({
    username: "harsh",
    price: 399
}) // Passing object directly

// ------------------ Passing Arrays to Functions ------------------

const myarry = [800, 900, 600]

// Function to return the second element of the array
function newfuncion(otherobejct) {
    return otherobejct[1] // Index 1 = second element
}

// console.log(newfuncion(myarry)) // Output: 900
console.log(newfuncion([10, 20, 30, 40, 50])); //passing arrays directly 
// Output: 20
