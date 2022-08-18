/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// var getIntersectionNode = function (headA, headB) {
//   let set = new Set();
//   let p = headA;
//   while (p) {
//     set.add(p);
//     p = p.next;
//   }
//   p = headB;
//   while (p) {
//     if (set.has(p)) return p;
//     p = p.next;
//   }
//   return null;
// };
var getIntersectionNode = function (headA, headB) {
   /**
    *  headA  总步数 a
    * headbz   总步数 b
    *  公共长度为 c
    *  第二次走到 node
    *  p 走过的路径 a（headA走完）+ b-c(长度差)
    *  q 走过的路径 b (headB走完)+ a-c(长度差)
    * 走到 node的时候步调就一致了
    */
  let p = headA;
  let q = headB;
  if (!p || !q) return null;
  while (p !== q) {
    p = p === null ? headB : p.next;
    q = q === null ? headA : q.next;
  }
  return p;
};
// @lc code=end
