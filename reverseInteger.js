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

var reverse = function(x) {
    let negative = x < 0 ? true : false 
    let num = Math.abs(x).toString().split('')
    let front = 0
    let back = num.length - 1
    while(front < back){
        let temp = num[front]
        num[front] = num[back]
        num[back] = temp 
        front++
        back--
    }
    for(const number in num){
        console.log(typeof number)
        console.log(num[number])
        if(num[number] === "0") num[number] = undefined
        if(num[number] !== "0") break;
    }
    let filtered = num.filter(num => num !== undefined)
    if(parseInt(filtered.join('')) > 2147483647) return 0

    return negative ? `-${filtered.join('')}` : filtered.join('')
};