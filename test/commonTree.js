import { TreeNode } from "./binaryTree.js";

let node3 = new TreeNode(3);
let node9 = new TreeNode(9);
let node20 = new TreeNode(20);
let node15 = new TreeNode(15);
let node7 = new TreeNode(7);
let node6 = new TreeNode(6);
node3.left = node9;
node3.right = node20;
node9.right = node6;
node20.left = node15;
node20.right = node7;
export const root = node3;
