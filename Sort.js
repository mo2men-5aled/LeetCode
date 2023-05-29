/*
 * @lc app=leetcode id=2545 lang=javascript
 *
 * [2545] Sort the Students by Their Kth Score
 */

// @lc code=start
/**
 * @param {number[][]} score
 * @param {number} k
 * @return {number[][]}
 */

const score = [
  [10, 6, 9, 1], //S1
  [7, 5, 11, 2], //S2
  [4, 8, 3, 15], //S3
];
const k = 2;
var sortTheStudents = function (score, k) {
  let sorted = score.sort((S1, S2) => {
    return S2[k] - S1[k];
  });

  return sorted;
};

// @lc code=end
