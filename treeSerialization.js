// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

// For example, you may serialize the following tree

//     1
//    / \
//   2   3
//      / \
//     4   5
// as "[1,2,3,null,null,4,5]", just the same as how LeetCode OJ serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  //preorder
  if (root === null) {
    return '# ';
  }

  let left = serialize(root.left);
  //console.log(left);
  let right = serialize(root.right);

  return root.val + ' ' + left + right;   
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {

  data = data.trim().split(' ');
    var index = 0;
   
    function deserializer(data) {
        if(index > data.length || data[index] === "#") {
            return null;
        }
        
        var node = new TreeNode(parseInt(data[index]));
        index++;
        node.left = deserializer(data);
        index++;
        node.right = deserializer(data);
        return node;
    }
    
    return deserializer(data);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

var a = new TreeNode(1);
var b = new TreeNode(2);
var c = new TreeNode(3);
var d = new TreeNode(4);
var e = new TreeNode(5);
a.left = b;
a.right = c;
c.left = d;
c.right = e;
console.log(serialize(a));
var res = deserialize(serialize(a));
console.log(res);
