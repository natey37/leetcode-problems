/*
374. Guess Number Higher or Lower
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I'll tell you whether the number is higher or lower.

You call a pre-defined API guess(int num) which returns 3 possible results:

-1: My number is lower
1: My number is higher
0: Congrats! You got it!
 

Example 1:

Input: n = 10, pick = 6
Output: 6
Example 2:

Input: n = 1, pick = 1
Output: 1
Example 3:

Input: n = 2, pick = 1
Output: 1
Example 4:

Input: n = 2, pick = 2
Output: 2
 


*/

/*
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/*
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let low = 1 
    let high = n
    while(low < high){
        let mid = Math.floor((low+high)/2)
        if(guess(mid) === 0) return mid 
        else if(guess(mid) === -1){
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return low
};