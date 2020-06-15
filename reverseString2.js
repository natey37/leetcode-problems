/*
541. Reverse String II

Given a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
Example:
Input: s = "abcdefg", k = 2
Output: "bacdfeg"
*/

/*
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = (s, k) => {
    let string = s.split('');    
    for (let i = 0; i < string.length - 1; i += 2 * k) { 
        let front = i;
        let back = Math.min(i + k - 1, string.length - 1); 
        while (front < back) {
            let temp = string[front]
            string[front] = string[back]
            string[back] = temp
            front++;
            back--;
        }
    }
    return string.join('');
};