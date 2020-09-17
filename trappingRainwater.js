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

    //two pointers, time complexity O(n), space complexity O(1)
    if(!height.length) return 0
    
    let waterCount = 0 
    
    let left = 0
    let right = height.length - 1
    
    let leftMax = 0
    let rightMax = 0
    
    while(left < right){
        leftMax = Math.max(leftMax, height[left])
        if(height[left] < leftMax){
            waterCount += (leftMax - height[left])
        }
        
        rightMax = Math.max(rightMax, height[right])
        if(height[right] < rightMax){
            waterCount += rightMax - height[right]
        }
        
        height[left] < height[right] ? left++ : right--
    }
    return waterCount
    

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
//                  0 1 2 3 4 5 6 7 8 9 10 11
//Example: Input - [0,1,0,2,1,0,1,3,2,1,2,1]

//trap([0,1,0,2,1,0,1,3,2,1,2,1])
    //waterCount = 0 
    //i = 0
    //stack = []

    //while(0<12)
        //while(stack.length !== 0) -> false 

    //stack.push(i) -> stack = [0]
    //i++ -> i = 1 

    
    //while(1<12) 
        //while(stack.length !== 0 && 1 > 0) -> true
            //top = 0

            //if(!stack.length) -> true -> break

    //stack.push(i) -> stack = [1]
    //i++ -> i = 2

    
    //while(2<12)
        //while(stack.length !== 0 && 0 > 1) -> false 

    //stack.push(i) -> stack = [1,2]
    //i++ -> i = 3

    
    //while(3 < 12)
        //while(stack.length !== 0 && 2 > 0)
            //top = 2

            //if(!stack.length) -> false

            //d = 3 - 1 - 1 = 1
            //h = Math.min(2,1) - 0 = 1
            //waterCount += 1 * 1

        //while(stack.length !== 0 && 2 > 1)
            //top = 1 

            //if(!stack.length) -> true -> break;

    //stack.push(3) -> stack = [3]
    //i++ -> i = 4 

//waterCount = 1 
//i = 4 
//stack = [3]

    //while(4<12)
        //while(stack.length !== 0 && 1 > 2) -> false 

    //stack.push(4) -> stack = [3,4]
    //i++ -> i = 5 


    //while(5<12)
        //while(stack.length !== 0 && 0 > 1) -> false 

    //stack.push(5) -> stack = [3,4,5]
    //i++ -> i = 6


    //while(6<12)
        //while(stack.length !==0 && 1 > 0)
            //top = 5 

            //if(!stack.length) -> false

            //dist = 6 - 4 - 1 = 1
            //h = Math.min(1, 1) - 0 = 1
            //waterCount += 1 * 1 -> waterCount = 2

        //while(stack.length !== 0 && 1 > 1) -> false 

    //stack.push(6) -> stack = [3,4,6]
    //i++ -> = 7

//waterCount = 2
//i = 7 
//stack = [3,4,6]

    //while(7<12)
        //while(stack.length !== 0 && 3 > 1) -> true 
            //top = 6

            //if(!stack.length) -> false

            //dist = 7 - 4 - 1 = 2
            //h = Math.min(3, 1) - 1 = 0 
            //waterCount += 2 * 0 -> waterCount = 2

        //while(stack.length !== 0 && 3 > 1) -> true 
            //top = 4

            //if(!stack.length) -> false 

            //dis = 7 - 3 - 1 = 3
            //h = Math.min(3,2) - 1 = 1
            //waterCount += 3 * 1 -> waterCount = 5

        //while(stack.length !== 0 && 3 > 2)
            //top = 3 

            //if(!stack.length) -> true -> break 
    
    //stack.push(7) -> stack = [7]
    //i++ -> i = 8

//waterCount = 5
//i = 8 
//stack = [7]

    //while(8<12)
        //while(!stack.length !== 0 && 2 > 3) -> false 
        
    //stack.push(8) -> stack = [7,8]
    //i++ -> i = 9


    //while(9<12)
        //while(!stack.length !== 0 && 1 > 2) -> false 

    //stack.push(9) -> stack = [7,8,9]
    //i++ -> i = 10

    
    //while(10<12)
        //while(!stack.length !== 0 && 2 > 1) 
            //top = 9

            //dist = 10 - 8 - 1 = 1
            //h = Math.min(2, 2) - 1 = 1
            //waterCount += 1 * 1 = 6

        //while(!stack.length !==0 && 2 > 2) -> false 
    
    //stack.push(10)
    //i++ -> i = 11


    //while(11<12)
        //while(!stack.length !== 0 && 0 > 2) -> false 

    //stack.push(11)
    //i++ -> i = 12 

    //end of while loop

//return waterCount -> 6
