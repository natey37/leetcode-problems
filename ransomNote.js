/*
383. Ransom Note

Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
*/

/*
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let map = new Map()
    for(let i=0; i<magazine.length; i++){
        if (map[magazine[i]]){
            map[magazine[i]]++ 
        } else {
            map[magazine[i]] = 1
        }
    }
    for(let i=0; i<ransomNote.length; i++){
        console.log(ransomNote[i])
        map[ransomNote[i]] = (map[ransomNote[i]] || 0) - 1
        if(map[ransomNote[i]] < 0){
            return false 
        }
    }
    return true 
 
    

};