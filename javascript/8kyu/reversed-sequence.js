// Build a function that returns an array of integers from n to 1 where n>0.

// My Solution
const reverseSeq = (n) => {
  let reversed = [];
  for (let i = n; i >= 1; i--) {
    reversed.push(i);
  }
  return reversed;
};

// Another solution
const reverseSeq2 = (n) => {
  return Array(n)
    .fill(0)
    .map((e, i) => n - i);
};
