// Write a function that takes a string as input and return true if the string represents a valid indian 
// mobile number and false otherwise

// length should be 10 digit 
// the number start with 6,7,8,9

const validateIndianMobileNumber =(number) =>{
const regax = /^[6-9][\d]{9}$/;

return regax.test(number);
}
console.log(validateIndianMobileNumber("8209792612"))
console.log(validateIndianMobileNumber("90139792612"))
console.log(validateIndianMobileNumber("0123792612"))
console.log(validateIndianMobileNumber("82097922"))


