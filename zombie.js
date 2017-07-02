// Given a 2D grid, each cell is either a wall 2, a zombie 1 or people 0 (the number zero, one, two).Zombies can turn the nearest people(up/down/left/right) into zombies every day, but can not through wall. How long will it take to turn all people into zombies? Return -1 if can not turn all people into zombies.

const inbound = function(x, y, m, n) {
  if (x < 0 || y < 0 || x >= m || y >= n) {
    return false;
  }
  return true;
}

const zombine = function(matrix) {
  let queue = [];
  let people = 0;

  // push zombie positions to the queue
  let m = matrix.length;
  let n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 1) {
        queue.push([i, j]);
      } 
      if (matrix[i][j] === 0) {
        people++;
      }
    }
  }
  
  let deltaX = [0, 0, 1, -1];
  let deltaY = [1, -1, 0, 0];
  let steps = 0;
  // BFS
  while (queue.length > 0) {
    steps++;
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let curr = queue.shift();
      for (let j = 0; j < 4; j++) {
        let x = curr[0] + deltaX[j];
        let y = curr[1] + deltaY[j];
        if (inbound(x, y, m, n) && matrix[x][y] === 0) {
          queue.push([x, y]);
          matrix[x][y] = '1';
          people--;
          if (people === 0) {
            return steps;
          }
        }
      }
    }
  }
  return -1;
}

const test1 = [
  [0, 1, 2, 0, 0],
  [1, 0, 0, 2, 1],
  [0, 1, 0, 0, 0],
];

console.log(zombine(test1));