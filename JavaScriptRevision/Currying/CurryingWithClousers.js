let multiply = function(x){
    return function(y){
        console.log(x*y)
    }
}

// with the clousers we can have access of x even it is executed

let multiplyByTwo = multiply(2); // it goes of x args
multiplyByTwo(4); // it goes to y args
