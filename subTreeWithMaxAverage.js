// Given a binary tree, find the subtree with maximum average. Return the root of the subtree.
var Node = function(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}



var subTreeWithMaxAverage = function(root) {
  var maxAverage = -Infinity;
  var node = null;

  // how to calculate average? we need sum and size
  // helper function returns an array [sum, size];
  var helper = function(root) {
    if (root === null) {
      return [0, 0];
    }
    console.log(root.val);

    var left = helper(root.left);
    var right = helper(root.right);

    var sum = left[0] + right[0] + root.val;
    var size = left[1] + right[1] + 1;

    console.log(sum, size);
    var average = sum/size;
    if (average > maxAverage) {
      //console.log(average);
      maxAverage = average;
      console.log(root);
      node = root;
    }
    return [sum, size];
  }

  helper(root);
  return node;

}

var node1 = new Node(1);
var node2 = new Node(-5);
var node3 = new Node(11);
var node4 = new Node(1);
var node5 = new Node(2);
var node6 = new Node(4);
var node7 = new Node(-2);
node1.left = node2;
node1.right = node3;
node3.left = node6;
node3.right = node7;
node2.left = node4;
node2.right = node5;

console.log(subTreeWithMaxAverage(node1).val);

