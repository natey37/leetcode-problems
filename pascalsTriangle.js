/*
118. Pascal's Triangle

Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
*/


/*
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let dp = []
    for(let i=0;i<numRows;i++){
        dp[i] = []
        dp[i][0] = 1 
        for(let j=1;j<i;j++){
            dp[i][j] = dp[i-1][j-1] + dp[i-1][j]
        }
        dp[i][i] = 1
    }
    return dp
};
