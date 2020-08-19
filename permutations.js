/*
46. Permutations

Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/

var permute = function(letters) {
    let res = [];
    dfs(letters, [], Array(letters.length).fill(false), res);
    return res;
}

function dfs(letters, path, used, res) {
    if (path.length == letters.length) {
        res.push(Array.from(path));
        return;
    }
    for (let i = 0; i < letters.length; i++) {
        if (used[i]) continue;
        path.push(letters[i]);
        used[i] = true;
        dfs(letters, path, used, res);
        path.pop();
        used[i] = false;
    }
}