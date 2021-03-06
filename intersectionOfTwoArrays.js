/*
349. Intersection of Two Arrays

Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
*/

/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set2 = new Set(nums2)
    let result = []
    for(let i=0; i<nums1.length;i++){
        if(set2.has(nums1[i]) && !result.includes(nums1[i])) result.push(nums1[i])
    }
   
    return result
};