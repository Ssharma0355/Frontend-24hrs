// Find Second Max in element

let arr  = [10,100, 90, 90, 90];

let max = Math.max(arr[0],arr[1]);
let secMax = Math.min(arr[0],arr[1]);

for(let i=2; i<arr.length; i++){
    if(arr[i] > max){
        secMax = max;
        max = arr[i]
    }
    else if(arr[i] > secMax && max !== secMax){
        secMax = arr[i]
    }

    
}
console.log(secMax)
console.log(max)


