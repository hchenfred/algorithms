/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


function TreeNode(val) {
      this.val = val;
      this.left = this.right = null;
  }
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (root === null) {
        return [];
    }
    var result = [];
    var queue = [];
    queue.push(root);
    
    while (queue.length !== 0) {
        var size = queue.length;
        var arr = []
        for (var i = 0; i < size; i++) {
            var curr = queue.shift();
            arr.push(curr.val);
            if (curr.left !== null) {
                queue.push(curr.left);
            }
            if (curr.right !== null) {
                queue.push(curr.right);
            }    
        }
        result.push(arr);
    }
    return result;
};

var node1 = new TreeNode(3);
node1.left = new TreeNode(4);
node1.right = new TreeNode(5);
console.log(levelOrder(node1));