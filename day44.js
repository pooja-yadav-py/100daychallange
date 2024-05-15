//Regilar expression are sequences of characters that define a search pattern, these patterns are widely used 
// for string searching and manipulation.in validation ,regax helps ensure that string such as email 
// addresses and passwords comform to expected formats.

// ## Basic syntex
/* --  **literals** : ordinary characters like 'a','1' or '%'.
--  **metacharcters** : characters with special meanings, like 
    `.` (any character)
    `^(caret)` (start of string);
    `$` (end of strings)
--  **character classes** : sets of character, like `[a-z]` for any lowercase letter
--  


### digit characters

- `\d` : matches any digit (0-9)
- `\D` : matches any non-digit .any

### whitespaces character
 - `\s` :matches any whitespace character(includes spaces, tabs and line breaks.)
 - `\S` :matches any non-whitespace character

 ###quantifiers : specify how many times a character can occure ,like 
 `+` (one or more time)
 `*` (Zero or more time)
 `{1,3}` (between one or 3 times)
 
 Practice - Email validation
 to validate an email, we want to check three main things:

 1.Local part - the part before the @ symbol
 2.domain -  the part after the @ but brfore the top level domain
 3.Top level domian - the last part following the last dot.
 
 
 */



//  email address validation
// write a function validateEmail that takes a string email as 
// input and returns true if the email address is valid  according to the following ReadableStreamBYOBRequest.

/*  todo for local part
- Alphanumeric Character(A-Z,a-z,0-9)
- special Character("." , "_" ,  " %",  "+"  "-")
- consecutive periods(..) are not allowed 
- special Character cannot appear at the begning or end of the local part  

The domain part of the email address  can contain
-Alphanumeric charcter(A-Z,a-z,0-9)
-Hyphen(-)
-Period(.)
-Must contain atleast one period
-

The top-level domain must consist  of at least two  alphabetic charcters (e.g,"com","org","net",etc)
*/

const validateEmail = (email) =>{
    return /^[A-Za-z0-9]+(?:[.%_+])*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/.test(email);
}

console.log(validateEmail("jhon.doe@example.com"))
console.log(validateEmail("@invalid..dot@domain.com"))
console.log(validateEmail("missing@gotcom"))
console.log(validateEmail("mispooju@gmil.com"))

console.log(validateEmail("no@domain"))
console.log(validateEmail("jhon.doe@example.com"))

// console.log()



