let obj1 = {
    name:"Sachin",
    add:"HSR",
    getIntro:function(){
        console.log("Hi",this.name, " I live in", this.add)
    }
}

let obj2 = {
    name:"Sharma"
}

obj2.__proto__ = obj1;
// it got copied the obj1 object and can access the object by showing add 
console.log(obj2.add)

// console.log(obj1.getIntro())


// declaring func with prototype to give access to anyone
Function.prototype.mybind = function(){
    console.log("sasa")
}

function fun(){

}
console.log(fun.__proto__.mybind()) // gives access to mybind