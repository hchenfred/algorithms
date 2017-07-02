 /*
Libs included:
    underscore lodash chai sinon sinon-chai mocha async request q bluebird jsdom
*/


/*
Problem description

Part A.

We are given a tree of nodes - nothing fancy like a binary tree,
each node can have any number of children and the order of the children is not significant.
Each node is located in exactly one place in the tree.
Importantly, the data structure that stores the tree is a simple list containing all the nodes in the tree.
Each node contains an "id" field that gives the name of the node and a "children" field that contains the names of the children,
for example:
*/
var node_tree = [
    { "id": "root",  "children": [ "b", "a", "h" ] },
    { "id": "a",     "children": [ "c", "d" ] },
    { "id": "c",     "children": [ "f" ] },
    { "id": "b",     "children": [ "e" ] },
    { "id": "d",     "children": [ "g" ] },
    { "id": "e",     "children": [] },
    { "id": "f",     "children": [] },
    { "id": "g",     "children": [] },
    { "id": "h",     "children": [] },
]
/*
One thing a user may want to do with this tree is move a node from one parent to another,
for example moving node "d" from the old parent "a" to the new parent "b".
The resulting tree would have "b" removed from "a"'s child list and added to "b"'s, and would therefore look like this:
node_tree = [
    { 
        "id": "root",  
        "children": [ "b", "a", "h" ] 
    },
    { "id": "a",     "children": [ "c" ] },
    
    { "id": "c",     "children": [ "f" ] },
    { "id": "b",     "children": [ "e", "d" ] },
    { "id": "d",     "children": [ "g" ] },
    { "id": "e",     "children": [] },
    { "id": "f",     "children": [] },
    { "id": "g",     "children": [] },
    { "id": "h",     "children": [] },
]

Write a function which takes the tree and the names of the relevant nodes, and performs the move operation.
This can be done in-place or return a new tree.

input: tree, child node to be moved, NEW designated parent node
output: new updated tree with moved child
edge-cases: child or parent does not exist
*/

var move = function(tree, child, parent) {
  let parentNode = null;
  let childIndex = -1;
  let nodeContainsChild = null;
  // loop through tree and find where child is, delete it. 
  for (let i = 0; i < tree.length; i++) {
    let currNode = tree[i];
    if (currNode['id'] === parent) {
      parentNode = currNode;
    } 
    let childIndex = currNode['children'].indexOf(child);
    if (childIndex !== -1) {
      nodeContainsChild = currNode;
    }
    if (parentNode !== null && nodeContainsChild !== null) {
      parentNode['children'].push(child);
      nodeContainsChild['children'].splice(childIndex, 1);
      return tree;
    }
  }

  return tree;
}

console.log(move(node_tree, 'd', 'b'));