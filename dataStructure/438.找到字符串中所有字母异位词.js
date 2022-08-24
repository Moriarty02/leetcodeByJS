/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let pLen = p.length;
  let ret = [];
  for (let i = 0; i <= s.length - pLen; i++) {
    let sub = s.substring(i, i + pLen);
    if (isAnagram(p, sub)) {
      ret.push(i);
    }
  }
  return ret
};
var isAnagram = function (s, t) {
  if (s.length != t.length) return false;
  let map = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    map[s.charCodeAt(i) - "a".charCodeAt()]++;
    map[t.charCodeAt(i) - "a".charCodeAt()]--;
  }
  for (let i = 0; i < 26; i++) {
    if (map[i] != 0) return false;
  }

  return true;
};
// let  s = "abcsssbac", p = "abc" //[0,1,2]

// console.log(findAnagrams(s,p))
// @lc code=end
