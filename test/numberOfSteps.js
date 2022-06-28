/**
 * @param {number} num
 * @return {number}
 * 
 * 输入：num = 14
输出：6
解释：
步骤 1) 14 是偶数，除以 2 得到 7 。
步骤 2） 7 是奇数，减 1 得到 6 。
步骤 3） 6 是偶数，除以 2 得到 3 。
步骤 4） 3 是奇数，减 1 得到 2 。
步骤 5） 2 是偶数，除以 2 得到 1 。
步骤 6） 1 是奇数，减 1 得到 0 。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/number-of-steps-to-reduce-a-number-to-zero
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var numberOfSteps = function (num) {
  let step = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num = num / 2;
      step++;
    } else {
      num--;
      step++;
    }
  }
  return step;
};
// console.log("numberOfSteps")
// console.log(numberOfSteps(8));
