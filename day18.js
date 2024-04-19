//18. Write a function to check if a character is uppercase and lowercase

const isUpperCase = (char) =>{
    if(char.charCodeAt(0)>=65 && char.charCodeAt(0)<=90){
        return true;
    }
    // if(char>='A' && char<='Z'){ return true ;}
    return false;
    // return char === char.isUpperCase();

}
const isLowerCase =(char) =>{
    if(char.charCodeAt(0)>=97 && char.charCodeAt(0)<=122){
        return true;
    }
    // if(char>='a' && char<='z'){ return true ;}
    return false;
    // return char === char.isLowerCase();

}


console.log(isUpperCase("s"));
console.log(isUpperCase("M"));

console.log(isLowerCase("d"));
console.log(isLowerCase("S"));

