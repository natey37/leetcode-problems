/*
114. Flatten Binary Tree to Linked List
Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

    1
   / \
  2   5
 / \   \
3   4   6
The flattened tree should look like:

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    //Time complexity O(n), we go through our tree once to find the nodes and then we loop through the nodes again to adjust
    //Space complexity O(n), we create an order array that contains every node, then we return the root in place
    let order = []
    const inOrder = (node) => {
        if(!node) return 
        order.push(node)
        inOrder(node.left)
        inOrder(node.right)
    }
    inOrder(root)
    for(let i=0;i<order.length;i++){
        if(i+1 === order.length){
            order[i].left = null 
            order[i].right = null
            break;
        }
        order[i].left = null
        order[i].right = order[i+1]
    }
};