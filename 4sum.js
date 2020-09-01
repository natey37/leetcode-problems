/*
18. 4Sum

Given an array nums of n integers and an integer target, are there elements a, b, c, and d in nums such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note:

The solution set must not contain duplicate quadruplets.

Example:

Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
*/


/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let results = []
    let sorted = nums.sort((a,b) => a - b > 0 ? 1 : -1)
    
    //anchor i 
    for(let i=0;i<sorted.length-3;i++){
        //anchor j
        for(let j=i+1;j<sorted.length-2;j++){

            //front represents the middle element between j and back
            let front = j + 1
            //back represents our right most element
            let back = sorted.length - 1
            
            while(front < back){
                let sum = sorted[i] + sorted[j] + sorted[front] + sorted[back]
                
                //if we find our target, add the result to the results array
                if(sum === target){
                    results.push([sorted[i], sorted[j], sorted[front], sorted[back]])
                    
                    //we do not want duplicate numbers, so if the number is the same, increment or decrement
                    while(sorted[front] === sorted[front+1]) front++
                    while(sorted[back] === sorted[back-1]) back --
                    
                    //we still need to loop through the rest of the numbers to see if there are more quadruplets with the anchors i, j
                    front++
                    back--
                    //if the sum is less than our target we know we need a larger number so move right in the array 
                } else if(sum < target){
                    front++
                    //if the sum is greater than our target we know we need a smaller number so we move left in the array
                } else {
                    back --
                }
                
            }
            //no duplicate sets, so if the number is the same we have already found that set 
            while(sorted[j] === sorted[j+1]) j++
        }
        //again no duplicate sets, so if the number is the same we have already found that set 
        while(sorted[i] === sorted[i+1]) i++
    }
    return results
};

//another solution

/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
        nums.sort((a,b) => a - b)
        let results = []
        
        function kthSum(arr, tar, res, k){
            if(k === 2){
                twoSum(arr, tar, res)
                return
            }
            
            for(let i = 0; i < arr.length - 1; i++) {
                while(arr[i] === arr[i-1]) i++;
                kthSum(arr.slice(i+1), tar - arr[i], [...res, arr[i]], k-1);
            }
        }
        
        function twoSum(arr, tar, res) {
            let low = 0, high = arr.length-1;
            
            while(low < high) {
                const sum = arr[low] + arr[high];
                if(sum == tar)  {
                    results.push([...res, arr[low], arr[high]]);
                    while(arr[low] === arr[low+1]) low++;
                    while(arr[high] === arr[high-1]) high--;
                    low++;
                    high--;
                } else if(sum < tar) low++;
                else high--;
            }
        }
        
        kthSum(nums, target, [], 4)
        return results
};
    

//Example nums = [1,0,-1,0,-2,2], target = 0

//Step 1a.
    //fourSum([1,0,-1,0,-2,2], 0)
        //nums = nums.sort = [-2,-1,0,0,1,2]
        //results = []

        //kthSum([-2,-1,0,0,1,2], 0, [], 4)
            //k = 2 -> false 
            
            //for(i=0;i<5;i++)
                //kthSum([-1,0,0,1,2], 0 - -2 = 2, [-2], 3)
                    //MOVE TO STEP 2a.

//Step 1b.
            //for(i=1;i<5;i++)
                //kthSum([0,0,1,2], 0 - -1 = 1, [-1], 3)
                    //MOVE TO STEP 6a.

//Step 1c.
            //for(i=2;i<5;i++)
                //kthSum([0,1,2], 0 - 0 = 0, [0], 3)
                    //MOVE TO STEP 10a.

//Step 1d.  
            //for(i=3;i<5;i++)
                //while(nums[i] === nums[i-1]) nums[i] = 0, nums[i-1] = 0 -> i++

//Step 1e.
            //for(i=4;i<5;i++)
                //kthSum([2], 0 - 1 = -1, [1], 3)

                //WE CAN STOP BECAUSE THERE WILL BE NO MORE SOLUTIONS POSSIBLE, SINCE OUR nums[i] > TARGET, THERE CANNOT POSSIBLY BE 4 NUMBERS THAT ADD TO THE TARGET

//Step 2a.
    //kthSum([-1,0,0,1,2], 2, [-2], 3)
        //k = 2 -> false 

        //for(i=0;i<4;i++)
            //kthSum([0,0,1,2], 2 - -1 = 3, [-2,-1], 2)
                //MOVE TO STEP 3a.

//Step 2b.
        //for(i=1;i<4;i++)
            //kthSum([0,1,2], 2 - 0 = 2, [-2, 0], 2)
                //MOVE TO STEP 4.

//Step 2c.
        //for(i=2;i<4;i++)
            //while(arr[2] === arr[2 - 1]) -> arr[2] = 0, arr[1] = 0 -> i++ = 3

//Step 2d.
        //for(i=3;i<4;i++)
            //kthSum([[2], 2 - 1 = 1, [-2, 1], 2])
                //MOVE TO STEP 5a.

//Step 2e.
        //for(i=4;i<4;i++) -> false, end for loop
        
            //MOVE BACK TO STEP 1b.

//Step 3.
    //kthSum([0,0,1,2], 3, [-2, -1], 2)
        //k = 2 -> true 
            //twoSum([0,0,1,2], 3, [-2,-1])
                //low = 0
                //high = 3

                //while 0 < 3
                    //sum = 0 + 2 

                    //3 = 2 -> false 
                    //2 < 3 -> low + 1 -> 0 + 1 = 1

//Step 3b.
                //low = 1
                //high = 3

                //while 1 < 3 
                    //sum = 0 + 2

                    //3 = 2 -> false 
                    //2 < 3 -> low + 1 -> 1 + 1 = 2

//Step 3c.      
                //low = 2
                //high = 3

                //while 2 < 3
                    //sum = 1 + 2 

                    //3 = 3 -> true 
                        //results.push([-2,-1,1,2]) -> results = [[-2,-1,1,2]]

                    //low + 1 -> 1 + 2 = 3
                    //high - 1 -> 3 - 1 = 2 
                
//Step 3d. 
                //while 3 < 2 -> false, exit

                //MOVE BACK TO STEP 2b.
    
//Step 4a.
    //kthSum([0,1,2], 2 - 0 = 2, [-2, 0], 2)
        //k = 2 -> true 
            //twoSum([0,1,2], 2, [-2,0])
                //low = 0
                //high = 2

                //while 0 < 2 

                //sum = 0 + 2 
                //2 = 2 -> true 
                    //results.push([-2,0,0,2]) -> results = [[-2,-1,1,2], [-2,0,0,2]]
                
                //low + 1 -> 0 + 1 = 1
                //high - 1 -> 2 - 1 = 1

//Step 4b.
            //while 1 < 1 -> false, exit 

            //MOVE BACK TO STEP 2c.

//Step 5a.
    //kthSum([[2], 2 - 1 = 1, [-2, 1], 2])
        //k = 2 -> true 
            //low = 0 
            //high = 0 

        //while low < high -> false, exit

            //MOVE BACK TO STEP 2e.

//Step 6a.
    //kthSum([0,0,1,2], 0 - -1 = 1, [-1], 3)
        //k = 2 -> false 
        
        //for(i=0;i<4;i++)
            //kthSum([0,1,2], 1 - 0 = 1, [-1,0], 2)
                //MOVE TO STEP 7a.

//Step 6b.
        //for(i=1;i<4;i++)
            //while(arr[i] === arr[i-1]) -> arr[i] = 0, arr[i-1] = 0 -> i++ = 2

//Step 6c.
        //for(i=2;i<4;i++)
            //kthSum([2], 1 - 1 = 0; [-1, 1], 2)
                //MOVE TO STEP 8a.
//Step 6d.
        //for(i=3;i<4;i++)
            //kthSum([], 1 - 2 = -1, [-1,2])
                //MOVE TO STEP 9a.
//Step 6e.
        //for(i=4;i<4;i++) -> false, exit 
            //MOVE BACK TO STEP 1c.

//Step 7a. 
    //kthSum([0,1,2], 1, [-1, 0], 2)
        //k = 2 -> true 
            //twoSum([0,1,2], 1, [-1,0])
                //low = 0 
                //high = 2

                //while 0 < 2 
                    //sum = 0 + 2 = 2 
                    
                    //1 = 2 -> false 
                    //sum > target -> 2 > 1 -> high-- -> high = 1

//Step 7b. 
                //while 0 < 1 
                    //sum = 0 + 1 = 1

                    //1 = 1 -> true 
                        //results.push([-1,0,0,1]) -> results = [[-2,-1,1,2], [-2,0,0,2], [-1,0,0,1]]

                    //low++ -> low = 1
                    //high-- -> high = 0

//Step 7c.
                //while(1 < 0) -> false, exit
                    //MOVE BACK TO 6b.

//Step 8a.
    //kthSum([2], 1 - 1 = 0; [-1, 1], 2)
        //k = 2 -> true 
        //twoSum([2], 0, [-1,1])
            //low = 0 
            //high = 0 

            //while low < high -> 0 < 0 -> false, exit
                //MOVE BACK TO STEP 6d.

//Step 9a.
    //kthSum([], -1, [-1,2], 2)
        //k = 2 -> true 
            //twoSum([], -1, [-1,2])
                //low = 0
                //high = -1

                //while low < high -> 0 < -1 -> false, exit 
                    //MOVE BACK TO STEP 6e.

//Step 10a.
    //kthSum([0,1,2], 0, [0], 3)
        //k = 2 -> false 

        //for(i=0;i<2;i++)
            //kthSum([1,2], 0 - 0 = 0, [0,0], 2)
                //MOVE TO STEP 11a.

//Step 11a.
    //kthSum([1,2], 0, [0,0], 2)
        //k = 2 -> true 
            //twoSum([1,2], 0, [0, 0])
                //low = 0 
                //high = 1

                //while 0 < 1
                    //sum = 1 + 2 

                    //0 = 3 -> false 
                    //3 > 0 -> high-- -> 0

//Step 11b. 
                //while 0 < 0 -> false, exit 
                    //MOVE BACK TO STEP 1d.

