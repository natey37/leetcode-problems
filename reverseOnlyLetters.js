/*
917. Reverse Only Letters
Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

 

Example 1:

Input: "ab-cd"
Output: "dc-ba"
Example 2:

Input: "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
Example 3:

Input: "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
*/

/*
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    let split = S.split('')
    let front = 0 
    let back = split.length - 1
    while(front < back){
        if(isALetter(split[front]) && isALetter(split[back])){
            let temp = split[front]
            split[front] = split[back]
            split[back] = temp 
            front++
            back--
        } else if(isALetter(split[front]) && !isALetter(split[back])){
            back--
        } else if(isALetter(split[back]) && !isALetter(split[front])){
            front++
        } else {
            front++
            back--
        }
    }
    return split.join('')
    
    function isALetter(char){
        return (/[a-zA-Z]/).test(char)
    }
};