
/*
722. Remove Comments

Given a C++ program, remove comments from it. The program source is an array where source[i] is the i-th line of the source code. This represents the result of splitting the original source code string by the newline character \n.

In C++, there are two types of comments, line comments, and block comments.

The string // denotes a line comment, which represents that it and rest of the characters to the right of it in the same line should be ignored.


https://leetcode.com/problems/remove-comments/


*/


/*
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function(source) {
    let result = []
    let multi = false 
    let string = ''
    for(let i=0;i<source.length;i++){
        let trimmed = source[i]
        for(let j=0;j<trimmed.length;j++){
            if(!multi){
                if(trimmed[j] === '/' && trimmed[j+1] === '/') break;
                else if(trimmed[j] === '/' && trimmed[j+1] === '*'){
                    multi = true
                    j++
                } else {
                    string += trimmed[j]
                }
            } else {
                if(trimmed[j] === '*' && trimmed[j+1] === '/'){
                    multi = false 
                    j++
                }
            }
        }
        
        if(string.length && !multi) {
            result.push(string);
            string = ""
        }
      
    }
    return result
};


