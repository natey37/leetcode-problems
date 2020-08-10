/*
5. Longest Palindromic Substring

Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
*/

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    function isPal(i, j)
    {
        while(i < j){
            if(s[i] != s[j])
                return false;
            i++;
            j--;
        }
        return true;
    }
    let n = s.length;
    for(let k = 0; k < n;k++)
    {
        let j = n - 1 - k;
        let i = 0;
        while(j < n)
        {
            if(isPal(i,j))
                return s.substring(i, j + 1);
            i++;
            j++;
        }
    }
    return s;
 
}