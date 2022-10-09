/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return (
        // 左右有一个成立即可 两个都成立的话 会出现  abca  这种情况 这个也是成立的
        // 这里不是递归 而是两个分支 校验只会校验一次两个分支 如果剔除后仍然不成立直接返回 false
        isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
      );
    }
    left++;
    right--;
  }
    return true;
};
var isPalindrome = function (s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
// @lc code=end
