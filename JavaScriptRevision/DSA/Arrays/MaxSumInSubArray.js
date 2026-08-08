let nums = [-2,1,-3,4,-1,2,1,-5,4];

// keep max as -Infinity so the -ve element
let max = -Infinity;
// and sum as 0
let sum = 0;
for(let i=0;i<nums.length;i++){
    // step-1
    // we add array[i] element in sum 
    sum = sum + nums[i];
    // step-2
    // we keep maximum value in max by sum and max
    max = Math.max(max, sum);
    // we check if sum is not -ve if -ve then assign 0
    if(sum<0){
        sum = 0;
    }
}
// print the result 
console.log(max)