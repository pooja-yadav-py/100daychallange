//31. Write a function called simplePasswordValidator that takes a single paramenter.
//one lowercase letter, one uppercase letter, one digit

const simplePasswordValidator = (str)=>{
    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasNumber = false;
    for(let char of str){
        if(char>='a' && char<='z'){
            hasLowerCase = true;
        }else if(char>='A' && char<='Z'){
            hasUpperCase = true;
        }else if(char>=0 && char<=9){
            hasNumber = true;
        }
    }
    if(hasLowerCase && hasUpperCase && hasNumber){
        return true
    }
    return false;
}
console.log(simplePasswordValidator("Liwer23sjhfun"));
console.log(simplePasswordValidator("iLwer23sjhfun"));


