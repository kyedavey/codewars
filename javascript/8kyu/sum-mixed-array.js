// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

// My Solution
function sumMix(x) {
  return x.reduce((acc, n) => acc + Number(n), 0);
}

// Map and reduce
function sumMix(x) {
  return x.map((a) => +a).reduce((a, b) => a + b);
}
