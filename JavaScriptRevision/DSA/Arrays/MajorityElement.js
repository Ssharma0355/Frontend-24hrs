let arr = [2,2,1,1,1,2,2];
let half = Math.floor(arr.length/2)
let store = arr[0]
let count = 1;
for(let i = 1 ;i<arr.length;i++){
    // we check the count and store is equal to current i
    if( count !== 0 && store === arr[i]){
        // then we increase the count
        count++;
    }
    else  if(count !== 0 && store !== arr[i]){
        // we check the count and store not equal to current i
        count--;
        // we count -1;
    }
    else if( count === 0 && store !== arr[i]){
        // we check count is 0 and store is not equal to current i
        store = arr[i];
        // we replace store with i
        count = 1;
        // and increase the count
    }
   
}
console.log(store)
