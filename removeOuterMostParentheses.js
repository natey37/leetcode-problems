/*
1021. Remove Outermost Parentheses
A valid parentheses string is either empty (""), "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.  For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.

A valid parentheses string S is primitive if it is nonempty, and there does not exist a way to split it into S = A+B, with A and B nonempty valid parentheses strings.

Given a valid parentheses string S, consider its primitive decomposition: S = P_1 + P_2 + ... + P_k, where P_i are primitive valid parentheses strings.

Return S after removing the outermost parentheses of every primitive string in the primitive decomposition of S.

 

Example 1:

Input: "(()())(())"
Output: "()()()"
Explanation: 
The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
After removing outer parentheses of each part, this is "()()" + "()" = "()()()".
Example 2:

Input: "(()())(())(()(()))"
Output: "()()()()(())"
Explanation: 
The input string is "(()())(())(()(()))", with primitive decomposition "(()())" + "(())" + "(()(()))".
After removing outer parentheses of each part, this is "()()" + "()" + "()(())" = "()()()()(())".
Example 3:

Input: "()()"
Output: ""
Explanation: 
The input string is "()()", with primitive decomposition "()" + "()".
After removing outer parentheses of each part, this is "" + "" = "".
*/


/*
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let split = S.split('')
    let left = 0 
    let right = 0 
    let decomp = []
    let moved = 0
    for(let i=0;i<=split.length;i++){
        if(left !== 0 && right !== 0 && right === left){
            moved = decomp[decomp.length - 1] ? moved += decomp[decomp.length -1].length : 0
            let substring = split.slice(i - (right + left) - (split.length - moved), right + left)
            decomp.push(substring)
        }
        if(split[i] === "(") left++
        if(split[i] === ")") right++
    }
    
    for(let j=0; j<decomp.length;j++){
        decomp[j][0] = undefined
        decomp[j][decomp[j].length - 1] = undefined
    }
    let flattened = decomp.flat()
    let filtered = flattened.filter(el => el !== undefined)
    return filtered.join('')
};