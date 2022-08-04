/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList2 = function(head) {
    let stack = [];
    if(head === null) return null;
    while(head) {
        stack.push(head.val);
        head = head.next;
    }
    let newHead = new ListNode(stack.pop());
    let cur = newHead;
    while(stack.length) {
        cur.next = new ListNode(stack.pop());
        cur = cur.next;
    }
    return newHead;
};

var reverseList = function(head) {
    let prev = null;
    let cur = head;
    while(cur) {
        let next = cur.next; // 先保存下一个节点
        cur.next = prev; // 将当前节点的next指向前一个节点
        prev = cur; // 将当前节点赋值给前一个节点
        cur = next; // 将临时保存的下一个节点 赋值给当前节点
    }
    return prev;
}
// @lc code=end

