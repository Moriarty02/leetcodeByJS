/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];
  let map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let res = [];
  let dfs = (index, str) => {
    if (index === digits.length) {
      res.push(str);
      return;
    }
    let letters = map[digits[index]];
    for (let i = 0; i < letters.length; i++) {
      dfs(index + 1, str + letters[i]);
    }
  };
  dfs(0, "");
  return res;
};
// @lc code=end
