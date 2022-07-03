/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
import { root } from "./commonTree.js";
import { log } from "./log.js";
var diameterOfBinaryTree = function (root) {
  let max = 0;

  let depth = (root) => {
    if (!root) return 0;

    let leftDepth = depth(root.left);
    let rightDepth = depth(root.right);
    if (leftDepth + rightDepth > max) {
      max = leftDepth + rightDepth;
    }
    return Math.max(leftDepth, rightDepth) + 1;
  };
  depth(root);
  return max;
};

log(diameterOfBinaryTree, root);
