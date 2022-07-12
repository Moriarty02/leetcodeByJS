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
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
  let min = Infinity;
  let res = root.val;
  let traversal = (root, target) => {
    if (!root) return;
   // if (root.val === target) return root;
    if (Math.abs(root.val - target) < min) {
      min = Math.abs(root.val - target);
      res = root.val;
    }
    if (root.val > target) {
      traversal(root.left, target);
    }else if (root.val < target) {
      traversal(root.right, target);
    }
  };
  traversal(root, target);
  return res;
};
