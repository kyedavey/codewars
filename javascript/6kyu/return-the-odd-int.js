// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// My Solution
function findOdd(arr) {
  return arr.reduce((a, b) => a ^ b);
}

// Another Solution
function findOdd(A) {
  let occurrences = {};
  for (const n of A) {
    if (occurrences[n]) occurrences[n]++;
    else occurrences[n] = 1;
  }
  for (const n in occurrences) {
    if (occurrences[n] % 2) return Number(n);
  }
}
