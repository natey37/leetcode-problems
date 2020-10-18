/*
102. Binary Tree Level Order Traversal
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let map = {}
    const dfs = (node, level) => {
        if(!node) return 
        
        if(!map[level]){
            map[level] = [node.val]
        } else {
            map[level].push(node.val)
        }
        
        dfs(node.left, level + 1)
        dfs(node.right, level + 1)
    }
    
    dfs(root, 1)
    return Object.values(map)
};

var levelOrder = function(root) {
    let queue = [[root, 0]]
    let order = []
    
    while (queue.length) {
        const [node, depth] = queue.shift();
        if (!node) {
            continue;
        }
        while (order.length === depth) {
            order.push([]);
        }
        order[depth].push(node.val);
        queue.push([node.left, depth + 1]);
        queue.push([node.right, depth + 1]);
    }
    return order;
};

/*
First we will initialize a queue and add our root node and the depth level which is 0. We also will initialize an order array that will contain our results. We set a while loop that will run as long as the queue is not empty. First we will shift the first element in the queue and initialize two variables, from this element, the node and the depth. If we encounter a null node we will continue. We will set a while loop that will add an empty array in the order array for each depth level we encounter. Then we add our current nodes value into the corresponding depth array in our order array. Next we add each the left and the right nodes with their corresponding depths to the queue. This continues until the queue is empty and the order array contains our answer. 
*/

/*
Input: [3,9,20,null,null,15,7]

queue = [[3,9,20,null,null,15,7]]
order = []

while(queue.length)
    [[3,9,20,null,null,15,7], 0] = queue.shift()

    while(order.length === 0)
        order.push([]) -> order = [[]]

    order[0].push(3) -> order = [[3]]
    queue.push([9], 1)
    queue.push[20,15,7, 1] -> queue = [[[9],1], [[20,15,7],1]]

while(queue.length)
    [[9],1] = queue.shift()

    while(order.length === 1)
        order.push([]) -> order = [[3],[]]

    order[1].push(9) -> order = [[3],[9]]
    queue.push([null],2)
    queue.push([null],2) -> queue = [[[20,15,7],1], [[null],2], [[null],2]]

while(queue.length)
    [[20,15,7],1] = queue.shift()

    order[1].push(20) -> order = [[3],[9,20]]
    queue.push([15],2)
    queue.push([7],2) -> queue = [[[null],2], [[null],2], [[15],2], [[7],2]]

while(queue.length)
    [[null], 2] = queue.shift() -> queue = [[null],2], [[15],2], [[7],2]]

    if(!node) continue;

while(queue.length)
    [[null], 2] = queue.shift() -> queue = [[[15],2], [[7],2]]
    
    if(!node) continue;

while(queue.length)
    [[15],2] = queue.shift()

    while(order.length === 2)
        order.push([]) -> order = [[3], [9,20], []]

    order[2].push(15) -> order = [[3], [9,20], [15]]
    queue.push[[null],3]
    queue.push[[null],3] -> queue = [[[7],2], [[null],3], [[null],3]]

while(queue.length)
    [[7],2] = queue.shift()

    order[2].push(7) -> order = [[3], [9,20], [15, 7]]
    queue.push[[null],3]
    queue.push[[null],3] -> queue = [[[null],3], [[null],3], [[null],3], [[null],3]]

The rest of our queue is filled with null nodes so we will hit our continue everytime we shift() until we have an empty queue array in which case the while loop ends, then we return our order array 

order = [[3], [9,20], [15,7]]

*/