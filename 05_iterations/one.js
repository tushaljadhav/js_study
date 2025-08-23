// Loops

// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
    
}
// console.log(element); // we cant access the element out of the scope




for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 7) {
        // console.log("7 is the best number");
        
    }
    // console.log(element);
    
}



for (let i = 1; i <= 10 ; i++) {
    // console.log(`outer loop value: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value ${j} and inner loop ${i}`);
        // console.log(i + ' * ' + j + ' = ' + i*j);
        
    }   
}


let myarray = ["tushal" , "avinash" , "aditya" ]
console.log(myarray.length);

for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
    
}