// FizzBuzz Challenge
// write a function fizbuzz that accepets two numbers .startnum and endnum, as input the function 
// should return  an array containg numbers and specific strings based on the following rules

// ?For each number i in the range from startnum and end num (both inclusive)
// ?if i is divisible both 3 and 5, include "FizzBuzz" in the result
// ?if i is divisible by only 3 , include "Fizz " in the result
// ?if i is divisible by only 5 , include "Buzz " in the result
// ?otherwise include the number i itself


const fizzBuzz =(sn,en)=>{
    let arr=[];
for(let i=sn;i<=en;i++){
    if(i%3===0 && i%5===0){
        arr.push("FizzBuzz");   
    }else if(i%3===0){
        arr.push("Fizz");
    }else if(i%5===0){
        arr.push("Buzz");
    }else{
        arr.push(i);
    }
}
return arr;
}
console.log(fizzBuzz(1,15))
console.log(fizzBuzz(12,20))
