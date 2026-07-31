let n = 36;

function factorsOfNum(n){
    // for(var i=1;i<=n;i++){ // bruce force
    for(var i=1;i<=Math.floor(n/2);i++){ // optimized

        if(n%i===0){
            console.log(i)
        }
    }
    console.log(n)
}
factorsOfNum(n);