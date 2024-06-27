// Your task is to sum the differences between consecutive pairs in the array in descending order.

// My Solution
function sumOfDifferences(arr) {
  if (arr.length <= 1) return 0;
  let result = 0;
  arr = arr.sort((a, b) => b - a);
  for (let i = 1; i < arr.length; i++) {
    result += arr[i] - arr[i - 1];
  }
  return result;
}

// Another Solution - Evaluating the difference between each element is unnecessary as the array is sorted.
function sumOfDifferences(arr) {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}
