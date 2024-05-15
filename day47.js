/* // write a regular expression to extract all numbers from giving string
/* const extractNumbers = (str)=>{
    let numbers=[];
    let currentNumber = "";
    for (let char of str) {
        if (/^\d+$/.test(char)) {
          currentNumber += char;
        }else if(currentNumber.length>0){
          numbers.push(currentNumber);
          currentNumber = "";
        }else{
            currentNumber = "";
        }
      }

      if(currentNumber.length>0){
        numbers.push(currentNumber);
          currentNumber = "";
      }
    
      return numbers;


} */

 const extractNumbers = (str)=>{
let regax = /\d+/g;
return str.match(regax)
}
console.log(extractNumbers("abc123def456"))
console.log(extractNumbers("no number here"))
console.log(extractNumbers("12ab3e4")) 
 
/* const fin = (arr)=>{
console.log([...new Set(arr)]);
arr.filter((item,index)=>arr.indexOf(item)===index);
}
console.log(fin([1,3,5,7,1,3,7,0])); */ 