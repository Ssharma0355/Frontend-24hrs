let num = 1234;

// logic
// num > 0 (num should be 0 looping)
// console.log(1234%10) ->// last digit 4
// sum = sum + 4;
// 1234/10 => 123
// now
// 123%10 => 3
// 4+3 =7
// 123/10 => 12
// 12%10 => 2
// 7+2 => 9
// 1>0 (loop)
// 1%10=> 1 
// 1+9 = 10
// 1/10 =>0 (Loop ends )

function sumOfDigit(num){
    let sum =0;
    while(num>0){
        let rem = num%10;
        sum = sum +rem;
        num = Math.floor(num/10)
    }
    console.log(sum)
}
sumOfDigit(num)