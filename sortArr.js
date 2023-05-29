const array = [
  [10, 6, 9, 1], //S1
  [7, 5, 11, 2], //S2
  [4, 8, 3, 15], //S3
];

const k = 3;

const sortArrays = (score, k) => {
  for (let i = 0; i < score.length - 1; i++) {
    for (let j = 0; j < score.length - i - 1; j++) {
      if (score[j][k] < score[j + 1][k]) {
        const temp = score[j];
        console.log(temp);
        score[j] = score[j + 1];
        score[j + 1] = temp;
      }
    }
  }

  return score;
};

const sortedArray = sortArrays(array, k);
