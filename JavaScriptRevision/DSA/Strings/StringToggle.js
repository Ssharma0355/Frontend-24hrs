let str = "AbCdEFgh";
let toggle = "";
for(let i=0;i<str.length;i++){
    if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
       toggle = toggle + String.fromCharCode(str.charCodeAt(i)+32)
    }
    else if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122){
        toggle = toggle + String.fromCharCode(str.charCodeAt(i)-32)
    }
}
console.log(toggle)