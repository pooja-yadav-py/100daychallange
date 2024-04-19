//16.Write a function findMin that takes an array of numbers as input and returns the minimum value found 
// in the array.

const findMin = (arr) =>{
 /* let min=arr[0];
 for(let value of arr){
    if(value<min){
        min=value;
    }
 } 
 return min;
 */

 /* arr = arr.sort((a,b)=>a-b);
 return arr[0]; */

 if(arr.length===0) return "Array is empty";
 return Math.min(...arr);
}
console.log(findMin([5,10,2,8]));
console.log(findMin([5,-3,-2,-17]));
console.log(findMin([]));