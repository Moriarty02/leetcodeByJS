/*
 * @lc app=leetcode.cn id=856 lang=javascript
 *
 * [856] 括号的分数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
  let stack = [];
  stack.push(0);
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(0);
    } else {
      let top = stack.pop();
      stack.push(stack.pop() + Math.max(top * 2, 1));
    }
  }
  return stack.pop();
};
// @lc code=end
