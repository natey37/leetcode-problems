/*
127. Word Ladder
Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list.
Note:

Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.
Example 1:

Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5

Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.
Example 2:

Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: 0

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
*/


/*
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const combinations = {};
   // Mapping wordRoot to word. For example, '*ot' -> [hot, dot, lot]
   wordList.forEach(word => {
       for (let i = 0; i < word.length; i++) {
           let wordRoot = word.substring(0, i) + '*' + word.substring(i + 1);
           if (combinations[wordRoot] === undefined) {
               combinations[wordRoot] = [];
           }
           combinations[wordRoot].push(word);
       }
   });
   
   let queue = [beginWord];
   let transitions = 0;
   const visitedWords = new Set();
   
   while (queue.length > 0) {
       const neighbors = [];
       
       while (queue.length > 0) {
           let word = queue.pop();
           if (word === endWord) {
               return transitions + 1;
           }
           
           // Consider all roots possible from this word
           for (let i = 0; i < word.length; i++) {
               let wordRoot = word.substring(0, i) + '*' + word.substring(i + 1);
               
               // Consider all words that have the same root
               for (const neighbor of (combinations[wordRoot] || [])) {
                   // If this word has been visited before, continue, else consider it
                   if (!visitedWords.has(neighbor)) {
                       visitedWords.add(neighbor);
                       neighbors.push(neighbor);
                   }
               }
           }
       }
       
       queue = neighbors;
       transitions++;
   }
   
   return 0;// If endWord was found, transitions would've been returned before
};