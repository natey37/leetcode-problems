/*
824. Goat Latin
A sentence S is given, composed of words separated by spaces. Each word consists of lowercase and uppercase letters only.

We would like to convert the sentence to "Goat Latin" (a made-up language similar to Pig Latin.)

The rules of Goat Latin are as follows:

If a word begins with a vowel (a, e, i, o, or u), append "ma" to the end of the word.
For example, the word 'apple' becomes 'applema'.
 
If a word begins with a consonant (i.e. not a vowel), remove the first letter and append it to the end, then add "ma".
For example, the word "goat" becomes "oatgma".
 
Add one letter 'a' to the end of each word per its word index in the sentence, starting with 1.
For example, the first word gets "a" added to the end, the second word gets "aa" added to the end and so on.
Return the final sentence representing the conversion from S to Goat Latin. 

 

Example 1:

Input: "I speak Goat Latin"
Output: "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"
Example 2:

Input: "The quick brown fox jumped over the lazy dog"
Output: "heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"
 
*/

/*
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    let split = S.split(' ')
    let vowels = ['a','e','i','o','u']
    let newString = ''
    let count = 1
    
    for(let i=0;i<split.length;i++){
        let newWord = ""
        let word = split[i]
        if(vowels.includes(word[0].toLowerCase())){
           newWord = word + "ma"
           newWord = addA(count, newWord)
            
        } else {
            let frontLetter = word[0]

            for(let j=1;j<word.length; j++){
                newWord += word[j]
            }

            newWord += frontLetter
            newWord += "ma"
            newWord = addA(count, newWord)

        }
        if(i === split.length - 1) newString += newWord
        else newString += newWord + " "
        count++
    }
    return newString
};

const addA = (n, word) => {
    for(let i=0;i<n;i++){
        word += "a"
    }
    return word
}