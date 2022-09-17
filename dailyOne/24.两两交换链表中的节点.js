/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
     let dump = new ListNode(0);
        dump.next = head;
        let cur = dump;
        while(cur.next && cur.next.next) {
            let start = cur.next;
            let end = cur.next.next;
            cur.next = end;
            start.next = end.next;
            end.next = start;
            cur = start;
        }
        return dump.next;
        
};
// @lc code=end

