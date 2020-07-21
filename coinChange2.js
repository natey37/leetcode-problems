/*
518. Coin Change 2

You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount. You may assume that you have infinite number of each kind of coin.

 

Example 1:

Input: amount = 5, coins = [1, 2, 5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
Example 2:

Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.
Example 3:

Input: amount = 10, coins = [10] 
Output: 1
*/

/*
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
function change(amount, coins) {
    //create our waysArray with N + 1 (in our case amount + 1) spots, and fill it starting values of zero. We can think of this as saying how many ways can we make 1 with zero, well zero ways. How many ways can we make 2 with zero, zero ways. So on...
    let waysArray = new Array(amount + 1).fill(0)
    //We do need to start off with an initial value in our array. Here we are saying how many ways can we make zero out of zero, one way. 
    waysArray[0] = 1
    //iterate through every coin in our coins array
    for(let i=0; i<coins.length; i++){
        //iterate through Nth values (amount values) and compare the coin value to the value of the index
        for(let j=0;j<=amount;j++){
            //we only care if our coins value is less than the index value because we know we cannot make a value if it less than our coins value. 
            //Ex. if our coin value is 5 then we can skip all indices lower than 5 because there is no way to make 0,1,2,3,4 cents out of 5 cents. 
            if(coins[i] <= j){
                //update our waysArray[j] to equal the current number of ways to make a given value + the number of ways to make the difference between j - coins[i]. 
                waysArray[j] = waysArray[j-coins[i]] + waysArray[j]
            }
        }
    }
    //return the last element in our waysArray because that represents the total number of ways we have found to make that given target value
    return waysArray[amount]
};