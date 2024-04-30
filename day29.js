// 29. Write a function called numberRange that generates an array containing consecutive numbers from a 
// to b (inclusive);

const numberRange = (startnum,endnum,arr=[]) =>{
    
    /* if(startnum<=endnum){
        for(let i=startnum;i<=endnum;i++){
            arr.push(i);
        }
    }else{
        return 0;
    }
    
    return arr; */
    while(startnum<=endnum){
        arr.push(startnum)
        startnum++;
    }
    return arr;
}
console.log(numberRange(0,5))
console.log(numberRange(7,18))
console.log(numberRange(-2,2))
console.log(numberRange(2,0))

