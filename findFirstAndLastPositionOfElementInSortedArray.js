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
    let low = 0 
    let high = nums.length - 1 
    
    while(low <= high){
        let mid = Math.floor((high + low) / 2)

        if(nums[mid] >= target) high = mid - 1
        else low = mid + 1
    }
    
    let start = low 
    if(nums[low] !== target) return [-1,-1]
    
    low = 0
    high = nums.length - 1 
    
    while(low <= high){
        let mid = Math.floor((high + low) / 2)

        if(nums[mid] <= target) low = mid + 1
        else high = mid - 1 
    }
    
    let end = high
    
    return [start, end]
};


