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
    let magazineHash = {}
    for(const letter of magazine){
    magazineHash[letter] = magazineHash[letter] ? magazineHash[letter]+=1 : magazineHash[letter]=1
     }
    for(let i=0; i<ransomNote.length;i++){
        if(!magazineHash[ransomNote[i]] || magazineHash[ransomNote[i]] === 0)                       
            return false
        else {
            magazineHash[ransomNote[i]]--
        }
    }
    return true 
};