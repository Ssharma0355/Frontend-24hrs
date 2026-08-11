let str = "Sachin";
let rev=""
for(let i=str.length-1;i>=0;i--){
     rev = rev + str.charAt(i)
}
console.log(rev)

console.log(str.split("").reverse().join(""))