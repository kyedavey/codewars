// You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.
// If there is no index that would make this happen, return -1.

// My Solution
function findEvenIndex(arr) {
  let left = 0;
  let right = arr.reduce((acc, n) => acc + n, 0) - arr[0];
  if (left === right) return 0;
  for (let i = 1; i < arr.length; i++) {
    left += arr[i - 1];
    right -= arr[i];
    if (left === right) return i;
  }
  return -1;
}
