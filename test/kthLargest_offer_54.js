/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthLargest = function(root, k) {
  let count = 0;
  let result = 0;
  let traversal = (root) => {
    if (!root) return;
    traversal(root.right);//  倒着为降序
    count++;
    if (count === k) {
      result = root.val;
    }
    traversal(root.left);
  }
  traversal(root);
  return result;
};