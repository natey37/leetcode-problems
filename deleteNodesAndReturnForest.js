/*
1110. Delete Nodes And Return Foresultt

Given the root of a binary tree, each node in the tree has a distinct value.

After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees).

Return the roots of the trees in the remaining forest.  You may return the result in any order.

 

Example 1:



Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]
Output: [[1,2,null,4],[6],[7]]
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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
    let result = [],
    
    const solve = (node, add) => {
        if(node == null) return null
        
        if(to_delete.includes(node.val)) {
            if(node.left) solve(node.left, true)
            if(node.right) solve(node.right, true)
            node.left = null
            node.right = null
            return null
        } else {
            node.left = solve(node.left, false)
            node.right = solve(node.right, false)
            if(add) result.push(node)
            return node
        }
    }
    
    solve(root, true)
    return result
};

// delNodes([1,2,3,4,5,6,7], [3,5])

// tree
//                  1
//                 / \
//                2   3
//               / \ / \
//              4  5 6  7

// Step 1a.
//     solve([1,2,3,4,5,6,7], true)
//         root !== null 

//         if([3,5].includes(1)) -> false 
//         else
//         root.left = solve([2,4,5], false)
//             MOVE TO STEP 2a.
// Step 1b.
//         root.left = [2,4,null]
//         root.right = solve([3,6,7],false)
//             MOVE TO STEP 7a.
// Step 1c.
//         root.right = null 
//         if(add) add = true -> result.push([1,2,null,4])
//         result = [[6],[7],[1,2,null,4]]
//         return [1,2,null,4]
//             FINISH FUNCTION, EXIT
//                 We then return our result array 
//                 result = [[6],[7],[1,2,null,4]]


// Step 2a.
//     solve([2,4,5], false)
//         root !== null
            
//         if([3,5].includes(2)) -> false 
//         else 
//         root.left = solve([4], false)
//             MOVE TO STEP 3a.
// Step 2b.
//         root.left = [4]
//         root.right = solve([5], false)
//             MOVE TO STEP 6
// Step 2c.
//         root.right = null
//         if(add) -> false 
//         return root -> [2,4,null]
//             FINISH FUNCTION, MOVE BACK TO 1b.

// Step 3a.
//     solve([4], false)
//         root !== null

//         if([3,5].includes(4)) -> false 
//         else 
//         root.left = solve(null, false)
//             MOVE TO STEP 4
// Step 3b.  
//         root.left = null 
//         root.right = solve(null, false)
//             MOVE TO STEP 5
// Step 3c.
//         root.right = null
//         if(add) -> add = false 
//         return root -> [4]
//             FINISH FUNCTION, MOVE BACK TO 2b.


// Step 4.
//     solve(null, false)
//         root === null -> return null 
//             MOVE BACK TO 3b.
// Step 5.       
//     solve(null, false)
//         root === null -> return null 
//             MOVE BACK TO 3c.


// Step 6.
//     solve([5], false)
//         root !== null
            
//         if([3,5].includes(5) -> true 
//             if(5.left) -> false
//             if(5.right) -> false 
//             5.left = null
//             5.right = null
//             return null
//                 FINISH FUNCTION, MOVE BACK TO 2c.

// Step 7a.
//     root.right = solve([3,6,7],false)
//         root !== null
//         if([3,5].includes(3)) -> true
//             if(3.left) -> solve([6], true)
//                 MOVE TO STEP 8a.
// Step 7b.  
//             if(3.right) -> solve([7], true)
//                 MOVE TO STEP 11a.
// Step 7c.      
//             3.left = null
//             3.right = null
//             return null
//                 FINISH FUNCTION, MOVE BACK TO 1c.

// Step 8a
//     solve([6], true)
//         root !== null
//         if([3,5].includes(6)) -> false
//         else
//         root.left = solve(null, false)
//             MOVE TO STEP 9
// Step 8b.
//         root.left = null
//         root.right = solve(null, false)
//             MOVE TO STEP 10
// Step 8c.
//         root.right = null
//         if(add) add = true -> result.push([6])
//         result = [[6]]
//         return [6]
//             FINISH FUNCTION, MOVE BACK T0 7b.

    
// Step 9
//     solve(null, false)
//         root === null -> return null
//             MOVE BACK TO 8b.
// Step 10
//     solve(null, false)
//         root === null -> return null
//             MOVE BACK TO 8c.


// Step 11a.
//     solve([7], true)
//         root !== null 

//         if([3,5].includes(7)) -> false
//         else
//         root.left = solve(null, false)
//             MOVE TO STEP 12
// Step 11b.
//         root.left = null
//         root.right = solve(null, false)
//             MOVE TO STEP 13
// Step 11c.
//         root.right = null 
//         if(add) add = true -> result.push([7])
//         result = [[6], [7]]
//         return [7]
//             FINISH FUNCTION, MOVE BACK TO 7c.


// Step 12
//     solve(null, false)
//         root === null -> return null
//             MOVE BACK TO 11b.
// Step 13
//     solve(null, false)
//         root === null -> return null
//             MOVE BACK TO 11c.









