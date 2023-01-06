/*
 * @lc app=leetcode.cn id=2180 lang=javascript
 *
 * [2180] 统计各位数字之和为偶数的整数个数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (num) {
  let count = 0;

  while (num > 0) {
    if (isSumEven(num)) {
      count++;
    }
    num--;
  }
  return count;
};
// var isSumEven = (num) => {
//   let sum = ("" + num).split("").reduce((prev, cur) => prev + Number(cur), 0);
//   return sum % 2 === 0;
// };
var isSumEven = (num) => {
  let sum = 0;
  while (num !== 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum % 2 === 0;
};
// @lc code=end
