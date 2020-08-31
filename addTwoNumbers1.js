/*
2. Add Two Numbers
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

  //seperate both linked lists into arrays
    let number1 = []
    while(l1){
        number1.push(l1.val)
        l1 = l1.next
    }
    let number2 = []
    while(l2){
        number2.push(l2.val)
        l2 = l2.next
    }
    //sum the two arrays
    let sum = BigInt(number1.reverse().join('')) + BigInt(number2.reverse().join(''))
    let sumString = sum.toString().split('').reverse()
  
   //create a new linked list out of the sumString array
    const createLinkedList = function(array) {
        var head = new ListNode(parseInt(array[0]));
        tail = head;
        array.shift();
        while(array.length) {
            var newNode = new ListNode(parseInt(array[0]));
            tail.next = newNode;
            tail = newNode;
            array.shift();
        }
        return head;
    }
    
    return createLinkedList(sumString)
  
};

//[7,0,8]
//Step 1 
    //createLinkedList([7,0,8])
        //head = new ListNode(7)
        //tail = [7]
        //array.shift() -> 7
        //while([0,8].length)
            //newNode = new ListNode(0)
            //[7].next = [0]
            //tail = [0]
            //array.shift() -> 0
//Step 2 
        //while([8])
            //newNode = new ListNode(8)
            //[0].next = [8]
            //tail = [8]
            //array.shift() -> 8
//Step 3 
        //while([]) -> return
//Step 4
        //return head -> [7,0,8]