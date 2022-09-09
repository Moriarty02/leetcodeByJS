/*
 * @lc app=leetcode.cn id=1598 lang=javascript
 *
 * [1598] 文件夹操作日志搜集器
 * 输入：logs = ["d1/","d2/","./","d3/","../","d31/"]
    输出：3
 */

// @lc code=start
/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function(logs) {
    let depth = 0;
    for (let i = 0; i < logs.length; i++) {
        if (logs[i] === '../') {
            depth = Math.max(0, depth - 1);
        } else if (logs[i] !== './') {
            depth++;
        }
    }
    return depth;
};
// @lc code=end

