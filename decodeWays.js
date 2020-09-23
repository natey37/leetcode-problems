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
var numDecodings = function(s) {
    let dp = new Array(s.length+1).fill(0)
    dp[0] = 1 
    for(let i=1;i<=s.length;i++){
        let option1 = s.slice(i-1, i)
        let option2 = s.slice(i-2, i)
        if(option1 > 0) dp[i] = dp[i-1]
        if(option2 <= 26 && option2 >= 10) dp[i] += dp[i-2]
    }
    return dp[s.length]
};
