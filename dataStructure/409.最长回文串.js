/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let map = {};
  let count = 0;
  let hasSingle = false;
  let hasSingle2 = false; //>2 的单数  3 5 7
  for (let i = 0; i < s.length; i++) {
    if (!map[s[i]]) {
      map[s[i]] = 1;
    } else {
      map[s[i]]++;
    }
  }
  for (let kv in map) {
    let v = map[kv];
    if (v % 2 == 0) {
      count += v;
    } else {
      if (v === 1) {
        hasSingle = true;
      } else {
        count += v - 1;
        hasSingle2 = true;
      }
    }
  }

  if (hasSingle || hasSingle2) {
    count++;
  }
  return count;
};
// @lc code=end
