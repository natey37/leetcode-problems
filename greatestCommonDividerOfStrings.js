/*
1071. Greatest Common Divisor of Strings

For strings S and T, we say "T divides S" if and only if S = T + ... + T  (T concatenated with itself 1 or more times)

Return the largest string X such that X divides str1 and X divides str2.

 

Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
*/

/*
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if(str1 === str2) return str1
    let short = str1.length > str2.length ? str2 : str1 
    let long = str1.length > str2.length ? str1 : str2
    let result = ''
    for(let i=0;i<short.length;i++){
        let subString = short.split("").splice(0, i + 1).join("")
        let repeatLong = long.length / subString.length
        let repeatShort = short.length / subString.length
        if(subString.repeat(repeatLong) == long && subString.repeat(repeatShort) == short){
            result = subString 
        }
    }
    return result
};