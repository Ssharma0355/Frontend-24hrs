let arr1 = [2,4,6,8];
let arr2 = [1,3,5,7,9];
let temp = new Array(arr1.length+arr2.length);

let i = 0;
let j = 0;
let k = 0;
while(i< arr1.length && j < arr2.length){
    if(arr1[i] < arr2[j]){
        temp[k] = arr1[i]
        i++;
        k++;
    }
    else{
        temp[k] = arr2[j]
        j++;
        k++;
    }
}

while(j< arr1.length){
    temp[k] = arr1[j]
    j++;
    k++;
}
while(i< arr2.length){
    temp[k] = arr2[i];
    i++;
    k++
}

console.log(temp)
