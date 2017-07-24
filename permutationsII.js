const permutationsII = function(arr) {
  if (arr === null || arr.length === 0) {
    return [];
  }

  arr.sort();
  let result = [];
  let visited = Array(arr.length).fill(false);
  const dfs = function(result, visited, arr, curr, pos) {
    if (pos === arr.length) {
      result.push(curr.slice());
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (!visited[i]) {
        if (i > 0 && arr[i] === arr[i-1] && !visited[i-1]) {
          continue;
        }
        visited[i] = true;
        curr.push(arr[i]);
        dfs(result, visited, arr, curr, pos+1);
        curr.pop();
        visited[i] = false;
      }
    }

  }

  dfs(result, visited, arr, [], 0);
  return result;


};

console.log(permutationsII([1,2,2]));

//[1,2,2]