//28.Write a function called truncateString that takes two parameters:

const truncateString = (str,num) =>{
    if(num<=0){
        return str;
    }
    else if(str.length>num){
        return str.slice(0,8)+"...";
    }else{
        return str;
    }
    
    /* str =  str.slice(0,num);
    let str2 = "..."
    return str.concat(str2) */

    
    
}
console.log(truncateString("A-tile rt poo-yafadab -uadffink",8))