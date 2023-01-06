/*
 * @lc app=leetcode.cn id=2032 lang=javascript
 *
 * [2032] 至少在两个数组中出现的值
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {
  // 三个数组用三位二进制数表示
  /****
   * 001表示第一个出现过
   * 010表示第二个出现过
   * 110 表示 在 第二和第三出现过
   *
   */
  let map = new Map();
  for (const i of nums1) {
    map.set(i, 1);
  }
  for (const i of nums2) {
    map.set(i, (map.get(i) || 0) | 2); //1|2=3 |2相当于在二进制上第二位加了个1
  }
  for (const i of nums3) {
    map.set(i, (map.get(i) || 0) | 4); // 同上  在第三位加了一个1
  }
  const res = [];
  for (const [k, v] of map.entries()) {
    // 只要最后的结果大于1 比如110或者011 都是ok 的
    // v&(v-1) v和 v-1二进制只差了末尾的1 相当于吧末尾1
    // 只会出现11 3 10 2 01 1 00 0
    // 11-1 =10!=0  10-1=10!=0 01-1==0 0做&一定为0 
    // &运算是都为1 为1
    if ((v&(v-1))!==0) {
      res.push(k);
    }
  }
  return res;
};

// @lc code=end
