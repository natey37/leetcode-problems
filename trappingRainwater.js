/*
42. Trapping Rain Water
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.


The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

Example:

Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
*/




/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {

    //brute force solution, time complexity O(n^2) -> we iterate through each element and then for each element we iterate over each element to the left and right of it, space complexity O(1)
    if(!height.length) return 0
    let waterCount = 0
    
    for(let i=0;i<height.length;i++){
        let leftPeak = 0
        let rightPeak = 0
        
        for(let l=0;l<i;l++){
            leftPeak = Math.max(leftPeak, height[l])
        }
        
        for(let r=i+1;r<height.length;r++){
            rightPeak = Math.max(rightPeak, height[r])
        }
        
        let water = Math.min(leftPeak, rightPeak) - height[i]
        if(water > 0) waterCount += water
    }
    return waterCount
    
};

var trap = function(height) {
    //dp solution, time complexity O(n) -> we create hash lookups for each index, one for the left peaks and one for right peaks, then we iterate through each element in height, space complexity O(n)
    if(!height.length) return 0
    
    let waterCount = 0 
    let leftPeaks = {}
    let rightPeaks = {}
    
    leftPeaks[0] = height[0]
    for(let i=1;i<height.length;i++){
        leftPeaks[i] = Math.max(height[i], leftPeaks[i-1])
    }
    
    rightPeaks[height.length-1] = height[height.length-1]
    for(let j=height.length-2;j>=0;j--){
        rightPeaks[j] = Math.max(height[j], rightPeaks[j+1])
    }
    
    for(let i=0;i<height.length;i++){
        waterCount += (Math.min(leftPeaks[i], rightPeaks[i]) - height[i])
    }
    return waterCount
};


var trap = function(height) {
    //Using a stack, time comlexity O(n) -> we iterate through the whole height array, each element to the stack, space complexity O(n) -> we store each element in our stack array
    let waterCount = 0 
    let i = 0 
    let stack = []
    
    while(i<height.length){
        while(stack.length !== 0 && height[i] > height[stack[stack.length-1]]){
            let top = stack.pop()
           
            if(!stack.length) break;

            let dist = i - stack[stack.length-1] - 1
            let h = Math.min(height[i], height[stack[stack.length-1]]) - height[top]
            waterCount += dist * h
            
        }
        stack.push(i)
        i++
    }
    return waterCount
};