//check object emptiness
const isEmptyObject = (obj) => {
   return  Object.keys(obj).length===0 ? `it's empty`:`it's not empty`
   
}
console.log(isEmptyObject({name:"vinod"}))

console.log(isEmptyObject({}))

console.log(isEmptyObject({keywithNUll:null}))

console.log(isEmptyObject({keyWithUndefined:undefined}))
