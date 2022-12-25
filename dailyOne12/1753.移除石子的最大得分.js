/*
 * @lc app=leetcode.cn id=1753 lang=javascript
 *
 * [1753] 移除石子的最大得分
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var maximumScore = function (a, b, c) {
  // 解法1 start
  let sum = a + b + c; // 总和
  let max = Math.max(a, b, c); // 最大值
  // sum-max 非最大值的和
  /**
   * 如果非最大值的和小于最大值，那么最大值就得和非最大值每一个去匹配一次 最大匹配次数就是非最大值的和
   * 如果非最大值的和大于最大值，那么假设a+b>=c c和a 匹配k1 c和吧匹配k2 然后 c 就是0了剩下 a-k1 b-k2 互相匹配 次数为 Math.floor((a-k1+b-k2)/2)
   * 总的次数为 k1+k2+Math.floor((a-k1+b-k2)/2) 即(a+b+c)/2
   */
  return sum - max < max ? sum - max : Math.floor(sum / 2);
  // 解法1 end
  // 解法2 start 每次将最大的两个数进行减少，直到有两堆为0
  // let arr = [a, b, c];
  // arr.sort((a, b) => a - b);
  // let count = 0;
  // while( arr[1]!==0){
  //    arr[2]--;
  //      arr[1]--;
  //     arr.sort((a, b) => a - b);
  //     count++;
  // }

  // return count;
};
// @lc code=end
