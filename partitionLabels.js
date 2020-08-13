/*
763. Partition Labels

A string S of lowercase English letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

 

Example 1:

Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
*/

/*
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
    const ret = [];
    let start = -1;

    for (let i = 0; i < S.length; i++) {
        if (i === start + 1) {
            ret.push(0);
        }

        start = Math.max(start, S.lastIndexOf(S[i]))
        ret[ret.length - 1]++;
    }

    return ret;
};