// Given a set of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

// The same repeated number may be chosen from C unlimited number of times.

const combinationSum = function(arr, target) {
  if (arr === null || arr.length === 0) {
    return [];
  }
  //sort the arr in-place
  arr.sort();

  let result = [];
  const dfs = function(result, arr, target, curr, pos) {
    if (target === 0) {
      result.push(curr.slice());
    }


    for (let i = pos; i < arr.length; i++) {
      if (target >= arr[i]) {
        curr.push(arr[i]);
        dfs(result, arr, target - arr[i], curr, i);
        curr.pop();
      }
    }
  };

  dfs(result, arr, target, [], 0);
  return result;
};

console.log(combinationSum([2,3,6,7], 7));