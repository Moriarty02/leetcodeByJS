/*
 * @lc app=leetcode.cn id=1700 lang=javascript
 *
 * [1700] 无法吃午餐的学生数量
 */

// @lc code=start
/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    // 1. 模拟 count 为无法吃到午餐的学生数量 当 count===students.length 时，说明无法吃到午餐的人数等于剩余学生数量，直接返回
    let count = 0;
    while (count < students.length) {
        if (students[0] === sandwiches[0]) {
            students.shift();
            sandwiches.shift();
            // 2. 重置 count 匹配上了就重置为 0 因为有可能后面还有匹配的 所以不能是--1
            count = 0;
        } else {
            students.push(students.shift());
            count++;
        }
    }
    return students.length;
};
// @lc code=end

