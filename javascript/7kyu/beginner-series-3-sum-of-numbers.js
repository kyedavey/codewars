// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// My Solution
function getSum(a, b) {
  if (b < a) [a, b] = [b, a];
  let sum = 0;
  while (a <= b) {
    sum += a;
    a++;
  }
  return sum;
}

// Another Solution
const GetSum = (a, b) => {
  let min = Math.min(a, b),
    max = Math.max(a, b);
  return ((max - min + 1) * (min + max)) / 2;
};

// Recursive
function GetSum(a, b) {
  if (a == b) return a;
  else if (a < b) return a + GetSum(a + 1, b);
  else return a + GetSum(a - 1, b);
}
