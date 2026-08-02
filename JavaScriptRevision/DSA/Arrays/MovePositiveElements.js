let arr = [1,-2,-4,5,-6,7,-8,10];
// make [-2, -4, -6, -8, 1,5,7,10];

let i = 0;
let j = 0;

while(i < arr.length){
    if(arr[i] <= 0){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++;
    }
    i++;
}
console.log(arr)