let prices = [7,1,5,3,6,4];

let maxProfit = 0;
// intially we keep our max profit as 0

let min = prices[0];
// we keep the mininum at prices[0] which is 7

for(let i=0;i<prices.length;i++){
    // loop from 0 to 5 
    if(prices[i]<min){
        // if arr[i] is lower then min value then
        min = prices[i]
    }
    // if not then 
    let profit = prices[i]-min;
    // we subtract the big element of arr[i] to min
    maxProfit = Math.max(profit,maxProfit)
    // we will add maxProfit value which is bigger 
    
}

console.log(maxProfit)