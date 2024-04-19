//17.Write a function to convert  a string  to camelcase and snake_case

/* const toCamelCase = (str) =>{
    str = str.toLowerCase().split(" ");
    str = str.map((item)=>{ 
        return item.charAt(0).toUpperCase()+item.slice(1) 
    })
    str = str.join("");
    str = str.charAt(0).toLowerCase()+str.slice(1)
    return str;
} */
const toCamelCase = (str) =>{
    str = str.toLowerCase().split(" ");
    str = str.map((item,index)=>{ 
        if(index===0){
            return item;
        }else{
            return item.charAt(0).toUpperCase()+item.slice(1) 
        }
        
    })
    str = str.join("");
    return str;
}

console.log(toCamelCase("hello world pooJa"));

const toSnakeCase = (str) =>{
    str = str.split(/(?=[A-Z])/);
    str = str.join("_").toLowerCase();
    return str
}

console.log(toSnakeCase("helloWorld"))
// hello_world