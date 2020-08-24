/*
94. Binary Tree Inorder Traversal

Given a binary tree, return the inorder traversal of its nodes' values.

Example:

Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
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
var inorderTraversal = function(root) {
    //recursive solution

    // let inOrder = []
    // const dfs = (node) => {
    //     if(node == null) return 
    //     dfs(node.left)
    //     inOrder.push(node.val)
    //     dfs(node.right)
    // }
    // dfs(root)
    // return inOrder

    //iterative solution
    let result = []
    let stack = []
    let node = root
    while(node != null || stack.length !== 0){
        while(node != null){
            stack.push(node)
            node = node.left
        }
        node = stack.pop()
        result.push(node.val)
        node = node.right
    }
    return result
};