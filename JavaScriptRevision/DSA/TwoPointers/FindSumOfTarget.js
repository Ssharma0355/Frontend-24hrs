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
console.log(findTarget(arr, target))
