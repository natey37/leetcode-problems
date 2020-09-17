/*
304. Range Sum Query 2D - Immutable
Given a 2D matrix matrix, find the sum of the elements inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).

Range Sum Query 2D
The above rectangle (with the red border) is defined by (row1, col1) = (2, 1) and (row2, col2) = (4, 3), which contains sum = 8.

Example:
Given matrix = [
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5]
]

sumRegion(2, 1, 4, 3) -> 8
sumRegion(1, 1, 2, 2) -> 11
sumRegion(1, 2, 2, 4) -> 12
*/


/*
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    if (!matrix.length || !matrix[0].length) {
        this.sum = [[]]
        return
    }
    this.sum = new Array(matrix.length + 1).fill(0).map(el => new Array(matrix[0].length + 1).fill(0))
    console.log(this.sum)
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[0].length;j++){
            this.sum[i+1][j+1] = this.sum[i][j+1] + this.sum[i+1][j] - this.sum[i][j] + matrix[i][j]
        }
    }
};

/*
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    return this.sum[row2 + 1][col2 + 1] - (this.sum[row2 + 1][col1] + this.sum[row1][col2 + 1] - this.sum[row1][col1])
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */