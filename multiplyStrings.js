/*
43. Multiply Strings

Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"
Note:

The length of both num1 and num2 is < 110.
Both num1 and num2 contain only digits 0-9.
Both num1 and num2 do not contain any leading zero, except the number 0 itself.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

/*
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === '0' || num2 === '0') return '0'
    
    let m = num1.length
    let n = num2.length
    let result = new Array(m+n).fill(0)
    
    for (let i=m-1; i>=0; i--) {
        for (let j=n-1; j>=0; j--) {
            let p1 = i + j
            let p2 = i + j + 1
            let sum = result[p2] + Number(num1[i]) * Number(num2[j])
            result[p2] = sum%10
            result[p1] += Math.floor(sum/10)
        }
    }
    
    if (result[0] === 0) result.shift()
    return result.join('')
};