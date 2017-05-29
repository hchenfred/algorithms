/**
 * @param {number[][]} maze
 * @param {number[]} start
 * @param {number[]} destination
 * @return {boolean}
 */
var hasPath = function(maze, start, destination) {
  var m = maze.length;
  var n = maze[0].length;
  var visited = Array(m).fill(Array(n).fill(false));
  console.log(visited);


  var hasPathHelper = function(maze, i, j, visited, destination) {
    if (i === destination[0] && j === destination[1]) {
      return true;
    }

    if (visited[i][j] || maze[i][j] === 1) {
      return false;
    }

    visited[i][j] = true;

    //left 
    if (j - 1 >= 0 && maze[i][j - 1] === 0) {
      let p = j - 1;
      while (maze[i][p] !== 1) {
        p--;
      }
      if (!visited[i][p+1]) {
        if (hasPathHelper(maze, i, p+1, visited)) {
          return true;
        }
      }
    }

    //down
    if (!visited[i + 1][j] && maze[i + 1][j] === 0) {
      let p = i + 1;
      while (maze[p][j] !== 1) {
        p++;
      }
    }

    //up 
    if (!visited[i - 1][j] && maze[i - 1][j] === 0) {
      let p = i - 1;
      while(maze[p][j] !== 1) {
        p--; 
      }

    }


  }
    
};

var testMaze = [
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [1, 1, 0, 1, 1],
  [0, 0, 0, 0, 0]
];

hasPath(testMaze, [0, 4], [4, 4]);


