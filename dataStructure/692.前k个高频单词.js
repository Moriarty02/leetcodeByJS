/*
 * @lc app=leetcode.cn id=692 lang=javascript
 *
 * [692] 前K个高频单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let map = new Map()
    for (let word of words) {
        map.set(word, map.has(word) ? map.get(word) + 1 : 1)
    }
    let arr = [...map]
    arr.sort((a, b) => {
        if (a[1] === b[1]) {
            return a[0] < b[0] ? -1 : 1
        }
        return b[1] - a[1]
    })
    return arr.slice(0, k).map(item => item[0])
};
// @lc code=end

