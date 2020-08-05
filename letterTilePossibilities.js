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


//For simplicity I am going to have the hash object {A:2,B:1} represented as A2,B1 and will psuedocode the rest 
//Step 1a.
    //dfs(A2,B1)
        //sum = 0
        //for(letter in hash) -> ON LETTER A
            //A != 0 
            //sum ++ -> sum = 1 
            //hash[letter]-- -> A1,B1
            //sum += dfs(A1,B1)

            //Move to Step 2a.

//Step 1b.
            //sum += 4 -> 1 + 4 = 5
            //hash[letter]++ -> A2,B1
        //for(letter in hash) -> ON LETTER B 
            //B != 0
            //sum++ -> sum = 6 
            //hash[letter]-- -> A2,B0
            //sum += dfs(A2,B0)

            //Move to Step 7a.

//Step 1c. 
            //sum += 2 -> 6 + 2 = 8 
            //hash[letter]++ -> A2,B1 (Returning our original hash as we return from our recursion)

            //return sum -> sum = 8 
//Step 7a.
    //dfs(A2,B0)
        //sum = 0 
        //for(letter in hash) -> ON LETTER A 
            //A != 0 
            //sum++ -> sum = 1 
            //hash[letter]-- -> A1,B0
            //sum += dfs(A1, B0)

            //Move to Step 8a.

//Step 7b.
            //sum += 1 -> 1 + 1 = 2 
            //hash[letter]++ -> A2,B0
        //for(letter in hash) -> ON LETTER B 
            //B == 0 -> CONTINUE 
        //return sum -> sum = 2 
        
        //Move back up to wherw we called the function, 1c.

//Step 8a. 
    //dfs(A1,B0)
        //sum = 0 
        //for(letter in hash) -> ON LETTER A 
            //A != 0 
            //sum++ -> sum = 1 
            //hash[letter]-- -> A0, B0
            //sum += dfs(A0,B0) 

            //Move to Step 9 

//Step 8b. 
            //sum += 0 -> 1 + 0 = 1 
            //hash[letter]++ -> A1,B0
        //for(letter in hash) -> ON LETTER B 
            //B == 0 -> CONTINUE 
        //return sum -> sum = 1 

        //Move back up where we called the function, 7b.

//Step 9 
    //dfs(A0,B0)
        //sum = 0 
        //for(letter in hash) -> ON LETTER A 
            //A == 0 -> CONTINUE 
        //for(letter in hash) -> ON LETTER B 
            //B == 0 -> CONTINUE 
        //return sum -> sum = 0 

        //Move back to up where we called the function, 8b.

//Step 2a. 
    //dfs(A1,B1)
        //sum = 0
        //for(letter in hash) -> ON LETTER A 
            //A != 0 
            //sum++ -> sum = 1 
            //hash[letter]-- -> A0,B1
            //sum += dfs(A0,B1)

            //Move to Step 3a.
//Step 2b.
            //sum += 1 -> 1 + 1 = 2 
            //hash[letter]++ -> A1,B1
        //for(letter in hash) -> ON LETTER B 
            //B != 0
            //sum++ -> sum = 3
            //hash[letter]-- -> A1,B0
            //sum += dfs(A1,B0)

            //Move to Step 5a.

//Step 2c. 
            //sum += 1 -> 3 + 1 = 4 
            //hash[letter]++ -> A1,B1
        //return sum -> sum = 4 

        //Move back up to where we called function, 1b.

//Step 5a.
    //dfs(A1,B0)
        //sum = 0
        //for(letter in hash) -> ON LETTER A 
            //A != 0 
            //sum++ -> sum = 1 
            //hash[letter]-- -> A0,B0
            //sum += dfs(A0,B0)

            //Move to Step 6

//Step 5b.
            //sum += 0 -> 1 + 0 = 1 
            //hash[letter]++ -> A1,B0
        //for(letter in hash) -> ON LETTER B
            //B == 0 -> CONTINUE
        //return sum -> sum = 1 

        //Move back up to where we called the function, 2c.

//Step 6. 
    //dfs(A0,B0)
        //sum = 0 
        //for(letter in hash) -> ON LETTER A 
            //A == 0 -> CONTINUE
        //for(letter in hash) -> ON LETTER B
            //B == 0 -> CONTINUE
        //return sum -> 0

        //Move back up to where we called the function, 5b.

//Step 3a.
    //dfs(A0,B1)
        //sum = 0
        //for(letter in hash) -> ON LETTER A 
            //A == 0 -> CONTINUE
        //for(letter in hash) -> ON LETTER B
             //B != 0
            //sum++ -> sum = 1 
            //hash[letter]-- -> A0,B0
            //sum += dfs(A0,B0)

            //Move to Step 4 

//Step 3b. 
            //sum += 0 -> 1 + 0 = 1
            //hash[letter]++ -> A0,B1 (We are essentially resetting our hash to its previous state, when exiting each recursive level)
        //return sum -> 1 

        //Move back up to where we called the function, 2b.

//Step 4 
    //dfs(A0,B0)
        //sum = 0 
        //for(letter in hash) -> ON LETTER A 
            //A == 0 -> CONTINUE
        //for(letter in hash) -> ON LETTER B
            //B == 0 -> CONTINUE
        //return sum -> 0

        //Move back up to where we called function, 3b.