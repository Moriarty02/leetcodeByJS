/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 * 输入：l1 = [1,2,4], l2 = [1,3,4]
 * 输出：[1,1,2,3,4,4]
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
let node1 = new ListNode(1);
let node11 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);
let node44 = new ListNode(4);
node1.next = node2;
node2.next = node4;
node11.next = node3;
node3.next = node44;
var mergeTwoLists = function (list1, list2) {
  let head = new ListNode();
  let p = head // 移动的指针
  while (list1 && list2) {
    if (list1.val <= list2.val) {
       p.next = list1;
      list1 = list1.next;
    } else {
      p.next = list2;
      list2 = list2.next;
    }
    p= p.next // 指针后移 head不动
  }
  // 拼接未遍历的
  if (list1) {
    p.next = list1;
  }
  if (list2) {
    p.next = list2;
  }
  return head.next;
};
var mergeTwoLists_2 = function (list1, list2) {
  let head = new ListNode(); // 头结点
  let p = head;
  while (list1 && list2) {
    // list1节点和list2节点均非空
    if (list1.val <= list2.val) {
      // list1节点值更小，当前指针指向list1节点
      p.next = list1;
      list1 = list1.next;
    } else {
      // list2节点值更小，当前指针指向list2节点
      p.next = list2;
      list2 = list2.next;
    }
    p = p.next; // 当前指针后移
  }
  if (list1)
    // list1剩余节点不空，当前指针指向list1剩余节点
    p.next = list1;
  // list2剩余节点不空，当前指针指向list2剩余节点
  else p.next = list2;
  return head.next;
};
// let ret = mergeTwoLists(node1, node11);
// console.log(ret)
// while (ret.next) {
  
//   console.log(ret.next.val);
//   ret.next = ret.next.next;
// }
