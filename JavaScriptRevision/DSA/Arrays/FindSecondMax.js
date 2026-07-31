// Find Second Max in element

let arr  = [20,100, 30, 90, 25];

let max = Math.max(arr[0],arr[1]);
let secMax = Math.min(arr[0],arr[1]);

for(let i=2; i<arr.length; i++){
    if(arr[i] > max){
        secMax = max;
        max = arr[i]
    }
    else if(arr[i] > secMax){
        secMax = arr[i]
    }

    
}
console.log(secMax)
console.log(max)


