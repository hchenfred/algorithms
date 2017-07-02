// Given a knight in a chessboard (a binary matrix with 0 as empty and 1 as barrier) with a source position, find the shortest path to a destination position, return the length of the route. 
// Return -1 if knight can not reached.


// Clarification
// If the knight is at (x, y), he can get to the following positions in one step:

// (x + 1, y + 2)
// (x + 1, y - 2)
// (x - 1, y + 2)
// (x - 1, y - 2)
// (x + 2, y + 1)
// (x + 2, y - 1)
// (x - 2, y + 1)
// (x - 2, y - 1)

/**
     * @param grid a chessboard included 0 (false) and 1 (true)
     * @param source, destination a point
     * @return the shortest path 
     */

var inbound = function(grid, point) {
  var x = point[0];
  var y = point[1];
  if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) {
    return false;
  }
  return true;
}

var shortestPath = function(grid, source, destination) {
  var queue = [];
  const deltaX = [1, 1, -1, -1, 2, 2, -2, -2];
  const deltaY = [2, -2, 2, -2, 1, -1, 1, -1];
  queue.push(source);
  // mark as visited
  grid[source[0]][source[1]] = 1;
  var step = 0;
  while(queue.length !== 0) {
    var size = queue.length;
    for (var i = 0; i < size; i++) {
      var curr = queue.shift();
      //console.log(curr, step);
      if (curr[0] === destination[0] && curr[1] === destination[1]) {
        return step;
      }
      for (let j = 0; j < 8; j++) {
        var x = curr[0] + deltaX[j];
        var y = curr[1] + deltaY[j];
        if (!inbound(grid, [x, y])) {
          continue;
        }
        if (grid[x][y] === 0) {
          queue.push([x, y]);
          grid[x][y] = '1';
        }
      }
    }
    step++;
  }

  if (step === 0) {
    return -1;
  } 
};



var test1 = [[0,0,0],
 [0,0,0],
 [0,0,0]];

 var result1 = shortestPath(test1, [2, 0], [2, 2]);
 console.log(result1);


