/*
1. Two Sum

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

//two pass hash

var twoSum = function(nums, target) {
    let hash = {}
    for(let i=0; i<nums.length; i++){
        hash[nums[i]] = i
    }
    for(let i=0; i<nums.length; i++){
        let complement = target - nums[i]
        if(hash[complement] && hash[complement] != i){
            return [i, hash[complement]]
        }
    }
};

 //one pass hash


 var twoSum = function(nums, target) {

 let hash = {}

 for(let i=0; i<nums.length;i++){
     let complement = target - nums[i]
     console.log(hash[complement])
     if(hash[complement] === 0 || hash[complement]){
         console.log("here")
         return [hash[complement], i]
     }
     hash[nums[i]] = i
 }

};
