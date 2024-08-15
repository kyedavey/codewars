// Some numbers have funny properties.
// Given two positive integers n and p, we want to find a positive integer k, if it exists, such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.
// If it is the case we will return k, if not return -1.

// My Solution
function digPow(n, p) {
  let sumOfProducts = [...n.toString()].reduce(
    (acc, num, i) => acc + num ** (p + i),
    0
  );

  const dividedByN = sumOfProducts / n;
  return Number.isInteger(dividedByN) ? dividedByN : -1;
}
