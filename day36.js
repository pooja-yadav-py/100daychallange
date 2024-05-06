// convert Object to array : write a function objectToArray that takes an object as input 
// and return an array  with two elements: the key and the  corresponding value  from the obj


const obj = {
    name: "KOhinoor heera",
    age: 30,
    city: "pune",
}

const objectToArray = (obj) =>{
    /* let arr= [];
    for(let keys in obj){
        console.log(keys)
        console.log(obj[keys])
        arr.push(keys,obj[keys])
    }
    console.log(arr) */

    /* 2nd=============================== */
    entries = Object.entries(obj);
    console.log(entries.flat());
    return entries;
}
let result = objectToArray(obj);
console.log(result)

const arrayToObject = (result) =>{
    /* let obj = {}
    console.log(result)
    result.forEach(element => {
        console.log(element)
        obj[element[0]]=element[1];
    });
    console.log(obj) */

    /* 2nd ============ */
    return Object.fromEntries(result);
}

console.log(arrayToObject(result))