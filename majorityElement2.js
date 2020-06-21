/*
229. Majority Element II

Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Note: The algorithm should run in linear time and in O(1) space.

Example 1:

Input: [3,2,3]
Output: [3]
Example 2:

Input: [1,1,1,3,3,2,2,2]
Output: [1,2]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let oneThird = nums.length / 3
    let hash = {}
    for(let i=0;i<nums.length;i++){
        if(!hash[nums[i]]){
            hash[nums[i]] = 1
        } else {
            hash[nums[i]] += 1
        }
    }
    let results = []
    for(const key in hash){
        console.log(key)
        if(hash[key] > oneThird){
            results.push(key)
        }
    }
    return results
};
