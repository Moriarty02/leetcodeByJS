/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function (s) {
    let a = ["(", ")"];
    let b = ["{", "}"];
    let c = ["[", "]"];
    let stack = [];
    let sArr = s.split("");
    if (sArr.length % 2 !== 0) {
      return false;
    }
    if (sArr.length === 0) {
      return true;
    }
    for (let i = 0; i < sArr.length; i++) {
      if (sArr[i] === a[1] && stack[stack.length - 1] === a[0]) {
        stack.pop();
      } else if (sArr[i] === b[1] && stack[stack.length - 1] === b[0]) {
        stack.pop();
      } else if (sArr[i] === c[1] && stack[stack.length - 1] === c[0]) {
        stack.pop();
      } else {
        stack.push(sArr[i]);
      }
    }
    if (stack.length === 0) {
      return true;
    }
    return false;
  };
// @lc code=end

