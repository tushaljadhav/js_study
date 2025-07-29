const account_id = 1001
let account_email = "tushal@gmail.com"
var account_password = "123"
account_city ="mumbai"
let account_state;  /* here we not giving value of account_state it show  output  "undefined"*/ 


/*account_id = 1111  - we cant change the account_id value because const is not allowing to change the value */  

account_email = "jadhav@gmail.com"
account_password = "12345"
account_city = "kerla"


// single variable recall method 
console.log(account_id);

// multiple or more variable recall method in one at a time 

console.table([account_email,account_password,account_city,account_state]);


/* 
prefer not use var 
because of issue in block scope and functional scope 
*/
