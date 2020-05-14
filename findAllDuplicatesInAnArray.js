/*
442. Find All Duplicates in an Array

Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
*/

/*
 * @param {number[]} nums
 * @return {number[]}
 */
//not optimal...
var findDuplicates = function(nums) {
    let stack = []
    let result = []
    let sorted = nums.sort((a,b) => a-b)
    for(let i=0; i<nums.length; i++){
        if(!stack.length){
            stack.push(nums[i])
        } else if(stack[stack.length - 1] < nums[i]){
            stack.push(nums[i])
        } else {
            result.push(nums[i])
        }
    }
    return result
};

//optimal
/*
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let dups = []

    for(let i=0; i<nums.length; i++){
        let index = Math.abs(nums[i]) - 1
        if(nums[index] > 0){
            nums[index] = -nums[index]
        } else {
            dups.push(Math.abs(nums[i]))
        }
    }
    return dups 
};