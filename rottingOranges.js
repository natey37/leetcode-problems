/*
994. Rotting Oranges

In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.

Example 1:

Input: [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

Example 2:

Input: [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

Example 3:

Input: [[0,2]]
Output: 0
Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.
*/

/*
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    let timer = 0
    let rotten = []
    let fresh = new Set()
    for(let i=0; i<grid.length; i++){
        for(let j=0; j<grid[i].length;j++){
            if(grid[i][j] == 2){
                rotten.push([i,j])
            }
            else if(grid[i][j] == 1){
                fresh.add(`${i},${j}`)
            }
        }
    }
    while(fresh.size && rotten.length){
        let newRotten = []
        for(let orange of rotten){
            let i = orange[0]
            let j = orange[1]
            if(fresh.has(`${i-1},${j}`)){
                fresh.delete(`${i-1},${j}`)
                newRotten.push([i-1, j])
            }
            if(fresh.has(`${i+1},${j}`)){
                fresh.delete(`${i+1},${j}`)
                newRotten.push([i+1, j])
            }
            if(fresh.has(`${i},${j-1}`)){
                fresh.delete(`${i},${j-1}`)
                newRotten.push([i, j-1])
            }
            if(fresh.has(`${i},${j+1}`)){
                fresh.delete(`${i},${j+1}`)
                newRotten.push([i, j+1])
            }
        }
        rotten = newRotten
        timer++
    }
    return fresh.size ? -1 : timer 
};