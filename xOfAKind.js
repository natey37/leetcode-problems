/*
914. X of a Kind in a Deck of Cards
In a deck of cards, each card has an integer written on it.

Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:

Each group has exactly X cards.
All the cards in each group have the same integer.
 

Example 1:

Input: deck = [1,2,3,4,4,3,2,1]
Output: true
Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].
Example 2:

Input: deck = [1,1,1,2,2,2,3,3]
Output: false´
Explanation: No possible partition.
Example 3:

Input: deck = [1]
Output: false
Explanation: No possible partition.
Example 4:

Input: deck = [1,1]
Output: true
Explanation: Possible partition [1,1].
Example 5:

Input: deck = [1,1,2,2,2,2]
Output: true
Explanation: Possible partition [1,1],[2,2],[2,2].
*/

/*
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
    let kinds = {}
    for(let i=0;i<deck.length;i++){
        if(kinds[deck[i]]){
            kinds[deck[i]] += 1
        } else {
            kinds[deck[i]] = 1
        }
    }
    let counts = [...Object.values(kinds)]
    let max = Math.max(...counts)
    
    for(let i=2;i<=max;i++){
        if(counts.every(el => el % i === 0)) return true
    }
    return false 
};
