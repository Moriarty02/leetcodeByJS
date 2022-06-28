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
 * 给定一个头结点为 head 的非空单链表，返回链表的中间结点。

如果有两个中间结点，则返回第二个中间结点。
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node5 = new ListNode(5);
let node6 = new ListNode(6);
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

var middleNode_first = function (head) {
  let nodes = [];
  let len = 0;
  let currentNode = head;
  nodes.push(currentNode);
  while (currentNode.next) {
    currentNode = currentNode.next;
    len++;
    nodes.push(currentNode);
  }
  let mid = Math.ceil(len / 2);
  return nodes[mid];
};
var middleNode = function (head) {
  let lower = head;
  let faster = head;
  while (lower !== null && faster !== null && faster.next !== null) {
    faster = faster.next.next;
    lower = lower.next;
  }
  return lower;
};
// console.log(middleNode(node1));
