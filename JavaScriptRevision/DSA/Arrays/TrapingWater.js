// Taping water 
// https://leetcode.com/problems/trapping-rain-water/description/

let height = [4,2,0,3,2,5];
let left =new Array(height.length);
let right =new Array(height.length);
let leftMax = height[0];
let rightMax = height[height.length-1]
left[0] = leftMax;
right[height.length-1] = rightMax
let ans =0;
let BeforeAns = 0;

for(let i=1;i<height.length;i++){
    leftMax = Math.max(leftMax, height[i]);
    left[i] = leftMax
}
for(let i = height.length-2 ; i>=0;i-- ){
    rightMax = Math.max(rightMax, height[i])
    right[i] = rightMax
}
for(let i=0;i<height.length;i++){
    BeforeAns = Math.min(left[i], right[i])-height[i]
     ans+= BeforeAns
}
console.log(ans)

