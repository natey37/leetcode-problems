/*
19. Remove Nth Node From End of List

Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummyHead = new ListNode(0)
    dummyHead.next = head 
    let slow = dummyHead 
    let fast = dummyHead 
    
    for(let i=0; i<=n; i++){
        fast = fast.next 
    }
    
    while(fast){
        fast = fast.next 
        slow = slow.next 
    }
    
    slow.next = slow.next.next 
    return dummyHead.next
};