/*
168. Excel Sheet Column Title
Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
    ...
Example 1:

Input: 1
Output: "A"
Example 2:

Input: 28
Output: "AB"
Example 3:

Input: 701
Output: "ZY"
*/

/*
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     var m, result = [];
     while (n > 0) {
        m = (n-1) % 26;
        n = (n-1-m) / 26;
		result.unshift(alphabets[m]);
    }
    return result.join("");
};