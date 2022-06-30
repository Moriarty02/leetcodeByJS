/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  return height(root) >= 0;
};
let height = (root) => {
  if (root == null) return 0;
  let lh = height(root.left),
    rh = height(root.right);
  if (lh >= 0 && rh >= 0 && Math.abs(lh - rh) <= 1) {
    return Math.max(lh, rh) + 1;
  } else {
    return -1;
  }
};
