/*
81. Search in Rotated Sorted Array II

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).

You are given a target value to search. If found in the array return true, otherwise return false.

Example 1:

Input: nums = [2,5,6,0,0,1,2], target = 0
Output: true
Example 2:

Input: nums = [2,5,6,0,0,1,2], target = 3
Output: false
*/

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1 
    
    while(left <= right){
        let mid = Math.floor((right + left) / 2)
        
        if(nums[mid] === target) return true 
        if(nums[mid] === nums[left]) left++
        else if(nums[left] < nums[mid]){
            if(nums[left] <= target && target < nums[mid]) right = mid - 1
            else left = mid + 1 
        } else {
            if(nums[mid] < target && target <= nums[right]) left = mid + 1 
            else right = mid - 1
        }
    }
    return false
    
};