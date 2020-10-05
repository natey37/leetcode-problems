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

  //Time complexity O(n), we go through our tree once to find the nodes and then we loop through the nodes again to adjust
    //Space complexity O(n), we create an order array that contains every node, then we return the root in place

    
var flatten = function(root) {
   
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

/*

    1
   / \
  2   5
 / \   \
3   4   6

After our preorder traversal
order = [ [1,2,5,3,4,null,6], [2,3,4], [3], [4], [5,null,6], [6] ]

Then we loop through order...
i = 0 
[1,2,5,3,4,null,6].left = null -> [1,null,5,null,6]
[1,null,5,null,6].right = [2,3,4] -> [1,null,2,3,4]

i = 1 
[2,3,4].left = null -> [2,null,4]
[2,null,4].right = [3] -> [2,null,3]

These nodes are a physical representation of our original tree's nodes, so changes we make will be made in place on our tree, so our node at order[0] (order[0] represents the entire binary tree) after i = 1 is [1,null,2,null,3]

i = 2 
[3].left = null -> [3,null]
[3,null].right = [4] -> [3,null,4]

order[0] = [1,null,2,null,3,null,4]

i = 3 
[4].left = null -> [4,null]
[4,null].right = [5,null,6] ->[4,null,5,null,6]

order[0] = [1,null,2,null,3,null,4,null,5,null,6]

i = 4 
[5,null,6].left = null -> [5,null]
[5,null].right = [6] -> [5,null,6]

order[0] = [1,null,2,null,3,null,4,null,5,null,6]

i = 5 -> if i + 1 = order.length then we know this is the end of the 'linked list' and we will set the right and left nodes equal to null 

[6].left = null 
[6,null].right = null

order[0] = [1,null,2,null,3,null,4,null,5,null,6] -> this represents the original binary tree we were given after our changes

*/