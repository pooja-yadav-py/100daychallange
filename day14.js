//14.Write a function called isPowerOfTwo that takes an integer num as input  
// and returns true if num is a power of two ,and false otherwise


/* const isPowerOfTwo = (num) =>{
    let c = num/2;
    if(c%2===0){
        return true;
    }
    return false;

} */

/* const isPowerOfTwo = (num) =>{
    let i=1;
    while(2**i<=num){
        if(2**i===num){
            return true;
        }
        i++;
    }
    return false;
} */

const isPowerOfTwo = (num)=>{
    // return num > 0 && (num & (num - 1)) === 0;

    return num > 0 && (num & (num - 1)) === 0;
}
console.log(isPowerOfTwo(8))
console.log(isPowerOfTwo(7))
