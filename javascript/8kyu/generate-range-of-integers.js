// Implement the function generateRange which takes three arguments (start, stop, step) and returns the range of integers from start to stop (inclusive) in increments of step.

// My Solution
function generateRange(min, max, step) {
  let result = [];
  for (let i = min; i <= max; i += step) {
    result.push(i);
  }
  return result;
}
