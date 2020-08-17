/*

108. Convert Sorted Array to Binary Search Tree

Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (!nums.length) return null;
    
    const mid = Math.floor(nums.length / 2);
    const root = new TreeNode(nums[mid]);
    
    root.left = sortedArrayToBST(nums.slice(0, mid));
    root.right = sortedArrayToBST(nums.slice(mid + 1));
    
    return root;
};

//sATBST -> Sorted Array To BST
//Input: [-10,-3,0,5,9]

//Step 1a. 
    //nums = [-10,-3,0,5,9]
    //nums.length === true
    //mid = Math.floor(5 / 2) = 2
    //root = new TreeNode(0) -> nums[2] = 0

    //root.left = sATBST(nums.slice(0,2)) -> sATBST([-10,-3])
        //MOVE TO STEP 2a.
//Step 1b.
    //root.left = [-3,-10,null]
    //root.right = sATBST(nums.slice(2 + 1)) -> sATBST([5,9])
        //MOVE TO STEP 7a.
//Step 1c. 
    //root.right = [9,5,null]
    //return root -> [0,-3,9,-10,null,5]
    //Looks like 0
    //          / \
    //        -3   9
    //        /   /
    //      -10  5



//Step 2a. 
    //nums = [-10,3]
    //nums.length === true
    //mid = Math.floor(2 / 2) = 1
    //root = new TreeNode(-3) -> nums[1] = -3
    
    //root.left = sATBST(nums.slice(0,1)) -> sATBEST([-10])
        //MOVE TO STEP 3
//Step 2b.
    //root.left = [-10,null,null]
    //root.right = sATBST(nums.slice(1 + 1)) -> sATBST([])
        //MOVE TO STEP 6.
//Step 2c.
    //root.right = null
    //return root -> [-3,-10,null]
    //Looks like -3
    //           / \
    //         -10 null
        //MOVE TO STEP 1b.


//Step 3a.
    //nums = [-10]
    //nums.length === true
    //mid = Math.floor(1 / 2) = 0
    //root = new TreeNode(-10) -> nums[0] = -10

    //root.left = sATBST(nums.slice(0,0)) -> sATBST([])
        //MOVE TO STEP 4.
//Step 3b.
    //root.left = null
    //root.right = sATBST(nums.slice(0+1)) -> sATBST([])
        //MOVE TO STEP 5.
//Step 3c.
    //root.right = null 
    //return root 
        //MOVE TO STEP 2b.

//Step 4.
    //nums = []
    //nums.length === false -> return null 
        //MOVE TO STEP 3b.

//Step 5. 
    //nums = []
    //nums.length === false -> return null
        //MOVE TO STEP 3c.

//Step 6.
    //nums = []
    //nums.length === false -> return null
        //MOVE TO STEP 2c.

//Step 7a.
    //nums[5,9]
    //nums.length === true
    //mid = Math.floor(2 / 2) = 1
    //root = new TreeNode(9) -> nums[1] = 9

    //root.left = sATBST(nums.slice(0,1)) -> sATBST([5])
        //MOVE TO STEP 8.
//Step 7b. 
    //root.left = [5,null,null]
    //root.right = sATBST(nums.slice(1 + 1)) -> sATBST([])
        //MOVE TO STEP 11
//Step 7c. 
    //root.right = null
    //return root -> [9,5,null]
        //MOVE TO 1c.

//Step 8a.
    //nums = [5]
    //nums.length === true 
    //mid = Math.floor(1 / 2) = 0
    //root = new TreeNode(5) -> nums[0] = 5

    //root.left = sAtBST(nums.slice(0,mid)) -> sATBST([])
        //MOVE TO STEP 9.
//Step 8b.
    //root.left = null
    //root.right = sATBST(nums.slice(0+1)) -> sATBST([])
        //MOVE TO STEP 10.
//Step 8c. 
    //root.right = null 
    //return root -> [5,null,null]
        //MOVE TO 7b.

//Step 9.
    //nums = []
    //nums.length === false -> return null
        //MOVE TO STEP 8b.

//Step 10.
    //nums = []
    //nums.length === false -> return null
        //MOVE TO STEP 8c.

//Step 11.
    //nums = []
     //nums.length === false -> return null
        //MOVE TO STEP 7c.


    