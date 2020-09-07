/*
116. Populating Next Right Pointers in Each Node
You are given a perfect binary tree where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

 
*/


/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/*
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {

    //DFS SOLUTION 

    //      const traverse = (node) => {
    //         if(node === null || node.left === null) return node
            
    //         node.left.next = node.right
    //         node.right.next = node.next ? node.next.left : null
            
    //         traverse(node.left)
    
    //         traverse(node.right)
    //         return node
    //     }
    //     traverse(root)
    //     return root


        //BFS SOLUTION
        if(!root) return root
        let queue = [root]
        while(queue.length){
            let next = []
            
            for(let i=0; i<queue.length; i++){
                let node = queue[i]
                let nextNode = queue[i+1] || null
                
                node.next = nextNode
                
                if(node.left){
                    next.push(node.left)
                    next.push(node.right)
                }
            }
            queue = next
        }
        return root
        
    };