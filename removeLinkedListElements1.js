/*
203. Remove Linked List Elements
Remove all elements from a linked list of integers that have value val.

Example:

Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5

*/

/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    //time complexity O(n), need to check every node in our linked list 
    //space complexity O(1)
    let dummyHead = new ListNode(0)
    dummyHead.next = head 
     
     let curr = dummyHead
     
     while(curr.next){
         if(curr.next.val === val){
             curr.next = curr.next .next
         } else {
             curr = curr.next
         }
     }
     return dummyHead.next
 };
 
 