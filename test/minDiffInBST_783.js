import { bstHead2 } from "./commonTree.js";
import { log } from "./log.js";

var minDiffInBST = function (root) {
  let min = Infinity;
  if (!root) return null;
  let prev = -1;
  let traversal = (root) => {
    if (!root) return;
    traversal(root.left);
    if (prev === -1) {
      prev = root.val;
    } else {
      min = Math.min(min, root.val - prev);
    }
    prev = root.val;

    traversal(root.right);
  };
  traversal(root);
  return min;
};
// log(minDiffInBST, bstHead2);
