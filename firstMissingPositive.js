/*
41. First Missing Positive

Given an unsorted integer array, find the smallest missing positive integer.

Example 1:

Input: [1,2,0]
Output: 3

Example 2:

Input: [3,4,-1,1]
Output: 2

Example 3:

Input: [7,8,9,11,12]
Output: 1
*/

/*
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    if(!nums.length) return 1
    if(nums.length === 1 && nums[0] === 1) return 2
    let result 
    for(let i=1; i<=nums.length + 1;i++){
        if(!nums.includes(i)){
            result = i 
            break
        }
    }
    return result 
};