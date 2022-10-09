/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0,
    right = height.length - 1;
  let max = 0;
  while (left < right) {
    // let area = Math.min(height[left],height[right]) * (right - left);
    // max = Math.max(max,area);
    // // 优先移动短板 可以保证面积最大 如果移动长板 宽度也会减小的情况下 面积一定会减小 反而 移动短板 可以让面积更大
    // if(height[left] < height[right]){
    //     left++;
    // }else{
    //     right--;
    // }
    // 优化
    let area = Math.min(height[left], height[right]) * (right - left);
    let minH = Math.min(height[left], height[right]);
    max = Math.max(max, area);
    // 剪枝 left/right 如果比当前的短板还短 那么面积一定会减小 最大面积已经在 max 中记录了不会变化
    while (height[left] <= minH && left < right) {
      left++;
    }
    while (height[right] <= minH && left < right) {
      right--;
    }
  }
  return max;
};
// @lc code=end
