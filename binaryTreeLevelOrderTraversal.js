/*
102. Binary Tree Level Order Traversal
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let levels = {}
    let depth = 1
    const traverse = (node, level) => {
        if(!node) return 
        if(levels[level]){
            levels[level] = [...levels[level], node.val]
        } else {
            levels[level] = [node.val]
        }
        
        traverse(node.left, level + 1)
        traverse(node.right, level + 1)
    }
    
    traverse(root, depth)
 
    return Object.values(levels)
};