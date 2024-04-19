// 19. write a function to chaeck if a given string starts with a specific substring.

const startsWith = (str,subStr) =>{
    /* 1st--------------------------------------------- */
    // str = str.split(" ")[0];
    // return str===subStr ? true : false

    /* 2nd------------------------------------------- */
    // return str.startsWith(subStr);

    /* 3rd--------------------------------------------- */
    return str.slice(0,subStr.length)===subStr;

}
console.log(startsWith('Hello world', 'Hello'));
console.log(startsWith('Hello world', 'world'));

