var isUnivalTree = function (root) {
  if (!root) return true;
  let val = root.val;
  let traversal = (root) => {
    if (!root) return true;
    if (root.val !== val) return false;
    return traversal(root.left) && traversal(root.right);
  };
  return traversal(root);
};
