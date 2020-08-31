/*

1. Two Sum

Given an array of integers nums and and integer target, return the indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1]
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
*/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //brute force
    
    // let result = []
    // for(let i=0;i<nums.length;i++){
    //     for(let j=1;j<nums.length;j++){
    //         if(nums[i] + nums[j] === target){
    //                return ([i, j])
    //             }
    //     }
    // }
    //two pass hash
    
    // let hash = {}
    // for(let i=0; i<nums.length; i++){
    //     hash[nums[i]] = i
    // }
    // for(let i=0; i<nums.length; i++){
    //     let complement = target - nums[i]
    //     if(hash[complement] && hash[complement] != i){
    //         return [i, hash[complement]]
    //     }
    // }
    
    //one pass hash 
    
//     let hash = {}
    
//     for(let i=0; i<nums.length;i++){
//         let complement = target - nums[i]
//         if(hash[complement] === 0 || hash[complement]){
//             return [hash[complement], i]
//         }
//         hash[nums[i]] = i
//     }

    // two pointers 

    //sort array
    let sorted = [...nums].sort((a,b) => a - b > 0 ? 1 : -1)
    //initialize two pointers for the front and back 
    let i = 0
    let j = nums.length - 1 
    //continue until you meed in the middle of the array
    while(i < j){
        let sum = sorted[i] + sorted[j]
        //if the sum equals the target and if both the numbers are the same, we dont want to return the same index for both
        if(sorted[i] === sorted[j] && sum === target) return [nums.indexOf(sorted[i]), nums.indexOf(sorted[j], nums.indexOf(sorted[i]) + 1)]
        //if sum equals target return the indices of the numbers from the original array
        if(sum === target) return [nums.indexOf(sorted[i]), nums.indexOf(sorted[j])]
        //if the sum is greater than our target than we know we need to look for smaller numbers so we decrease j and move left in our array
        if(sum > target) j--
        //if the sum is less than our target than we know we need to look for larger numbers so we increase i and move right in our array
        if(sum < target) i++
    }
};