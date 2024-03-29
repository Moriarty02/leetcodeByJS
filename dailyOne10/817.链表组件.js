/*
 * @lc app=leetcode.cn id=817 lang=javascript
 *
 * [817] 链表组件
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function(head, nums) {
    let set = new Set(nums);
    let res = 0;
    while (head) {
        if (set.has(head.val) && (!head.next || !set.has(head.next.val))) {
            res++;
        }
        head = head.next;
    }
    return res;
};
// @lc code=end

