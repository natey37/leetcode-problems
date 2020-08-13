/*
1315. Sum of Nodes with Even-Valued Grandparent
Given a binary tree, return the sum of values of nodes with even-valued grandparent.  (A grandparent of a node is the parent of its parent, if it exists.)

If there are no nodes with an even-valued grandparent, return 0.

 

Example 1:



Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
Output: 18
Explanation: The red nodes are the nodes with even-value grandparent while the blue nodes are the even-value grandparents.
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
var sumEvenGrandparent = function(root) {
    let total = 0;
    traverse(root, 0);
    function traverse(node) {
        if(node) {
        if(node.val % 2 === 0) {
            if (node.left?.left?.val) {
                total += node.left.left.val;
            }
            if (node.left?.right?.val) {
                total += node.left.right.val;
            }
            if (node.right?.right?.val) {
                total += node.right.right.val;
            }
            if (node.right?.left?.val) {
                total += node.right.left.val;
            }
        }
        traverse(node.left);
        traverse(node.right);
    }
}

return total;

}