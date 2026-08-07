// let nums = [2,0,1]
let nums = [2,1]

// o/p-> [0,0,1,1,2,2]
// 0 -> red, 1 -> white, 2-> Blue

let i = 0;
let j = 0;
let k = nums.length-1;

while(i<k){
    if(nums[i] === 0){
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j++;
    }
    else if(nums[i] === 2){
        let temp = nums[i];
        nums[i] = nums[k];
        nums[k] = temp;
        k--
    }
    else if(nums[i] ===1){
        let temp = nums[i];
        nums[i] = nums[k];
        nums[k] = temp;
    }
    else{
        i++
    }
}
console.log(nums)