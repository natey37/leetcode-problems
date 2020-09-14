/*
Finding Boundary with Binary Search
An array of boolean values is divided into two sections, the left section consists of all false and the right section consists of all true. Find the boundary of the right section, i.e. index of the first true element. If there is no true element, return -1.

Input: arr = [false, false, true, true, true]

Output: 2

Explanation: first true's index is 2.
*/

function find_boundary(arr) {
    let left = 0;
    let right = arr.length - 1;
    let boundaryIndex = -1;
    while (left <= right) {
        let mid = Math.trunc((left + right) / 2);
        if (arr[mid]) {
            boundaryIndex = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return boundaryIndex;
}