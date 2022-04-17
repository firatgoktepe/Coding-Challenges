// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Example: Input: [1,1,0,1,1,1,0,1] Output: 3

var findMaxConsecutiveOnes = function(nums) {
  let max = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      count = 0;
    }
    if (count > max) {
      max = count;
    }
  }
  return max;
}