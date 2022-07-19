var isSymmetric = function (root) {
  if (root == null) {
    return true;
  }
  let cmp = function (node1, node2) {
    if (node1 == null && node2 == null) {
      return true;
    }
    if (node1 == null || node2 == null || node1.val != node2.val) {
      return false;
    }
    return cmp(node1.left, node2.right) && cmp(node1.right, node2.left);
  };
  return cmp(root.left, root.right);
};
