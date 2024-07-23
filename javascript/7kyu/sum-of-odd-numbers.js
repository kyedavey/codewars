// Given the triangle of consecutive odd numbers
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// My Solution
function rowSumOddNumbers(n) {
  const middle = n ** 2;
  const row = middle % 2 ? [middle] : [];
  let offset = middle % 2 ? 2 : 1;
  while (row.length < n) {
    row.unshift(middle - offset);
    row.push(middle + offset);
    offset += 2;
  }
  return row.reduce((acc, n) => acc + n, 0);
}

// Another Solution
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}
