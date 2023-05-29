const nums = [8, 8, 8, 8, 2, 4, 4, 2, 4];

function findMatrix(nums) {
  const matrix = [];

  for (const x of nums) {
    let found = false;
    for (let i = 0; i < matrix.length; i++) {
      if (!matrix[i].has(x)) {
        console.log(matrix[i].has(x));
        found = true;
        break;
      }
    }

    if (!found) {
      matrix.push(new Set([x]));
    }
  }

  return matrix.map((set) => Array.from(set));
}
console.log(findMatrix(nums));
