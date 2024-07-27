// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// My Solution
function digitalRoot(n) {
  console.log(n);
  if (n < 10) return n;
  return digitalRoot(
    n
      .toString()
      .split("")
      .reduce((acc, i) => acc + Number(i), 0)
  );
}
