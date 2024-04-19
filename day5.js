//Write a function to sort an array of a number in an ascending order

/*
const sortAscending = (arr)=> {
    console.log(arr)
    arr.sort((a,b)=>a-b);
    // console.log(arr.sort());
    
    return arr;
    
} */


const sortAscending = (arr)=>{
    for(let  i=0;i<=arr.length-1;i++){
        for(let j=i+1;j<=arr.length-1;j++){
            if(arr[j]<arr[i]){
                let temp = arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
    }
    return arr;
}
console.log(sortAscending([5,4,2,10,77]))
// console.log(sortAscending(['a','e','q','b','c']));
