/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  helper(image, sr, sc, color, image[sr][sc]);
  return image;
};
var helper = (image, sr, sc, newColor, oldColor) => {
  if (
    sr < 0 ||
    sc < 0 ||
    sr >= image.length ||
    sc >= image[0].length ||
    image[sr][sc] !== oldColor ||
    newColor === oldColor
  ) {
    return;
  }
  image[sr][sc] = newColor;
  helper(image, sr - 1, sc, newColor, oldColor);
  helper(image, sr + 1, sc, newColor, oldColor);
  helper(image, sr, sc - 1, newColor, oldColor);
  helper(image, sr, sc + 1, newColor, oldColor);
};
// @lc code=end
