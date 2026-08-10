// find max majority element means 
// if arrlength is 7 then 7/2 half it = 3
// we need to find the element that occurs more then 3 
//  like 2 occurs 4 times
//  https://leetcode.com/problems/majority-element/submissions/2101338886/

let arr = [2,2,1,1,1,2,2];
let half = Math.floor(arr.length/2)
let store = arr[0]
let count = 1;
for(let i = 1 ;i<arr.length;i++){
    if(count === 0){
        store = arr[i];
        count =1;
    }
    else if(store === arr[i]){
        count++;
    }
    else{
        count--;
    }
}
console.log(store)
