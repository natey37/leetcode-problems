/*
912. Sort an Array

Given an array of integers nums, sort the array in ascending order.

Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
Example 2:

Input: nums = [5,1,1,2,0,0]
Output: [0,0,1,1,2,5]
*/

/*
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = nums => {
    if(nums.length <= 1) return nums
    
    const middle = Math.floor(nums.length / 2)
    const left = nums.slice(0, middle)
    const right = nums.slice(middle)
    return merge(sortArray(left), sortArray(right))
};

const merge = (left, right) => {
    const result = []
    
    while (left.length && right.length) {
        if(left[0] <= right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
 
    return [...result, ...left, ...right]
}