//write a function arraysAreEqual thate takes two arrays arr1 and arr2 as input and returns true 
// if the array are equal.

const arraysAreEqual = (arr1,arr2)=>{
    /* if(arr1.length!==arr2.length){
        return false;
    }
    for(let i=0;i<arr1.length;i++){
        if(arr1[i]!==arr2[i]){
            return false
        }
    }
    return true; */
    return arr1.every((currentValu,index)=>currentValu===arr2[index])
}

console.log(arraysAreEqual([1,3,5],[2,4,7]));
console.log(arraysAreEqual([1,2,5],[1,2,5]));
console.log(arraysAreEqual([],[]));
