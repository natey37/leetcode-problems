/*

937. Reorder Data in Log Files
You have an array of logs.  Each log is a space delimited string of words.

For each log, the first word in each log is an alphanumeric identifier.  Then, either:

Each word after the identifier will consist only of lowercase letters, or;
Each word after the identifier will consist only of digits.
We will call these two varieties of logs letter-logs and digit-logs.  It is guaranteed that each log has at least one word after its identifier.

Reorder the logs so that all of the letter-logs come before any digit-log.  The letter-logs are ordered lexicographically ignoring identifier, with the identifier used in case of ties.  The digit-logs should be put in their original order.

Return the final order of the logs.

 

Example 1:

Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
*/

/*
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    let dig = []
    let letters = []
    for (let i = 0; i < logs.length; i++) {
    if (isFinite(logs[i].split(' ')[1])) {
        dig.push(logs[i]);
        } else letters.push(logs[i]);
     } 
    let sorted = letters.sort((a,b) => {
        let aArr = a.slice(a.indexOf(' ') + 1) 
        let bArr = b.slice(b.indexOf(' ') + 1)
        if(aArr === bArr){
            return a > b ? 1 : -1 
        }
        return aArr > bArr ? 1 : -1
    })
    return [...sorted, ...dig]
};