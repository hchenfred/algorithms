//http://www.lintcode.com/en/problem/search-graph-nodes/
// Given a undirected graph, a node and a target, return the nearest node to given node which value of it is target, return NULL if you can't find.
// There is a mapping store the nodes' values in the given parameters.
//  Notice
// It's guaranteed there is only one available solution

var GraphNode = function(label) {
  this.label = label;
  this.neighbors = [];
}

 /**
     * @param graph a list of Undirected graph node
     * @param values a hash mapping, <UndirectedGraphNode, (int)value>
     * @param node an Undirected graph node
     * @param target an integer
     * @return the a node
     */
var searchNode = function(graph, values, node, target) {
  if (node === null) {
    return null;
  }
  //bfs
  var queue = [];
  var visited = new Set();

  queue.push(node);
  visited.add(node);

  while(queue.length !== 0) {
    var curr = queue.shift();
    if (values.get(curr) === target) {
      return curr;
    }
    for (var i = 0; i < curr.neighbors.length; i++) {
      var neighbor = curr.neighbors[i];
      if (!visited.has(neighbor)) {
        queue.push(neighbor);
        visited.add(neighbor);
      }
    }
  }

  return null;
}





//test
var a = new GraphNode(1);
var b = new GraphNode(2);
var c = new GraphNode(3);
var d = new GraphNode(4);
var e = new GraphNode(5);
var nodeArr = [a, b, c, d, e];
a.neighbors = [b, c, d];
b.neighbors = [a, c];
c.neighbors = [a, b];
d.neighbors = [a, e];
e.neighbors = [d];
var map = new Map();
map.set(a, 3);
map.set(b, 4);
map.set(c, 10);
map.set(d, 50);
map.set(e, 50);

var test = searchNode(nodeArr, map, a, 50);
console.log(test);


