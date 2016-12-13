/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let result = [];
    let s = '';
    dfs(n, 0, 0, s, result);
    return result;

};

function dfs(n, left, right, s, result) {
    if (left === n && right === n) {
        //console.log('enter here');
        result.push(s);
        return;
    }

    if (left <= n && right <= left) {
        //add (
        dfs(n, left+1, right, s+'(', result);
        //add )
        dfs(n, left, right+1, s+')', result);
    }

}


