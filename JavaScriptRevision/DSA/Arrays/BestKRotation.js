let arr = [1,2,3,4,5]
// we have to make [3,4,5,1,2] by K=2; left Rotation by K Problem;

let k=3;
k = k%arr.length
function Rotate(i,j){
   while(i<j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
   }
}

Rotate(0,k-1)
Rotate(k,arr.length-1)
Rotate(0,arr.length-1)
console.log(arr)