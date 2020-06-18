/*
1122. Relative Sort Array

Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.  Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

Example 1:

Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
Output: [2,2,2,1,4,3,3,9,6,7,19]
*/

/*
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let map = {}
    for(let i=0;i<arr1.length;i++){
        if(!map[arr1[i]]) map[arr1[i]] = 1
        else map[arr1[i]] += 1
    }
    results = []
    for(let j=0; j<arr2.length;j++){
        if(map[arr2[j]]){
            for(let k=0; k<map[arr2[j]];k++){
                results.push(arr2[j])
            }
            map[arr2[j]] = null
        }
    }
    for(const key in map){
        if(map[key]){
            for(let l=0; l<map[key];l++){
                results.push(parseInt(key))
            }
        }
    }
 
    return results
};