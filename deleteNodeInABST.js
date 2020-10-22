/*
450. Delete Node in a BST
Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

Search for a node to remove.
If the node is found, delete the node.
Follow up: Can you solve it with time complexity O(height of tree)?

 

Example 1:


Input: root = [5,3,6,2,4,null,7], key = 3
Output: [5,4,6,2,null,null,7]
Explanation: Given key to delete is 3. So we find the node with value 3 and delete it.
One valid answer is [5,4,6,2,null,null,7], shown in the above BST.
Please notice that another valid answer is [5,2,6,null,4,null,7] and it's also accepted.

Example 2:

Input: root = [5,3,6,2,4,null,7], key = 0
Output: [5,3,6,2,4,null,7]
Explanation: The tree does not contain a node with value = 0.
Example 3:

Input: root = [], key = 0
Output: []

*/


var deleteNode = function(root, key) {
    const dl = (root, key) => {
        if(!root) return root
        
        if(root.val > key){
            root.left = dl(root.left, key)
        }
        if(root.val < key){
            root.right = dl(root.right, key)
        }
        
        if(root.val === key){
            if(!root.left && !root.right){
                root = null
            } else if(!root.left){
                root = root.right
            } else if(!root.right){
                root = root.left
            } else {
                let node = getMin(root.right)
                root.val = node.val
                root.right = deleteNode(root.right, node.val)
            }
        }
        return root
    }
    
    return dl(root, key)
    
    
};

const getMin = (node) => {
    let current = node
    while(current.left){
        current = current.left
    }
    return current
}
