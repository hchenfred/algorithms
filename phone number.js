/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (digits.length === 0) {
    return [];
  }
  var sequences = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

  var results = [];
  var dfs = function(pos, digits, curr) {
    if (pos === digits.length) {
      results.push(curr.join(''));
      return;
    }
    
    var letters = sequences[parseInt(digits[pos])];
    console.log(letters);
    for (var i = 0; i < letters.length; i++) {  
      curr.push(letters[i]);
      dfs(pos + 1, digits, curr);
      curr.pop();
    }
  };


  dfs(0, digits, []);
  return results;
      
    
    
    
};

console.log(letterCombinations('23'));