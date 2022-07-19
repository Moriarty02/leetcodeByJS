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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  let set = new Set();
  let traversal = function (head, set) {
    if (!head) return false;
    traversal(head.left, set);
    if (set.has(k - head.val)) return true;
    set.add(head.val);
    traversal(head.right, set);
  };
  return traversal(root, set);
};
