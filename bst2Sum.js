/*
653. Two Sum IV - Input is a BST

Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.

Example 1:

Input: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 9

Output: True
 

Example 2:

Input: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 28

Output: False
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let array = []
    inorder(root, array)
    let left = 0 
    let right = array.length - 1 
    while(left < right){
        sum = array[left] + array[right]
        if(sum == k) return true 
        if(sum < k) left++ 
        else right-- 
    }
    return false     
};

var inorder = (root, array) => {
    if(root == null) return 
    inorder(root.left, array)
    array.push(root.val)
    inorder(root.right, array)
}