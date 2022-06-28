/**
 * @param {number[]} nums
 * @return {number[]}
 * 
 * 输入：nums = [1,2,3,4]
输出：[1,3,6,10]
解释：动态和计算过程为 [1, 1+2, 1+2+3, 1+2+3+4] 。

输入：nums = [1,1,1,1,1]
输出：[1,2,3,4,5]
解释：动态和计算过程为 [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1] 。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/running-sum-of-1d-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

输入：nums = [3,1,2,10,1]
输出：[3,4,6,16,17]
 */
var runningSum = function (nums) {
  if (!nums || nums.length === 0) return null;
  let currentSum = 0;
  return nums.map((num) => {
    currentSum += num;
    return currentSum;
  });
};
let numsArray = [[1, 2, 3, 4], [1, 1, 1, 1, 1], [3, 1, 2, 10, 1]];
// let ret = numsArray.map((nums) => runningSum(nums));
// console.log(ret);
