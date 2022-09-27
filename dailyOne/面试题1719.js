// var missingTwo = function (nums) {
//   let n = nums.length + 2;
//   let sum = (n * (n + 1)) / 2;
//   let sum2 = 0;
//   for (let i = 0; i < nums.length; i++) {
//     sum2 += nums[i];
//   }
//   let diff = sum - sum2; // 差值为 两数之和
//   let half = diff / 2;
//   let sum3 = (half * (half + 1)) / 2;
//   for (let x of nums) {
//     if (x <= half) {
//       sum3 -= x;
//     }
//   }
//   return [sum3, diff - sum3];
// };
var missingTwo = function missingTwo(nums) {
  let n = nums.length + 2,
    cur = Math.floor((n * (1 + n)) / 2);
  for (let x of nums) cur -= x;
  let sum = cur,
    t = Math.floor(cur / 2);
  cur = Math.floor((t * (1 + t)) / 2);
  for (let x of nums) {
    if (x <= t) cur -= x;
  }
  return [cur, sum - cur];
};
