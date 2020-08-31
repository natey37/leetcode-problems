/*
18. 4Sum

Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:

The solution set must not contain duplicate quadruplets.

Example:

Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
*/


/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let results = []
    let sorted = nums.sort((a,b) => a - b > 0 ? 1 : -1)
    
    //anchor i 
    for(let i=0;i<sorted.length-3;i++){
        //anchor j
        for(let j=i+1;j<sorted.length-2;j++){

            //front represents the middle element between j and back
            let front = j + 1
            //back represents our right most element
            let back = sorted.length - 1
            
            while(front < back){
                let sum = sorted[i] + sorted[j] + sorted[front] + sorted[back]
                
                //if we find our target, add the result to the results array
                if(sum === target){
                    results.push([sorted[i], sorted[j], sorted[front], sorted[back]])
                    
                    //we do not want duplicate numbers, so if the number is the same, increment or decrement
                    while(sorted[front] === sorted[front+1]) front++
                    while(sorted[back] === sorted[back-1]) back --
                    
                    //we still need to loop through the rest of the numbers to see if there are more quadruplets with the anchors i, j
                    front++
                    back--
                    //if the sum is less than our target we know we need a larger number so move right in the array 
                } else if(sum < target){
                    front++
                    //if the sum is greater than our target we know we need a smaller number so we move left in the array
                } else {
                    back --
                }
                
            }
            //no duplicate sets, so if the number is the same we have already found that set 
            while(sorted[j] === sorted[j+1]) j++
        }
        //again no duplicate sets, so if the number is the same we have already found that set 
        while(sorted[i] === sorted[i+1]) i++
    }
    return results
};