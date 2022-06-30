/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
import { TreeNode } from "./binaryTree.js";

let node3 = new TreeNode(3);
let shadow_3 = new TreeNode(3);
let node9 = new TreeNode(9);
let node20 = new TreeNode(20);
let node15 = new TreeNode(15);
let node7 = new TreeNode(7);
shadow_3.left = node9;
shadow_3.right = node20;
node3.left = node9;
node3.right = node20;
node20.left = node15;
node20.right = node7;

var isSameTree = function (p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
// console.log(isSameTree(node3, shadow_3));
