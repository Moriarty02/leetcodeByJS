/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  //递推函数 f(n) = max{f(n-1) + nums[n], nums[n]}
  let ret = nums[0];
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (sum + nums[i] > nums[i]) {
      sum += nums[i];
    } else {
      sum = nums[i];
    }
    ret = Math.max(ret, sum);
  }
  return ret;
};
