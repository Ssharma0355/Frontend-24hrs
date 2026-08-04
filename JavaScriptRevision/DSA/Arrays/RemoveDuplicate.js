let arr = [0,0,1,1,1,2,2,3,3,4];
// give = [0,1,2] duplicates

function removeDuplicate(arr){
    let j = 1;
    for(let i=0;i<arr.length-1;i++){
       if(arr[i]!=arr[i+1]){
        arr[j] = arr[i+1];
        j++;
       }
    }
    arr.length = j
    return arr

}

console.log(removeDuplicate(arr))
