/*
 * @lc app=leetcode.cn id=792 lang=javascript
 *
 * [792] 匹配子序列的单词数
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    let j = 0;
    let k = 0;
    while (j < s.length && k < words[i].length) {
      if (s[j] === words[i][k]) {
        k++;
      }
      j++;
    }
    if (k === words[i].length) {
      count++;
    }
  }
  return count;
};
// @lc code=end
