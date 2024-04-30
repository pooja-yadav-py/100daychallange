//27.write a function called repeatString that takes two paramenters
/* const repeatString = (str,num) =>{
    let s = str;
    for(let i=1;i<num;i++){
        str+=s;    
    }
    return str;

} */


const repeatString = (str,num) =>{
    
    return num>0 ? str.repeat(num): str;

}
console.log(repeatString('abc',5));