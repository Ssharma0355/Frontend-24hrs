let arr = [1,2,3,4,5];
// make it [2,3,4,5,1];

let copy = arr[0];
console.log(arr[4]);
for(let i = 0 ; i <arr.length-2;i++){
    arr[i] = arr[i+1];
}
arr[arr.length-1] = copy

console.log(arr)