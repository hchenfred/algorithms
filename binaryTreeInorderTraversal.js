// Given a binary tree, return the inorder traversal of its nodes' values.

// For example:
// Given binary tree [1,null,2,3],
//    1
//     \
//      2
//     /
//    3
// return [1,3,2].

// Note: Recursive solution is trivial, could you do it iteratively?

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  //inorder traversal
  //L tree -> root -> R tree
  var result = [];
  if (root === null) {
    return result;
  }
  var left = inorderTraversal(root.left);
  var right = inorderTraversal(root.right);
  left.push(root.val);
  result = left.concat(right);
  return result;  
};