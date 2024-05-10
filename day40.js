//40.create a function genrateBarChart that takes an array of numbers and 
// generates a simple text-based bar chart

/* const genrateBarChart = (arr) => {
   const newArray = arr.map((currelem,index)=>{
    let star="";
    let number = 0;
    while(number<currelem){
        star=star+"*";
        number++;
    }
    return `${index+1}:${star}`;
   })
   console.log(newArray.join('\n'));
   return newArray.join('\n');
} */

/* 2nd approch */
const genrateBarChart = (arr) =>{
    return arr.map((currentElem,index)=>{
        return `${index+1}: ${"*".repeat(currentElem)}`;
    }).join("\n");
}

console.log(genrateBarChart([5,3,9,2]))
