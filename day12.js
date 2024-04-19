//Write a function that takes an array of integers as input and removes any duplicate elements, 
// returning a new array with only the unique elements.

const removeDuplicate = (array) =>{
    /* for(let i=0; i<array.length; i++){
        for(let j=i+1; j<array.length; j++){
            if(array[i]===array[j]){
                array.splice(j, 1);                   
            }
        }
    }
    return array; */
    let newArr = [...new Set(array)];
    return newArr;
    
}

console.log(removeDuplicate([1,2,3,2,1,4]));
console.log(removeDuplicate([5,6,7,7,8,8,9]));
console.log(removeDuplicate([1,2,3,4]));
console.log(removeDuplicate([]));

// The new Set() method in javascript creates a new Set Object .A set object is a collection of unique 
// values. It can store any type of value, whether primitive values or object references 

