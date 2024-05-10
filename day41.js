// 41. write a function to convert  an amount from one  currnecy  to another using static exchanges rate
//  Write a function named convertCurrency that takes three parameters: amount,fromCurrency, to Currency
// the function should return the converted amount in the target currency
// Handle conversion through USD as a base, meaning if converting from GBP to EUR , 
// first convert GBP to USD ,then USD to EUR

const  rates = {
    USD:1,
    EUR:0.9,
    GBP:0.8,
    INR:82,
}
/* const convertCurrency =(amount,fromCurrency,toCurrency)=>{
    
   let arr =  Object.entries(rates).flat()
   
    // let inusd = amount/arr[arr.findIndex((item)=>item===fromCurrency)+1];
    let inusd = amount/rates[fromCurrency];

    
    // let inEur = inusd*arr[arr.findIndex((item)=>item===toCurrency)+1]
    let inEur = inusd*rates[toCurrency];

    return inEur;
} */

const convertCurrency = (amount,fromCurrency,toCurrency)=>{
    
   let amountInUSD =0 ;
   if(fromCurrency!=="USD"){
     amountInUSD = amount/rates[fromCurrency];
   }else{
    amountInUSD = amount;
   }

   let convertedCurrency = 0;
   if(toCurrency!=="USD"){
    convertedCurrency = amountInUSD*rates[toCurrency];
   }else{
    convertedCurrency = amountInUSD
   }

    return convertedCurrency;
 }


console.log(convertCurrency(100, "GBP", "EUR"))