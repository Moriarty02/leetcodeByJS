/*
 * @lc app=leetcode.cn id=1710 lang=javascript
 *
 * [1710] 卡车上的最大单元数
 */

// @lc code=start
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function (boxTypes, truckSize) {
  // 优先装重的
  //[1,3] [2,2] [3,1] 4
  boxTypes.sort((a, b) => b[1]-a[1]);
  
  let res = 0;
  for (let i = 0; i < boxTypes.length; i++) {
    // 如果装的下所有的，就全装了
    if (truckSize > boxTypes[i][0]) {
      res += boxTypes[i][0] * boxTypes[i][1];
      truckSize -= boxTypes[i][0];
    } else {
      // 装不完就装一部分
      res += boxTypes[i][1] * truckSize;
      break;
    }
  }
  return res;
};
console.log(maximumUnits([[1, 3], [2, 2], [3, 1]], 4));
// @lc code=end
