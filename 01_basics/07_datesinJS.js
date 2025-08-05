// ==================================== Dates ====================================

// Create a new Date object with current date and time
let myDate = new Date()

// Different ways to display the date
// console.log(myDate.toString());         // Full date and time string
// console.log(myDate.toDateString());     // Only date part (e.g., Tue Aug 05 2025)
// console.log(myDate.toISOString());      // ISO format (e.g., 2025-08-05T13:45:30.000Z)
// console.log(myDate.toLocaleString());   // Localized string format
// console.log(typeof myDate);             // Object


// ======================== Creating Custom Dates =========================

// Creating date using year, month (0-based), day
// let myCreatedate = new Date(2025, 0, 8) // Jan 8, 2025

// Creating date with time (hours, minutes)
// let myCreatedate = new Date(2025, 0, 8, 8, 50) // Jan 8, 2025 at 8:50 AM

// Creating date using string in ISO format
// let myCreatedate = new Date("2025-08-05") // Aug 5, 2025

// Creating date using string in MM-DD-YYYY format
let myCreatedate = new Date("01-14-2025") // Jan 14, 2025

// console.log(myCreatedate.toLocaleString()); // Outputs: localized date & time


// ============================= Time Stamps ==============================

// Current timestamp in milliseconds since Jan 1, 1970
let myTimeStamp = Date.now()

// console.log(myTimeStamp);                   // Milliseconds
// console.log(myCreatedate.getTime());        // Milliseconds for custom date
// console.log(Math.floor(Date.now()/1000));   // Convert to seconds (Unix timestamp)


// ======================= Getting Date Components ========================

let newDate = new Date()

console.log(newDate);              // Current full date and time
console.log(newDate.getMonth() + 1); // getMonth() gives 0-11, so add +1 for actual month
console.log(newDate.getDate());      // getDate() gives day of the month (1-31)


// Format date with custom locale options (like full weekday name)
newDate.toLocaleString('default', {
    weekday : "long", // Output like "Tuesday"
})
