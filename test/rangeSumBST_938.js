
var rangeSumBST = function (root, low, high) {
  let sum = 0;
  let traversal = (root) => {
    if (!root) return 0;
    traversal(root.left);
    if (root.val >= low && root.val <= high) sum += root.val;
    traversal(root.right);
  };
  traversal(root);
  return sum;
};
