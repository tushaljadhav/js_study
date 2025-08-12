

function sayMyName(){
    console.log("T");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("L");
}

sayMyName //this is reference
// sayMyName() //this is excution 

// function addTwoNumbers (number1 , number2){
    
//     console.log(number1 + number2);
// }
function addTwoNumbers (number1 , number2){
    
    // let result = number1 + number2
    // return result

    return number1 + number2
}

const result = addTwoNumbers(4,5)

// console.log("result:" , result);

function loginUserMessage(username = "jadhav"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just Logged in `
}

// console.log(loginUserMessage("tushal"))
console.log(loginUserMessage("user"))