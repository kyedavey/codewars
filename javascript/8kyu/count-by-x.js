// Create a function with two arguments that will return an array of the first n multiples of x.
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array or list ( depending on language ).

// My Solution
function countBy(x, n) {
  let z = [];
  for (let i = 0; i < n; i++) {
    z.push((i + 1) * x);
  }
  return z;
}

// Using Array.from()
const countBy = (x, n) => Array.from({ length: n }, (v, k) => (k + 1) * x);

// Spread Operator and map
const countBy = (x, n) => [...Array(n)].map((_, idx) => ++idx * x);
