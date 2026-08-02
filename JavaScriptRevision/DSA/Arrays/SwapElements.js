let arr = [0,1,0,0,1,0,1,1,0];

// swap all 0 to left and 1 to right
let i = 0;
let j = 0;

while(i<arr.length){
    if(arr[i] === 1){
        i++;
    }
    if(arr[i] === 0){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j++;
    }
}
console.log(arr)