// LeftRotateKElement.js

// [1,2,3,4,5] =  [3,4,5,1,2];

// let arr = [1, 2, 3, 4, 5];
// edge case

// Brute Force method
// let k = 4;
// k = k%arr.length; // we can add this for unncessary rotaion

// for (let j = 0; j < k; j++) {
//   let copy = arr[0];

//   for (let i = 0; i <= arr.length - 2; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = copy;
// }
// console.log(arr);
// ------------------------------------------------------------------------------------------
// Optimized Solution 
// temp[i] = arr[(i+k)%length of array ]

let arr = [1, 2, 3, 4, 5];
let k=4;

let temp = new Array(arr.length);
for(let i =0 ; i<arr.length;i++){
    temp[i] = arr[(i+k)%arr.length]
}
console.log(temp)



