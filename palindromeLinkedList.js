/*
234. Palindrome Linked List

Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false

Example 2:

Input: 1->2->2->1
Output: true
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
* @return {boolean}
*/
const reverse = (thing) => {
   let cur = thing
   let prev = null
   while(cur){
       let next = cur.next
       cur.next = prev
       prev = cur
       cur = next
   }
   return prev
}
var isPalindrome = function(head) {
   let fast = head
   let slow = head
   while(fast && fast.next){
       fast = fast.next.next
       slow = slow.next
   }
   fast = head
   slow = reverse(slow)
   while(slow){
       if(fast.val === slow.val){
           fast = fast.next
           slow = slow.next
       } else{
           return false
       }
   }
   return true
};

/*
1->2->3->4

cur = 1 
prev = null

while 1 
    next = 2 
    1.next = null
    prev = 1->null
    cur = 2

while 2 
    next = 3 
    2.next = 1->nill
    prev = 2->1->null
    cur = 3 

while 3 
    next = 4 
    3.next = 2->1->null
    prev = 3->2->1->null
    cur = 4

while 4 
    next = null
    4.next = 3->2->1->null
    prev = 4->3->2->1
    cur = null 

return prev (4->3->2->1)



*/