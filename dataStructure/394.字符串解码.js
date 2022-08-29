/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let res =""
    let stack = []
    let num = 0
    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            num = num * 10 + Number(s[i])
        } else if (s[i] === "[") {
            stack.push(res)
            stack.push(num)
            res = ""
            num = 0
        } else if (s[i] === "]") {
            let times = stack.pop()
            let lastRes = stack.pop()
            res = lastRes + res.repeat(times)
        } else {
            res += s[i]
        }
    }
    return res
};
// @lc code=end

