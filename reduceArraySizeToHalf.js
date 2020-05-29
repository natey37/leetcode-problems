/*
1338. Reduce Array Size to The Half

Given an array arr.  You can choose a set of integers and remove all the occurrences of these integers in the array.

Return the minimum size of the set so that at least half of the integers of the array are removed.

 

Example 1:

Input: arr = [3,3,3,3,5,5,5,2,2,7]
Output: 2
Explanation: Choosing {3,7} will make the new array [5,5,5,2,2] which has size 5 (i.e equal to half of the size of the old array).
Possible sets of size 2 are {3,5},{3,2},{5,2}.
Choosing set {2,7} is not possible as it will make the new array [3,3,3,3,5,5,5] which has size greater than half of the size of the old array.
Example 2:

Input: arr = [7,7,7,7,7,7]
Output: 1
Explanation: The only possible set you can choose is {7}. This will make the new array empty.
Example 3:

Input: arr = [1,9]
Output: 1
Example 4:

Input: arr = [1000,1000,3,7]
Output: 1
Example 5:

Input: arr = [1,2,3,4,5,6,7,8,9,10]
Output: 5
*/

/*
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    let half = arr.length / 2 
    let map = new Map()
    
    for(let i=0; i<arr.length; i++){
      if(!map.has(arr[i])) map.set(arr[i], 0)
      map.set(arr[i], map.get(arr[i]) + 1)
    }
    const countPairs = [...map].sort((a, b) => b[1] - a[1]); 
       
    let index = 0;
    let counts = 0;
    let sum = 0;
    
    while (sum < half) {
        console.log(countPairs[index])
        sum += countPairs[index++][1];
        counts++;
    }
    
    return counts;
    
};
