/*
438. Find All Anagrams in a String

Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
*/

/*
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {  
    let freqHash = {}
    let result = []
    let count = 0
    let end = 0
    let start = 0
 
    for(let i=0;i<p.length;i++){
          if(freqHash[p[i]] === undefined) count ++ 
          freqHash[p[i]] = (freqHash[p[i]] || 0) + 1 
     }
 
     
      while (end < s.length){
          if(freqHash[s[end]] !== undefined){
              freqHash[s[end]]--
              if(freqHash[s[end]] === 0) count--
          } 

                  
       end++
        
       while(count === 0){
       // let temp = s[start]
       if(freqHash[s[start]] !== undefined){
         freqHash[s[start]]++
         if(freqHash[s[start]] > 0) count++
       }

       if(end - start === p.length) result.push(start)
       start++
     }
 }
 return result

};

