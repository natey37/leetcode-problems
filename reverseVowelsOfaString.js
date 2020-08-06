/*
345. Reverse Vowels of a String

Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:

Input: "hello"
Output: "holle"
Example 2:

Input: "leetcode"
Output: "leotcede"
*/

/*
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let letters = s.split('')
    let vowels = ['a', 'e', 'i', 'o','u', 'A', 'E', 'I', 'O', 'U']
    let front = 0
    let back = letters.length - 1 
    while(front < back){
        if(!vowels.includes(letters[front])){
            front++
        }
         if(!vowels.includes(letters[back])){
            back--
        }
        if(vowels.includes(letters[front]) && vowels.includes(letters[back])){
            let temp = letters[front] 
            letters[front] = letters[back]
            letters[back] = temp 
            front++
            back--
        } 
    }
    return letters.join('')
};