
function createJuice(fruits){
    let juice;
   
    console.log(fruits +"を受け取りました。ジュースにして返します");
    juice =fruits + "ジュース";

    return juice;
}

let fulitsJuice = createJuice("みかん");
console.log(fulitsJuice + "が届きました");

