/*
628. Maximum Product of Three Numbers

Given an integer array, find three numbers whose product is maximum and output the maximum product.

Example 1:

Input: [1,2,3]
Output: 6
 

Example 2:

Input: [1,2,3,4]
Output: 24
*/


/*
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    let newNums = nums.sort((a,b) => a - b > 0 ? 1 : -1)
    console.log(newNums)
    return Math.max(nums[0] * nums[1] * nums[nums.length-1], nums[nums.length-1] * nums[nums.length-2] * nums[nums.length-3])
};