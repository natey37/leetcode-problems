/*
33. Search in Rotated Sorted Array

Given an integer array nums sorted in ascending order, and an integer target.

Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You should search for target in nums and if you found return its index, otherwise return -1.

 

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1
*/

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let front = 0 
    let back = nums.length - 1
    
    while(front < back){
        let mid = Math.floor((front+back)/2)
        if(nums[mid] === target) return mid
        
        if(nums[mid] > nums[front]){
            if(target >= nums[front] && target < nums[mid]) back = mid - 1
            else front = mid + 1
        } else if(nums[mid] < nums[back]){
            if(target>nums[mid] && target<=nums[back]) front = mid + 1
            else back = mid - 1
        }
        else break;
    }
    return nums[back] === target ? back : -1 
};

