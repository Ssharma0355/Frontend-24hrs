let str = "fsjkdfnbsdbnfeurhdhfbd";
let arr = new Array(128).fill(0);
// we created array with len -128 so capital and lowwer all get along

for(let i=0;i<str.length;i++){
    // trivesing to strings
    let indx = str.charCodeAt(i);
    // we kept indx of each ascci code ot string
    arr[indx] = arr[indx]+1;
    // and adding on the index where atring ascci is kept
}

for(let i=0;i<arr.length;i++){
    // triversing to array
    if(arr[i]>0){
        // if arr[i] index is bigger than 0
        console.log(String.fromCharCode(i)," Appears",arr[i]," times!")
        // from ascci index Strinf it appears the index of array times
    }
}