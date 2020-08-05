/*
1079. Letter Tile Possibilities
You have a set of tiles, where each tile has one letter tiles[i] printed on it.  Return the number of possible non-empty sequences of letters you can make.

 

Example 1:

Input: "AAB"
Output: 8
Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".
Example 2:

Input: "AAABBC"
Output: 188
*/

/*
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    let letterHash = {}
    for(let letter of tiles){
        letterHash[letter] ? letterHash[letter]++ : letterHash[letter] = 1 
    }
    return dfs(letterHash)
}

var dfs = (hash) => {
    let sum = 0
    for(let letter in hash){
        if(hash[letter] === 0) continue;
        sum++
        hash[letter]-- 
        sum += dfs(hash)
        hash[letter]++
    }
    return sum 
}
