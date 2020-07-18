/*
322. Coin Change

You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1

*/

/*
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let dp = new Array(amount+1).fill(Infinity)
    dp[0] = 0
    for(let i=0;i<coins.length;i++){
        for(let j=0; j<=amount;j++){
            if(j - coins[i] < 0) continue;
            dp[j] = Math.min(1 + dp[j - coins[i]], dp[j])
        }
    }
   return dp[amount] === Infinity ? -1 : dp[amount]

};