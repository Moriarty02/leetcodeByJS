/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let plus = 0;
  let ret = [];
  while (i >= 0 || j >= 0) {
    let a = i >= 0 ? parseInt(num1[i]) : 0;
    let b = j >= 0 ? parseInt(num2[j]) : 0;
    let currentSum = a + b + plus;
    ret.push(currentSum % 10);
    plus = parseInt(currentSum / 10);
    i--;
    j--;
  }
  if (plus === 1) {
    ret.push(1);
  }
  return ret.reverse().join("");
};
// @lc code=end
