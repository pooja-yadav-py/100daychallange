// Password validation Coding Problem
// create a function validatePassword that checks if a given password string meets the following criteria:
/* Minimum length: The password must be at least 8 Characte
Case Requirments: oneuppercase and one lowercase onedigit one specific character from (!@#$%^&*()-_+=) atleast
 */

const validatePassword =(password)=>{
const regax = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W]).{8,}$/
return regax.test(password);
}
console.log(validatePassword("Pass123!"))
console.log(validatePassword("Password"))
console.log(validatePassword("12345678"))
console.log(validatePassword("P@ssw0rd"))

