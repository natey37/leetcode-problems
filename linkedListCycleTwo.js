/*
142. Linked List Cycle II
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Notice that you should not modify the linked list.

Follow up:

Can you solve it using O(1) (i.e. constant) memory?

 

Example 1:


Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.
Example 2:


Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.
Example 3:


Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/*
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast = head
    let slow = head
    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
        if(fast === slow) break;
    }
    
    if(!fast || !fast.next) return null
    
    while(head != slow){
        if(head === slow) return slow
        head = head.next
        slow = slow.next
    }
    return slow
};

//Example: head = [3,2,0,-4], pos = 1
//the first while loop we find where slow and fast meet
//first iteration -> fast = 0->-4
//                   slow = 2->0->-4
//second iteration -> fast =2->0->4
//                    slow = 0->-4
//third iteration -> fast = 4
//                   slow = 4
//This is confirmation that there is indeed a cycle in our linked list, but it does not tell us where the cycle begins.
//If our linked list is empty or has only one node then we return null because there is no cycle
//To find where the cycle begins we need to find where the head meets our slow 