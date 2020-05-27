/*
213. House Robber II

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2),
             because they are adjacent houses.
Example 2:

Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
*/

/*
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 1) return nums[0]
    //since you cannot take money from both the first and last elements, 
    //check both results excluding the other
    
    function moneys(array, start, length){
        let curr = 0
        let prev = 0
        for(let i=start; i<length; i++){
            let temp = curr
            if(i === array.length - 1 && nums[i]){

            }
            curr = Math.max(prev + nums[i], curr)
            prev = temp 
        }
        
        return curr
    }
    
    
    return Math.max(moneys(nums, 0, nums.length - 1), moneys(nums, 1, nums.length))
};