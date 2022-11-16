/*
 * @lc app=leetcode.cn id=816 lang=javascript
 *
 * [816] 模糊坐标
 */

// @lc code=start
/**
 * @param {string} s1
 * @return {string[]}
 */
var ambiguousCoordinates = function (s1) {
    // search 方法主要是在往串里面插入一个小数点，然后判断是否合法
        function search(s, start, end) {
            const ans = [];
            // 0.0 
            if (start == end || s[start] != '0') ans.push(s.substring(start, end + 1))
            for (let i = start; i < end; i++) {
                const a = s.substring(start, i + 1), b = s.substring(i + 1, end + 1)
                // 0.1
                if (a.length > 1 && a[0] == '0') continue
                // 1.0
                if (b[b.length - 1] == '0') continue
                ans.push(a + '.' + b)
            }
            return ans
        }
        // 去掉两边的括号
        const s = s1.substring(1, s1.length - 1)
        const n = s.length
        const ans = []
        for (let i = 0; i < n - 1; i++) {
            // 相当于插入一个逗号将字符串 分割成两部分 a 为left b 为right
            const a = search(s, 0, i), b = search(s, i + 1, n - 1)
            for (const x of a) {
                for (const y of b) {
                    ans.push('(' + x + ', ' + y + ')')
                }
            }
        }
        return ans
   
};

// @lc code=end
