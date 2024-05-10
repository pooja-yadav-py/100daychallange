//38 Write a function calculateDaysBetweenDates that calculates the number of days between two dates.
// The dates will be provided in the foemate 'YYYY-MM-DD'.

const calculateDaysBetweenDates = (d1,d2) =>{
    date1 = new Date(d1);
    date2 = new Date(d2);
    let diff = Math.abs(date2 - date1);
    let days = diff/(24*60*60*1000)
    return days;



}

console.log(calculateDaysBetweenDates("2024-01-01","2024-01-31"))