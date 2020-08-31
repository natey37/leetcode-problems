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
    let results = []
    //if we dont have three numbers we know there is no solution
    if(nums.length < 3) return results
    //we know our solution is going to be at least O(n^2) so we can afford to sort this in O(nlogn) and it makes our problem much easier
    let sorted = nums.sort((a,b) => a - b > 0 ? 1 : -1)
    //we can choose a custom target 
    let target = 0 
    for(let i=0;i<sorted.length-2;i++){
        //we will have one for loop that loops through every number, our i represents the left most number in our array, once our sorted[i] is greater than our target we know we cant find any more solutions
        if(sorted[i] > target) break;
        
        //we cannot use duplicate numbers so skip a number if its the same as the previous
        if(i > 0 && sorted[i] === sorted[i-1]) continue;
        
        //'front' represents the middle element between 'i' and 'back'
        let front = i+1
        //'back' represents the right most element
        let back = sorted.length - 1
        //we have 'i' which starts at the beginning our sorted array, 
        //we have 'back' which starts at the end of our sorted array 
        //we have 'front' which moves between 'i' and 'back'
        //i is controlled by our outer for loop and will move the slowest
        //for each 'i' we will have 'front' and 'back' move towards each other using our logic below
        while(front < back){
            //here we calculate the sum at each our positions, 'i','front','back'
            let sum = sorted[i] + sorted[front] + sorted[back]

            //if the sum equals the target, then we push the result into our results array
            if(sum === target){
                results.push([sorted[i], sorted[front], sorted[back]])

                //'i' is still our anchor and we need to check if there are other potential combos using sorted[i]
                //we will increment our 'front' and decrement our 'back'
                
                //we do not want to have duplicate solutions, so if the next number in the array is the same, either keep moving forward or backward until finding a new number
                //ex. [-2,0,0,2,2] would give us two of the same solution [[-2,0,2],[-2,0,2]] if we did not skip these repeats
                 while(sorted[front] === sorted[front+1]) front++
                 while(sorted[back] === sorted[back-1]) back--
                
                 //we need to move our 'front' forward and our 'back' backward, to check additional numbers
                front++
                back--
                
                //if the sum is less than the target than we know we need to add a larger number so we increment 'front'
            } else if(sum < target){
                front++

                //of the sum is greater than the targer than we know we need to add a smaller number so we decrement 'back'
            } else {
                back --
            }
        }
    }
    return results
};