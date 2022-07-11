function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var sortedListToBST = function (head) {
  let getMid = (left, right) => {
    let fast = left;
    let slow = left;
    while (fast !== right && fast.next !== right) {
      fast = fast.next.next;
      slow = slow.next;
    }
    return slow;
  };
  let build = (left, right) => {
    if (left === right) return null;
    let mid = getMid(left, right);
    let root = new TreeNode(mid.val);
    root.left = build(left, mid);
    root.right = build(mid.next, right);
    return root;
  };
  return build(head, null);
};
