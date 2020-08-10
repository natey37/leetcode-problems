/*
561. Array Partition I

Given an array of 2n integers, your task is to group these integers into n pairs of integer, say (a1, b1), (a2, b2), ..., (an, bn) which makes sum of min(ai, bi) for all i from 1 to n as large as possible.

Example 1:
Input: [1,4,3,2]

Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
*/

/*
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let sorted = nums.sort((a,b) => a - b > 0 ? 1 : -1)
    let sum = 0
    let n = Math.floor(nums.length / 2)
    for(let i=0; i<sorted.length; i+=2){
        let min = Math.min(sorted[i], sorted[i+1])
        sum += min 
    }
    return sum
};