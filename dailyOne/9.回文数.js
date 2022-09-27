/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false;
  let str = x.toString();
  let len = str.length;
  let mid = Math.floor(len / 2);
  for (let i = 0; i < mid; i++) {
    if (str[i] !== str[len - 1 - i]) return false;
  }
  return true;
};
// @lc code=end
