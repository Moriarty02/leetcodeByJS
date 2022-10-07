/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 * 输入：digits = [4,3,2,9]
    输出：[4,3,3,0]
 */
var plusOne = function (digits) {
  let plus = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (i === digits.length - 1) {
      digits[i] += 1;
    }
    digits[i] += plus;
    plus = 0;
    if (digits[i] >= 10) {
      digits[i] = digits[i] % 10;
      plus = 1;
    }
  }
  if (plus === 1) {
    digits.unshift(1);
  }
  return digits;
};
// @lc code=end
