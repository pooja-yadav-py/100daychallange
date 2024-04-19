// 13.Write a function that takes a string as input and returns the count of vowels in that string.
//Consider 'a', 'e', 'i', 'o' and 'u' as vowels (both lowercase and uppercase).

const countVowel = (str) =>{
    const vowel = ['a', 'e', 'i', 'o', 'u']
    let count = 0;

    str = str.toLowerCase().split('');

    /* str.forEach(e => {
        if(e==='a' || e==='e' || e==='i' || e==='o' || e==='u'){
            count++;
        }
    }); */
for(let char of str){
    /* if(char==='a' || char==='e' || char==='i' || char==='o' || char==='u'){
        count++;
    } */
    if(vowel.includes(char)){
        count++;
    }
}
    return count;
}
console.log(countVowel("Helloo world"));
console.log(countVowel("ThE quIck brown fox"));
console.log(countVowel("Brrrp"));


