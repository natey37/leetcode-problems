/*
7. Reverse Integer

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321

Example 2:

Input: -123
Output: -321

Example 3:

Input: 120
Output: 21
*/

/*
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num = parseInt(x.toString().split('').reverse().join(''))
    if (num < -(2 ** 31) || num > 2 ** 31 - 1) {
        return 0;
    }
    return x>0? num : num*-1
};