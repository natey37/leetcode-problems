/*
Find Element in Sorted Array with Duplicates
Given a sorted array of integers and a target integer, find the first occurrence of the target and return its index. Return -1 if the target is not in the array.

Input:

arr = [1, 3, 3, 3, 3, 6, 10, 10, 10, 100]
target = 3
Output:

1
Explanation: First occurrence of 3 is at index 1.
*/


function find_first_occurrence(arr, target) {
    let left = 0
    let right = arr.length - 1 
    let index = -1
    
    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        
        if(arr[mid] === target){
            right = mid - 1
            index = mid
        } else if(arr[mid] > target){
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return index
}