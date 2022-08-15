/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = {};

  for (let str of strs) {
    // 用排序后的串作为 map 的 key 结果集作为 value
    let key = str.split("").sort().join();
    // if (map[key]) {
    //   map[key].push(str);
    // } else {
    //   map[key] = [];
    //   map[key].push(str);
    // }
    // 简化
    if(!map[key]) map[key]=[]
    map[key].push(str)
  }
  return Object.values(map);
};
// @lc code=end
