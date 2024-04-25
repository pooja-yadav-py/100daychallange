//24. findMode
const fineMode = (arr) => {
    let counts = {};
    let max = 0;
    let maxkey = null;
    
    for(let element of arr){
        counts[element] = (counts[element] || 0 ) + 1;
    }
    console.log(counts);
    for(let key in counts){
        if(counts[key]>max){
            max = counts[key]
            maxkey = key
        }
    }
    return maxkey;



}

console.log(fineMode([1,2,2,3,1,4,2,4,4,1,1,1]));