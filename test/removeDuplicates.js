/**
 * @param {number[]} nums
 * @return {number}
 * 给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。

由于在某些语言中不能改变数组的长度，所以必须将结果放在数组nums的第一部分。更规范地说，如果在删除重复项之后有 k 个元素，那么 nums 的前 k 个元素应该保存最终结果。

将最终结果插入 nums 的前 k 个位置后返回 k 。

不要使用额外的空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/remove-duplicates-from-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var removeDuplicates_my = function (nums) {
  let len = nums.length;
  if (len === 1) return len;
  let index = 0;
  let shadowLen = len;
  while (index < shadowLen) {
    if (nums[index] !== nums[index + 1]) {
      index++;
    } else {
      let index2 = index + 1;
      while (index2 < len) {
        nums[index2] = nums[++index2];
      }
      shadowLen--;
    }
  }
  return shadowLen;
};
var removeDuplicates = function (nums) {
  // 使用双指针
  if (nums == null || nums.length == 1) {
    return nums.length;
  }
  let i = 0,// i 为 移动的次数 加上初始在第一位 这变换后数组应该为i+1
    j = 1;
  while (j < nums.length) {
    if (nums[i] == nums[j]) {
      j++;
    } else {
      i++;
      nums[i] = nums[j];
      j++;
    }
  }
  return i + 1;
};
// console.log("removeDuplicates");
// let ret = removeDuplicates([0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4]);
// console.log(ret);
