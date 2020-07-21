/*
4. Median of Two Sorted Arrays

There are two sorted arrays nums1 and nums2 of size m and n respectively.

Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

You may assume nums1 and nums2 cannot be both empty.

Example 1:

nums1 = [1, 3]
nums2 = [2]

The median is 2.0
Example 2:

nums1 = [1, 2]
nums2 = [3, 4]

The median is (2 + 3)/2 = 2.5
*/

/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    
    let mergedArr = nums1.concat(nums2)
    let sortedArr = mergedArr.sort((a,b) => a - b > 0 ? 1:-1)
    let halfway = sortedArr.length / 2
    
    let median = 0
    if(Number.isInteger(halfway) === true){
         median = (sortedArr[halfway] + sortedArr[halfway - 1]) / 2
    }else{
        median = sortedArr[ Math.floor(halfway) ];
    }
 
     return median
   
};