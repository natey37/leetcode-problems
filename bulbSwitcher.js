/*
319. Bulb Switcher
There are n bulbs that are initially off. You first turn on all the bulbs. Then, you turn off every second bulb. On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the i-th round, you toggle every i bulb. For the n-th round, you only toggle the last bulb. Find how many bulbs are on after n rounds.

Example:

Input: 3
Output: 1 
Explanation: 
At first, the three bulbs are [off, off, off].
After first round, the three bulbs are [on, on, on].
After second round, the three bulbs are [on, off, on].
After third round, the three bulbs are [on, off, off]. 
*/


/*
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
//TLE
//     if(!n) return 0
//     let bulbs = new Array(n).fill("on")
   
//     for(let i=1;i<=bulbs.length;i++){
//         if(i % 2 === 0) bulbs[i-1] = "off"
//     }
//     let divisor = 3
    
//     while(divisor <= n){
//         for(let j=1;j<=n;j++){
//             if(j % divisor === 0){
//                 bulbs[j-1] = bulbs[j-1] === "on" ? "off" : "on"
//             }
//          }
//         divisor += 1

//     }
  
//     let results = {}
//     for(const el of bulbs){
//         results[el] = results[el] ? results[el]+=1 : 1 
        
//     }
//     return results["on"]
    
    return Math.floor(Math.sqrt(n))
    
};