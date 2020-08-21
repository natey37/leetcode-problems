/*
941. Valid Mountain Array
Given an array A of integers, return true if and only if it is a valid mountain array.

Recall that A is a mountain array if and only if:

A.length >= 3
There exists some i with 0 < i < A.length - 1 such that:
A[0] < A[1] < ... A[i-1] < A[i]
A[i] > A[i+1] > ... > A[A.length - 1]


 

Example 1:

Input: [2,1]
Output: false
Example 2:

Input: [3,5,5]
Output: false
Example 3:

Input: [0,3,2,1]
Output: true
 
*/


var validMountainArray = function(A) {
    //     if(A.length === 0 || A.length < 3) return false
    //     let isIncline = true
    //     let isDecline = true 
        
    //     let max = A.reduce(function(a, b) {
    //         return Math.max(a, b);
    //     });
        
    //     let index = A.indexOf(max)
    //     let incline = A.slice(0,index+1)
    //     let decline = A.slice(index+1)
        
    //     for(let i=0;i<incline.length;i++){
    //         if(incline[i] > incline[i+1]){
    //             isIncline = false
    //             break;
    //         }
    //     }
    //     if(incline.length === 1) isIncline = false 
        
    //     for(let i=0;i<decline.length;i++){
    //         if(decline[i] <= decline[i+1]){
    //             isDecline = false
    //             break;
    //         } 
    //     }
    //     if(decline.length === 1 && decline[0] === incline[incline.length-1] || decline.length === 0){
    //         isDecline = false
    //     } 
      
    //     return isIncline && isDecline

    //refactor...
        let i = 0
        
        while (i+1 < A.length && A[i] < A[i+1]) {
            i++
        }
        
        if (i === 0 || i === A.length-1) {
            return false
        }    
        
        while (i+1 < A.length && A[i] > A[i+1]) {
            i++
        }
        
        return i === A.length-1
};