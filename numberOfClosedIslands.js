/*
1254. Number of Closed Islands
Given a 2D grid consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.

Return the number of closed islands.

 

Example 1:



Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
Output: 2
Explanation: 
Islands in gray are closed because they are completely surrounded by water (group of 1s).
Example 2:



Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
Output: 1
Example 3:

Input: grid = [[1,1,1,1,1,1,1],
               [1,0,0,0,0,0,1],
               [1,0,1,1,1,0,1],
               [1,0,1,0,1,0,1],
               [1,0,1,1,1,0,1],
               [1,0,0,0,0,0,1],
               [1,1,1,1,1,1,1]]
Output: 2
*/


/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    let numOfIslands = 0
  
    const findIsland = (i, j) => {
        if (grid[i][j] == 1) return true 
        if (grid[i][j] == 0) {
            grid[i][j] = 2 
            if (i < 1 || i >= grid.length - 1 || j < 1 || j >= grid[0].length - 1 ) return false 
            let result = true
            
            if (!findIsland(i - 1,j)) result = false
            if (!findIsland(i,j + 1)) result = false
            if (!findIsland(i + 1,j)) result = false
            if (!findIsland(i,j - 1)) result = false    
            
            return result
        }
        
        return true
    }
    
    for (let i = 1; i <= grid.length - 2; i++) {
        for (let j = 1; j <= grid[0].length - 2; j++) {
            if (grid[i][j] == 0){
                if (findIsland(i,j, true)) {
                    numOfIslands++
                }
            }
        }
    }
    
    return numOfIslands
};