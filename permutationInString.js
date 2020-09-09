/*
567. Permutation in String

Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

 

Example 1:

Input: s1 = "ab" s2 = "eidbaooo"
Output: True
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input:s1= "ab" s2 = "eidboaoo"
Output: False
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    //TLE 

    // let sort = s1.split('').sort().join('')
    // let substrings = []
    // for(let i=0;i<s2.length;i++){
    //     substrings.push(s2.slice(i, i + s1.length))
    // }
    // let sorted = substrings.map((string) => string.split('').sort().join(''))
    //  console.log(substrings)
    // console.log(sorted)
    // if(sorted.includes(sort)) return true 
    // else return false 

    //Refactor
    
    if(s1.length > s2.length || s2 === null || s2.length === 0) return false 
    
    let s1Arr = new Array(26).fill(0)
    let s2Arr = new Array(26).fill(0)
    
    for(let i=0;i<s1.length;i++){
        s1Arr[s1.charCodeAt(i) - 97]++
        s2Arr[s2.charCodeAt(i) - 97]++
    }
   
    for(let i=0;i<s2.length;i++){
        if(checkPermutation(s1Arr, s2Arr)) return true 
        s2Arr[s2.charCodeAt(i) - 97]--
        s2Arr[s2.charCodeAt(i + s1.length) - 97]++  
    }
    return false
};


function checkPermutation(s1Arr, s2Arr) {
    for (let i = 0; i < s1Arr.length; i++) {
        if (s1Arr[i] !== s2Arr[i]) return false;
    }
    return true;
}

