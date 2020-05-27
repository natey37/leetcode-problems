/*
34. Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
*/

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    while(left <= right) {
        let mid = Math.floor((left + right) / 2)
        if(nums[mid] === target) {
            return helperFunction (mid, nums)
        } else if (nums[mid] < target) {
            left = mid + 1 
        } else {
            right = mid - 1
        }
    }
    return [-1, -1]
};
function helperFunction(mid, nums) {
    let left = mid - 1
    let right = mid + 1
    let results = [mid,mid]
    while(left + 1 || right + 1) {
        if(left + 1 && nums[left] === nums[mid]) {
            results[0] = left
            left --
        } else {
            left = -1
        }
        if (right + 1 && nums[right] === nums[mid]) {
            results[1] = right
            right++
        } else {
            right = -1
        }
    }
    return results
}