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
node33.left = node11;
node33.right = node44;
// node11.left = node33;

node44.right = node55;

// 783 case 
// [1,0,48,null,null,12,49]
let node783_1 = new TreeNode(1);
let node783_0 = new TreeNode(0);
let node783_48 = new TreeNode(48);
let node783_12 = new TreeNode(12);
let node783_49 = new TreeNode(49);
node783_1.left = node783_0;
node783_1.right = node783_48;
node783_48.left = node783_12;
node783_48.right = node783_49;
// 783 case 

export const root = node3;
export const bstHead = node11
export const bstHead2 = node783_1;
