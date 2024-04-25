//25.write a function to calculate the factorial of a number.(using Recursion)

const factorial=(num)=>{
    
    if(num>1){
        return num * factorial(num-1)
    }else{
        return 1;
    }
    
    
}

console.log(factorial(5));