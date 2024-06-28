// Your Job
// Find the sum of all multiples of n below m
// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples

// My Solution
function sumMul(n, m) {
  if (m <= n) return "INVALID";
  let result = 0;
  for (let i = 1; n * i < m; i++) {
    result += n * i;
  }
  return result;
}

// Another Solution
function sumMul(n, m) {
  if (n >= m) return "INVALID";
  let sum = 0;
  for (let i = n; i < m; i += n) {
    sum += i;
  }
  return sum;
}
