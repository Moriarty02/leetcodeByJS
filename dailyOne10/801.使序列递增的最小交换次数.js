/*
 * @lc app=leetcode.cn id=801 lang=javascript
 *
 * [801] 使序列递增的最小交换次数
 * 输入: nums1 = [1,3,5,4], nums2 = [1,2,3,7]
    输出: 1
    解释: 
    交换 A[3] 和 B[3] 后，两个数组如下:
    A = [1, 3, 5, 7] ， B = [1, 2, 3, 4]
 */

// @lc code=start
/** 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSwap = function(nums1, nums2) {
    let n = nums1.length;
    let swap = 1, notSwap = 0;
    for (let i = 1; i < n; i++) {
        let newSwap = Number.MAX_SAFE_INTEGER, newNotSwap = Number.MAX_SAFE_INTEGER;
        if (nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1]) {
            newSwap = swap + 1;
            newNotSwap = notSwap;
        }
        if (nums1[i] > nums2[i - 1] && nums2[i] > nums1[i - 1]) {
            newSwap = Math.min(newSwap, notSwap + 1);
            newNotSwap = Math.min(newNotSwap, swap);
        }
        swap = newSwap;
        notSwap = newNotSwap;
    }
    return Math.min(swap, notSwap);
};
// @lc code=end

