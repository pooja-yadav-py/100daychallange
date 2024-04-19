//11. Write a function that takes a number as input and returns the sum of its digits.

// let reminder,sum=0;
/* const sumOfDigit = (num) => {
let reminder,sum=0;
    while(num>0){    
        reminder = num%10;//4//3//2
        sum=sum+reminder;//0+4+3+2
        num=Math.floor(num/10);//123//12//1   
    }
return sum;
} */

const sumOfDigit = (num) => {
    const numStr = num.toString();
    const array = numStr.split('');
            // console.log(Array.from(String(num)));
    console.log(array);
    let sum = array.reduce((accuml,currentel) => accuml+parseInt(currentel),0);
    console.log(sum);
}

console.log(sumOfDigit(1234));
console.log(sumOfDigit(23));
console.log(sumOfDigit(1237894));
