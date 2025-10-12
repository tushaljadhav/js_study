const myNums = [1, 2, 3]

// using reduce() method to sum all numbers in the array
// syntax: array.reduce((accumulator, currentValue) => { ... }, initialValue)

// Example with detailed steps shown in console:
// const newNums = myNums.reduce((acc , currval) => {
//     console.log(`acc:${acc} and currval:${currval}`); // shows how accumulator and current value change each time
//     return acc + currval  // adds current value to the accumulator
// },0) // initial value of accumulator is 0

// simplified version of the above code
const newNums = myNums.reduce((acc, currval) => acc + currval, 0) // sums all numbers in the array starting from 0

console.log(newNums); // output: 6 (1 + 2 + 3)



// array of objects representing items in a shopping cart
const shoppingCart =[
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
    {
        itemName: "java course",
        price: 7004
    },
]

// using reduce() to calculate the total price of all items in the shopping cart
// acc → accumulator (keeps running total)
// item → current object being processed in the array
// item.price → adds each course’s price to the accumulator
// initial value of acc is 0
const pricetopay = shoppingCart.reduce((acc ,item)=> acc + item.price, 0)

console.log(pricetopay); // output: 22996 (sum of all course prices)
