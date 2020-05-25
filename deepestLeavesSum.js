/*
1302. Deepest Leaves Sum

Given a binary tree, return the sum of values of its deepest leaves.
 
Example 1:
Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
Output: 15
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
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    let array = []
    let depth = 0 
    //find the maximum depth of the tree with helper function
    function findDepth(root, level){
        if(!root) return 

         if(level > depth) depth = level
         findDepth(root.left, level + 1)
         findDepth(root.right, level + 1)
     }

     findDepth(root, 1)
    
    //search the tree for leaf nodes that are at the depth and add val to array
    function dfs(root, level){
        if(!root) return 
        if(root.left === null && root.right === null && level >= depth){
            array.push(root.val)
            if(depth < level) depth = level
        } 
  
        dfs(root.left, level + 1 )
        dfs(root.right, level + 1)
    }
    //run the dfs function on our tree and sum the results of the array
    dfs(root, 1)
    return array.reduce((a,b) => a + b)
    
    
};