/*
82. Remove Duplicates from Sorted List II
Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

Return the linked list sorted as well.

Example 1:

Input: 1->2->3->3->4->4->5
Output: 1->2->5
Example 2:

Input: 1->1->1->2->3
Output: 2->3
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
var deleteDuplicates = function(head) {
    let dummyHead = new ListNode(0)
    dummyHead.next = head 
    let curr = dummyHead
    
    while(curr.next && curr.next.next){
        if(curr.next.val === curr.next.next.val){
            let val = curr.next.val
            while(curr.next && curr.next.val === val){
                curr.next = curr.next.next
            }
        } else {
            curr = curr.next
        }
    }
    return dummyHead.next
};


