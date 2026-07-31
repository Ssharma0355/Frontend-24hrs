// find max in an array
let arr = [20, 34, 49, 32, 2, 98, 78];

let max  = arr[0];

for(let i=1;i<arr.length;i++){
    if(max < arr[i]){
        max = arr[i]
    }
}
console.log(max)

