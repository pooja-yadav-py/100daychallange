// Write a function calculateSimpleInterest that calculates the simple interest given the principle
// amount, rate of interest per annum, and time in years

const calculateSimpleInterest = (p,r,t) => {
 retrun (p*r*t)/100;
}
console.log(calculateSimpleInterest(1000, 5, 3));