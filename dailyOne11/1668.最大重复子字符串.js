/*
 * @lc app=leetcode.cn id=1668 lang=javascript
 *
 * [1668] 最大重复子字符串
 */

// @lc code=start
/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 *  输入：sequence = "ababc", word = "ab"
    输出：2
    解释："abab" 是 "ababc" 的子字符串。
    输入：sequence = "ababc", word = "ba"
    输出：1
    解释："ba" 是 "ababc" 的子字符串，但 "baba" 不是 "ababc" 的子字符串。
 */
var maxRepeating = function(sequence, word) {
    let count = 0;
    let str = word;
    while(sequence.includes(str)){
        console.log(str);
        count++;
        str += word;
    }
    return count;
};
let ret= maxRepeating("abababcacb", "ab")
console.log(ret);
// @lc code=end

