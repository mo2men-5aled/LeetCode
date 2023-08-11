/**
 * @param {number[]} nums
 * @return {number}
 */


var missingNumber = function (nums) {
  let len = nums.length;
  if (len === 0) return 0;

  result = 0;
  nums.map((num, index) => {
    result += num - index;
    console.log(result);
  });
  return len - result;
};

nums = [3,0,1]
missingNumber(nums)