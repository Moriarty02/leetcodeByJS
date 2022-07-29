/****
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2,2]
 */

var intersect = function (num1, nums2) {
  let longer = num1.length >= nums2.length ? num1 : nums2;
  let shorter = num1.length < nums2.length ? num1 : nums2;
  let result = [];
  let map = {};
  for (let i = 0; i < shorter.length; i++) {
    if (map[shorter[i]]) {
      map[shorter[i]]++;
    } else {
      map[shorter[i]] = 1;
    }
  }
  for (let i = 0; i < longer.length; i++) {
    if (map[longer[i]]) {
      result.push(longer[i]);
      map[longer[i]]--;
    }
  }

  return result;
};
// console.log(`intersect`);
// console.log(intersect([1, 2, 2, 1], [2, 2]));
// nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// [4,9,5] [9,4,9,8,4]
//  console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));

