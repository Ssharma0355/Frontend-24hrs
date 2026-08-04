let arr = [1,2,3,5]; 
// need to check

var n = arr.length;

let sum = n*(n+1)%2;
console.log(sum)
let ActrualSum=0;


for(let i=0;i<arr.length;i++){
    ActrualSum = ActrualSum + arr[i]
}
console.log(sum-ActrualSum)