//Write a function findMax that takes an array of numbers as 
// input and return the maximum number in the array

const findMax = (arr)=>{
    //first way
    return Math.max(...arr);
    
    //second way
    /* let max = arr[0];
    for(let i=1;i<=arr.length-1;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max; */
}

console.log(findMax([1,5,3,9,2]));//9
console.log(findMax([-10,-5,-3,-9,-2]));//-2
console.log(findMax([5]));//5

