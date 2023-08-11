/**
 * @param {number[]} nums
 * @return {number}
 */

var missingNumber = function(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((sum, num) => sum + num, 0);
  
  return expectedSum - actualSum;
};

nums = [3,0,1]
missingNumber(nums)