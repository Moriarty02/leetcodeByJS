/*
 * @lc app=leetcode.cn id=187 lang=javascript
 *
 * [187] 重复的DNA序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  let start = 0;
  let m = 10;
  if (s.length < m) return [];
  let map = {};
  let ans = [];
  for (let i = 0; i <= s.length - m; i++) {
    const sub = s.slice(i, i + m);
    if (!map[sub]) {
      map[sub] = 1;
    } else if (map[sub] === 1) {
      ans.push(sub);
      map[sub]++;
    }
  }

  return ans;
};
const case1 = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT";
const case2 = "AAAAAAAAAAA";
console.log(findRepeatedDnaSequences(case2));
// @lc code=end
