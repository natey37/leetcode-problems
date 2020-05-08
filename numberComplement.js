/*
476. Number Complement

Given a positive integer num, output its complement number. The complement strategy is to flip the bits of its binary representation.

Example 1:

Input: num = 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.

Example 2:

Input: num = 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
*/

/*
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let binary = num.toString(2)
    let string = ''
    for(let i=0; i<binary.length; i++){
        if(binary[i] == 1){
            string+="0"
        } else {
            string+="1" 
        }
    }
    
    return parseInt(string, 2)
};