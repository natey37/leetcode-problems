/*
1027. Longest Arithmetic Subsequence

Given an array A of integers, return the length of the longest arithmetic subsequence in A.

Recall that a subsequence of A is a list A[i_1], A[i_2], ..., A[i_k] with 0 <= i_1 < i_2 < ... < i_k <= A.length - 1, and that a sequence B is arithmetic if B[i+1] - B[i] are all the same value (for 0 <= i < B.length - 1).

 

Example 1:

Input: A = [3,6,9,12]
Output: 4
Explanation: 
The whole array is an arithmetic sequence with steps of length = 3.
Example 2:

Input: A = [9,4,7,2,10]
Output: 3
Explanation: 
The longest arithmetic subsequence is [4,7,10].
Example 3:

Input: A = [20,1,15,3,10,5,8]
Output: 4
Explanation: 
The longest arithmetic subsequence is [20,15,10,5].
*/

/*
 * @param {number[]} A
 * @return {number}
 */
var longestArithSeqLength = function(A) {
    let dp = []
    dp[0] = {}
    
    let max = 0 
    
    for(let i=1; i<A.length; i++){
        let newHash = {}
        
        for(let j=0; j<i; j++){
            let diff = A[i] - A[j]
            let prev = dp[j]
            let length = (prev[diff] || 1) + 1
        
            newHash[diff] = length
            
            max = Math.max(max, newHash[diff])
        }
        console.log(newHash)
        dp[i] = newHash
        console.log(dp)
    }
    return max
};

//Example [3,6,9,12]

//Step 1.
    //longestArithSeqLength([3,6,9,12])
        //dp = []
        //dp[0] = {}

        //max = 0

        //for(i=1;i<4;i++) 
            //newHash = {}

            //for(j=0;j<1;j++) 
                //diff = 6 - 3 
                //prev = {}
                //length = 1 + 1 
                //newHash[3] = 2
                //max = newHash[diff] = 2 
        
            //dp[i] = newHash
//Step 2.
        //for(i=2;i<4;i++)
            //newHash = {}

            //for(j=0;j<2;j++)
                //diff = 9 -3
                //prev = {}
                //length = 1 + 1 
                //newHash[6] = 2
                //max = max = 2 

            //for(j=1;j<2;j++)
                //diff = 9 - 6
                //prev = {3:2}
                //length = 2 + 1
                //newHash[3] = 3
                //max = newHash[diff] = 3

//Step 3
        //for(i=3;i<4;i++)
            //newHash = {}

            //for(j=0;j<3;j++)
                //diff = 12 - 3
                //prev = {}
                //length = 1 + 1
                //newHash[9] = 2
                //max = max

            //for(j=1;j<3;j++)
                //diff = 12 - 6 
                //prev = {3:2}
                //length = 1 + 1
                //newHash[6] = 2 
                //max = max

            //for(j=2;j<3;j++)
                //diff = 12 - 9
                //prev = {3:3,6:2}
                //length = 3 + 1
                //newHash[3] = 4 
                //max = newHash[3] = 4

//We then return our max, which is equal to our longest subsequence
