//===============Count Occurrences of Character


//? The function should be case-sensitive
//? The function should handle both lowercase and uppercase characters.

// =====================================================================
/*let count=0;
 const countChar = (str,ch) => {
    console.log(str,ch)
    
    let lower = ch.toLowerCase();
    let upper = ch.toUpperCase();
    str = str.split('');
    
    str.forEach((item)=>{
      if(item===lower || item===upper){
        count++;
      }
    })
    return count;
} */

// ===========================================================================

let count;
const countChar = (word,char)=>{
    word = word.toLowerCase();
    char = char.toLowerCase();
    word = word.split('');
     count = word.reduce((accum,currel)=>
     {
      if(currel===char){
        accum++;
     }
       return accum;
     },0)
    return count;
}




console.log(countChar("MissIssippi","I"))