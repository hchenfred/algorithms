function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
}


  //  1
  //  / \
  // 2   3
  //    / \
  //   4   5

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var result = '';
// preorder traverse
var serialize = function(root) {
  if (root === null) {
    result += 'null' + ' ';
    return;
  }

  result += root.val.toString() + ' ';
  serialize(root.left);
  serialize(root.right);
};



var deserialize = function(arr) {
  


}


var node1 = new TreeNode(1);
var node2 = new TreeNode(2);
var node3 = new TreeNode(3);
node1.left = node2;
node1.right = node3;
var node4 = new TreeNode(4);
var node5 = new TreeNode(5);
node3.left = node4;
node3.right = node5;
serialize(node1);
result = result.trim();
console.log(result);
console.log(result.split(' '));