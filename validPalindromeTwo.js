/*
680. Valid Palindrome II

Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True

Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.
*/

/*
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (string,left,right) =>{
    while(left<right){
        if(string[left] !== string[right]){
            return false
        }
        left++
        right--
    }
    return true
}
var validPalindrome = function(s) {
    let left = 0
    let right = s.length -1
    while(left<right){
        if(s[left] !== s[right]){
            if(isPalindrome(s,left,right-1) || isPalindrome(s,left+1,right)){
                return true
            } else {
                return false
            }
        }
        left++
        right--
    }
    return true
};