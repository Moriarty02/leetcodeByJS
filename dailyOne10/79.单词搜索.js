/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let m = board.length;
    let n = board[0].length;
    let dfs = (i, j, k) => {
        if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[k]) return false;
        if (k === word.length - 1) return true;
        // 用一个特殊字符标记已经访问过的元素
        board[i][j] = '';
        let res = dfs(i - 1, j, k + 1) || dfs(i + 1, j, k + 1) || dfs(i, j - 1, k + 1) || dfs(i, j + 1, k + 1);
        board[i][j] = word[k];
        return res;
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }
    return false;
};
// @lc code=end

