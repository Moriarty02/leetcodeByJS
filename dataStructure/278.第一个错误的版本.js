/*
 * @lc app=leetcode.cn id=278 lang=javascript
 *
 * [278] 第一个错误的版本
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let low = 1;
    let high = n;
    while (low < high) {
        // （low+high）/2 要超过 int
      let mid = low + parseInt((high - low)/2);
      if (isBadVersion(mid)) {
        // 找为 true 的所以high为 mid
        high = mid;
      } else {
        // mid 为false 所以找mid+1才可能为 false 最后返回就是low==high
        low = mid + 1;
      }
    }
    return high;
  };
};
// @lc code=end
