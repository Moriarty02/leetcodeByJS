/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  let mapS2T = {};
  let mapT2S = {};
  for (let i = 0; i < s.length; i++) {
    let sItem = s[i];
    let TItem = t[i];
    if (
      (mapS2T[sItem] && mapS2T[sItem] !== TItem) ||
      (mapT2S[TItem] && mapT2S[TItem] !== sItem)
    ) {
      return false;
    }
    mapS2T[sItem] = TItem;
    mapT2S[TItem] = sItem;
  }
  return true;
};
// @lc code=end
