/*
905. Sort Array By Parity
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

 

Example 1:

Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
*/

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    // let odd = []
    // let even = []
    // for(let i=0;i<A.length;i++){
    //     if(A[i] % 2 === 0) even.push(A[i])
    //     else odd.push(A[i])
    // }
    // return [...even, ...odd]
    let index = 0 
    for(let i=0;i<A.length;i++){
        if(A[i] % 2 === 0){
            let temp = A[i]
            A[i] = A[index]
            A[index] = temp
            index++
        }
    }
    return A
};