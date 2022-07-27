import { root } from "./commonTree.js";
import { log } from "./log.js";

var pathSum = function (root, sum) {
  let arr = [];
  let path = [];
  dfs(root, path, arr, sum);
  return arr;
};

function dfs(root, path, arr, sum) {
  if (!root) return;
  path.push(root.val);
  if (root.val == sum && root.left == null && root.right == null) {
    arr.push([...path]);
  }
  dfs(root.left, path, arr, sum - root.val);
  dfs(root.right, path, arr, sum - root.val);
  path.pop();
}
// log(pathSum, root, 18);
