/*
895. Maximum Frequency Stack
Implement FreqStack, a class which simulates the operation of a stack-like data structure.

FreqStack has two functions:

push(int x), which pushes an integer x onto the stack.
pop(), which removes and returns the most frequent element in the stack.
If there is a tie for most frequent element, the element closest to the top of the stack is removed and returned.
 

Example 1:

Input: 
["FreqStack","push","push","push","push","push","push","pop","pop","pop","pop"],
[[],[5],[7],[5],[7],[4],[5],[],[],[],[]]
Output: [null,null,null,null,null,null,null,5,7,5,4]
Explanation:
After making six .push operations, the stack is [5,7,5,7,4,5] from bottom to top.  Then:

pop() -> returns 5, as 5 is the most frequent.
The stack becomes [5,7,5,7,4].

pop() -> returns 7, as 5 and 7 is the most frequent, but 7 is closest to the top.
The stack becomes [5,7,5,4].

pop() -> returns 5.
The stack becomes [5,7,4].

pop() -> returns 4.
The stack becomes [5,7].

*/



var FreqStack = function() {
    this.counts = {}
    this.map = {}
    this.max = 0
};

/** 
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function(x) {
    //map out the counts for each number
    if(!this.counts[x]){
        this.counts[x] = 1
    } else {
        this.counts[x] += 1 
    }
    //keep track of the max count
    this.max = Math.max(this.max, this.counts[x])

    //make an array for each count and then keep track of the order of numbers with those specific counts
    if(this.counts[x]){
        if(!this.map[this.counts[x]]){
             this.map[this.counts[x]] = []
        } 
        this.map[this.counts[x]].push(x)
    }
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
   //we take the last number from the max count array, decrement the count of that number, and if the array is empty it means there are no more numbers with that count and we need to decrement our max count
   let num = this.map[this.max].pop()
   this.counts[num] -= 1 
   if(this.map[this.max].length === 0){
       this.max -= 1 
   }
   return num
    
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 */