/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  for (let counter = 0; counter < matrix.length; counter++) {
    let left = 0;
    let right = matrix[counter].length - 1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (matrix[counter][mid] === target) {
        return true;
      } else if (matrix[counter][mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  
  return false;
};


matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
target = 3
console.log(searchMatrix(matrix,target))