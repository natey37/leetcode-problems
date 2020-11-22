/*
1657. Determine if Two Strings Are Close
Two strings are considered close if you can attain one from the other using the following operations:

Operation 1: Swap any two existing characters.
For example, abcde -> aecdb
Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
You can use the operations on either string as many times as necessary.

Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

The question asks us if after performing these operations, are the words 'close'. The first operation allows us to swap any two existing characters. If we think about swapping any two characters, X times, that is essentially the same as ordering our string in any way we want. Let's say we had word1 = 'abc' and word2 = 'bca'. In word2 if we swap 'b' -> 'a', we then have 'acb', and then we can swap 'c' -> 'b', and we end with 'abc'. So it appears that unlimited swaps is the same as sorting our string. Then the next operation allows us to transform every occurence of one existing character for another. So if word1 = 'bba' and word2 = 'aab', we can swap word2 'aa' -> 'bb' and 'b' -> 'a', giving us 'bba'. IF we are able to swap every occurence then the particular letter is not important, just the relative character counts. In our example word1 = 'bba' has one letter with an occurence of 2 and one letter with an occurence of 1. We dont need to keep track of what the particular letter actually is, just that the relative letter occurences are the same. 
 

Example 1:

Input: word1 = "abc", word2 = "bca"
Output: true
Explanation: You can attain word2 from word1 in 2 operations.
Apply Operation 1: "abc" -> "acb"
Apply Operation 1: "acb" -> "bca"
Example 2:

Input: word1 = "a", word2 = "aa"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.
Example 3:

Input: word1 = "cabbba", word2 = "abbccc"
Output: true
Explanation: You can attain word2 from word1 in 3 operations.
Apply Operation 1: "cabbba" -> "caabbb"
Apply Operation 2: "caabbb" -> "baaccc"
Apply Operation 2: "baaccc" -> "abbccc"
Example 4:

Input: word1 = "cabbba", word2 = "aabbss"
Output: false
Explanation: It is impossible to attain word2 from word1, or vice versa, in any amount of operations.

*/


/*
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    //initialize two arrays with 26 spots, each index representing each letter of the alphabet. Set each index to a value of 0, representing the occurence of each letter
    let arr1 = new Array(26).fill(0)
    let arr2 = new Array(26).fill(0)
    //offset will equal 97, this is what we will use to keep track of the correct character counts
    let offset = 'a'.charCodeAt(0)
    
    //we will loop through each letter in word1 and add one to its corresponding index. If the letter is 'b', the char code will be 98, 98 - 97 = 1, and we add one to arr1[1]
    for(let letter of word1){
        arr1[letter.charCodeAt(0) - offset]++
    }
    //same thing as above for each letter in word2
    for(let letter of word2){
        arr2[letter.charCodeAt(0) - offset]++
    }
    
    //here we will loop through each index in both arrays and if one array has no occurences of a letter and the other array does have this letter, then we can return false because there would be no way to perform the given operations and get the correct result. word1 = 'ab', word2 = 'ac', there is no way for these two strings to become 'close' since operation 2 two only swaps existing letters. We can never turn 'ab' into 'ac'.
    for(let i=0;i<26;i++){
        if(arr1[i] === 0 && arr2[i] !== 0) return false 
        if(arr2[i] === 0 && arr1[i] !== 0) return false 
    }
    
    //if we passed above, then now we just need to check the relative occurences of each letter. We sort our letter occurences high to low.
    arr1.sort((a,b) => b - a)
    arr2.sort((a,b) => b - a)
    
    //then we loop through each index and if the relative counts are not equal then the words are not 'close'. 
    for(let i=0;i<26;i++){
        if(arr1[i] !== arr2[i]) return false 
    }
    
    //if we pass all our tests above we return true, the words are 'close'
    return true
};

/*
Input: word1 = "aacabb", word2 = "bbcbaa"
Output: true

After the for loops for each individual word we have: 

 arr1 = [
  3, 2, 1, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0
] 
arr2 = [
  2, 3, 1, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0
]

We then loop through each index and as long as each word contains at least 1 occurence of the same letter we will continue

We then sort these arrays: 

arr1 = [
  3, 2, 1, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0
] 
arr2 = [
  3, 2, 1, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0
]

We then loop through each index and as long the values of both arrays at each index are equal we continue and return true



*/