/*
79. Word Search

Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example:

board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
 

Constraints:

board and word consists only of lowercase and uppercase English letters.
1 <= board.length <= 200
1 <= board[i].length <= 200
1 <= word.length <= 10^3
*/

/*
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let result = false
    
    let solve = (row, column, index) => {
        if(!result){
            if(row < 0 || column < 0 || row >= board.length || column >= board[0].length) return
            if(board[row][column] !== word[index]) return 
            if(index === word.length - 1){
                result = true 
                return
            }
            board[row][column] = null
            
            solve(row+1, column, index+1)
            solve(row-1, column, index+1)
            solve(row, column+1, index+1)
            solve(row, column-1, index+1)
            
            board[row][column] = word[index]
        }
    }
    
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
            solve(i, j, 0)
            if(result) return result
        }
    }
    return result
};