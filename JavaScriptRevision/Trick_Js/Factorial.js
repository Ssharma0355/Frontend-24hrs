var n = 12;

const factorial =(n)=>{
    var fact = 1;
    for(let i = 1; i<=n ;i++){
        fact = fact*i
    }
    return fact
}

console.log(factorial(n))