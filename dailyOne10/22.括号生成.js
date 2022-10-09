/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = [];
    // 递归函数 生成括号 left 左括号数量  right 右括号数量  str 当前字符串
    let dfs = (left, right, str) => {
        if (left == n && right == n) {
            res.push(str);
            return;
        }
        if (left < n) {
            dfs(left + 1, right, str + '(');
        }
        if (left > right) {
            dfs(left, right + 1, str + ')');
        }
    }
    dfs(0, 0, '');
    return res;
};
// @lc code=end

