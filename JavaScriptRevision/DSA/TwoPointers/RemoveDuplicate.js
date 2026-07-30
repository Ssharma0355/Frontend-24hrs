

const removeDuplicate =(arr)=>{

    let slow = 0;
    for( let fast = 1; fast<arr.length;fast++){
        if(arr[fast]!==arr[slow]){
            slow++;
            arr[slow] = arr[fast]
        }
    }
    return slow+1

}
let arr = [1,1,2,2,3,3,4,5,5,6,6];
let len =removeDuplicate(arr)
console.log(arr.slice(0,len))