// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// My Solution

function makeNegative(num) {
  return num < 0 ? num : num * -1;
}

// Other Solutions

function makeNegative(num) {
  return -Math.abs(num);
}

function makeNegative(num) {
  return num < 0 ? num : -num;
}