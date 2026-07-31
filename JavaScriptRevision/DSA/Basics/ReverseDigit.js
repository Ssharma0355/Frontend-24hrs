let num = 1234;

function reverseDigit(n){
    console.log("Before reverse:",n)
    var rev = 0;
    var rem = 0;
    // rem = 1234%10 => 4
    // var rev = 0;
    // rev = 0*10 + 4 = 4 , rev=4
    // rem = 123%10 => 3
    // rev =4;
    // rev = 4*10 + 3 = > 43
    // rem = 12%10 = 2
    // rev = 43
    // rev = 43*10 + 2 => 432
    // rem = 1%10 => 1
    // rev = 432
    // rev = 432*10 + 1 => 4321
    // n =0 (Loop end)

    while(n>0){ 
        rem = Math.floor(n%10);
        rev = rev*10 + rem 
        n = Math.floor(n/10)
    }
    console.log("after reverse",rev)
}
reverseDigit(num)