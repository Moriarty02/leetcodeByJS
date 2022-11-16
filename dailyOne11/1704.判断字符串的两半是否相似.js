/*
 * @lc app=leetcode.cn id=1704 lang=javascript
 *
 * [1704] 判断字符串的两半是否相似
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
  let n = s.length;
  let a = 0,
    b = 0;
  for (let i = 0; i < n / 2; i++) {
    if (isVowel(s[i])) a++;
    if (isVowel(s[n / 2 + i])) b++;
  }
  return a === b;
};
var isVowel = function (c) {
  return "aeiouAEIOU".indexOf(c) !== -1;
};
// @lc code=end
