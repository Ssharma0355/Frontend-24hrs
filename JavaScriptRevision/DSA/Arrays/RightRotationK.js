let arr = [1,2,3,4,5];
// to make -> [4,5,1,2,3]

let k =2;
let temp = new Array(arr.length);
for(let i=0;i<arr.length;i++){
    temp[(i+k)%arr.length] = arr[i];
}
console.log(temp)