let obj1={
    name:"Sachin"
}

let obj2={
    name:"Sharma"
}

let printName = function(){
    console.log(this.name)
}

// call borrow the function

printName.call(obj1)
printName.call(obj2)

// apply method we pass args in []
let printFull = function(hometown, street){
 console.log(this.name,hometown,street)
}
printFull.apply(obj1,["HSR", "Bengaluru"])

// bind we send without [] and we can call it later but in call it is quick invoked
let bindUse = printName.bind(obj1,"Delhi", "India")
bindUse()