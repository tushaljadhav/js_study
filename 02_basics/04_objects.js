// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123"
tinderUser.name = "tushal"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "tushal@gmail.com",
    fullName : {
        UserFullName :{
            firstName : "tushal" ,
            lastName : "jadhav"
        }
    }

}

// console.log(regularUser.fullName.UserFullName.firstName);

const obj1 = { 1 : "a" , 2 : "b"}
const obj2 = { 3 : "a" , 4 : "b"}
const obj3 = { 5 : "a" , 6 : "b"}

// const obj4  = {obj1 , obj2 , obj3} //this is basic for merging two obejcts

// const obj4 = Object.assign({},obj1,obj2,obj3) //this is intermidiant for merging two objects

const obj4 = {...obj1,...obj2,...obj3} //this is advance for merginge two objects

// console.log(obj4);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

