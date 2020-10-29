/*
1016. Binary String With Substrings Representing 1 To N
Given a binary string S (a string consisting only of '0' and '1's) and a positive integer N, return true if and only if for every integer X from 1 to N, the binary representation of X is a substring of S.

 

Example 1:

Input: S = "0110", N = 3
Output: true
Example 2:

Input: S = "0110", N = 4
Output: false
*/


var queryString = function(S, N) {
    let i = 1 
    while(i <= N){
        let string = i.toString(2)
        if(!S.includes(string)) return false
        i++
    }
    return true
};