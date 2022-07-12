/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function (root, p, q) {
  let traversal = (root, p, q) => {
    if (root.val > p.val && root.val > q.val) {
      return traversal(root.left, p, q);
    }
    if (root.val < p.val && root.val < q.val) {
      return traversal(root.right, p, q);
    }
    return root;
  };
  return traversal(root, p, q);
};
