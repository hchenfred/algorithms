// Given a set of distinct integers, nums, return all possible subsets.

// Note: The solution set must not contain duplicate subsets.

// For example,
// If nums = [1,2,3], a solution is:

// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  
  var results = [[]];
  var visited = {};
  var dfs = function(curr, pos) {

    for (var i = pos; i < nums.length; i++) {
      var currNum = nums[i];
      curr.push(currNum);
      results.push(curr.slice());
      dfs(curr, i + 1);
      curr.pop();
    }
  };

  dfs([], 0);

  return results; 
};

console.log(subsets([1, 2, 3]));

