let arr1 = [2,4,6,8];
let arr2 = [1,3,5,7,9];
let temp = new Array(arr1.length+arr2.length);
// create a empty temporary array

let i = 0;
let j = 0;
let k = 0;
// assigned the index at 0

while(i< arr1.length && j < arr2.length){
    // loop till i< arr 1 length and j < arr 2 length
    if(arr1[i] < arr2[j]){
        // if array 1 index is smaller than array 2 index then it will keep at k 
        temp[k] = arr1[i]
        i++; // increase the index
        k++; // also increse the k index
    }
    else{
        temp[k] = arr2[j]
        j++;
        k++;
    }
}
 // if J < less then array 1 length then assign all element in 
while(j< arr2.length){
    temp[k] = arr2[j]
    j++;
    k++;
}
while(i< arr1.length){
    temp[k] = arr1[i];
    i++;
    k++
}

console.log(temp)
