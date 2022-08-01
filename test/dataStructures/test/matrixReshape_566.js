var matrixReshape = function(mat, r, c) {
  if (mat.length * mat[0].length !== r * c) {
    return mat;
  }
  let result = [];
  let temp = [];
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      temp.push(mat[i][j]);
      if (temp.length === c) {
        result.push(temp);
        temp = [];
      }
    }
  }
  return result;
};
// let  mat = [[1,2],[3,4]], r = 1, c = 4
// console.log(`matrixReshape`)
// 输出：[[1,2,3,4]]

// let mat = [[1,2],[3,4]], r = 2, c = 4
// console.log(matrixReshape(mat, r, c));

// 输出：[[1,2],[3,4]]