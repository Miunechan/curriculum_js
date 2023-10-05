
//問１
console.log("問1");
let numbers = [2, 5, 12, 13, 15, 18, 22];
let num = 0;   

for(i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        num = numbers[i];
        isEven();
    }
}

function isEven() {
    console.log(num + 'は偶数です');
}

//問２   
console.log("問2");

class Car_class{
    constructor(gass, number){
        this.gass = gass;
        this.number = number;
    }
    getNumGas(){
        console.log(`ガソリンは${this.gass}です。ナンバーは${this.number}です`); 
    }
}

let car =new Car_class(20.5, 2537);
car.getNumGas();
