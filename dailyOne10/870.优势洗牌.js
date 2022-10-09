/*
 * @lc app=leetcode.cn id=870 lang=javascript
 *
 * [870] 优势洗牌
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var advantageCount = function(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i < nums2.length; i++) {
        let index = nums1.findIndex(item => item > nums2[i]);
        if (index !== -1) {
        res.push(nums1[index]);
        nums1.splice(index, 1);
        } else {
        res.push(nums1.shift());
        }
    }
    return res;
};
// @lc code=end

