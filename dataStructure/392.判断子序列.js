/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let step1 = 0;
  let step2 = 0;
  while (step1 < s.length && step2 < t.length) {
    let sItem = s[step1];
    let tItem = t[step2];
    if (sItem !== tItem) {
      step2++;
    } else {
      step1++;
      step2++;
    }
  }
  if(step1!==s.length)return false
  return true
};
// @lc code=end
