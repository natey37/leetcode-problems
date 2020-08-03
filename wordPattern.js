/* 
290. Word Pattern

Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Example 1:

Input: pattern = "abba", str = "dog cat cat dog"
Output: true
Example 2:

Input:pattern = "abba", str = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false
Example 4:

Input: pattern = "abba", str = "dog dog dog dog"
Output: false
*/

/*
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    let map = new Map()
    let usedWords = []
    let words = str.split(" ") 
    
    if(words.length != pattern.length) return false 
     
    for(let i=0;i<pattern.length;i++){
        let char = pattern[i]
        let word = words[i]
        if(!map.has(char)) {
            if(usedWords.includes(word)) return false 
            else {
                map.set(char, word)
                usedWords.push(word)
            }
        } else {
            if(map.get(char) !== word) return false 
        }
    }
   
    return true
};

