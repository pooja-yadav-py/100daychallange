//Challenge: Calculate the avrage

//WAF called calculateAverage that takes an array of numbers as 
//input and returns the average of those numbers

const calculateAverage = (arr) =>{
    let sum = arr.reduce((accum,currentElem)=> {return accum+currentElem},0);
    return sum/arr.length;
}
console.log(calculateAverage([2,5,8,10,12]));