/*
92. Reverse Linked List II

Reverse a linked list from position m to n. Do it in one-pass.

Note: 1 ≤ m ≤ n ≤ length of list.

Example:

Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let dummyhead = {next: head}
    let prev = dummyhead
    for(let i= 0; i< m-1; i++){
        prev = prev.next
    }
    let cur = prev.next
    for(let j=0; j<n-m; j++){
        let next = cur.next
        cur.next = next.next
        next.next = prev.next 
        prev.next = next
    } 
    return dummyhead.next
};