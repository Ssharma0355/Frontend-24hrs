let arr = [1,2,3,4,5,6,7,8]
let target = 10;
// brute force method
const findTarget=(arr, target)=>{
    for(let i = 0 ;i< arr.length; i++){
        for(let j=i+1; j< arr.length; j++){
            if(arr[i]+arr[j] === target){
                return [i,j]
            }
        }
    }
}

// TC -> 0(n^2)

console.log(findTarget(arr, target))


// Optimized Solution 0(n)
const optimisedTarget=(arr, target)=>{
    let left = 0;
    let right = arr.length-1;
    while(left<right){
        const sum = arr[left] + arr[right];
        if( sum === target){
            return [left, right]
        }
        if(sum < target){
            left++;
        }
        else{
            right++;
        }
    }
    return []



}
console.log(optimisedTarget(arr, target))
