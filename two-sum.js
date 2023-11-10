// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const pairs = {};

  for (const [index, num] of nums.entries()) {
    if (pairs[num] !== undefined) {
        return [pairs[num], index];
    } else {
        pairs[target-num] = index;
    }
  }

  return [];
};
