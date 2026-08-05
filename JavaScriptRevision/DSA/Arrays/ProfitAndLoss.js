let prices = [7,1,5,3,6,4];
// these are the index is day

let maxProfit = 0;
// we kept max profit as 0
let min = prices[0];
// we kept min at index 0
for(let i=0;i<prices.length;i++){
    // looping till last element of array
    if(prices[i]<min){
        // checking either prices at indexs is min or not if min is less then prices at i 
        // then we change the min value with prices of index 
        min = prices[i]
    }
    let profit =prices[i] - min;
    // we keep the profit of prices[index] -  with min value
    maxProfit = Math.max(profit, maxProfit);
    // and then we check what is max profit or current maxProfit and return

}
console.log(maxProfit)