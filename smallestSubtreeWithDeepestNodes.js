/*
865. Smallest Subtree with all the Deepest Nodes
Given the root of a binary tree, the depth of each node is the shortest distance to the root.

Return the smallest subtree such that it contains all the deepest nodes in the original tree.

A node is called the deepest if it has the largest depth possible among any node in the entire tree.

The subtree of a node is tree consisting of that node, plus the set of all descendants of that node.

 

Example 1:


Input: root = [3,5,1,6,2,0,8,null,null,7,4]
Output: [2,7,4]
Explanation: We return the node with value 2, colored in yellow in the diagram.
The nodes coloured in blue are the deepest nodes of the tree.
Notice that nodes 5, 3 and 2 contain the deepest nodes in the tree but node 2 is the smallest subtree among them, so we return it.
Example 2:

Input: root = [1]
Output: [1]
Explanation: The root is the deepest node in the tree.
Example 3:

Input: root = [0,1,3,null,2]
Output: [2]
Explanation: The deepest node in the tree is 2, the valid subtrees are the subtrees of nodes 2, 1 and 0 but the subtree of node 2 is the smallest.
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
 * @return {TreeNode}
 */
var subtreeWithAllDeepest = function(root) {
    //here need to keep track of our depth, and when we find a node with the max depth on the left and right then we replace our maxNode. Eventually we will find our max node and it will not be replaced as we check the rest of our tree. 
    let depth = 0 
    let maxNode 
    
    const dfs = (node, level) => {
        depth = Math.max(level, depth)
        //if we reach a leaf we want to return what level it was on
        if(node === null) return level
        
        let left = dfs(node.left, level + 1)
        let right = dfs(node.right, level + 1)
        
        //we will keep replacing maxNode until we find lowest depth 
        if(left === depth && right === depth){
            maxNode = node
        } 
        //we want to return the deepest point on each node
        return Math.max(left, right)
    }
    
    dfs(root, 1)
    return maxNode
};