let arr =["Sachin","Sharma"]

// how i am able to access all this buit in method and fundtions inside JS?
// arr.filter 
// arr.fill

let ProtpotyDefination = "When ever we create an OBJ, ARR, Funtion in side Js"
// The Js Enginer automatically attaches an OBJECT with out created Obj, Array, Function 
// and we can have access of fn, method, and anything

console.log(arr.__proto__) // Object(0) []  it have prototype
console.log(Array.__proto__)// {} same as arr.__proto 

//  even 
console.log(arr.__proto__.__proto__) // arr.__proto__ also have a prototype -> [Object: null prototype] {}
// and if we get more deep
console.log(arr.__proto__.__proto__.__proto__) // this will be -> null 

//ProtoType  Chain -> 

// arr.__proto__ is 

// Array.__proto__ is 

// arr.__proto__.__proto__ (Object protoType)

// arr.__proto__.__proto__.__proto__ (Null)