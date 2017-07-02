// Given a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.

// The distance between two adjacent cells is 1.
// Example 1: 
// Input:

// 0 0 0
// 0 1 0
// 0 0 0
// Output:
// 0 0 0
// 0 1 0
// 0 0 0
// Example 2: 
// Input:

// 0 0 0
// 0 1 0
// 1 1 1
// Output:
// 0 0 0
// 0 1 0
// 1 2 1
const inbound = function(x, y, m, n) {
  if (x < 0 || y < 0 || x >= m || y >= n) {
    return false;
  }
  return true;
}

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
  // update matrix, replace all 1 to Number.MIN_VALUE, and push all 0s to queue
  const m = matrix.length;
  const n = matrix[0].length;
  let queue = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        queue.push([i, j]);
      }
      if (matrix[i][j] === 1) {
        matrix[i][j] = Number.MAX_VALUE;
      }
    }
  }

  const deltaX = [0, 0, 1, -1];
  const deltaY = [1, -1, 0, 0];
  while (queue.length > 0) {
    let curr = queue.shift();
    for (let i = 0; i < 4; i++) {
      let x = curr[0] + deltaX[i];
      let y = curr[1] + deltaY[i];
      if (inbound(x, y, m, n) && matrix[curr[0]][curr[1]] + 1 < matrix[x][y]) {
        matrix[x][y] = matrix[curr[0]][curr[1]] + 1;
        queue.push([x, y]);
      }
    }
  }
  return matrix;  
};

const test1 = [
  [0,0,0,],
  [0,1,0],
  [1,1,1]
]
console.log(updateMatrix(test1));