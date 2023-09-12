console.log("問１");
let a = 10;

if(a != 10){
    console.log("変数は10ではない");
}else{
    console.log("変数は10である");
}

let b = 23;

if((b>=10 && b<=20) && b % 2 === 0){
    console.log("変数bは10以上20未満、かつ偶数である");
}else{
    console.log("変数bは10以上20未満、かつ偶数ではない");
}

console.log("問2");
let x = 10;

if(x>=10 && x<=20){
    console.log("成功です");  
}else{
    console.log("失敗です");
}

console.log("問3");
let y = 0;

if(y % 2 === 0){
    console.log("偶数です");
}else if(y % 2 !== 0){
    console.log("奇数です");
}