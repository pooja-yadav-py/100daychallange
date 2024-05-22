// Validate hax color code
// write a regular expression to validate a hex colorcode e.g. #a3c113

// Requirements
// The hex color should start with #,
/* const validateHexColor =(str)=>{
    let result = false;
    if(str.startsWith('#') && str.length===7 || str.length===4){
        result = true;
        str.slice(1).split('').forEach((item)=>{
            if(!((item>=0 && item<=9) || (item>='A' && item<='F') || (item>='a' && item<='f'))){
                result = false;
            }
        })   
    }
    return result;
} */

const validateHexColor = (hex) =>{
 return /^#([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/.test(hex);
}

console.log(validateHexColor("#a3c113"));
console.log(validateHexColor("#fff"));
console.log(validateHexColor("#12345678"));
console.log(validateHexColor("a34e56"));
console.log(validateHexColor("#g3c113"));

