//remove duplicate
const removeDuplicate = (arr)=>{
   /* let p =[];
    for(let i=0;i<arr.length;i++){
        if(p.includes(arr[i])){
            i++; 
        }else{
            p.push(arr[i])
        }
        
    }
    return p; */

    return [...new Set(arr)];
}

console.log(removeDuplicate([1,2,3,3,4,4,5]));
