//write a function called checkTriangleType that takes three repersenting the length 
//of the sides of a triangle. The function should be return a string indicating the type
//of triangle: "equilateral", "isosceles", "scalene"


const checkTriangleType = (a,b,c) => {
    if(a===b && b===c){
        return "equilateral";   
    }else if(a!==b && b!==c && c!==a){
        return "scalene";
    }else{
        return "isosceles";
    }
}
console.log(checkTriangleType(3,3,3));
console.log(checkTriangleType(3,3,3));
console.log(checkTriangleType(2,4,3));
