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
 * @return {number[]}
 */
var findMode = function (root) {
  let ret = [];
  let pre = 0;
  let currTimes = 0;
  let maxTimes = 0;
  let traversal = function (root) {
    if (!root) return;
    traversal(root.left);
    // 主要逻辑
    /*****
     *   二叉树当升序数组对待
     *  currTimes 记录当前节点的次数
     * pre 记录前一个节点的值
     * maxTimes 记录最大的次数
     * 
     * 
     * 
     */
    if (pre === root.val) {
      // 如果当前节点的值和前一个节点的值相等，则currTimes加1
      currTimes++;
    } else {
      //如果当前节点的值和前一个节点的值不相等，则currTimes置0 并且pre置当前节点的值
      pre = root.val;
      currTimes = 1;
    }
    // 如maxTimes == currTimes 举例  2 出现2 次  3 出现2次 就是吧 2 3 都加入到ret中 
    if (currTimes === maxTimes) {
      ret.push(root.val);
    } else if (currTimes > maxTimes) {
      // 如果currTimes大于maxTimes，则清空ret，并且maxTimes置currTimes
      ret = [];
      ret.push(root.val);
      maxTimes = currTimes;
    }
    // end
    traversal(root.right);
  };
  traversal(root);
  return ret;
};
