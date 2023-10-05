
//問１
function even_num(){
    let scores =[10,15,20,25];
    
    console.log("問1");

    for(i = 0; i < scores.length; i++){
        if(scores[i] % 2 === 0){
            console.log(scores[i] + "は偶数です");
        }
    }
   return 0;
}

//問２
function car_obj(){
    let car ={gass: 20.5, num: 1234};
    
    console.log("問2");

    for(let item in car ){
            console.log(item+ "は" + car[item] +"です");
    }
   return 0;
}
even_num();
car_obj();
