/*
66. Plus One
Given a non-empty array of digits representing a non-negative integer, increment one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

 

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Example 3:

Input: digits = [0]
Output: [1]

*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    //     let countNines = 0
    //     for(let i=digits.length-1;i>=0;i--){
    //         if(digits[i] === 9) countNines += 1 
    //         else break;
    //     }
    //     if(countNines === 0){
    //         digits[digits.length-1] = digits[digits.length-1] + 1
    //     } else {
    //         if(digits[0] === 9){
    //             let i = digits.length-1
    //             while(countNines){
    //                 digits[i] = 0
    //                 countNines -= 1
    //                 i--
    //             }
    //             digits.unshift(1)
    //         } else {
    //             let i = digits.length-1
    //             while(countNines){
    //                 digits[i] = 0
    //                 countNines -= 1
    //                 i--
    //             }
    //             digits[i] = digits[i] + 1
    //         }
            
    //     }
    //     return digits

    //refactor...go through the digits array backwards, if its not a 9 simply add one and return the digits, if it is a 9 just make it a 0, and then at the end push 1 to the front of our digits
        for(let i=digits.length-1;i>=0;i--){
            if(digits[i] !== 9){
                digits[i] = digits[i] + 1
                return digits
            } else {
                digits[i] = 0 
            }
        }
        digits.unshift(1)
        return digits
};