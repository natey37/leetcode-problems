/*
419. Battleships in a Board
Given an 2D board, count how many battleships are in it. The battleships are represented with 'X's, empty slots are represented with '.'s. You may assume the following rules:
You receive a valid board, made of only battleships or empty slots.
Battleships can only be placed horizontally or vertically. In other words, they can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), where N can be of any size.
At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.
Example:
X..X
...X
...X
In the above board there are 2 battleships.
Invalid Example:
...X
XXXX
...X

*/


/*
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function(board) {
    let count = 0 
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
                //if it is an X
            if(board[i][j] === "X"  
                //AND if it doesnt have an X behind it
               && board[i][j-1] !== 'X'
               //AND if it isn't in the top row OR it doesnt have an X above it we increase the count for # of battleships
                && (!board[i-1] || board[i-1][j] !== 'X')){
                console.log(board[i-1], i, j)
                count++ 
            }
        }
    }
    return count
};