let palindrome = (phrase) => {
    if(typeof phrase === 'string'){
        let reversePhrase = phrase.split("").reverse().join("");
        let comparedPhrase = phrase.localeCompare(reversePhrase);
        if (comparedPhrase === 0){
            console.log('The Phrase ' + phrase + ' is a palindrome')
        }else{
            console.log('The phrase ' + phrase + ' is not a palindrome');
        }
    }
    if(typeof phrase === 'number'){
        let reversePhrase = phrase.toString()
        .split('')
        .reverse()
        .join('');
         let remain = parseInt(reversePhrase) - phrase;
         if(remain === 0 && Math.sign(remain) === 0 && Number.isInteger(phrase)){
             console.log('The number ' + phrase + ' is a palindrome');
         }else{
             console.log('The number ' + phrase + ' is not a palindrome');
         }
    }
}
palindrome(); //pass in a number or a word
module.exports = palindrome;