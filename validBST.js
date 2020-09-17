/*
Valid Binary Search Tree
A binary search tree is a binary tree with the property that any of its node's value is greater than or equal to any node in its left subtree and less than or equal to any node's value in its right subtree.

Given a binary tree, determine whether it is a binary search tree.
*/

function valid_bst(root) {
    let min = -Infinity
    let max = Infinity
    return dfs(root, min, max)
    
    function dfs(node, min, max){
        if(!node) return true
        
        if(node.val > min && node.val > max || node.val < max && node.val < min) return false 
        
        return dfs(node.left, min, node.val) && dfs(node.right, node.val, max)
    }
}