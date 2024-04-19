//20.Write a function to reverse a string without using built-in method.The function should take a string
// as input and return the reversed string

const reverseString = (str) =>{
    /* 1st---------------------------------- */
        /* str = str.split("");
            for(let i=0;i<str.length/2;i++){
                let temp =str[i];
                str[i] = str[str.length-1-i];
                str[str.length-1-i] = temp;
            }   
        
        return str.join(''); */

    /* 2nd---------------------- */
        /* let r_str = "";
        for(let i =str.length-1;i>=0;i--){
            r_str = r_str+str[i];
        }
        return r_str; */

    /* 3rd--------------------------- */
        str=str.split('').reverse().join('');
        return str;
}


console.log(reverseString("hello"))