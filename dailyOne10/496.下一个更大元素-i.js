/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * 输入：nums1 = [2,4], nums2 = [1,2,3,4].
   输出：[3,-1]
 */
var nextGreaterElement = function (nums1, nums2) {
    // 单调栈方法
  let map = new Map();
  let stack = [];
  for (let i = 0; i < nums2.length; i++) {
    // 如果栈顶元素小于当前元素，那么栈顶元素的下一个更大元素就是当前元素,出栈存放在map中
    while (stack.length > 0 && nums2[stack[stack.length - 1]] < nums2[i]) {
      map.set(nums2[stack.pop()], nums2[i]);
    }
    // 当前元素入栈
    stack.push(i);
  }
  // 如果栈中还有元素，那么这些元素的下一个更大元素就是找不到，这些元素都是被前面高个挡住的，也要放到 map 中用于最后的查询
  while (stack.length > 0) {
    map.set(nums2[stack.pop()], -1);
  }
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    res.push(map.get(nums1[i]));
  }
  return res;
};
// @lc code=end
