/*
 * @lc app=leetcode.cn id=334 lang=javascript
 *
 * [334] 递增的三元子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  if (!nums || nums.length < 3) return false;
  let first = nums[0];
  let second = Number.MAX_VALUE;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    // 如果第三个数比 second还大就说明有这个序列
    if (num > second) {
      return true;
      //second保持为除了 first 外最小
    } else if (num > first) {
      second = num;
    } else {
      //first保持最小
      /***
       *  这里有个问题是 如果后面遍历得到的 num比 first 还小
       *  则把当前也就是最小的 num 给 first 会导致 first 的坐标在 second后面
       *  但是不必考虑这个问题 因为当前的 first 比之前的 first 还要小 老的 first 和 sencond 序列条件还是
       * 成立的
       */

      first = num;
    }
  }
  return false;
};
// @lc code=end
