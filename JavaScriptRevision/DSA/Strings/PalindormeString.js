let str = "Sachin"
let str1 = "NooN"

function checkPalindrome(arg){
    let rev =""
    for(let i=arg.length-1;i>=0;i--){
        rev = rev+str1.charAt(i)
    }
    if(rev === arg){
        return true
    }
    else{
        return false
    }

}
console.log(str,checkPalindrome(str))

console.log(str1,checkPalindrome(str1))
