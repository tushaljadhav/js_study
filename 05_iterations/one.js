// ---------------------- LOOPS IN JAVASCRIPT ----------------------


// ---------------------- FOR LOOP (Basic Example) ----------------------
for (let i = 0; i <= 10; i++) { 
    // i starts from 0, loop will run until i <= 10, 
    // after each iteration i increases by 1
    
    const element = i; // 'element' holds the value of i in current iteration
    // console.log(element); // will print values from 0 to 10
}

// console.log(element); 
// ❌ ERROR: 'element' is defined with 'const' inside loop block, 
// so it can't be accessed outside (BLOCK SCOPE)


// ---------------------- FOR LOOP with Condition Inside ----------------------
for (let i = 0; i <= 10; i++) {
    const element = i;

    if (element == 7) {
        // When loop reaches value 7
        // console.log("7 is the best number");
    }

    // console.log(element); // will print each element from 0 to 10
}



// ---------------------- NESTED FOR LOOP ----------------------
for (let i = 1; i <= 10 ; i++) { 
    // Outer loop -> runs 10 times

    // console.log(`outer loop value: ${i}`);

    for (let j = 1; j <= 10; j++) { 
        // Inner loop -> runs 10 times for EACH outer loop iteration
        // This means total 100 iterations (10 x 10)

        // console.log(`inner loop value ${j} and outer loop ${i}`);
        // Example: "inner loop value 1 and outer loop 1"

        // Multiplication Table
        // console.log(i + ' * ' + j + ' = ' + i*j);
    }   
}



// ---------------------- LOOPING THROUGH ARRAY ----------------------
let myarray = ["tushal" , "avinash" , "aditya" ];

// console.log(myarray.length); // total number of items = 3

for (let index = 0; index < myarray.length; index++) {
    // index starts at 0 and goes till myarray.length - 1

    const element = myarray[index]; 
    // element will be -> "tushal", "avinash", "aditya"

    // console.log(element);
}



// ---------------------- BREAK and CONTINUE ----------------------
for (let i = 0; i <= 20; i++) {
    
    if (i == 5) {
        console.log("detected 5");

        // break;   
        // 👉 'break' will stop the loop completely when i = 5

        continue;  
        // 👉 'continue' will skip this iteration (i=5) 
        // and go to next iteration
    }

    console.log(`value of i is ${i}`);
}
