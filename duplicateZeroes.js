/*
1089. Duplicate Zeros
Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

Note that elements beyond the length of the original array are not written.

Do the above modifications to the input array in place, do not return anything from your function.

 

Example 1:

Input: [1,0,2,3,0,4,5,0]
Output: null
Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]
Example 2:

Input: [1,2,3]
Output: null
Explanation: After calling your function, the input array is modified to: [1,2,3]

*/


/*
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
//time complexity O(n), loop through arr two seperate times 
//space complexity O(1), we modify in place 
var duplicateZeros = function(arr) {
    //first we make one pass and check for how many zeroes we have, we do not want to count zeroes that could not be duplicated
    let numOfZeroes = 0 
    let length = arr.length - 1
    for(let i=0;i<=length - numOfZeroes;i++){
        if(arr[i] === 0){
            if(i === length - numOfZeroes){
                arr[length] = 0
                length -= 1
                break;
            }
            numOfZeroes += 1 
        }
    }
    //once we know how many zeroes we are goin to add to our array, we move backwards and insert them in the correct position
    let last = length - numOfZeroes
    for(let i = last; i>=0;i--){
        if(arr[i] === 0){
            arr[i + numOfZeroes] = arr[i]
            numOfZeroes -= 1
            arr[i + numOfZeroes] = arr[i]
        } else {
            arr[i + numOfZeroes] = arr[i]
        }
    }
};