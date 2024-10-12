
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let sortedMatrix = [];
  if(!matrix) return [];
  for (let i = 0; i < matrix.length; i++)  {
    for (let j = 0; j < matrix[i].length; j++) {
      let columnIndex = i % 2 === 0 ? j : (matrix[i].length - j - 1);
      sortedMatrix.push(matrix[i][columnIndex]);
    }
  }
  return sortedMatrix;
}
