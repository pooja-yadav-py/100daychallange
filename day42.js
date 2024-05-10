//  validate a credit  card number (Luhn Algorithm)

// Write a function to validate credit card numbers using the Luhn algorithm.

// Requirements?
// ? Write a function named validateCreditCard that takes a credit card number as a string .
// ? The function should return true if the number is valid according to the Luhn algorithm, and false otherwise.
// ? Ensure the function can handle numbers as strings, which may include spaces and dashes.


// * Luhn Algorithm Steps:
// Steps of the Luhn Algorithm
// Prepare the Number:
//? Start with the digits of the number. For example, if validating the number 79927398713.
//? Reverse the Digits:
//? Reverse the digits of the number. For the example, it becomes 31789379297.
//todo Double Every Second Digit:
// Starting from the first digit, double every second digit.
//todo For our example: 3, 1*2, 7, 8*2, 9, 3*2, 7, 9*2, 2, 7*2, 9.
//? Which translates to: 3, 2, 7, 16, 9, 6, 7, 18, 2, 14, 9.
//? Subtract 9 from Numbers Higher Than 9:

// 16 = 16 - 9 = 7
// 16 = 1 + 6 =7

// 14 = 14-9= 5
// 14= 1+4=5

// If doubling the number results in a number greater than 9, subtract 9 from it.
//? Now our series is: 3, 2, 7, 7, 9, 6, 7, 9, 2, 5, 9.
//todo Sum All Digits:
//? Add all the digits together.
//* 3 + 2 + 7 + 7 + 9 + 6 + 7 + 9 + 2 + 5 + 9 = 66.
//todo Check Modulo 10:
//? If the sum modulo 10 is 0, then the number is valid according to the Luhn formula.
// 66 % 10 = 6, which is not 0, so 79927398713 is not a valid number according to Luhn.


const validateCreditCard =(string)=>{
    // 1. remove spaces
    string = parseInt(string.replace(/\s/g,''));
    

    // 2.revert number
    let reversestring = string.toString().split('').reverse().join('');
    // console.log(reversestring);

    // 3.double every 2nd digit
    let arr = reversestring.split('');
    
    let newArr = arr.map((item,index)=>{ 
        if(index%2!==0){
            item = item*2
            if(item>9){
                return item-9;
            }else{
                return item
            }
        }else{
            return item;
        } 
    })
    console.log(newArr);


    // 4.sum of all
    let sum = newArr.reduce((accc,curreElem)=> accc+Number(curreElem),0);
    console.log(sum);

    // 5.check final validation
    if(sum%10===0){
        console.log(true)
    }else{
        console.log(false)
    }
    
    
} 



/* const validateCreditCard = (str) => {
// inital step -remove space
    str = str.replace(/\D/g,'') 


//step 1:  Reverse the digit 
    // str = str.split('').reverse().join('');
    // console.log(str)

    let revNum ="";
    for(let i=str.length-1;i>=0;i--){
        revNum=revNum+str[i];
    }
    console.log(revNum)

//step 2: double every 2nd digit
    // revNum =revNum.split('')
    let double = revNum.split('').map((item,index)=>{
        
        if(index%2!==0){
             item = item*2;
             if(item>9){
                item= item-9
             }
             item= item;
             
        }
            return Number(item)
        
    })
    console.log(double)

//step 3: sum of all digits
    let sum = double.reduce((accum,currenElem)=> accum+currenElem,0);
    console.log(sum)

//step 4:check %10==0
let result = sum%10===0?true:false;
console.log(result);
}  */  

console.log(validateCreditCard("4539 1488 0343 6467"));
console.log(validateCreditCard("8273 1232 7352 0569"));
