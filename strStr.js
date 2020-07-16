/*
28. Implement strStr()

Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
*/

/*
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(haystack === "" && needle === "") return 0
    for(let i=0;i<haystack.length;i++){
        let subString = haystack.slice(i, i + needle.length)
        if(subString.includes(needle)){
            return i
        }
    }
    return -1
};