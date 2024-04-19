console.log("2 day")
//?The input string should be converted to a hash tag formate, where each word is 
// capitalized and concatenated together without spaces.

//? if the length of the input string is grater than 280 characters or if the input string 
// is empty or contains only whitespaces, the function should return false

//? otherwise, the function should return the genrated  hash tag prefixed with #.


//============= Write a function genrateHash to accomplish this task
const genrateHash = (str)=>{
    if(str.length>280 || str.trim().length==0){
        return false;
    }
    str = str.split(" ");
    // two ways
    str = str.map((currentElem)=> currentElem.replace(currentElem[0],currentElem[0].toUpperCase()))
    // str = str.map(item => item.charAt(0).toUpperCase()+item.slice(1));
    
    str.unshift("#")
    
   return str.join("")
    // add # and join
    // str = `#${str.join("")}`
}
const result = genrateHash("my name is pooja yadav");
console.log(result);
//o/p = "#MyNameIsPoojaYadav"