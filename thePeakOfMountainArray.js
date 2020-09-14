/*
The Peak of Mountain Array
A mountain array is defined as an array that

has at least 3 elements
let's call the element with the largest value the "peak", with index k. The array elements monotonically increase from the first element to A[k], and then monotonically decreases from A[k + 1] to the last element of the array. Thus creating a "mountain" of numbers.
Find the index of the peak element. Assume there is no duplicate.

Input: 0 1 2 3 2 1 0

Output: 3

Explanation: the largest element is 3 and its index is 3.
*/

function peak_of_mountain_array(arr) {
    let left = 0
    let right = arr.length - 1 
    
    let index
    
    while(left <= right){
        let mid = Math.floor((left+right)/2)
        
        if(arr[mid] > arr[mid+1]){
            index = mid 
            right = mid - 1
        } else {
            left = mid + 1 
        }
    }
    return index
}