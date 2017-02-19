// Given a collection of distinct numbers, return all possible permutations.

// For example,
// [1,2,3] have the following permutations:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  var results = [];
  var visited = {};
  var dfs = function(visited, curr, pos) {
    if (pos === nums.length) {
      results.push(curr.slice());
      //must use .slice() to make a copy of the curr array, otherwise, curr is just referrring to the last curr when the whole dfs finishes executing
      return;
    }

    for (var i = 0; i < nums.length; i++) {
      if (!visited[nums[i]]) {
        visited[nums[i]] = true;
        curr.push(nums[i]);
        dfs(visited, curr, pos + 1);
        curr.pop();
        visited[nums[i]] = false;

      }
    }
  };
  dfs(visited, [], 0);
  return results;
};

console.log(permute([1, 2, 3]));