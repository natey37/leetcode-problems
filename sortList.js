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


//Example 2:

//Input: -1->5->3->4->0
//Output: -1->0->3->4->5


//Step 1a. 
    //sortList([-1->5->3->4->0])
        //if(!head || !head.next) -> false 

        //fast = [-1->5->3->4->0]
        //slow = [-1->5->3->4->0]

        //while(fast.next && fast.next.next) -> [5->3->4->0] && [3->4->0], true 
            //fast = [3->4->0]
            //slow = [5->3->4->0]

        //middle = slow.next -> [3->4->0]
        //slow.next = null -> [5->null]
        //merge(sortedList([-1,5]), sortedList([3->4->0]))
            //MOVE TO STEP 2a.
//Step 1b.
        //merge([-1,5], sortedList([3->4->0]))
            //MOVE TO STEP 4a.

//Step 1c.
        //merge([-1,5], [0->3->4])
            //MOVE TO STEP 10
//Step 1d.
        //merge([-1,5], [0->3->4]) = [-1 -> 0 -> 3 -> 4 -> 5]

//Step 2a. 
    //sortedList([-1->5])
        //if(!head || !head.next) -> false 

        //fast = [-1->5]
        //slow = [-1->5]

        //while(fast.next && fast.next.next) -> [5] && null, false
            
        //middle = slow.next -> [5]
        //slow.next = null -> [null]
        //merge(sortList([-1]), sortedList([5]))
            //MOVE TO STEP 3a.
//Step 2b.
        //merge([-1], [5])
            //dummyHead = new ListNode(0)
            //temp = dummyHead

            //while(left && right)
            //temp.next = (left.val < right.val) ? left : right -> -1 < 5, true -> [-1]
            //temp = temp.next -> [-1]

                //if(-1 < 5) -> true 
                    //left = left.next -> [null]

            //if(left) -> false 
            //if(right) -> temp.next = [5]
            //return dummyHead.next -> [-1, 5]

                //MOVE BACK TO 1b.

//Step 3a. 
    //sortedList([-1]) 
        //if(!head || !head.next) -> true 
            //return head -> [-1]

    //sortedList([5])
        //if(!head || !head.next) -> true 
            //return head -> [5]

        //MOVE BACK TO STEP 2b.

//Step 4a.
    //sortedList([3->4->0])
        //if(!head || !head.next) -> false 

        //fast = [3->4->0]
        //slow = [3->4->0]

        //while(fast.next && fast.next.next) -> [4->0] && [0], true
            //fast = [0]
            //slow = [4->0]
        
        //middle = [0]
        //slow.next = null -> [4->null]

        //merge(sortedList([3->4]), sortedList([0]))

            //MOVE TO STEP 5

//Step 4b.
        //merge([3->4], sortedList[0])
            //MOVE TO STEP 8

//Step 4c.
        //merge([3->4], [0])
            //MOVE TO STEP 9a.

//Step 5a.
    //sortedList([3->4])
        //if(!head || !head.next) -> false 
            //fast = [3->4]
            //slow = [3->4]
        
        //while(fast.next && fast.next.next) -> [4] && null, false

        //middle = [4]
        //slow.next = null -> [null]
        //merge(sortedList([3]), sortedList([4]))

            //MOVE TO STEP 6

//Step 5b.
        //merge([3], [4])
            //MOVE TO STEP 7a.

//Step 6
    //sortedList([3])
        //if(!head || !head.next) -> true
            //return [3] 

    //sortedList([4])
        //if(!head || !head.next) -> true
            //return [4] 
        
        //MOVE BAK TO STEP 5b.

//Step 7a.
    //merge([3], [4])
        //dummyHead = new ListNode(0)
            //temp = dummyHead

            //while(left && right) -> [3], [4]
            //temp.next = (left.val < right.val) ? left : right -> 3 < 4, true -> [3]
            //temp = temp.next -> [3]

                //if(3 < 4) -> true 
                    //left = left.next -> [null]

            //if(left) -> false 
            //if(right) -> temp.next = [4]
            //return dummyHead.next -> [3, 4]

                //MOVE BACK TO 4b.

//Step 8.
    //sortedList([0])
        //if(!head || !head.next) -> false 
            //return head -> [0]
        
        //MOVE BACK TO STEP 4c.


//Step 9a.
    //merge([3,4], [0])
        //dummyHead = new ListNode(0)
        //temp = dummyHead

        //while(left && right) -> [3->4], [0]
            //temp.next = (left.val < right.val) ? left : right -> 3 < 0, false -> [0]

            //if(3 < 0) -> false 
            //else 
                //right = right.next -> null

        //if(left) temp.next = left -> [0 -> 0 -> 3 -> 4]
        //if(right) -> false 
        //return dummyHead.next -> [0 -> 3 -> 4]

            //MOVE BACK TO STEP 1c.
                
//Step 10
    //merge([-1,5], [0->3->4])
        //dummyHead = new ListNode(0)
        //temp = dummyHead 

        //while([-1,5] && [0->3->4])
            //temp.next = -1 < 0 -> true = [0 -> -1 -> 5]
            //temp = temp.next -> [-1 -> 5]
            
            //if(-1 < 0)
                //left = left.next -> [5]
            
        //while([5] && [0->3->4])
            //temp.next = 5 < 0 -> false = [0->3->4] -> temp = [0 -> -1 -> 0 -> 3 -> 4]
            //temp = temp.next -> [0 -> 3 -> 4]

            //if(5 < 0) -> false 
            //else 
                //right = right.next -> [3->4]

        //while([5] && [3->4])
            //temp.next = 5 < 3 -> false = [3->4] -> temp = [0 -> -1 -> 0 -> 3 -> 4]
                //temp = temp.next -> [3 -> 4]]

            //if(5 < 3) -> false 
            //else 
                //right = right.next -> [4]

        //while([5] && [4])
            //temp.next = 5 < 4 -> false = [4] -> temp = [0 -> -1 -> 0 -> 3 -> 4]
                //temp = temp.next -> null

            //if(5 < 4)
            //else 
                //right = right.next -> null

        //while([5] && []) -> false 

        //if(left) temp.next = [5] -> temp = [0 -> -1 -> 0 -> 3 -> 4 -> 5]
        //if(right) -> false
        //return dummyHead.next -> [-1 -> 0 -> 3 -> 4 -> 5]

            //MOVE BACK TO STEP 1d.