const myobject = {
    js : 'javascript' ,
    cpp: 'c++' ,
    rb : "ruby",
    swift: "swift by apple"

}

for (const key in myobject) {
    console.log(`${key} shortcut is for ${myobject[key]}`);

}


const proggramming = ["js" , "rb" , "py" , "java" , "cpp"]

for (const key in proggramming) {
    console.log(proggramming[key]);
    
}


const map = new Map()
map.set('IN' , "india")
map.set('USA' , "United States of America")
map.set('FR', "France")
map.set('IN' , "india")     


for (const key in map) {
    console.log(key);
    

    
}