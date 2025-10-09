// for of loop 

["", "", "", ""]
[ {},{},{},{} ]




arry = [ 1 , 2 , 3 , 4 , 5 , 6 ]

for (const num of arry) {
    console.log(num);
    
    
}


const myarry =  "hello world!" 

for (const my of myarry) {
    console.log(`each char is ${my}`);
    
    
}


// maps

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('IN',"India")

// console.log(map)

for (const [key, values] of map) {
    console.log(key , ':-' ,values);
    
}


const myobject = {
    game1 : 'NFS', 
    game2 : 'Sipderman'
}

for (const [key , values ] of myobject){
    console.log(key , ':-' , values);
    
}