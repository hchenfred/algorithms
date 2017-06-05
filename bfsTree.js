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
    var result = [];
    var queue = [];
    queue.push(root);
    while (queue.length !== 0) {
        var size = queue.length;
        var currArr = [];
        while (size > 0) {
            var curr = queue.pop();
            size--;
            //console.log('ssfdsfs', queue);
            currArr.push(curr.val);
            if (curr.left !== null) {
              //console.log('ssfdsfs', queue);
              queue.push(curr.left);
            }
        
            if (curr.right !== null) {
              //console.log('ssfdsfs', queue);
             queue.push(curr.right);
            }
            
        }
        result.push(currArr);
       
        
    }
    console.log('result is ', result);
    return result;
};

var node1 = new TreeNode(3);
console.log(levelOrder(node1));