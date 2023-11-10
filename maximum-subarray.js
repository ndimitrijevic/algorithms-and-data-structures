// https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  let largestSum = nums[0];
  let accumulator = nums[0];

  for (let i=1; i<nums.length; i++) {
    const calc = Math.max(nums[i], nums[i] + accumulator);
    largestSum = Math.max(largestSum, calc);
    accumulator = calc;
  }

  return largestSum;
};
