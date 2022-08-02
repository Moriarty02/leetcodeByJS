/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // ransomNote  范围大
  // magazine   字典
  let map = {};
  for (let i = 0; i < magazine.length; i++) {
    if (map[magazine[i]]) {
      map[magazine[i]]++;
    } else {
      map[magazine[i]] = 1;
    }
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (map[ransomNote[i]]) {
      map[ransomNote[i]]--;
    } else {
      return false;
    }
  }
  return true;
};
// @lc code=end
