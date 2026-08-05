let multiply = function (x,y){
    console.log(x*y)
}

multiply(4,2)
// 8

// we create a another function with x set to 2 
let multiplyByTwo = function(y){
    let x =2;
    console.log(x*y)
}
multiplyByTwo(2)
// 4

// with function currying

let multiplyByThree = multiply.bind(this, 3)
// so with the help of bind we create a copy of multiply (Method) and (this, 3)
// 3 will be the new x and 
// multiplyByThree(3) we passed the value of y here 
multiplyByThree(3);
//  gives 9 as answer

