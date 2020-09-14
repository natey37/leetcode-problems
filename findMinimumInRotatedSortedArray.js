/*
Find Minimum in Rotated Sorted Array
A sorted array was rotated at an unknown pivot. For example, [10, 20, 30, 40, 50] becomes [30, 40, 50, 10, 20]. Find the index of the minimum element in this array.

Input: [30, 40, 50, 10, 20]

Output: 3

Explanation: the smallest element is 10 and its index is 3.
*/

function find_min_rotated(arr) {
    let left = 0
    let right = arr.length - 1
    
    let index 
    
    while(left <= right){
        let mid = Math.floor((left + right) /2)
        
        if(arr[mid] <= arr[arr.length-1]){
            index = mid
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return index
}