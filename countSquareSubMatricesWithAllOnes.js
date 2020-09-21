/*
1277. Count Square Submatrices with All Ones
Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.

 

Example 1:

Input: matrix =
[
  [0,1,1,1],
  [1,1,1,1],
  [0,1,1,1]
]
Output: 15
Explanation: 
There are 10 squares of side 1.
There are 4 squares of side 2.
There is  1 square of side 3.
Total number of squares = 10 + 4 + 1 = 15.
Example 2:

Input: matrix = 
[
  [1,0,1],
  [1,1,0],
  [1,1,0]
]
Output: 7
Explanation: 
There are 6 squares of side 1.  
There is 1 square of side 2. 
Total number of squares = 6 + 1 = 7.

*/


/*
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
    let count = 0
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            if(matrix[i][j] === 0) continue;
            if(i > 0 && j > 0){
                matrix[i][j] += Math.min(matrix[i][j-1], matrix[i-1][j], matrix[i-1][j-1])
            }
            count += matrix[i][j]
        }
    }
    return count
};


matrix = [
  [1,1]
  [1,1]
]

//We can see easily there will be 5 squares. 1 at each of the 4 points and then 1 more from the whole matrix. Now how do we use what we've seen? Lets move through our matrix, at every point we need to check its number and add it to a count. We see the point at [0,0] is 1 so we will add 1 to our count, we move over to [0,1] and see its a 1, we add 1 to our count bringing us to 2. Now that we have reached the second row things get more interesting. Remember I said we need to find the points where they represent the END of a square. A point that is on the first row can be an individual square but it can't be the END of a square. As well, a point that is in the first column (such as [1,0]), also cannot be the END of a square. For every other point that is not in the first row or is not in the first column we will check to see if this is an END of a square. This means we need to check the positions of [0,0], [0,1], and [1,0]. What would happen if [0,0] = 0. We would no longer have our fifth square, and we know this because we see a zero. So we want to take the minimum number out of our 3 points we check. In our case every point = 1, so our minimum is 1. We check our point at [1,1], we see it has a 1 so we add another to our count, which is now 4. THEN we add the minimum of the 3 points we checked, which is 1. 4 + 1 = 5 and there are our 5 squares. Now lets see the code 