// this give current context

const user = {
    username : "tushal" ,
    price : 700 ,
    welcomeMessage : function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        

        
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "tushal"
//     console.log(this.username);    
// }
// chai()

// const chai = function(){
//     let username = "tushal"
//     console.log(this.username);

    
// }

// chai()

const chai = () => {
    let username = "tushal"
    console.log(this.username);

}

// chai()

// basic arrow function or explicity return
// const addTwo = (num1, num2)     => {
//     return num1 + num2
// }

// console.log(addTwo(1,4));

// implicite return 
// const addTwo = (num1, num2)  =>  num1 + num2
// console.log(addTwo(1,4));

// const addTwo = (num1, num2)  =>  ( num1 + num2 )

// console.log(addTwo(1,4));

// obeject return
const addTwo = (num1, num2)  =>  ( {username: "tushal"} )

console.log(addTwo(1,4));
