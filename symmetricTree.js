/*
101. Symmetric Tree

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    
    function traverseTree(t1, t2){
        if(!t1 && !t2) return true 
        if(!t1 || !t2) return false 
        
        return t1.val === t2.val 
            && traverseTree(t1.left, t2.right) 
            && traverseTree(t1.right, t2.left)
    }
    
    return traverseTree(root, root)
};