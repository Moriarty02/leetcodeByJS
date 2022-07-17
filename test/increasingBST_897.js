/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var increasingBST = function(root) {
  if(!root) return null;
  let head = null
  let p =null
  let traversal = function (root) {
    if (!root) return;
    traversal(root.left);
    let node = new TreeNode(root.val);
    if(head === null){
      head = node;
      p = head;
    }else{
      p.right = node;
      p = p.right;
    }
    traversal(root.right);
  }
  traversal(root);
  return head;
};