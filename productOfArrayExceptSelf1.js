/*
238. Product of Array Except Self

Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)
*/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
     
    let numbers = []
    let product = 1
    //move forward through the array and get the product for each additional step forward 
    //[1,2,3,4] -> [1,2,6,24]
    for(let i=0;i<nums.length;i++){
        let curr = nums[i]
        if(i === 0) numbers[i] = nums[i]
        else numbers[i] = numbers[i-1] * nums[i]
    }
    //then move backwards multiplying the previous index by the product total
    //[1,2,6,24] -> [24,12,8,6]
    for(let j=nums.length - 1;j>=0;j--){
        if(j === 0){
           break;
        }
        numbers[j] = numbers[j-1] * product
        product *= nums[j]
    }
    
    numbers[0] = product
    return numbers
};