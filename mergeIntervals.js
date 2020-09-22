/*
56. Merge Intervals
Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
*/


/*
 * @param {number[][]} intervals
 * @return {number[][]}
 */

 //time complexity - We sort our intervals to begin so this takes O(N log n) time and then we loop through our intervals once for O(n), so its O(N log n)
 //space complexity - We create new array for our merged arrays, worst case no overlaps so O(n)
var merge = function(intervals) {
    if(!intervals.length) return []
    intervals.sort((a,b) => a[0] - b[0])
    let mergedIntervals = [intervals[0]]
    for(let i=0;i<intervals.length;i++){
        let lastMerged = mergedIntervals[mergedIntervals.length-1]
        let current = intervals[i]
        if(lastMerged[1] >= current[0]){
            lastMerged[1] = Math.max(current[1], lastMerged[1])
        } else {
            mergedIntervals.push(current)
        }
    }
    return mergedIntervals
};

