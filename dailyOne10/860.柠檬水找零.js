/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let five = 0;
  let ten = 0;
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      five++;
    } else if (bills[i] === 10) {
      if (five === 0) return false;
      five--;
      ten++;
    } else {
      // 20 两种 5+5+5 5+10 优先选择 5+10  5的适用范围更大
      if (five > 0 && ten > 0) {
        five--;
        ten--;
      } else if (five >= 3) {
        five -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};
// @lc code=end
