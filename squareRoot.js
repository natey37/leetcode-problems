/*
Square Root
Given an integer, find its square root without using built-in square root function. Only return the integer part (truncate the decimals).

Input: 16

Output: 4

Input: 8

Output: 2

Explanation: square root of 8 is 2.83..., return integer part 2
*/

function squareRoot(num) {
    let left = 0 
    let right = num 

    let index 

    while(left <= right){
        let mid = Math.floor((left+right)/2)

        if(mid * mid >= num){
            index = mid
            right = mid - 1
        } else {
            left = mid + 1 
        }
    }
    
    if(index * index > n){
        index = index - 1
    }
    return index
}