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
 * @return {string[]}
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node5 = new TreeNode(5);
node1.left = node2;
node1.right = node3;
node2.left = node5;

export const  binaryTreePaths = function (root) {
  let ret = [];
  traverse(root, "", ret);
  return ret;
};
let traverse = (root, path, ret) => {
  if (!root.left && !root.right) {
    ret.push(path + root.val);
  }
  if (root.left) {
    traverse(root.left, path + root.val + "->", ret);
  }
  if (root.right) {
    traverse(root.right, path + root.val + "->", ret);
  }
};

// console.log("binaryTreePaths");
// let ret = binaryTreePaths(node1);
// console.log(ret);
