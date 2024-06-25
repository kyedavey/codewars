// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// My Solution
function arrayMadness(a, b) {
  return (
    a.reduce((acc, n) => acc + n ** 2, 0) >
    b.reduce((acc, n) => acc + n ** 3, 0)
  );
}
