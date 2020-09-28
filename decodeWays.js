/*
91. Decode Ways

A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given a non-empty string containing only digits, determine the total number of ways to decode it.

Example 1:

Input: "12"
Output: 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).
Example 2:

Input: "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
*/


/*
 * @param {string} s
 * @return {number}
 */

//time complexity - O(n)
//space complexity - O(n)
var numDecodings = function(s) {
    let dp = new Array(s.length+1).fill(0)
    dp[0] = 1 
    for(let i=1;i<=s.length;i++){
        let option1 = +s.slice(i-1, i)
        let option2 = +s.slice(i-2, i)
        if(option1 > 0) dp[i] = dp[i-1]
        if(option2 >= 10 && option2 <= 26) dp[i] += dp[i-2]
    }
    return dp[s.length]
};

//Example: 30 (Edge case)
//dp = [0, 0, 0] (length of our array is n + 1 because we need to initialize the array with how many ways we can make an empty string)
//dp[0] = 1 (one way to make to make '')
//now we can iterate through our string
//check 3, how many ways can we make 3 ? 
    //there is only 1 way to make 3
    //update our dp[1] = dp[0] (which updates our dp array to signify that at position 1 in our string there is one way to make the number up to this ith point)
//since this is the FIRST number there cannot be a two digit number
//check 0, how many ways can we 0 ?
    //IF THE NUMBER IS ZERO then there is no possible way to make zero and we skip it
//check 30, how many ways can we make 30 ?
    //IF THE NUMBER IS ABOVE 26 then there is no possible way to make the number and we skip it 
    //we never updated our dp array at position 2, so we return 0, representing the number of ways to make 30

//Example: 226
//numDecodings = functions("226")
    //dp = [0,0,0,0]
    //dp[0] = 1 -> [1,0,0,0]
    //for(let i=1;i<=3;i++)
        //option1 = 2 (B)
        //option2 = ""

        //if(option1 > 0) -> true
            //how many ways can we make 2 ? 
            //1 way, just as we could make an empty string 1 way, we set our dp[i] equal to the previous number of ways we could make a single digit letter. In this case we haven't seen a digit yet but our empty string stands as a placeholder for what a single digit letter represents 
            //dp[1] = dp[1-1] -> dp = [1,1,0,0]
        //if(option2 >= 10) -> false

        //So far we have decoded 1 way, we can B

    //for(let i=2;i<=3;i++)
        //option1 = 2 (B)
        //option2 = 22 (V)

        //if(option1 > 0) -> true
            //again how many ways can we make 2 ?
            //1 way, so we set dp[i] equal to the previous number of ways we could make single digit letters. 
            //We previously could make B from 2, now we can make B B from 22. These are essentially equivalent as far as how many ways we can make a sequence from single digit numbers. 
            //dp[2] = dp[2-1] -> dp = [1,1,1,0]
        //if(option2 >= 10 && option2 <=26) -> true
            //how many ways can we make 22 ?
            //well we can make 22 the number of ways we could make two digit letters plus the number of ways we could make one digit letters. In this case we haven't seen a two digit letter yet but our empty string stands as a placeholder for what a two digit letter represents. So we can make 22 the number of ways we could make 2 individually which we just saw is 1 and add on how many ways we can make a two digit number which is also 1. So there are two ways thus far to decode the number 22. Either 2 2 or 22
            //dp[2] += dp[2-2] -> dp = [1,1,2,0]

            //so far we have decoded 2 ways, we can make B B or V
        
    //for(let i=3;i<=3;i++)
        //option1 = 6 (F)
        //option2 = 26 (Z)

        //if(option1 > 0) -> true 
            //again how many ways can we make 6 ?
            //1 way, so we set dp[i] equal to the previous number of ways we could make single digit letters, which is represented by dp[i-1]
            //We have added another letter so now we can make B B F or we can make V F 
            //dp[3] = dp[3-1] -> dp = [1,1,2,2]
        //if(option2 >= 10 && option2 <= 26)
            //how many ways can we make 26 ?
            //1 way, so we need to add on to our total number of ways. This will be represented by dp[i-2]. If we look back up, we see that now index 1 represents how many ways we could make two digit letters (dp[1] = 1, represents the 1 way we could make 22 (V), dp[2] = 2 represents the 2 ways we could make B B and V)
            //We have added another possible two digit letter so now we have another possible combination with the first digit we saw, in this case 2 (B), so we now have the option of B Z or B B F or V F
            //dp[3] += dp[3-2] -> dp = [1,1,2,3]

            //so far we have decoded 3 ways, we make B B F or B Z or V F

    //return dp[3] = 3 
    //It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).