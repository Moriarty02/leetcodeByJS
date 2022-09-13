/*
 * @lc app=leetcode.cn id=670 lang=javascript
 *
 * [670] 最大交换
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  let arr = num.toString().split("");
  let maxNum = num;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      swap(arr, i, j);
      let temp = parseInt(arr.join(""));
      maxNum = Math.max(maxNum, temp);
      swap(arr, i, j);
    }
  }
  return maxNum;
};
var swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};
// @lc code=end
