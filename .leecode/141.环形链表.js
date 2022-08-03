/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let set = new Set();
    let cur = head;
    while(cur) {
        if(set.has(cur)) {
            return true;
        }
        set.add(cur);
        cur = cur.next;
    }
    return false; 
};
// @lc code=end

