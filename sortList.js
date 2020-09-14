/*
148. Sort List

Sort a linked list in O(n log n) time using constant space complexity.

Example 1:

Input: 4->2->1->3
Output: 1->2->3->4
Example 2:

Input: -1->5->3->4->0
Output: -1->0->3->4->5
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
function sortList (head) {
    if(!head || !head.next) return head
    let fast = head 
    let slow = head 
    while(fast.next && fast.next.next){
        fast = fast.next.next 
        slow = slow.next 
    }
    let middle = slow.next
    slow.next = null
    return merge(sortList(head), sortList(middle))
};

const merge = (left, right) => {
    let dummyHead = new ListNode(0)
    let temp = dummyHead 
    while(left && right){
        temp.next = (left.val < right.val) ? left : right 
        temp = temp.next 
        if(left.val < right.val){
            left = left.next 
        } else {
            right = right.next
        }
    }
    if(left) temp.next = left 
    if(right) temp.next = right
    return dummyHead.next
}
