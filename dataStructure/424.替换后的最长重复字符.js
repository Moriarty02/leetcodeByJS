/*
 * @lc app=leetcode.cn id=424 lang=javascript
 *
 * [424] 替换后的最长重复字符
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let num = new Array(26).fill(0);
  let n = s.length;
  let maxNum = 0;
  let right = 0,
    left = 0;
  while (right < n) {
    let numIndex = s.charCodeAt(right) - 65;
    num[numIndex]++;
    maxNum = Math.max(maxNum, num[numIndex]);
    if (right - left + 1 - maxNum > k) {
      num[s.charCodeAt(left) - 65]--;
      left++;
    }
    right++;
  }
  return right - left;
};
// @lc code=end
