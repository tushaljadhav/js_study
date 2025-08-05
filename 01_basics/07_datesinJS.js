// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedate = new Date(2025, 0, 8)
// let myCreatedate = new Date(2025, 0, 8, 8, 50)
// let myCreatedate = new Date("2025-08-05")

let myCreatedate = new Date("01-14-2025")
// console.log(myCreatedate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedate.getTime());
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate); 
console.log(newDate.getMonth() + 1);      
console.log(newDate.getDate());

// `${newDate.getDate()} and the time `
newDate.toLocaleString('default',{
    weekday : "long",
})

