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

let node11 = new TreeNode(11);
let node22 = new TreeNode(22);
let node33 = new TreeNode(33);
let node44 = new TreeNode(44);
let node55 = new TreeNode(55);
// node33.left = node11;
node33.right = node22;
node11.left = node33;
// node44.right = node55;
export const root = node3;
export const bstHead = node11
