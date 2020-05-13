/*
107. Binary Tree Level Order Traversal II

Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
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
var levelOrderBottom = function(root) {
    if(!root) return []
    let results = []
    
    const recurr = (root, level) => {
        if(!root) return 
        if(!results[level]){
            results[level] = [root.val]
        } else {
            results[level].push(root.val)
        }
        recurr(root.left, level + 1)
        recurr(root.right, level + 1)
    }
    
    recurr(root, 0)
    return results.reverse()
};