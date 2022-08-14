/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let last = new Array(26);
  const length = s.length;
  const codePointA = "a".charCodeAt(0);
  for (let i = 0; i < length; i++) {
    last[s.charCodeAt(i) - codePointA] = i;
  }
  const partition = [];
  let start = 0,
    end = 0;
  for (let i = 0; i < length; i++) {
    end = Math.max(end, last[s.charCodeAt(i) - codePointA]);
    if (i === end) {
      partition.push(end - start + 1);
      start = end + 1;
    }
  }
  return partition;
};
// @lc code=end
