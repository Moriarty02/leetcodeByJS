/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原 IP 地址
 * 输入：s = "25525511135"
   输出：["255.255.11.135","255.255.111.35"]
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    let res = [];
    let dfs = (s, path, start) => {
        if (path.length > 4) return;
        if (path.length === 4 && start === s.length) {
            res.push(path.join('.'));
            return;
        }
        for (let i = start; i < s.length; i++) {
            let str = s.substring(start, i + 1);
            if (str.length > 1 && str[0] === '0') break;
            if (Number(str) > 255) break;
            path.push(str);
            dfs(s, path, i + 1);
            path.pop();
        }
    }
    dfs(s, [], 0);
    return res;
};
// @lc code=end

