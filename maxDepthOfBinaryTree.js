/*
Max depth of a binary tree
Max depth of a binary tree is the longest root-to-leaf path. Given a binary tree, find its max depth.
*/

function max_depth(root) {
    if(root == null) return 0
      
    return Math.max(max_depth(root.left), max_depth(root.right)) + 1
    
}
  