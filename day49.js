// Date Validation

// ?Write a function named isValidate that takes a single string 
// input represanting a date  and determine if it is a valid date in the format MM/DD/YYYY
// the valid date range should be from jaunary 1 ,1900 to december 31,2099


// Todo Requirment
/* Formate check The date must strictly follow the MM/DD/YYYY formate.Ensure that slashes (/) are used as separators.
    ? Month validation : Valid months are from 01(january) to 12 (decemeber)
    ? Day validation: DAYS should be valid according to the month
    ? 01-31 for january, March, May, July, August, October, December
    ? 01-28 for February in common years and 01-29 for February in leap year
    ? Year Validation : Years should be with in the range from 1900 to 2099
*/
const isValiDate = (completedate)=>{
if (/^(0[1-9]|1[0-2])\/(0[1-9]|1[\d]|2[\d]|3[0-1])\/((19|20)[0-9]{2})$/.test(completedate)){
    let date = new Date(completedate)

    let year = date.getFullYear()
    let d = date.getDate();
    let m = date.getMonth();
    console.log(year,d)
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        
        console.log(m,d,year)
    } else {
        return false;
    }}
}
console.log(isValiDate('12/15/2021'))
console.log(isValiDate('02/29/2021'))
console.log(isValiDate('04/31/2020'))
console.log(isValiDate('01/01/1800'))
console.log(isValiDate('13/01/2000'))

