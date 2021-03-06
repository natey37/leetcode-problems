/*
791. Custom Sort String

S and T are strings composed of lowercase letters. In S, no letter occurs more than once.

S was sorted in some custom order previously. We want to permute the characters of T so that they match the order that S was sorted. More specifically, if x occurs before y in S, then x should occur before y in the returned string.

Return any permutation of T (as a string) that satisfies this property.

Example :
Input: 
S = "cba"
T = "abcd"
Output: "cbad"
Explanation: 
"a", "b", "c" appear in S, so the order of "a", "b", "c" should be "c", "b", and "a". 
Since "d" does not appear in S, it can be at any position in T. "dcba", "cdba", "cbda" are also valid outputs.
*/

/*
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
    let priority = {}
    let sSplit = S.split("")
    for(let i=0; i<S.length;i++){
        if(!priority[S[i]]){
            priority[S[i]] = i + 1
        }
    }
    let tSplit = T.split("")
    for(let i=0; i<T.length;i++){
          if(!priority[T[i]]){
            priority[T[i]] = Infinity
        }
    }
    
    let newT = T.split("").sort((a, b) => priority[a] - priority[b]).join("")
    
    return newT

};
