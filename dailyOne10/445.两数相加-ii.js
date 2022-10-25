/*
 * @lc app=leetcode.cn id=445 lang=javascript
 *
 * [445] 两数相加 II
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
 * 输入：l1 = [7,2,4,3], l2 = [5,6,4]
   输出：[7,8,0,7]
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let stack1 = [], stack2 = []
    while (l1) {
        stack1.push(l1.val)
        l1 = l1.next
    }
    while (l2) {
        stack2.push(l2.val)
        l2 = l2.next
    }
    let carry = 0, head = null // carry 是进位
    while (stack1.length || stack2.length || carry) {
        let sum = carry
        if (stack1.length) {
            sum += stack1.pop()
        }
        if (stack2.length) {
            sum += stack2.pop()
        }
        let node = new ListNode(sum % 10)
        carry = sum >= 10 ? 1 : 0
        //  node 当前结点， head 指向，将 node 指向到新的 head 位置，然后前进一步。
        node.next = head
        head = node
    }
    return head
};
// @lc code=end

