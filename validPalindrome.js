/*
125. Valid Palindrome

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
*/

/*
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(!s) return true
    let newS = s.toLowerCase().match(/[\w]/g)
    if(!newS) return true 
    let left = 0 
    let right = newS.length - 1 
    
    while(left < right){
        if(newS[left] !== newS[right]){
            return false 
        }
        left++
        right--
    }
    return true 
};
