//21. write a function called calculateMean that takes an array of numbers as input and returns the mean 
// (average) of those numbers

const calculateMean = (arr) => {
    /* 1st ----------------------------- */
    /* let sum=0;
    for(let value of arr){
        sum+=value;
    }
    return sum/(arr.length)  */

    /* 2nd-------------------------------- */
    let sum = arr.reduce((acc,curren) => acc+curren,0);
    return sum/arr.length
}

console.log(calculateMean([1,2,3,4,5]));
console.log(calculateMean([10,20,30]));
console.log(calculateMean([-1, 0, 1]));
console.log(calculateMean([]));


