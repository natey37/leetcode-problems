/*
206. Reverse Linked List

Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
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
 * @return {ListNode}
 */
var reverseList = function(head) {
    if(!head || !head.next){
        return head
    } 
    
    let current_head = head.next 
    let new_head = head 
    new_head.next = null 
    
    while(current_head){
        let curr = current_head 
        current_head = current_head.next 
        curr.next = new_head
        new_head = curr
    }
     return new_head
};