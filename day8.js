//Factorial find
//Write a function factorial that takes a non-nagative integer num as input and return its factorial 
const factorial = (num) =>{
    let fact=1;
    for(let i=num;i>0;i--){
        fact = i*fact;
    }
    return fact;
}
// fact=5*4*3*2*1
console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(3));

