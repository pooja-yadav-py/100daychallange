//23.find occurencey of all numbers

const findOccurence = (arr) => {
    /* 1st way-------------------------------------------- */
    /* let obj = {};
    let d =[];
    for(let i=0;i<arr.length-1;i++){
        
        let count = 1;
        if(!d.includes(arr[i])){
            d.push(arr[i]);
        }else{
            i++;
        }
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                ++count;
            }
        }
        obj[`"${arr[i]}"`]=count;   
    }      
    return obj;
 */
    /*2nd-----------------------------------------------------  */
    let counts = {};
    for(let element of arr){
        counts[element]=(counts[element] || 0) + 1;
    }
    return counts;

}
console.log(findOccurence([1,2,2,3,1,4,2]));
console.log(findOccurence([5,2,2,3,1,4,2,5,7,4]));
