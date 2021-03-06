/*
958. Check Completeness of a Binary Tree

Given a binary tree, determine if it is a complete binary tree.

Definition of a complete binary tree from Wikipedia:
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

 

Example 1:



Input: [1,2,3,4,5,6]
Output: true
Explanation: Every level before the last is full (ie. levels with node-values {1} and {2, 3}), and all nodes in the last level ({4, 5, 6}) are as far left as possible.
Example 2:



Input: [1,2,3,4,5,null,7]
Output: false
Explanation: The node with value 7 isn't as far left as possible.
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
 * @return {boolean}
 */
var isCompleteTree = function(root) {
    let queue = [root]
    let leaf = false 
    
    while(queue.length){
        let node = queue.shift()

        if(node.left){
            if(leaf) return false
            queue.push(node.left)
        } else {
            leaf = true
        }
        if(node.right){
            if(leaf) return false
            queue.push(node.right)
        } else {
            leaf = true
        }
    }
    return true

};


//Example 1.  root = [1,2,3,5,null,7,8]

//                       1
//                      / \
//                     2   3
//                    /   / \
//                   5   7   8

//Step 1
    //isCompleteTree([1,2,3,5,null,7,8])
        //queue = [[1,2,3,5,null,7,8]]
        //leaf = false 
        
        //while(queue.length)
            //node = [1,2,3,5,null,7,8]

            //if(node.left)
                //leaf -> false 
                //queue.push([2,5])
            //if(node.right)
                //leaf -> false 
                //queue.push([3,7,8])
//Step 2
        //queue = [[2,5], [3,7,8]]
        //leaf = false 

        //while(queue.length)
            //node = [2,5]
            
            //if(node.left)
                //leaf -> false 
                //queue.push([5])
            //if(node.right) -> false 
            //else leaf = true 

//Step 3 
        //queue = [[3,7,8], [5]]
        //leaf = true 

        //while(queue.length)
            //node = [3,7,8]

            //if(node.left)
                //leaf -> true 
                    //return false 

    


