/*
143. Reorder List

Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example 1:

Given 1->2->3->4, reorder it to 1->4->2->3.
Example 2:

Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    var stack =[];
    while(head){
        stack.push(head);
        head = head.next;
    }
    var head = stack[0];
    while(stack.length>0){
        var n = stack.pop();
        if(stack.length>0){
            stack.shift().next=n;
            n.next=(stack.length>0)?stack[0]:null;
        }else{
            n.next = null;
        }
    }
};