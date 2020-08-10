/*
515. Find Largest Value in Each Tree Row

You need to find the largest value in each row of a binary tree.

Example:
Input: 

          1
         / \
        3   2
       / \   \  
      5   3   9 

Output: [1, 3, 9]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/*
 * @param {TreeNode} root
 * @return {number[]}
 */
var largestValues = function(root) {
    let array = []
    dfs(root, 0)
    return array
    
    function dfs(root, level){  
        if(!root) return null
        let max = array[level] === undefined ? -Infinity : array[level]
        array[level] = Math.max(max, root.val)
        dfs(root.left, level + 1)
        dfs(root.right, level + 1)
    }
};








