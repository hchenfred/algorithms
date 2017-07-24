const palindromePartition = function(str) {
  if (str === null || str.length === 0) {
    return [];
  }

  let result = [];

  const isPalindrome = function(input) {
    const len = Math.floor(input.length/2);
    for (let i = 0; i < len; i++) {
      if (input.charAt(i) !== input.charAt(input.length - 1 - i)) {
        return false;
      }
    }
    return true;
  };
  const dfs = function(result, curr, str, pos) {
    if (pos === str.length) {
      result.push(curr.slice());
    }

    for (let i = pos; i < str.length; i++) {
      let currStr = str.substring(pos, i+1);
      if (isPalindrome(currStr)) {
        curr.push(currStr);
        dfs(result, curr, str, i + 1);
        curr.pop();
      }
    }

  };

  dfs(result, [], str, 0);
  return result;

};

console.log(palindromePartition("aab"));