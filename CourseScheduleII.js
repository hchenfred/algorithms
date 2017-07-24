// There are a total of n courses you have to take, labeled from 0 to n - 1.

// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

// Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.

// There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.

// For example:

// 2, [[1,0]]
// There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1]

// 4, [[1,0],[2,0],[3,1],[3,2]]
// There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0. So one correct course order is [0,1,2,3]. Another correct ordering is[0,2,1,3].

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  //construct graph
  // example [[1,0],[2,0],[3,1],[3,2]]
  // 0 [1,2] - 1 [3] - 2 [3] - 3 []
  // calculate indegree 0:0, 1:1, 2:1, 3:2
  let indegree = Array(numCourses).fill(0);
  let graph = {};
  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }
  for (let i = 0; i < prerequisites.length; i++) {
    indegree[prerequisites[i][0]]++;
    graph[prerequisites[i][1]].push(prerequisites[i][0]); 
  }

  // push all elements with indgree = 0 to queue
  let queue = [];
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }
  
  let result = [];
  while (queue.length > 0) {
    let curr = queue.shift();
    result.push(curr);
    let neighbors = graph[curr];
    for (let i = 0; i < neighbors.length; i++) {
      let neighbor = neighbors[i];
      indegree[neighbor]--;
      if (indegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }
  if (result.length === numCourses) return result;
  return [];   
};

const res = findOrder(4, [[1,0],[2,0],[3,1],[3,2]]);
console.log(res);