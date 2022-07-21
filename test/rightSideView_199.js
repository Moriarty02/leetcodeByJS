import { bstHead2 } from "./commonTree.js";
import { log } from "./log.js";

var rightSideView = function (root) {
  let queue = [];
  let result = [];
  if (!root) return result;
  queue.push(root);
  while (queue.length > 0) {
    let size = queue.length;
    // let childs = [];
    while (size > 0) {
      let curr = queue.shift();
      size--;

      // childs.push(curr.val);
      if (size === 0) {
        result.push(curr.val);
      }
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
  }
  return result;
};
// log(rightSideView, bstHead2);
