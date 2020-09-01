/*
993. Cousins in Binary Tree

In a binary tree, the root node is at depth 0, and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, but have different parents.

We are given the root of a binary tree with unique values, and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the values x and y are cousins.

 

Example 1:


Input: root = [1,2,3,4], x = 4, y = 3
Output: false
Example 2:


Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
Output: true
Example 3:



Input: root = [1,2,3,null,4], x = 2, y = 3
Output: false
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    let results = []
   
    const traverse = (node, level, parent) => {
       if(node == null) return 
       
       //if our nodes value equals x or y then we have found our target and we will push the level the node is on and the parent of the current node
       if(node.val === x || node.val === y) results.push([level, parent])

       traverse(node.left, level+=1, node.val)
       traverse(node.right, level, node.val)
    }
   
    traverse(root, 0)

    //We check to see our level is greater than 1. If our level is 1 then we know these nodes have the same parent, the root node. We check to see our nodes dont have the same parent node. And we check to see that the nodes we found are on the same level
    if(results[0][0] > 1 && results[0][1] !== results[1][1] && results[0][0] === results[1][0]){
        return true
    } 
   
   return false 
};