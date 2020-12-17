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
/*
Alright first things first let's discuss what this question is asking us for. We start with a beginWord and an endWord. We want to find the SHORTEST transformation sequence (otherwords, shortest path) from the beginWord to the endWord. The condition is that every step we take, we can only change one letter of each word, as well each 'transition' word must be included in our wordList. 
We can think of the beginWord and the endWord as representing two nodes on a graph, the start node and the end node. The question is then asking if it possible to connect these two nodes by using intermediate nodes given to us by the wordList. These nodes will be connected by the condition that every neighboring node can only be different by one letter. The beginWord, endWord, and wordList can all be thought of as a undirected graph, where the words are the nodes and the edges between nodes differ by one letter. Now we are able to see more clearly how it is asking us for the shortest path, from start to end node. Normally to find the shortest path we can use a breadth first search approach. 
The important part is assembling our graph, we need to find which words are going to be adajacent in the graph (ie. what words differ by one letter). We will replace each letter of a word with '*' and then see if this generic state can be representing by a single letter change in the other words. For example, 'cat' -> 'c*t' <- 'cot'. Both cat and cot can be represented by 'c*t' because there is only one letter that must be changed to step between these words. The three states for the word cat are: ['*at', 'c*t', 'ca*']. The map would be represented by: 
{
'*at' : [cat]
'c*t' : [cat, cot]
'ca*' : [cat]
}

We dont necessarily have to create this adjacency list but it saves us a lot of time later on. Without this step, we would later need to iterate over the entire word list and find words that differ by one letter. This optimizes are BFS function and allows us to group all words that map to a particular word state. 

Now we start our BFS, 
*/

var ladderLength = function(beginWord, endWord, wordList) {
   const combinations = {};
   //Find all the possible generic/intermediate states. Save these intermediate states in a dictionary with key as the intermediate word and value as the list of words which have the same intermediate word. For example, '*at' -> [hat, cat, bat]
   wordList.forEach(word => {
       for (let i = 0; i < word.length; i++) {
           let wordRoot = word.substring(0, i) + '*' + word.substring(i + 1);
           if (combinations[wordRoot] === undefined) {
               combinations[wordRoot] = [];
           }
           combinations[wordRoot].push(word);
       }
   });
   //Push the start word into the queue
   let queue = [beginWord];
   //The number of transitions represents the number of nodes we have moved (# of letter changes)
   let transitions = 0;
   //To prevent cycles, we will keep track of what nodes/words we have visited
   const visitedWords = new Set();
 
   while (queue.length > 0) {
       const neighbors = [];
       
       while (queue.length > 0) {
           //Remove the last word from the queue
           let word = queue.pop();
           //If the word is equal to our endWord we have found the shortest path and should exit our function 
           if (word === endWord) {
               return transitions + 1;
           }
           //Find all the intermediate transformations of the current word and find if any of these intermediate transformations is also an intermediate of other words in the worldList.
           for (let i = 0; i < word.length; i++) {
               let wordRoot = word.substring(0, i) + '*' + word.substring(i + 1);
               //We do this by checking the combinations map, each intermediate transformation points to an array that contains all words that can map to this intermediate. We then mark that we have visited this node/word and push these nodes into the neighbors array for consideration
               for (const neighbor of (combinations[wordRoot] || [])) {
                   if (!visitedWords.has(neighbor)) {
                       visitedWords.add(neighbor);
                       neighbors.push(neighbor);
                   }
               }
           }
       }
       //We set our queue equal to the neighbors array that contained connected nodes, we will then repeat the process above and continue to move through our graph
       queue = neighbors;
       //Track each edge we moved in the graph
       transitions++;
   }
   //If we do not return earlier, then there is no path from start to end and we return 0
   return 0;
};

