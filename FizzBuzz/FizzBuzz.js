let result = "";
let counter3 = 0, counter5 = 0;
let length = 100

for ( let i = 1; i <= length; i++ ){
    counter3++;
    counter5++;
    if(counter3 == 3 ){
        result += "fizz";
        counter3 = 0;
    }
    if(counter5 == 5){
        result += "buzz";
        counter5 = 0;
    
    }
    if (result.length == 0)
        console.log(i);
        else  console.log(result);
        result = "";
    
}

