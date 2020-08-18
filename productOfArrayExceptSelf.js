/*
238. Product of Array Except Self

Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).
*/


/*
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let backProd = 1
     const result = nums.reduce((acc, cur, i) => {
        if(i === 0) acc[i] = cur;
        else acc[i] = acc[acc.length-1] * cur;
        return acc;
    }, [])
    for(let i = result.length-1; i >= 0; i--) {
        if(i === 0) result[i] =  backProd;
        else result[i] = result[i-1] * backProd;
        backProd *= nums[i];
    }
    return result

};