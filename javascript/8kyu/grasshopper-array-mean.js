// Find the mean (average) of a list of numbers in an array.

// My Solution
var findAverage = function (nums) {
  return nums.reduce((acc, n) => acc + n, 0) / nums.length;
};
