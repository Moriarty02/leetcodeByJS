/*
 * @lc app=leetcode.cn id=1249 lang=javascript
 *
 * [1249] 移除无效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  let stack = [];
  let res = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i);
    } else if (s[i] === ')') {
      if (stack.length) {
        stack.pop();
      } else {
        s = s.slice(0, i) + s.slice(i + 1);
        // 由于删除了一个字符，所以i也要减一
        i--;
      }
    }
  }
  // 可能还剩下多的( 例如: (a(b(c)d)
  while (stack.length) {
    let index = stack.pop();
    s = s.slice(0, index) + s.slice(index + 1);
  }

  return s;   
};
// @lc code=end

