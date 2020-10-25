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
        
        //first we can narrow our search right away by checking if the nodes value is greater than the key, if it is than because we are working with a BST we know that it can only be on the left side of the tree, so we call our dl function on node.left
        if(root.val > key){
            root.left = dl(root.left, key)
        }
        //again same logic, here check is the nodes value is less than the key, if it is than it can only be on the right side of the tree
        if(root.val < key){
            root.right = dl(root.right, key)
        }
        
        //if we find a node that has a value equal to key than we have a few options
        //if the node is a leaf (meaning it has no left or right nodes) than we can set it equal to null 
        //if the node doesnt have a node.left but does have a node.right then set our node equal to the right node
        //again same but opposite logic, if the node doesnt have a node.right but does have a node.left then set our node equal to the left node
        //lastly if none of the above than we do a couple things
            //Because we need to keep the correct structure of a BST, we will need to find the minimum of the subtree beneath our deleted node. 
            //We will use our helper function getMin which will find the smallest node in the substree
            //then we set our nodes value equal to smallest node value we found from our helper function
            //then we will set the node.right equal to our dl function with the parameters of our node.right 
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
                root.right = dl(root.right, node.val)
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


/*
Input: root = [5,3,6,2,4,null,7], key = 3

dl([5,3,6,2,4,null,7], 3)
    if(root.val > 3){
        root.left = dl([[3,2,4]], 3)
    }

    `   dl([[3,2,4]], 3)
                if(root.val === key)
                else {
                    node = getMin([4])
                }

                    getMin([4])
                        current = [4]
                        while(current.left) -> doesnt run

                        return current

                    node = [4]
                    root.val = 4
                `   root.right = dl(root.right, node.val)

                        dl(null, 4)
                            if(!node) return root
                    
                    root.right = null

                return root -> [5,4,6,2,null,null,7]
*/