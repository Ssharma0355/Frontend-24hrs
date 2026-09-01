let obj1 = {
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
