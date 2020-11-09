/* 
Jump Game 

Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:

Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:

Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
*/

var canJump = function(nums) {
    //at the beginning the distance we can jump is the first number in the array
    let dist = nums[0]
    //now we loop through the numbers in the array
    for(let i=0; i<nums.length;i++){
        //if the distance is less than 0 then it means we cannot reach the end of the nums array and we should return false
        if(dist < 0) return false 
        //every number in the array, we will check and see if its value is greater than or equal to the current distance. If it is then we want to want to update the distance to equal this number because it allows us to continue jumping longer 
        if(nums[i] >= dist){
            dist = nums[i]
        }
        //here is where we decrease 1 from distance for every loop because this represents moving one step to the next number 
        dist--
    }
    //if we exit our for loop before returning false we have jumped to the end of the array and return true
    return true
};

/*
Input: [2,3,1,1,4]

canJump([2,3,1,1,4])
    dist = 2 
    for(let i=0;i<5;i++)
        if(2 < 0) -> false 
        if(2 >= 2)
            dist = 2
    dist - 1 -> dist = 1

    for(let i=1;i<5;i++)
        if(3 < 0) -> false 
        if(3 >= 1)
            dist = 3
    dist - 1 -> dist = 2

    for(let i=2;i<5;i++)
        if(1 < 0) -> false 
        if(1 >= 2) -> false
    dist - 1 -> dist = 1
    
    for(let i=3;i<5;i++)
        if(1 < 0) -> false 
        if(1 >= 1)
            dist = 1
    dist - 1 -> dist = 0

    for(let i=4;i<5;i++)
        if(0 < 0) -> false 
        if(4 >= 0)
            dist = 4
    dist - 1 -> dist = 3

    return true


Input: [3,2,1,0,4]
    dist = 3
    for(let i=0;i<5;i++)
        if(3 < 0) -> false 
        if(3 >= 3)
            dist = 3
    dist - 1 -> dist = 2

    for(let i=1;i<5;i++)
        if(2 < 0) -> false 
        if(2 >= 2)
            dist = 2
    dist - 1 -> dist = 1

    for(let i=2;i<5;i++)
        if(1 < 0) -> false 
        if(1 >= 1)
            dist = 1
    dist - 1 -> dist = 0

    for(let i=3;i<5;i++)
        if(0 < 0) -> false 
        if(0 >= 0)
            dist = 0
    dist - 1 -> dist = -1

    for(let i=4;i<5;i++)
        if(-1 < 0) return false 
        
*/