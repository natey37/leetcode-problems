/*
15. 3Sum
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Note:

The solution set must not contain duplicate triplets.

Example:

Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
*/


/*
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b) => a - b > 0 ? 1 : -1)
    let results = []
    for(let i=0;i<nums.length;i++){
        let left = i + 1 
        let right = nums.length - 1 
        while(left < right){
            let sum = nums[i] + nums[left] + nums[right]
            if(sum === 0){
                results.push([nums[i],nums[left],nums[right]])
            
            
                while(left < right && nums[left] === nums[left + 1]){
                    left++
                }
                left++ 

                while(left < right && nums[right] === nums[right - 1]){
                    right--
                }
                right--
            } else if(sum < 0){
                left++
            } else {
                right--
            }
        }
        
        while(i < nums.length && nums[i] === nums[i+1]){
            i++
        }
    }
    return results
};
