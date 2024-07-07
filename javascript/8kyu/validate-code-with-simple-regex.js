// Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.
// You can assume the input will always be a number.

// My Solution
function validateCode(code) {
  return Boolean(String(code).match(/^[1-3]/));
}

// Test method better for this
function validateCode(code) {
  return /^[1-3]/.test(code);
}
