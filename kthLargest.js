/*
703. Kth Largest Element in a Stream

Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Your KthLargest class will have a constructor which accepts an integer k and an integer array nums, which contains initial elements from the stream. For each call to the method KthLargest.add, return the element representing the kth largest element in the stream.

Example:

int k = 3;
int[] arr = [4,5,8,2];
KthLargest kthLargest = new KthLargest(3, arr);
kthLargest.add(3);   // returns 4
kthLargest.add(5);   // returns 5
kthLargest.add(10);  // returns 5
kthLargest.add(9);   // returns 8
kthLargest.add(4);   // returns 8
*/

/*
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k 
    this.nums = nums.sort((a,b) => b - a)
};

/*
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    let l = this.nums.length
    if(l === 0){
        this.nums.push(val)
        return val
    }
    for(let i=0; i<l;i++){
        if(val > this.nums[i]){
            this.nums.splice(i,0,val)
            break
        }
        if(i > this.k){
            return this.nums[this.k - 1]
        }
        if(i === l-1){
            this.nums.push(val);
            break;
        }
    }
    return this.nums[this.k - 1];

};