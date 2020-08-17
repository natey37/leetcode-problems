/*
979. Distribute Coins in Binary Tree

Given the root of a binary tree with N nodes, each node in the tree has node.val coins, and there are N coins total.

In one move, we may choose two adjacent nodes and move one coin from one node to another.  (The move may be from parent to child, or from child to parent.)

Return the number of moves required to make every node have exactly one coin.

 

Example 1:



Input: [3,0,0]
Output: 2
Explanation: From the root of the tree, we move one coin to its left child, and one coin to its right child.
Example 2:



Input: [0,3,0]
Output: 3
Explanation: From the left child of the root, we move two coins to the root [taking two moves].  Then, we move one coin from the root of the tree to the right child.
Example 3:



Input: [1,0,2]
Output: 2
Example 4:



Input: [1,0,0,null,3]
Output: 4
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
var distributeCoins = function(root) {
    let count = 0 
    
    const traverse = (node) => {
        if(!node) return 0 
        
        let left = traverse(node.left)
      
        let right = traverse(node.right)
   
        count += Math.abs(left) + Math.abs(right)
        
        return left + right + node.val - 1
    }
    
    traverse(root)
    
    return count
};


//I will use some pseudocode to save time 

//Example 1. 

//Input = [3,0,0]
//Looks like 3
//          / \
//         0   0

//count = 0 

//Step 1a. 

    //traverse([3,0,0])
        //node === true 

        //NOTE: 3 is not actually the node object, 3 is the node objects value, but I  will use it to represent what node we are on. 
    
        //left = traverse(0) -> node.left = 3.left = 0 
            //MOVE TO STEP 2a.
//Step 1b.
        //left = -1 
        //right = traverse(0) -> node.right = 3.right = 0 
            //MOVE TO STEP 2a.
            //NOTE: In this case I do not need to rewrite the outcome for traverse.right because we know it will be identical to traverse.left since we are giving traverse the same input. Therefore we just repeat steps 2-4 again and we return -1 for right as well
//Step 1c. 
        //right = -1 
        //count += left + right -> (Math.abs(-1) + Math.abs(-1) = 2)
        //count = 2 
        //return 

        //We exit from our traverse function at this point and we are left with the number of moves required represented as count 



//Step 2a. 
    //traverse([0,null,null])
        //node === true 
        //left = traverse(null) -> node.left = 0.left = null 
            //MOVE TO STEP 3
//Step 2b.
        //left = 0
        //right = traverse(null) -> node.right = 0.right = null
            //MOVE TO STEP 4
//Step 2c.
        //right = 0
        //count += 0 + 0 -> (0 + 0 + 0 = 0)
        //return left + right + node.val - 1 -> (0 + 0 + 0 - 1 = -1)
            //MOVE TO STEP 1b.
            //SECOND TIME HERE MOVE TO STEP 1c.



//Step 3.
    //WE HIT THE BOTTOM OF OUR DFS
    //traverse([null])
        //node === false --> return 0 
            //MOVE TO STEP 2b. 

//Step 4.
    //WE HIT THE BOTTOM OF OUR DFS
    //traverse([null])
        //node === false --> return 0 
            //MOVE TO STEP 2c. 
   


//Example 2.

//Input: [0,3,0]
//Looks like 0
//          / \
//         3   0

//count = 0 

//Step 1a. 
    //traverse([0,3,0])
        //node === true 
        //left = traverse(3) -> node.left = 0.left = 3 
            //MOVE TO 2a.
//Step 1b. 
        //left = 2
        //right = traverse(0) -> node.right = 0.right = 0 
            //MOVE TO 5a.
//Step 1c. 
        //right = -1 
        //count += 2 + 1 -> (0 + Math.abs(2) + Math.abs(-1) = 3)
        //count = 3 
        //return 

        //We exit from our traverse function at this point and we are left with the number of moves required represented as count 
        
        
//Step 2a.
    //traverse([3,null,null])
        //node === true 
        //left = traverse(null) -> node.left = 3.left = null
            //MOVE TO 3.
//Step 2b. 
        //left = 0 
        //right = traverse(null) -> node.right = 3.right = null
            //MOVE TO 4.
//Step 2c. 
        //right = 0 
        //count += 0 + 0 -> (0 + 0 + 0 = 0)
        //return left + right + node.val - 1 -> (0 + 0 + 3 - 1 = 2)
            //MOVE TO 1b.


//Step 3.
    //traverse([null])
        //node === false -> return 0 
            //MOVE TO 2b.
            //SECOND TIME HERE MOVE TO 5b.

//Step 4. 
    //traverse([null])
        //node === false -> return 0 
            //MOVE TO 2c.
            //SECOND TIME HERE MOVE TO 5c.


//Step 5a. 
    //traverse([0,null,null])
        //node === true 
        //left = traverse(null) -> node.left = 0.left = null
            //MOVE TO 3
            //NOTE: Again we do not need to repeat since we already see that giving traverse a node with a value of null will return 0
//Step 5b. 
        //left = 0 
        //right = traverse(null) -> node.right = 0.right = null
            //MOVE TO 4
//Step 5c. 
        //right =0
        //count += 0 + 0 -> (0 + 0 + 0 = 0)
        //return left + right + node.val - 1 -> (0 + 0 + 0 - 1 = -1)
            //MOVE TO 1c.




//Example 3

//Input: [1,0,0,null,3]
//Looks like 1
//          / \
//         0   0
//        / \
//      null 3

//count = 0 

//Step 1a.
    //traverse([1,0,0,null,3])
        //node === true 
        //left = traverse(0) -> node.left = 1.left = 0
            //MOVE TO 2a.
//Step 1b. 
        //left = 1 
        //right = traverse(0) -> node.right = 1.right = 0
            //MOVE TO 7a.
//Step 1c.
        //right = -1 
        //count += 1 + 1 -> (2 + Math.abs(1) + Math.abs(-1) = 4)
        //count = 4
        //return 

        //We exit from our traverse function at this point and we are left with the number of moves required represented as count 
        


//Step 2a. 
    //traverse([0,null,3])
        //node === true 
        //left = traverse(null) -> node.left = 0.left = null
            //MOVE TO 3
//Step 2b.
        //left = 0 
        //right = traverse(null) -> node.right = 0.right = 3 
            //MOVE TO 4a.
//Step 2c. 
        //right = 2 
        //count += 0 + 2 -> (0 + Math.abs(0) + Math.abs(2) = 2)
        //count = 2 
        //return left + right + node.val - 1 -> (0 + 2 + 0 - 1 = 1)
            //MOVE BACK TO 1b.


//Step 3
    //traverse([null])
        //node === false -> return 0 
            //MOVE TO STEP 2b.

//Step 4a.
    //traverse([3,null,null])
        //node === true 
        //left = traverse(null) -> node.left = 3.left = null
            //MOVE TO STEP 5 
//Step 4b. 
        //left = 0 
        //right = traverse(null) -> node.right = 3.right = null
            //MOVE TO STEP 6
//Step 4c. 
        //right = 0
        //count += 0 + 0 -> (0 + 0 + 0 = 0)
        //return left + right + node.val - 1 -> (0 + 0 + 3 - 1 = 2)
            //MOVE TO STEP 2c.


//Step 5 
    //traverse([null])
        //node === false -> return 0 
            //MOVET TO STEP 4b.
//Step 6 
    //traverse([null])
        //node === false -> return 0 
            //MOVET TO STEP 4c.

//Step 7a.
    //traverse([0,null,null])
        //node === true 
        //left = traverse(null) -> node.left = 0.left = null
            //MOVE TO STEP 8
//Step 7b. 
        //left = 0 
        //right = traverse(null) -> node.right = 0.right = null
            //MOVE TO STEP 9
//Step 7c. 
        //right = 0 
        //count += 0 + 0 -> (2 + 0 + 0 = 2)
        //return left + right + node.val - 1 -> (0 + 0 + 0 - 1 = -1)
            //MOVE TO STEP 1c.

//Step 8
    //traverse([null])
         //node === false -> return 0 
            //MOVE TO STEP 7b.

//Step 9
    //traverse([null])
        //node === false -> return 0 
            //MOVE TO STEP 7c.