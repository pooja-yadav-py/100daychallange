//Write a function to determine whether a given string is a palinfrome or not.
// A palindrome is a word,phrase,number,or other sequence of characters that reads the 
//same forward and backward,ignoring spaces, punctuation, and capitalization


/* const isPalindrome = (str)=>{
    str = str.replace(/\W/g, '').toLowerCase().split('');
    console.log(str)
    // str = str.toLowerCase().split('').filter((item)=>item!==' ' && item!==',');
    let result=true;
    console.log(str.length)
    for(let i=0;i<(str.length)/2;i++){
        
            if(str[i]!==str[str.length-1-i]){
                result=false;
                break;    
            }
        
    }
    return result;
} */
const isPalindrome = (str)=>{
    str = str.toLowerCase().replace(/\W/g, '');
    
    let r_str = str.split('').reverse().join('');
   
    return str===r_str?true:false;
}


console.log(isPalindrome("A man, a plan, a canal, panama"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));