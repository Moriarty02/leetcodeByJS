/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
import { TreeNode } from "./binaryTree.js";
// import { log } from "./log.js";
var sortedArrayToBST = function (nums) {
  let traverse = (nums, left, right) => {
    if (left > right) return null;
    let mid = Math.floor((left + right) / 2);
    let root = new TreeNode(nums[mid]);
    root.left = traverse(nums, left, mid - 1);
    root.right = traverse(nums, mid + 1, right);
    return root;
  };
  let root = traverse(nums, 0, nums.length - 1);
  return root;
};
export const buildBST = sortedArrayToBST
// let case1 = [-10, -3, 0, 5, 9];
// log(sortedArrayToBST, case1);
