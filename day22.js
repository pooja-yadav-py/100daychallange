//22.Write a js function findMedian(arr) that takes an array of numbers as input and returns 
//the median value. If the array has an even number of elements, return the average of the two middle 
//values.

const findMedian = (arr) => {
    /* arr= arr.sort((a,b)=>a-b);
    console.log(arr)
    if(arr.length%2!==0){
        let c = (arr.length-1)/2;
        return arr[c];
    }else{
        let c = (arr.length)/2;
        return (arr[c]+arr[c-1])/2
    } */

    arr= arr.sort((a,b)=>a-b);
    let midden = Math.floor(arr.length/2);
    if(arr.length%2!==0){
        return arr[midden];
    }else{
        return (arr[midden]+arr[midden-1])/2
    }
}
console.log(findMedian([5,3,9,1,7]));
console.log(findMedian([2,4,6,8]));
console.log(findMedian([2]));
console.log(findMedian([1,3,5,7,9]));

