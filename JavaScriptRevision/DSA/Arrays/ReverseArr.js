let arr = [20,30,50,80];

// brute force method  

// let temp = new Array(arr.length);

// let j = 0;
// for(let i= arr.length-1 ; i>=0;i--){
//     temp[j] = arr[i]
//     j++;
// }
// console.log(arr)
// console.log(temp)

// 2 pointers approach

let i = 0;
let j = arr.length-1;
while(i<j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
}
console.log(arr)
