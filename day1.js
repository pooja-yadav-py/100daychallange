console.log("1 day");

//==========Find Longest Word In String

const findLongestString = (str) =>{
    let strAtt = str.split(" ");
    strAtt.sort((a,b)=>b.length-a.length);
    console.log(strAtt);
    return strAtt[0]
}

console.log(findLongestString("zas Watch pooja yadav videsoe in my channnel"));