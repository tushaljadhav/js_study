
const promiseOne = new Promise(function(resolve , reject){
    // Do an async task 
    // DB calls , cryptography , network
    setTimeout(function(){
        console.log('Async task is  compelete');
        resolve()
        
    },1000)    
})


promiseOne.then(function(){
    console.log("promise cunsumed");
    
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 ");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
    
})

const promisethree = new Promise(function(resolve,reject){
     setTimeout(function(){
        resolve({username:"tushal" , email:"tushal@gmail.com"})
     },1000)
})

promisethree.then(function(user){
    console.log(user);
    
})



const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"hitesh", password:"123"})
        }else{
            reject('ERROR: somthing went wrong')
        }
        
    },1000)
})