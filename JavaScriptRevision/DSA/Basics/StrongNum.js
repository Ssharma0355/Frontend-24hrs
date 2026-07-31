// 145 => 1! + 4! + 5! = 145 (strong number)
let num = 145;

function findStrongNumber(n){
    var rem = 0;
    var sum = 0;
    while(n>0){
        rem = Math.floor(n%10); // 5 then 4 then 1
        var factorial = 1;
        for(let i = 1; i<=rem;i++){
            factorial = factorial*i // caculating the factorial
        }
        sum = sum + factorial // adding up sum 
        n = Math.floor(n/10)
    }
    return sum
}
let value = findStrongNumber(num);
console.log(value)
if(value === num){
    console.log(true)

}
else{
    console.log(false)
}
