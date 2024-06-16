// Given an array of integers.
// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) return [];
  let result = [0, 0];
  for (n of input) {
    if (n > 0) {
      result[0] += 1;
    } else {
      result[1] += n;
    }
  }
  return result;
}

// Clever
function countPositivesSumNegatives(input) {
  return !input || !input.length
    ? []
    : [
        input.filter((n) => n > 0).length,
        input.filter((n) => n < 0).reduce((a, b) => a + b),
      ];
}
