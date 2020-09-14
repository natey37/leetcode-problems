/*
Visible Tree Node
In a binary tree, a node is considered "visible" if no node on the root-to-itself path has a greater value. The root is always "visible" since there are no other nodes between the root and itself. Given a binary tree, count the number of "visible" nodes.
*/

function visible_tree_node(root) {
    
    const dfs = (node, max) => {
        if(!node) return 0
        let count = 0
        
        if(node.val > max) count++
        
        count += dfs(node.left, Math.max(max, node.val))
        count += dfs(node.right, Math.max(max, node.val))
        
        return count
    }
    
    return dfs(root, -Infinity)
}