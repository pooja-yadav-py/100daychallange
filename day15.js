
//Write a function to calculate the sum of squares of all elements in an array. for ex.
// given an array [1,2,3] the function should return 14 because 1*1, 2*2, 3*3 = 1+4+9 = 14

const sumOfSquare = (arr) =>{
    return arr.reduce((accc,currele)=>accc+currele*currele,0);
}




console.log(sumOfSquare([1,2,3]));//14
console.log(sumOfSquare([1,4,5]));//42
