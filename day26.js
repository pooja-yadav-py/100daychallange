//-1,1,0,1,1,2,3,5,8,13,21 ....(fibonic series)

const fibonacci = (num) =>{
 let n1 = -1;
 let n2 = 1;
 let i=0,result;
 while(i<=num){
    result = n1+n2;
    n1=n2;
    n2=result;
    i++;
 }
return result;
}


console.log(fibonacci(1));
console.log(fibonacci(5));

console.log(fibonacci(7));


