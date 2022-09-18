/*
 * @lc app=leetcode.cn id=707 lang=javascript
 *
 * [707] 设计链表
 */

// @lc code=start

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
var MyLinkedList = function () {
  this.size = 0;
  this.head = new ListNode(0);
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;
  let cur = this.head;
  for (let i = 0; i < index + 1; i++) {
    cur = cur.next;
  }
  return cur.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let node = new ListNode(val);
  node.next = this.head.next;
  this.head.next = node;
  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let node = new ListNode(val);
  let cur = this.head;
  while (cur.next) {
    cur = cur.next;
  }
  cur.next = node;
  this.size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index < 0 || index > this.size) return;
  let node = new ListNode(val);
  let cur = this.head;
  for (let i = 0; i < index; i++) {
    cur = cur.next;
  }
  node.next = cur.next;
  cur.next = node;
  this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;
  let cur = this.head;
  for (let i = 0; i < index; i++) {
    cur = cur.next;
  }
  cur.next = cur.next.next;
  this.size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end
