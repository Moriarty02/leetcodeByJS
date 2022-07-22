import { root } from "./commonTree.js";
import { log } from "./log.js";
let verticalTraversal2 = function (root) {
  if (!root) return [];
  let nodes = [];
  let ret = [];
  let traversal = function (node, row, col) {
    if (!node) return;
    nodes.push([col, row, node.val]);
    traversal(node.left, row + 1, col - 1);
    traversal(node.right, row + 1, col + 1);
  };
  traversal(root, 0, 0);
  nodes.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    if (a[1] !== b[1]) return a[1] - b[1];
    return a[2] - b[2];
  });
  let lastcol = -Number.MAX_VALUE;
  for (const tuple of nodes) {
      let col = tuple[0],value = tuple[2];
      if (col !== lastcol) {
          lastcol = col;
          ret.push([]);
      }
      ret[ret.length - 1].push(value);
  }
  return ret;
};
var verticalTraversal = function(root) {
  const dfs = (node, row, col) => {
    if (node === null) {
        return;
    }
    nodes.push([col, row, node.val]);

    dfs(node.left, row + 1, col - 1);
    dfs(node.right, row + 1, col + 1);
  }
  const nodes = [];
  dfs(root, 0, 0);

  nodes.sort((tuple1, tuple2) => {
      if (tuple1[0] !== tuple2[0]) {
          return tuple1[0] - tuple2[0];
      } else if (tuple1[1] !== tuple2[1]) {
          return tuple1[1] - tuple2[1];
      } else {
          return tuple1[2] - tuple2[2];
      }
  });

  const ans = [];
  let lastcol = -Number.MAX_VALUE;
  for (const tuple of nodes) {
      let col = tuple[0], row = tuple[1], value = tuple[2];
      if (col !== lastcol) {
          lastcol = col;
          ans.push([]);
      }
      ans[ans.length - 1].push(value);
  }
  return ans;
}

// log(verticalTraversal2, root);
